"use client";

import { useState } from "react";
import { styled } from "styled-components";

import Controller from "@/components/main/Controller";

export const enum NamingCase {
  CamelCase = "camelCase",
  SnakeCase = "snake_case",
  PascalCase = "PascalCase",
  KebabCase = "kebab-case",
}

const Main = () => {
  const [isVariable, setIsVariable] = useState(true);
  const [namingCase, setNamingCase] = useState<NamingCase>(NamingCase.CamelCase);

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
      </Inner>
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
