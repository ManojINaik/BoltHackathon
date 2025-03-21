import React from "react";
import { ArrowIcon } from "src/assets/icons";
import { ButtonText, Medium } from "src/styles";
import styled, { css } from "styled-components";

type Props = {
  text: string;
  size: "small" | "medium";
  classification: "primary" | "tertiary";
  disabled?: boolean;
  arrow?: boolean;
  color?: string;
  onClick?: (e?: React.MouseEvent) => void;
  isSubmitted?: boolean;
  className?: string;
};

const commonButtonStyles = css<{
  size: "small" | "medium";
  arrow?: boolean;
  disabled?: boolean;
}>`
  justify-content: center;
  align-items: end;
  gap: 8px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:disabled {
    cursor: not-allowed;
    transform: none;
  }
`;

const PrimaryButtonContainer = styled.button<{
  size: "small" | "medium";
  arrow?: boolean;
  disabled?: boolean;
}>`
  ${commonButtonStyles}
  height: ${({ size }) => (size === "small" ? `42px` : `48px`)};
  max-width: min-content;
  display: flex;
  padding: ${({ arrow, size, disabled }) =>
    calculatePadding(size, arrow, disabled)};
  text-align: center;
  border-radius: 100px;
  border: ${({ size }) => (size === "small" ? `1px` : `1.5px`)} solid #c7d3ff;
  background: linear-gradient(80deg, #5173f6 11.53%, #7c9eff 90.33%);
  box-shadow: 0px 4px 10px rgba(79, 114, 255, 0.2);
  transition: all 0.3s ease;
  &:hover {
    border: ${({ size }) => (size === "small" ? `1px` : `1.5px`)} solid #fdf7ea;
    box-shadow: 0px 6px 15px rgba(79, 114, 255, 0.3);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 5px rgba(79, 114, 255, 0.15);
  }
  &:disabled {
    padding: ${({ arrow, size, disabled }) =>
      calculatePadding(size, arrow, disabled)};
    border: 0px;
    background: rgba(255, 255, 255, 0.12);
    opacity: 0.38;
    box-shadow: none;
  }
`;

const TertiaryButtonContainer = styled.button<{
  size: "small" | "medium";
  arrow?: boolean;
  disabled?: boolean;
}>`
  ${commonButtonStyles}
  display: inline-flex;
  border: 0px;
  padding: 0px;
  background: transparent;
  opacity: 0.87;
  height: min-content;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  line-height: ${({ size }) => (size == "small" ? `24px` : `normal`)};
  &:hover {
    opacity: 1;
    text-decoration-thickness: 2px;
    transform: none;
  }
  &:disabled {
    opacity: 0.38;
    text-decoration-line: none;
  }
`;

const StyledArrowIcon = styled(ArrowIcon)<{ size: "small" | "medium" }>`
  width: ${({ size }) => (size === "small" ? `20px` : `24px`)};
  height: ${({ size }) => (size === "small" ? `20px` : `24px`)};
  transition: transform 0.3s ease;
  ${PrimaryButtonContainer}:hover & {
    transform: translateX(3px);
  }
`;

const calculatePadding = (
  size: "small" | "medium",
  arrow?: boolean,
  disabled?: boolean
) => {
  const verticalPadding = disabled ? "8px" : "9px";
  const bottomPadding = disabled ? "10px" : "9px";
  const horizontalPaddingStart = size === "small" ? "24px" : "32px";
  let horizontalPaddingEnd = size === "small" ? "24px" : "32px";
  if (arrow) {
    horizontalPaddingEnd = size === "small" ? "16px" : "24px";
  }

  return `${verticalPadding} ${horizontalPaddingEnd} ${bottomPadding} ${horizontalPaddingStart}`;
};

const Button: React.FC<Props> = ({
  text,
  size,
  classification,
  disabled,
  arrow,
  onClick,
  color,
  className,
}) => {
  const ButtonContainer =
    classification === "primary"
      ? PrimaryButtonContainer
      : TertiaryButtonContainer;

  return (
    <ButtonContainer
      size={size}
      arrow={arrow}
      disabled={disabled}
      style={{ color }}
      onClick={!disabled ? onClick : undefined}
      className={className}
    >
      {size === "small" ? (
        <ButtonText>{text}</ButtonText>
      ) : (
        <Medium>{text}</Medium>
      )}
      {arrow && <StyledArrowIcon size={size} />}
    </ButtonContainer>
  );
};

export default Button;
