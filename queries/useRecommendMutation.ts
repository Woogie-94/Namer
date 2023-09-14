import axios from "axios";
import type OpenAI from "openai";
import { useMutation } from "react-query";

interface Params {
  value: string;
  namingCase: string;
  isVariable: boolean;
}

const request = async ({ value, namingCase, isVariable }: Params) => {
  const { data } = await axios.post<OpenAI.Completion>("/api/recommend", {
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
