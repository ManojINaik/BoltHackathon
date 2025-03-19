import React from "react";
import { Cloud4, InspiredTextCutout, LucyGuo, Trapezoid } from "src/assets/img";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import { SectionId } from "src/constants";
import { Heading1, Heading2, LargeBodyBold, LargeBodyMedium } from "src/styles";
import { mediaQueries } from "src/utils";
import styled from "styled-components";

const MOBILE_VIEW_WIDTH = 600;

import { leaders } from "./constants";
import Engineering from "./engineering";

const Leaders: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.LEADERS}>
      <CloudImg1 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <CloudImg2 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <ContentWrapper>
        <HeadingWrapper>
          <HeadingContainer>
            <Heading1>Get</Heading1>
            <StyledInspiredTextCutout
              src={InspiredTextCutout}
              alt="inspired text cutout"
            />
            <Heading1>
              by<IndustryLeadersInline> industry leaders</IndustryLeadersInline>
            </Heading1>
          </HeadingContainer>
          <HeadingContainer>
            <Heading1>
              <IndustryLeadersBlock>industry leaders</IndustryLeadersBlock>
            </Heading1>
          </HeadingContainer>
        </HeadingWrapper>
        <SubHeading>
          Every year, leaders in the tech industry join Bolt.new to speak,
          judge, and
          <ConditionalBreak /> mentor hackers. Stay tuned for the list of this
          year&apos;s speakers, coming soon.
        </SubHeading>
        <TableWrapper>
          <SpeakerContainer>
            <PurpleNavigationBar />
            <YellowNavigationBar />
            <TrapezoidContainer>
              <TrapezoidImage
                loading="lazy"
                src={Trapezoid}
                alt="Logan Kilpatrick tab"
              />
              <SpeakerText>KEYNOTE SPEAKER</SpeakerText>
            </TrapezoidContainer>
            <SpeakerInteriorWrapper>
              <SpeakerInteriorContainer>
                <ImageContainer>
                  <LucyGuoImage
                    loading="lazy"
                    src={LucyGuo}
                    alt="Logan Kilpatrick"
                  />
                </ImageContainer>
                <SpeakerTextContainer>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Heading2 style={{ fontSize: "30px" }}>
                      Logan Kilpatrick
                    </Heading2>
                    <Subtext>Keynote Speaker</Subtext>
                  </div>
                  <BodySpeakerText>
                    We&apos;re excited to announce that our keynote speaker for
                    Bolt.new 2025 is Logan Kilpatrick! Logan is a driving force
                    in AI innovation at Google AI Studio, where he spearheaded
                    the launch of Gemini 2.0 Flash, pushing the boundaries of AI
                    technology. He&apos;s fueling the future of coding with
                    ideas like massively parallel execution, captivating tech
                    enthusiasts and creators alike. Before this, he made waves
                    at OpenAI, contributing to AI breakthroughs that continue to
                    shape the industry. Logan&apos;s insights have earned him
                    recognition as a thought leader, amplified by his dynamic
                    presence in the AI community and collaborations with figures
                    like Dwarkesh Patel. We can&apos;t wait for him to bring his
                    electrifying vision and experiences to our stage!
                  </BodySpeakerText>
                </SpeakerTextContainer>
              </SpeakerInteriorContainer>
            </SpeakerInteriorWrapper>
          </SpeakerContainer>
        </TableWrapper>
        <Heading2 style={{ textAlign: "center", paddingTop: "60px" }}>
          Judges
        </Heading2>
        <LeadersContainer>
          {leaders.map((leader) => (
            <LeaderDiv key={leader.name}>
              <img
                src={leader.avatar}
                alt={leader.name}
                style={{ height: "118px" }}
              />
              <LeaderText>
                <strong>{leader.name}</strong>
                <p>{leader.title}</p>
              </LeaderText>
            </LeaderDiv>
          ))}
        </LeadersContainer>
      </ContentWrapper>
      <Engineering />
    </SectionWrapper>
  );
};

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 678px;
  width: 100%;
  margin-top: 80px;

  ${mediaQueries.medium} {
    height: 925px;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 762px;
  }
`;

const SpeakerContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary.white};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.secondary.navy};
  ${mediaQueries.custom(1700)} {
    width: 1400px;
  }
  ${mediaQueries.large} {
    width: 980px;
  }
  ${mediaQueries.medium} {
    width: 736px;
  }
  ${mediaQueries.tablet} {
    width: 700px;
  }
  ${mediaQueries.custom(720)} {
    width: 550px;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 90%;
  }
`;

const PurpleNavigationBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.purple};
  width: 100%;
  height: 25px;
  z-index: 10;
`;

const YellowNavigationBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  width: 100%;
  height: 25px;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary.navy};
`;

const TrapezoidContainer = styled.div`
  position: absolute;
  z-index: 10;
  left: 10%;
  top: 21px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.medium} {
    top: 22px;
  }
  ${mediaQueries.tablet} {
    top: 22px;
  }
  ${mediaQueries.largeMobile} {
    left: 15%;
  }
`;

const TrapezoidImage = styled.img`
  position: absolute;
`;

const SpeakerText = styled(LargeBodyBold)`
  z-index: 1;
  letter-spacing: 3.6px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.light.black};
  white-space: nowrap;
`;

const SpeakerInteriorWrapper = styled.div`
  position: absolute;
  bottom: 67px;
  width: 100%;
  z-index: 1;
  height: 556px;
  background-color: ${({ theme }) => theme.colors.secondary.white};
  z-index: 3;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary.navy};

  ${mediaQueries.medium} {
    height: 800px;
    bottom: 37px;
    transform: translateY(-32px);
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 637px;
    transform: translateY(-32px);
  }
`;

const SpeakerInteriorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-inline: 100px;
  gap: 5%;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  ${mediaQueries.custom(1700)} {
    padding-inline: 50px;
  }
  ${mediaQueries.large} {
    padding-inline: 50px;
  }
  ${mediaQueries.medium} {
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    padding: 24px;
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  gap: 7px;
  width: 100%;
  height: auto;
  flex-basis: 50%;
  display: flex;
  margin-top: 65px;

  ${mediaQueries.medium} {
    min-height: 0;
    justify-content: center;
    margin-top: 0px;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    max-height: unset;
    height: auto;
    border-radius: 10px;
  }
`;

const LucyGuoImage = styled.img`
  object-fit: fill;
  object-position: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  ${mediaQueries.medium} {
    object-fit: contain;
    object-position: unset;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const SpeakerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  ${mediaQueries.medium} {
    align-items: center;
  }
`;

const BodySpeakerText = styled(LargeBodyMedium)`
  color: #223a60;
  font-size: 18px;
  font-weight: 500;
  line-height: 160%;

  ${mediaQueries.medium} {
    text-align: center;
  }
  ${mediaQueries.mediumTablet} {
    font-size: 14px;
  }
  ${mediaQueries.smallTablet} {
    font-size: 12px;
  }
`;

const Subtext = styled.h1`
  color: #223a60;
  font-size: 18px;
  font-family: Satoshi;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 0;

  ${mediaQueries.medium} {
    text-align: center;
  }
  ${mediaQueries.mediumTablet} {
    font-size: 14px;
  }
  ${mediaQueries.smallTablet} {
    font-size: 12px;
  }
`;

const CloudImg1 = styled.img`
  position: absolute;
  left: 0;
  top: 5%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg2 = styled.img`
  position: absolute;
  left: 40%;
  top: 20%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 128px;
  margin-bottom: 36px;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.light.black};
`;

const IndustryLeadersInline = styled.span`
  @media (max-width: 834px) {
    display: none;
  }
`;

const IndustryLeadersBlock = styled.span`
  display: none;

  @media (max-width: 834px) {
    line-height: 1;
    display: block;
  }
`;

const SubHeading = styled(LargeBodyMedium)`
  line-height: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary.navy};

  @media (max-width: 834px) {
    padding: 0 48px;
  }

  @media (max-width: 430px) {
    padding: 0 24px;
    font-size: 16px;
    line-height: 25.6px;
    font-weight: 400;
  }
`;

const ConditionalBreak = styled.br`
  @media (max-width: 834px) {
    display: none;
  }
`;

const StyledInspiredTextCutout = styled.img`
  width: 217px;
  margin: 0 8px;
  padding: 0;

  @media (max-width: 834px) {
    width: 160px;
  }

  @media (max-width: 430px) {
    width: 120px;
  }
`;

const LeadersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 48px;
  padding: 69px 138px;

  @media (max-width: 1440px) {
    padding: 48px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 36px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    padding: 24px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 24px;
  }
`;

const LeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Satoshi";
  font-size: 16px;

  gap: 16px;
`;

const LeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 156px;

  @media (max-width: 1280px) {
    width: 240px;
  }

  @media (max-width: 1024px) {
    width: 156px;
  }

  @media (max-width: 834px) {
    width: 120px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  strong {
    font-weight: 700;
  }

  p {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.secondary.navy};
  }
`;

export default Leaders;
