import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { JoinDropdownChevron } from "src/assets/img";
import { Button, ContentWrapper, SectionWrapper } from "src/components/base";
import { BodyBold, Heading2, Heading3, theme } from "src/styles";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled from "styled-components";

import { ROLES, ROLE_CATEGORIES, RoleCategory } from "./constants";

const OrganizerAppsDescriptions: React.FC = () => {
  const [selectedRoleCategory, setSelectedRoleCategory] = useState<any>(
    RoleCategory.ALL
  );

  const isMediumOrSmaller = useDeviceSize("medium");
  const isLargeOrSmaller = useDeviceSize("large");

  return (
    <StyledSectionWrapper>
      <>
        {isLargeOrSmaller ? (
          <SelectContainer>
            <Select
              value={selectedRoleCategory}
              onChange={(event) => setSelectedRoleCategory(event.target.value)}
            >
              {Object.entries(ROLE_CATEGORIES).map(([id, roleCategory]) => {
                return (
                  <option key={id} value={id}>
                    {roleCategory.label}
                  </option>
                );
              })}
            </Select>
          </SelectContainer>
        ) : (
          <NavContainer>
            {Object.entries(ROLE_CATEGORIES).map(([id, roleCategory]) => {
              return id === selectedRoleCategory ? (
                <RoleButton key={id}>
                  <BodyBold>{roleCategory.label}</BodyBold>
                </RoleButton>
              ) : (
                <RoleButtonSecondary
                  key={id}
                  onClick={() => setSelectedRoleCategory(id)}
                  onKeyDown={() => setSelectedRoleCategory(id)}
                  tabIndex={0}
                >
                  <BodyBold>{roleCategory.label}</BodyBold>
                </RoleButtonSecondary>
              );
            })}
          </NavContainer>
        )}
        <OuterRoleContainer>
          {Object.entries(
            ROLE_CATEGORIES[selectedRoleCategory as RoleCategory].roles
          ).map(([id, roleId]) => {
            const role = ROLES[roleId];
            return (
              <RoleContainer key={id}>
                <TitleContainer>
                  <Heading2>{role.label}</Heading2>
                  {!isMediumOrSmaller && (
                    <a
                      style={{ textDecoration: "none" }}
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="small"
                        classification="primary"
                        color="white"
                        text="Apply for this role"
                      />
                    </a>
                  )}
                </TitleContainer>
                <RoleBody>
                  <DescriptionContent>
                    <ReactMarkdown
                      // eslint-disable-next-line react/no-children-prop
                      children={role.description}
                      renderers={{ link: linkRenderer }}
                    />
                  </DescriptionContent>
                  {isMediumOrSmaller && (
                    <a
                      style={{ textDecoration: "none" }}
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="small"
                        classification="primary"
                        color="white"
                        text="Apply for this role"
                      />
                    </a>
                  )}
                  <ResponsibilitiesContainer>
                    <HalfContainer>
                      <Heading3>Responsibilities</Heading3>
                      <Content>
                        <ReactMarkdown
                          // eslint-disable-next-line react/no-children-prop
                          children={role.opportunities}
                          renderers={{ link: linkRenderer }}
                        />
                      </Content>
                    </HalfContainer>
                    <HalfContainer>
                      <Heading3>Desired Skills</Heading3>
                      <Content>
                        <ReactMarkdown
                          // eslint-disable-next-line react/no-children-prop
                          children={role.skills}
                          renderers={{ link: linkRenderer }}
                        />
                      </Content>
                    </HalfContainer>
                  </ResponsibilitiesContainer>
                </RoleBody>
              </RoleContainer>
            );
          })}
        </OuterRoleContainer>
      </>
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled(SectionWrapper)`
  max-width: 1710px;

  ${mediaQueries.medium} {
    max-width: 1610;
  }
`;

const linkRenderer = (props: any) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
};

const SelectContainer = styled.div`
  margin-top: 50px;
  padding: 0 100px;

  ${mediaQueries.medium} {
    padding: 0 50px;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;

  display: block;
  width: 100%;
  height: 80px;
  padding: 16px 24px;
  border: 2px solid ${theme.colors.primary.blue};
  background: ${theme.colors.secondary.white};
  border-radius: 16px;

  color: ${theme.colors.secondary.navy};

  font-family: "Castledown";
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 1.5em;

  background-image: url(${JoinDropdownChevron});
  background-repeat: no-repeat;
  background-position: 95% 50%;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 100px;
  color: ${theme.colors.secondary.navy};
  overflow: auto;

  ${mediaQueries.medium} {
    padding: 0 50px;
  }
`;

const RoleButton = styled.button`
  border: 1px solid ${theme.colors.secondary.navy};
  background-color: transparent;
  color: ${theme.colors.secondary.navy};
  border-radius: 100px;

  display: flex;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 10px;
`;

const RoleButtonSecondary = styled(RoleButton)`
  background-color: transparent;
  color: ${theme.colors.secondary.navy};

  &:hover {
    cursor: pointer;
    color: rgba(34, 58, 96, 0.5);
  }

  border: 2px solid rgba(255, 255, 255, 0);
`;

const OuterRoleContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 100px;

  ${mediaQueries.medium} {
    gap: 40px;
    padding: 0 50px;
  }
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${mediaQueries.medium} {
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

const RoleBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries.medium} {
    align-items: flex-start;
  }
`;

const ResponsibilitiesContainer = styled.div`
  display: flex;
  gap: 40px;

  ${mediaQueries.medium} {
    flex-direction: column;
    margin-top: 30px;
    gap: 20px;
  }
`;

const Content = styled.div<{ children: React.ReactNode }>`
  font-family: "Satoshi";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  color: ${theme.colors.secondary.navy};

  h1,
  h2,
  h3,
  h4 {
    font-weight: 900;
  }
  h1 {
    margin: 0px;
    font-family: "Castledown";
    font-size: 48px;
    font-weight: 900;

    ${mediaQueries.tablet} {
      font-size: 36px;
    }

    ${mediaQueries.largeMobile} {
      font-size: 24px;
    }
  }
  h2 {
    margin: 0px;
    font-family: "Castledown";
    font-size: 36px;
    font-weight: 900;

    ${mediaQueries.tablet} {
      font-size: 24px;
    }
  }
  h3 {
    margin: 0px;
    font-family: "Castledown";
    font-size: 24px;
    font-weight: 900;

    ${mediaQueries.tablet} {
      font-size: 20px;
    }
    padding-top: 20px;
  }
  p {
    padding: 0;
  }
  hr {
    border-style: none;
    height: 1px;
    margin-top: 3rem;
  }
  a {
    font-style: italic;
    &:hover {
      transition: opacity 200ms;
      &:not(:disabled) {
        opacity: 0.85;
      }
    }
    text-decoration: underline;
    color: ${theme.colors.secondary.navy};
  }
  ol,
  ul {
    list-style: initial;
    margin: initial;
    padding-left: 18px;
  }
  ${mediaQueries.tablet} {
    margin-left: 0;
  }
`;

const HalfContainer = styled.div`
  width: 50%;
  gap: 12px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.medium} {
    width: 100%;
  }
`;

const DescriptionContent = styled(Content)`
  color: ${theme.colors.secondary.navy};
`;
export default OrganizerAppsDescriptions;
