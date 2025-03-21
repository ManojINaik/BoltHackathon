import * as Fathom from "fathom-client";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Icon from "src/components/base/Icon";
import { SOCIALS } from "src/constants/social";
import { BodyBold, theme } from "src/styles";
import styled from "styled-components";

import "styled-components/macro";
import Button from "../base/Button";

import { NavBarProps, SECTIONS, WEBSITE2023URL } from "./constants";

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1202px;
  gap: 24px;
  height: 80px;
  padding-left: 32px;
`;

const SectionItem = styled.div`
  align-self: center;
  margin: 0 8px;
  position: relative;
`;

const SocialItem = styled.div`
  align-self: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Menu: React.FC<NavBarProps> = ({ notMainPage, colour }) => {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colour};
    transition: all 0.3s ease;
    padding: 5px 8px;
    border-radius: 8px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background-color: ${theme.colors.primary.blue};
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      color: ${theme.colors.primary.blue};

      &:after {
        width: 80%;
      }
    }
  `;

  return (
    <MenuContainer>
      {!notMainPage &&
        Object.entries(SECTIONS).map(([id, name]) => {
          return (
            <SectionItem key={id}>
              <StyledLink to={"/#" + id}>
                <BodyBold>
                  <span>{name}</span>
                </BodyBold>
              </StyledLink>
            </SectionItem>
          );
        })}
      {Object.entries(SOCIALS).map(([id, { icon, link, fathomEventName }]) => (
        <SocialItem key={id}>
          <a
            aria-label={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Fathom.trackEvent(fathomEventName)}
          >
            <Icon
              name={icon}
              hover={true}
              color={colour}
              hoverColor={theme.colors.primary.blue}
            />
          </a>
        </SocialItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
