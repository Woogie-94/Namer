import type OpenAI from "openai";
import { useMutation } from "react-query";

import { httpClient } from "@/services/ServiceProvider";

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

  return data;
};

const useRecommendMutation = () => {
  return useMutation({ mutationFn: request });
};

export default useRecommendMutation;
