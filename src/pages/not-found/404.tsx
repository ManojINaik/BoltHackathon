import React from "react";
import { useNavigate } from "react-router-dom";
import { Bubble, Comets, RobotGoose, Whoops } from "src/assets/img";
import { Navbar } from "src/components";
import {
  Button,
  ContentWrapper,
  Layout,
  SectionWrapper,
} from "src/components/base";
import { Heading2, theme } from "src/styles";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled from "styled-components";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const isLargeMobile = useDeviceSize("largeMobile");

  return (
    <Layout>
      <Navbar />
      <SectionWrapper
        style={{
          backgroundColor: theme.colors.secondary.navy,
          height: "100vh",
          paddingTop: "40vh",
        }}
      >
        <ContentWrapper>
          <CometsImg src={Comets} alt="comets" loading="lazy" />
          <RobotGooseImg src={RobotGoose} alt="robot goose" loading="lazy" />
          <HeadingContainer>
            <div>
              {!isLargeMobile && (
                <BubbleImg src={Bubble} alt="bubble" loading="lazy" />
              )}
              <WhoopsImg src={Whoops} alt="whoops!" loading="lazy" />
            </div>
            <Heading2 style={{ margin: "-10px 0 40px 0", textAlign: "center" }}>
              looks like this page doesn&apos;t exist...
            </Heading2>
            <Button
              classification="tertiary"
              text="Back to home page →"
              size="small"
              color={theme.colors.text.dark.white}
              onClick={() => navigate("/")}
            />
          </HeadingContainer>
        </ContentWrapper>
      </SectionWrapper>
    </Layout>
  );
};

const CometsImg = styled.img`
  position: absolute;
  z-index: -5;
  bottom: 50%;
  left: 15%;

  ${mediaQueries.tablet} {
    bottom: 75%;
    left: 5%;
  }

  ${mediaQueries.largeMobile} {
    width: 80%;
    bottom: 120%;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary.white};
`;

const BubbleImg = styled.img`
  position: absolute;
  z-index: -10;
  top: -15%;
  left: 58%;

  ${mediaQueries.tablet} {
    left: 63%;
  }
`;

const WhoopsImg = styled.img`
  height: 96px;

  ${mediaQueries.largeMobile} {
    height: 70px;
  }
`;

const RobotGooseImg = styled.img`
  position: absolute;
  z-index: -2;
  bottom: -120%;
  right: 72px;
  height: 350px;

  ${mediaQueries.tablet} {
    width: 350px;
    height: auto;
    right: 22%;
    bottom: -150%;
  }

  ${mediaQueries.custom(550)} {
    bottom: -100%;
    right: 15%;
  }

  ${mediaQueries.largeMobile} {
    width: 250px;
    height: auto;
    right: 20%;
    bottom: -150%;
  }
  ${mediaQueries.mobile} {
    right: 22%;
    bottom: -110%;
  }
`;

export default NotFoundPage;
