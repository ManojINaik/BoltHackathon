import React from "react";
import { theme } from "src/styles";
import { mediaQueries } from "src/utils";
import styled from "styled-components";

const OrganizerAppsFooter: React.FC = () => {
  return (
    <OuterContainer>
      <StyledDividerLine />
      <BottomTextContainer>
        <MinorBottomContainer>
          <BottomText href="/code-of-conduct">Code of Conduct</BottomText>
          <BottomText href="/travel-guidelines">Travel Guidelines</BottomText>
          <BottomText href="/privacy">Privacy Policy</BottomText>
        </MinorBottomContainer>
        <div>
          <CopyrightText>Copyright © Bolt, 2025</CopyrightText>
        </div>
      </BottomTextContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #fdf7ea;
`;

const BottomTextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQueries.medium} {
    flex-direction: column;
    gap: 20px;
  }
`;

const MinorBottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  ${mediaQueries.medium} {
    flex-direction: column;
    align-items: start;
    gap: 0px;
  }
`;

const BottomText = styled.a`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: ${theme.colors.secondary.navy};
  text-decoration: none;
  z-index: 30;
  white-space: nowrap;

  :hover {
    transition: opacity 200ms ease-in-out;
    opacity: 0.85;
  }
`;

const CopyrightText = styled.p`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: ${theme.colors.secondary.navy};
  text-decoration: none;
  z-index: 30;
  white-space: nowrap;

  :hover {
    transition: opacity 200ms ease-in-out;
    opacity: 0.85;
  }
`;

const StyledDividerLine = styled.div`
  margin-top: 48px;
  margin-bottom: 20px;
  background-color: ${theme.colors.secondary.navy};
  height: 1px;
`;

export default OrganizerAppsFooter;
