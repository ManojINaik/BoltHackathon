import * as Fathom from "fathom-client";
import React, { useEffect, useState } from "react";
import {
  Block_1,
  Block_10,
  Block_11,
  Block_12,
  Block_13,
  Block_14,
  Block_15,
  Block_16,
  Block_17,
  Block_18,
  Block_19,
  Block_2,
  Block_20,
  Block_21,
  Block_22,
  Block_23,
  Block_24,
  Block_3,
  Block_4,
  Block_5,
  Block_6,
  Block_7,
  Block_8,
  Block_9,
  BoltLogo,
  Bubble1,
  Bubble2,
  Bubble3,
  MainTitle,
} from "src/assets/img";
import {
  Button,
  ContentWrapper,
  SectionWrapper,
  ThreeModel,
} from "src/components/base";
import { SectionId } from "src/constants";
import { Body, LargeBodyBold, theme } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

import { MOBILELOCATIONS, DESKTOPLOCATIONS } from "./constants";
import { useGravity } from "./useGravityAnimation";

const Text = styled(Body)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary.navy};
  text-align: center;
  line-height: 160%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  position: absolute;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SubHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 32px;
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledCaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${mediaQueries.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

const StyledTitleCaption = styled(LargeBodyBold)`
  color: ${({ theme }) => theme.colors.secondary.navy};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledBoltContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 4px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledBoltLogo = styled.img`
  width: 59px;
  height: 25px;
  margin: 0 8px;
  top: 3px;
  position: relative;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
  ${mediaQueries.tablet} {
    top: 0px;
    width: 47px;
    height: 20px;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  width: 100%;
  max-width: 1512px;
  height: 1093px;
  position: relative;
  z-index: 2;
`;

const StyledMainTitle = styled.img`
  max-width: 1025px;
  max-height: 210px;
  margin-top: 192px;
  margin-bottom: 16px;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  animation: fadeInUp 1.2s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${mediaQueries.tablet} {
    width: 550px;
    height: auto;
  }

  ${mediaQueries.largeMobile} {
    width: 370px;
    height: auto;
  }

  ${mediaQueries.smallMobile} {
    width: 275px;
    height: auto;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.dark.white};
  position: relative;
  z-index: 5;
`;

const StyledBubble1 = styled.img`
  position: absolute;
  left: 100px;
  top: 550px;
  opacity: 0;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15));
  animation: fadeIn 2s 3s forwards, floatAnimation 6s ease-in-out infinite;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes floatAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const StyledBubble2 = styled.img`
  position: absolute;
  left: 225px;
  top: 950px;
  opacity: 0;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15));
  animation: fadeIn 2s 3.5s forwards,
    floatAnimation 7s ease-in-out infinite 0.5s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const StyledBubble3 = styled.img`
  position: absolute;
  left: 1100px;
  top: 980px;
  opacity: 0;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15));
  animation: fadeIn 2s 4s forwards, floatAnimation 8s ease-in-out infinite 1s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const OrganizerApplicationsClosedContainer = styled.div`
  ${mediaQueries.tablet} {
    width: 70%;
  }

  ${mediaQueries.largeMobile} {
    width: 90%;
  }
`;

const EarthModelContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 1;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Hero: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const posOffset = width > 1440 ? { x: 100, y: 0 } : { x: 0, y: 0 };

  const locationMap = width > 1440 ? DESKTOPLOCATIONS : MOBILELOCATIONS;

  const pos4 = useGravity({
    x: locationMap[4].x + posOffset.x,
    y: locationMap[4].y + posOffset.y,
    ground: locationMap[4].ground,
  });
  const pos13 = useGravity({
    x: locationMap[13].x + posOffset.x,
    y: locationMap[13].y + posOffset.y,
    ground: locationMap[13].ground,
  });
  const pos16 = useGravity({
    x: locationMap[16].x + posOffset.x,
    y: locationMap[16].y + posOffset.y,
    ground: locationMap[16].ground,
  });
  const pos5 = useGravity({
    x: locationMap[5].x + posOffset.x,
    y: locationMap[5].y + posOffset.y,
    ground: locationMap[5].ground,
  });
  const pos7 = useGravity({
    x: locationMap[7].x + posOffset.x,
    y: locationMap[7].y + posOffset.y,
    ground: locationMap[7].ground,
  });
  const pos12 = useGravity({
    x: locationMap[12].x + posOffset.x,
    y: locationMap[12].y + posOffset.y,
    ground: locationMap[12].ground,
  });
  const pos22 = useGravity({
    x: locationMap[22].x + posOffset.x,
    y: locationMap[22].y + posOffset.y,
    ground: locationMap[22].ground,
  });
  const pos21 = useGravity({
    x: locationMap[21].x + posOffset.x,
    y: locationMap[21].y + posOffset.y,
    ground: locationMap[21].ground,
  });
  const pos1 = useGravity({
    x: locationMap[1].x + posOffset.x,
    y: locationMap[1].y + posOffset.y,
    ground: locationMap[1].ground,
  });
  const pos19 = useGravity({
    x: locationMap[19].x + posOffset.x,
    y: locationMap[19].y + posOffset.y,
    ground: locationMap[19].ground,
  });
  const pos6 = useGravity({
    x: locationMap[6].x + posOffset.x,
    y: locationMap[6].y + posOffset.y,
    ground: locationMap[6].ground,
  });
  const pos18 = useGravity({
    x: locationMap[18].x + posOffset.x,
    y: locationMap[18].y + posOffset.y,
    ground: locationMap[18].ground,
  });
  const pos14 = useGravity({
    x: locationMap[14].x + posOffset.x,
    y: locationMap[14].y + posOffset.y,
    ground: locationMap[14].ground,
  });
  const pos17 = useGravity({
    x: locationMap[17].x + posOffset.x,
    y: locationMap[17].y + posOffset.y,
    ground: locationMap[17].ground,
  });
  const pos15 = useGravity({
    x: locationMap[15].x + posOffset.x,
    y: locationMap[15].y + posOffset.y,
    ground: locationMap[15].ground,
  });
  const pos9 = useGravity({
    x: locationMap[9].x + posOffset.x,
    y: locationMap[9].y + posOffset.y,
    ground: locationMap[9].ground,
  });
  const pos10 = useGravity({
    x: locationMap[10].x + posOffset.x,
    y: locationMap[10].y + posOffset.y,
    ground: locationMap[10].ground,
  });
  const pos11 = useGravity({
    x: locationMap[11].x + posOffset.x,
    y: locationMap[11].y + posOffset.y,
    ground: locationMap[11].ground,
  });
  const pos8 = useGravity({
    x: locationMap[8].x + posOffset.x,
    y: locationMap[8].y + posOffset.y,
    ground: locationMap[8].ground,
  });
  const pos3 = useGravity({
    x: locationMap[3].x + posOffset.x,
    y: locationMap[3].y + posOffset.y,
    ground: locationMap[3].ground,
  });
  const pos2 = useGravity({
    x: locationMap[2].x + posOffset.x,
    y: locationMap[2].y + posOffset.y,
    ground: locationMap[2].ground,
  });
  const pos20 = useGravity({
    x: locationMap[20].x + posOffset.x,
    y: locationMap[20].y + posOffset.y,
    ground: locationMap[20].ground,
  });
  const pos24 = useGravity({
    x: locationMap[24].x + posOffset.x,
    y: locationMap[24].y + posOffset.y,
    ground: locationMap[24].ground,
  });
  const pos23 = useGravity({
    x: locationMap[23].x + posOffset.x,
    y: locationMap[23].y + posOffset.y,
    ground: locationMap[23].ground,
  });

  return (
    <SectionWrapper id={SectionId.HERO}>
      <StyledContentWrapper>
        <EarthModelContainer>
          <ThreeModel
            modelPath="/assets/models/earth-cartoon/source/earth-cartoon.glb"
            width="100%"
            height="100%"
            position={[-23, 16, -40]}
            rotation={[0.2, 0.5, 0]}
            scale={4.0}
            autoRotate={true}
            animationName="Animación"
            animationStartTime={0}
            animationEndTime={5}
            disableTextureApplication={true}
          />
        </EarthModelContainer>
        <HeadingContainer>
          <StyledMainTitle src={MainTitle} alt="main-title" />
          <StyledCaptionContainer>
            <StyledTitleCaption>
              September 13-15, 2025 • In-person event
            </StyledTitleCaption>
            <StyledBoltContainer>
              <StyledTitleCaption> • </StyledTitleCaption>
              <StyledBoltLogo
                src={BoltLogo}
                alt="Hack the North"
                style={{ position: "relative" }}
              />
              <StyledTitleCaption>Official Member</StyledTitleCaption>
            </StyledBoltContainer>
          </StyledCaptionContainer>
        </HeadingContainer>
        <SubHeadingContainer>
          <OrganizerApplicationsClosedContainer>
            <Text>
              Thank you for your interest in joining Bolt.new 2025!{" "}
              <b>Organizer applications are now Open.</b>
            </Text>
          </OrganizerApplicationsClosedContainer>
          <a
            href="mailto:sponsorship@Bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Fathom.trackEvent("Sign up: Clicked Email Contact")}
          >
            <Button
              size="small"
              classification="tertiary"
              text="Interested in becoming a sponsor?"
              color={theme.colors.secondary.navy}
            />
          </a>
        </SubHeadingContainer>
        <StyledImage
          src={Block_19}
          alt="block-19"
          id="gravity"
          style={{
            position: "absolute",
            left: pos19.x,
            top: pos19.y,
          }}
        />
        <StyledImage
          src={Block_4}
          alt="block-4"
          id="gravity"
          style={{
            position: "absolute",
            left: pos4.x,
            top: pos4.y,
          }}
        />
        <StyledImage
          src={Block_13}
          alt="block-13"
          id="gravity"
          style={{
            position: "absolute",
            left: pos13.x,
            top: pos13.y,
          }}
        />
        <StyledImage
          src={Block_16}
          alt="block-13"
          id="gravity"
          style={{
            position: "absolute",
            left: pos16.x,
            top: pos16.y,
          }}
        />
        <StyledImage
          src={Block_14}
          alt="block-14"
          id="gravity"
          style={{
            position: "absolute",
            left: pos14.x,
            top: pos14.y,
          }}
        />
        <StyledImage
          src={Block_5}
          alt="block-5"
          id="gravity"
          style={{
            position: "absolute",
            left: pos5.x,
            top: pos5.y,
          }}
        />
        <StyledImage
          src={Block_7}
          alt="block-7"
          id="gravity"
          style={{
            position: "absolute",
            left: pos7.x,
            top: pos7.y,
          }}
        />
        <StyledImage
          src={Block_12}
          alt="block-12"
          id="gravity"
          style={{
            position: "absolute",
            left: pos12.x,
            top: pos12.y,
          }}
        />
        <StyledImage
          src={Block_22}
          alt="block-22"
          id="gravity"
          style={{
            position: "absolute",
            left: pos22.x,
            top: pos22.y,
          }}
        />
        <StyledImage
          src={Block_1}
          alt="block-1"
          id="gravity"
          style={{
            position: "absolute",
            left: pos1.x,
            top: pos1.y,
          }}
        />
        <StyledImage
          src={Block_6}
          alt="block-6"
          id="gravity"
          style={{
            position: "absolute",
            left: pos6.x,
            top: pos6.y,
          }}
        />
        <StyledImage
          src={Block_18}
          alt="block-18"
          id="gravity"
          style={{
            position: "absolute",
            left: pos18.x,
            top: pos18.y,
          }}
        />
        <StyledImage
          src={Block_9}
          alt="block-9"
          id="gravity"
          style={{
            position: "absolute",
            left: pos9.x,
            top: pos9.y,
          }}
        />
        <StyledImage
          src={Block_10}
          alt="block-10"
          id="gravity"
          style={{
            position: "absolute",
            left: pos10.x,
            top: pos10.y,
          }}
        />
        <StyledImage
          src={Block_21}
          alt="block-21"
          id="gravity"
          style={{
            position: "absolute",
            left: pos21.x,
            top: pos21.y,
          }}
        />
        <StyledImage
          src={Block_17}
          alt="block-17"
          id="gravity"
          style={{
            position: "absolute",
            left: pos17.x,
            top: pos17.y,
          }}
        />
        <StyledImage
          src={Block_15}
          alt="block-15"
          id="gravity"
          style={{
            position: "absolute",
            left: pos15.x,
            top: pos15.y,
          }}
        />
        <StyledImage
          src={Block_11}
          alt="block-11"
          id="gravity"
          style={{
            position: "absolute",
            left: pos11.x,
            top: pos11.y,
          }}
        />
        <StyledImage
          src={Block_8}
          alt="block-8"
          id="gravity"
          style={{
            position: "absolute",
            left: pos8.x,
            top: pos8.y,
          }}
        />
        <StyledImage
          src={Block_3}
          alt="block-3"
          id="gravity"
          style={{
            position: "absolute",
            left: pos3.x,
            top: pos3.y,
          }}
        />
        <StyledImage
          src={Block_2}
          alt="block-2"
          id="gravity"
          style={{
            position: "absolute",
            left: pos2.x,
            top: pos2.y,
          }}
        />
        <StyledImage
          src={Block_20}
          alt="block-20"
          id="gravity"
          style={{
            position: "absolute",
            left: pos20.x,
            top: pos20.y,
          }}
        />
        <StyledImage
          src={Block_24}
          alt="block-24"
          id="gravity"
          style={{
            position: "absolute",
            left: pos24.x,
            top: pos24.y,
          }}
        />
        <StyledImage
          src={Block_23}
          alt="block-23"
          id="gravity"
          style={{
            position: "absolute",
            left: pos23.x,
            top: pos23.y,
          }}
        />
        <StyledBubble1 src={Bubble1} alt="bubble1" />
        <StyledBubble2 src={Bubble2} alt="bubble2" />
        <StyledBubble3 src={Bubble3} alt="bubble3" />
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

export default Hero;
