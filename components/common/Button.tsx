import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { css, styled, keyframes } from "styled-components";

import { typo_12_reqular, typo_16_reqular, typo_18_reqular } from "@/styles/typo";

type Type = "primary" | "secondary";
type Size = "large" | "medium" | "small";
type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends Omit<ButtonAttributes, "type"> {
  htmlButtonType?: ButtonAttributes["type"];
  type: Type;
  size: Size;
  label?: string;
  icon?: ReactNode;
  isLoading?: boolean;
}

const Button = ({ type, size, label, icon, isLoading, ...attr }: ButtonProps) => {
  return (
    <BaseButton type={type} size={size} {...attr}>
      <LabelWrapper isVisible={!!isLoading}>
        {icon && renderIconWithProps({ icon, size })}
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {isLoading && (
        <LoadingSpinner>
          <div />
          <div />
          <div />
        </LoadingSpinner>
      )}
    </BaseButton>
  );
};

export default Button;

const renderIconWithProps = ({ icon, size }: { icon: ReactNode; size: Size }) => {
  const getIconSize = (size: Size) => {
    return size === "small" ? 16 : 24;
  };

  return React.Children.map(icon, (child: ReactNode) => {
    const childProps = {
      width: getIconSize(size),
      height: getIconSize(size),
    };

    if (React.isValidElement(child)) {
      return React.cloneElement(child, childProps);
    }

    return child;
  });
};

const outerStyle = css<{ size: Size }>`
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          padding: 16px;
        `;
      case "medium":
        return css`
          padding: 12px 16px;
        `;
      case "small":
        return css`
          padding: 8px;
        `;
    }
  }}
`;

const backgroundColor = css<{ type: Type }>`
  ${({ type }) => {
    switch (type) {
      case "primary":
        return css`
          background-color: #10a37f;
        `;
      case "secondary":
        return css`
          background-color: #aed4c2;
        `;
    }
  }}
`;

const labelSize = css<{ size: Size }>`
  font-size: ${({ size }) =>
    size === "large" ? typo_18_reqular : size === "medium" ? typo_16_reqular : typo_12_reqular};
`;

const BaseButton = styled.button<{ type: Type; size: Size }>`
  position: relative;
  display: flex;
  gap: 8px;
  border-radius: 8px;
  color: #fff;

  ${outerStyle}
  ${backgroundColor}
  ${labelSize}
`;

const LabelWrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ isVisible }) => (isVisible ? "hidden" : "auto")};
`;

const Label = styled.p``;

const spinAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }`;

const LoadingSpinner = styled.div<{ color?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > div {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid transparent;
    border-radius: 50%;
    animation: ${spinAnimation} 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.3s;
    }
    &:nth-child(2) {
      animation-delay: -0.2s;
    }
    &:nth-child(3) {
      animation-delay: -0.1s;
    }
  }
`;
