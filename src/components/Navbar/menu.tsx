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

const containerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  maxWidth: "1202px",
  gap: "24px",
  height: "80px",
  paddingLeft: "32px",
};

const sectionStyles: React.CSSProperties = {
  alignSelf: "center",
  marginLeft: "8px",
  marginRight: "8px",
};

const websiteSectionStyles: React.CSSProperties = {
  alignSelf: "center",
  marginLeft: "8px",
  marginRight: "auto",
};

const Menu: React.FC<NavBarProps> = ({ notMainPage, colour }) => {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colour};
    transition: color 0.3s ease;
    &:hover {
      color: ${theme.colors.primary.blue};
    }
  `;

  return (
    <div style={containerStyles}>
      {!notMainPage &&
        Object.entries(SECTIONS).map(([id, name]) => {
          return (
            <div style={sectionStyles} key={id}>
              <StyledLink to={"/#" + id}>
                <BodyBold>
                  <span>{name}</span>
                </BodyBold>
              </StyledLink>
            </div>
          );
        })}
      {Object.entries(SOCIALS).map(([id, { icon, link, fathomEventName }]) => (
        <div style={{ alignSelf: "center" }} key={id}>
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
        </div>
      ))}
    </div>
  );
};

export default Menu;
