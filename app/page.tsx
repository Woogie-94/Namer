"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { styled } from "styled-components";

import Input from "@/components/common/Input";
import Toast from "@/components/common/Toast";
import GptLogoIcon from "@/components/icon/GptLogoIcon";
import Controller from "@/components/main/Controller";
import RecommendItem from "@/components/main/RecommendItem";
import useShowToastOnError from "@/hooks/useShowToastOnError";
import useRecommendMutation from "@/queries/useRecommendMutation";
import { NamingCase } from "@/type";

const Main = () => {
  useShowToastOnError();
  const [value, setValue] = useState("");
  const [isVariable, setIsVariable] = useState(true);
  const [namingCase, setNamingCase] = useState<NamingCase>(NamingCase.CamelCase);

  const { recommendList, mutateAsync, isLoading } = useRecommendMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync({ value, isVariable, namingCase });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleIdentifierTypeChange = (value: boolean) => {
    setIsVariable(value);
  };
  const handleNamingCaseChange = (value: NamingCase) => {
    setNamingCase(value);
  };

  return (
    <Wrapper>
      <Inner>
        <Controller
          isVariable={isVariable}
          namingCase={namingCase}
          onIdentifierTypeChange={handleIdentifierTypeChange}
          onNamingCaseChange={handleNamingCaseChange}
        />

        <form onSubmit={handleSubmit}>
          <Input
            value={value}
            onChange={handleChange}
            buttonProps={{ type: "primary", size: "medium", icon: <GptLogoIcon />, isLoading }}
          />
        </form>

        <RecommendWrapper>
          {!isLoading && recommendList?.map(recommend => <RecommendItem key={recommend.name} recommend={recommend} />)}
        </RecommendWrapper>
      </Inner>

      <Toast />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 160px;
  background-color: #35363a;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 592px;
  padding: 0 16px;
`;

const RecommendWrapper = styled.div`
  margin-top: 16px;
`;
