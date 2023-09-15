import type OpenAI from "openai";
import { useMutation } from "react-query";

import { httpClient } from "@/services/ServiceProvider";

export interface Recommend {
  name: string;
  score: number;
}

interface RecommendList {
  result: Array<Recommend>;
}

interface Params {
  value: string;
  namingCase: string;
  isVariable: boolean;
}

const request = async ({ value, namingCase, isVariable }: Params) => {
  const { data } = await httpClient.post<OpenAI.Completion>("/api/recommend", {
    message: value,
    namingCase,
    type: isVariable ? "variable" : "function",
  });
  const parseRcommendList = JSON.parse(data.choices[0].message.content) as RecommendList;
  return { data, recommendList: parseRcommendList.result };
};

const useRecommendMutation = () => {
  const mutation = useMutation({ mutationFn: request });

  return { ...mutation, data: mutation.data?.data, recommendList: mutation.data?.recommendList };
};

export default useRecommendMutation;
