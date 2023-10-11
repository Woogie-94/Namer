import { LRUCache } from "lru-cache/min";
import { NextResponse } from "next/server";

import { NamingCase } from "@/type";

const tokenCache = new LRUCache({
  max: 500,
  ttl: 60 * 1000 * 3,
});

const rateLimit = (header: Headers, limit: number, token: string) => {
  return new Promise<void>((resolve, reject) => {
    const tokenCount = (tokenCache.get(token) as number[]) || [0];
    if (tokenCount[0] === 0) {
      tokenCache.set(token, tokenCount);
    }
    tokenCount[0] += 1;

    const currentUsage = tokenCount[0];
    const isRateLimited = currentUsage >= limit;

    header.set("X-RateLimit-Limit", `${limit}`);
    header.set("X-RateLimit-Remaining", isRateLimited ? "0" : `${limit - currentUsage}`);

    // eslint-disable-next-line no-promise-executor-return
    return isRateLimited ? reject() : resolve();
  });
};

export async function POST(req: Request, res: Response) {
  const { message, namingCase, type }: { message: string; namingCase: NamingCase; type: string } = await req.json();
  const headers = new Headers(res.headers);

  const body = {
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: type === "function" ? getFuctionPrompt(namingCase) : getVariablePrompt(namingCase),
      },
      {
        role: "user",
        content: message,
      },
    ],
    temperature: 0,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GPT_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  try {
    await rateLimit(headers, 10, "CACHE_TOKEN");
  } catch (err) {
    return NextResponse.json(
      { message: "API 호출 횟수 제한을 초과하였습니다. 3분 후 다시 시도해주세요", type: "too_many_request" },
      { status: 429, headers },
    );
  }

  if (!data.error) {
    return NextResponse.json(data, { status: 200, headers });
  } else {
    return NextResponse.json({ ...data.error, message: "GPT Error" }, { status: 400, headers });
  }
}

const getVariablePrompt = (namingCase: NamingCase) => {
  return `<instructions>
  1. Your job is to suggest variable names
  2. Recommend 5 variable names
  3. Variable names always use the ${namingCase}
  4. Answer in JSON like <answer>
  </instructions>
  <answer>
  {"result":[{"name":"","score": 0~5}]}
  </answer>`;
};

const getFuctionPrompt = (namingCase: NamingCase) => {
  return `<instructions>
  1. Your job is to suggest function names
  2. Recommend 5 function names
  3. Function names always use the ${namingCase}
  4. Function names always start with a verb
  5. Answer in JSON like <answer>
  </instructions>
  <answer>
  {"result":[{"name":"","score": 0~5}]}
  </answer>`;
};
