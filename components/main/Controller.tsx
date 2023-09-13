import { styled } from "styled-components";

import Button from "../common/Button";

import { NamingCase } from "@/type";

interface Props {
  isVariable: boolean;
  namingCase: NamingCase;
  onIdentifierTypeChange: (value: boolean) => void;
  onNamingCaseChange: (value: NamingCase) => void;
}

const Controller = ({ isVariable, namingCase, onIdentifierTypeChange, onNamingCaseChange }: Props) => {
  return (
    <>
      <ControllerWrapper>
        <ButtonWrapper>
          <Button
            type={isVariable ? "primary" : "secondary"}
            size="small"
            label="Variable"
            onClick={() => onIdentifierTypeChange(true)}
          />
          <Button
            type={isVariable ? "secondary" : "primary"}
            size="small"
            label="Function"
            onClick={() => onIdentifierTypeChange(false)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            type={namingCase === NamingCase.KebabCase ? "primary" : "secondary"}
            size="small"
            label="Kebab"
            onClick={() => onNamingCaseChange(NamingCase.KebabCase)}
          />
          <Button
            type={namingCase === NamingCase.PascalCase ? "primary" : "secondary"}
            size="small"
            label="Pascal"
            onClick={() => onNamingCaseChange(NamingCase.PascalCase)}
          />
          <Button
            type={namingCase === NamingCase.SnakeCase ? "primary" : "secondary"}
            size="small"
            label="Snake"
            onClick={() => onNamingCaseChange(NamingCase.SnakeCase)}
          />
          <Button
            type={namingCase === NamingCase.CamelCase ? "primary" : "secondary"}
            size="small"
            label="Camel"
            onClick={() => onNamingCaseChange(NamingCase.CamelCase)}
          />
        </ButtonWrapper>
      </ControllerWrapper>
    </>
  );
};

export default Controller;

const ControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
