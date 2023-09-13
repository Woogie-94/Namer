import { InputHTMLAttributes, forwardRef } from "react";
import { styled } from "styled-components";

import Button, { ButtonProps } from "./Button";

import { typo_16_reqular } from "@/styles/typo";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  buttonProps?: ButtonProps;
}

const Input = forwardRef<HTMLInputElement, Props>(({ buttonProps, ...attr }, ref) => {
  return (
    <Wrapper>
      <BaseInput ref={ref} {...attr} />
      {buttonProps && <Button {...buttonProps} />}
    </Wrapper>
  );
});

Input.displayName = "Input";
export default Input;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 4px 4px 16px;
  background-color: #d9d9d9;
  border-radius: 8px;
`;

const BaseInput = styled.input`
  width: 100%;
  ${typo_16_reqular};
`;
