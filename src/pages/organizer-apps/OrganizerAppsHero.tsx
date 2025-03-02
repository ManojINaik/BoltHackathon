import React, { useEffect } from "react";
import { BubbleOne, BubbleThree, BubbleTwo, EmptyBox } from "src/assets/img";
import { Body, theme } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

const OrganizerAppsHero: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const FloatingBox = () => {
    const Container = styled.div`
      position: relative;
      width: 100%;
      height: auto;
    `;

    const ImageContainer = styled.img`
      position: absolute;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
      transition: opacity 0.5s ease-in-out;
      opacity: ${({ isVisible }: { isVisible: boolean }) =>
        isVisible ? 1 : 0};
    `;

    const [activeIndex, setActiveIndex] = React.useState(0);
    const images = [BubbleOne, BubbleTwo, BubbleThree];

    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }, [images.length]);

    const [width, setWidth] = React.useState(
      isMobile ? window.innerWidth : (window.innerWidth - 150) / 2
    );
    const [height, setHeight] = React.useState(width * 0.8);

    useEffect(() => {
      const handleResize = () => {
        const newWidth = isMobile
          ? window.innerWidth
          : (window.innerWidth - 150) / 2;
        setWidth(newWidth);
        setHeight(newWidth * 0.93);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <Container>
        {images.map((img, index) => (
          <ImageContainer
            key={index}
            src={img}
            isVisible={index === activeIndex}
          />
        ))}
        <ImageContainer src={EmptyBox} isVisible={true} />
        <div style={{ width: width, height: height }} />
      </Container>
    );
  };

  return (
    <MainContainer>
      {isMobile ? (
        <>
          <RightContainer>
            <FloatingBox />
          </RightContainer>
          <LeftContainer>
            <Header>
              Hack the North 2025 Organizing Team Application ⚙️💙
            </Header>
            <OrgBody>Hey there! 👋</OrgBody>
            <OrgBody>
              Thanks for checking out Hack the North’s 2025 organizer
              applications. This September, we&apos;re hosting our 12th
              iteration of Canada’s biggest hackathon, and we would love for you
              to join our team in continuing to help students fall in love with
              tech! 🎉
            </OrgBody>
            <OrgBody>
              These roles are open to any student attending a post-secondary
              institution in Waterloo, and who will be located in Waterloo
              during at least one of the Winter (January - April) or Spring (May
              - August) terms this year.
            </OrgBody>
            <OrgBody>
              <strong>
                Your program, age, gender, or other personal factors will{" "}
                <u>not</u> be factored in during hiring decisions.
              </strong>
            </OrgBody>
            <OrgBody>
              How to apply to Hack the North’s organizing team:
              <ol>
                <StyledListItem>
                  Submit your written application using the forms linked under
                  each position below.
                </StyledListItem>
                <StyledListItem>
                  Complete either a round one interview or if you’re applying as
                  a Designer, Marketing Organizer, Backend Developer, or
                  Frontend Developer, a take-home challenge.
                </StyledListItem>
                <StyledListItem>
                  If you move beyond the first round of hiring, you’ll be
                  invited to a final interview.
                </StyledListItem>
              </ol>
            </OrgBody>
            <OrgBody>
              All organizers are required to attend our weekly All-Hands
              meetings and weekly/bi-weekly team-specific meetings. The average
              time commitment for team members is 7-10 hours per week, however,
              this may vary week-to-week depending on the role. Feel free to
              apply to multiple positions, but please note that each hired
              organizer can only take on one role. Please note that organizer
              roles are volunteer positions.
            </OrgBody>
            <OrgBody>
              Don’t worry if you don’t meet all the role requirements! We’re
              looking for people who are eager to learn, have a strong desire to
              contribute to the team, and have a deep level of care for our
              mission.
            </OrgBody>
            <OrgBody>
              <strong>
                Organizer applications close on January 28, 2025 at 11:59PM EDT.
              </strong>{" "}
              We’re also hosting an Organizer Open House on Thursday, January 23
              from 7:30 - 9:00 PM at the E7 Ideas Clinic if you’d like to drop
              by to learn more about what we do and chat with the organizers!
            </OrgBody>
            <OrgBody>
              Best of luck! If you have any questions or concerns, don&apos;t
              hesitate to reach out to us at hello@hackthenorth.com! 😊
            </OrgBody>
          </LeftContainer>
        </>
      ) : (
        <>
          <LeftContainer>
            <Header>
              Hack the North 2025 Organizing Team Application ⚙️💙
            </Header>
            <OrgBody>Hey there! 👋</OrgBody>
            <OrgBody>
              Thanks for checking out Hack the North’s 2025 organizer
              applications. This September, we&apos;re hosting our 12th
              iteration of Canada’s biggest hackathon, and we would love for you
              to join our team in continuing to help students fall in love with
              tech! 🎉
            </OrgBody>
            <OrgBody>
              These roles are open to any student attending a post-secondary
              institution in Waterloo, and who will be located in Waterloo
              during at least one of the Winter (January - April) or Spring (May
              - August) terms this year.
            </OrgBody>
            <OrgBody>
              <strong>
                Your program, age, gender, or other personal factors will{" "}
                <u>not</u> be factored in during hiring decisions.
              </strong>
            </OrgBody>
            <OrgBody>
              How to apply to Hack the North’s organizing team:
              <ol>
                <StyledListItem>
                  Submit your written application using the forms linked under
                  each position below.
                </StyledListItem>
                <StyledListItem>
                  Complete either a round one interview or if you’re applying as
                  a Designer, Marketing Organizer, Backend Developer, or
                  Frontend Developer, a take-home challenge.
                </StyledListItem>
                <StyledListItem>
                  If you move beyond the first round of hiring, you’ll be
                  invited to a final interview.
                </StyledListItem>
              </ol>
            </OrgBody>
            <OrgBody>
              All organizers are required to attend our weekly All-Hands
              meetings and weekly/bi-weekly team-specific meetings. The average
              time commitment for team members is 7-10 hours per week, however,
              this may vary week-to-week depending on the role. Feel free to
              apply to multiple positions, but please note that each hired
              organizer can only take on one role. Please note that organizer
              roles are volunteer positions.
            </OrgBody>
            <OrgBody>
              Don’t worry if you don’t meet all the role requirements! We’re
              looking for people who are eager to learn, have a strong desire to
              contribute to the team, and have a deep level of care for our
              mission.
            </OrgBody>
            <OrgBody>
              <strong>
                Organizer applications close on January 28, 2025 at 11:59PM EDT.
              </strong>{" "}
              We’re also hosting an Organizer Open House on Thursday, January
              23rd from 7:30 PM - 9:00 PM at the E7 Ideas Clinic if you’d like
              to drop by to learn more about what we do and chat with the
              organizers!
            </OrgBody>
            <OrgBody>
              Best of luck! If you have any questions or concerns, don&apos;t
              hesitate to reach out to us at hello@hackthenorth.com! 😊
            </OrgBody>
          </LeftContainer>
          <RightContainer>
            <FloatingBox />
          </RightContainer>
        </>
      )}
    </MainContainer>
  );
};

const StyledListItem = styled.li`
  margin: 5px 0;
`;

const Header = styled.h2`
  color: #000;

  font-family: Castledown;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 755px;
`;

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 755px;
  max-height: 700px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: black;
  padding: 150px 100px 0px 100px;
  min-height: fit-content;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 50px;
    flex-direction: column;
    padding: 100px 50px 0px 50px;
    align-items: center;
  }
`;

const OrgBody = styled(Body)`
  color: ${theme.colors.secondary.navy};

  /* Desktop/Small Body Reg */
  font-family: "Satoshi";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  align-self: stretch;
  text-align: left;
`;

export default OrganizerAppsHero;
