import * as Fathom from "fathom-client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import Icon from "src/components/base/Icon";
import { SOCIALS } from "src/constants/social";
import { BodyBold, theme } from "src/styles";
import { useWindowSize } from "src/utils";
import styled from "styled-components";
import "styled-components/macro";

import {
  NAVBAR_HEIGHT_PX,
  NavBarProps,
  SECTIONS,
  WEBSITE2023URL,
  JOINURL,
  mobileBackgroundVariants,
  mobileItemVariants,
  mobileListVariants,
} from "./constants";

export interface TMobileMenuProps extends NavBarProps {
  isHidden: boolean;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

// Styled components
const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 98;
`;

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: calc(100vh + ${NAVBAR_HEIGHT_PX}px);
  background: ${theme.colors.secondary.navy};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 90% 10%,
      rgba(124, 158, 255, 0.15),
      transparent 40%
    );
    z-index: 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const List = styled(motion.ul)`
  top: 25vh;
  left: 0;
  padding: 0px 10%;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const SocialList = styled(motion.ul)`
  top: 25vh;
  left: 0;
  padding: 0px 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const ListItem = styled(motion.li)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  a {
    text-decoration: none;
    padding: 8px 16px;
    position: relative;
    display: block;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: ${theme.colors.primary.blue};
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 70%;
    }
  }
`;

const StyledBodyBold = styled(BodyBold)`
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;

  ${ListItem}:hover & {
    color: ${theme.colors.primary.blue};
    text-shadow: 0 0 8px rgba(124, 158, 255, 0.6);
  }
`;

// Credits: https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx
const MobileMenu: React.FC<TMobileMenuProps> = ({
  isHidden,
  isOpen,
  toggleIsOpen,
  notMainPage,
}) => {
  const containerRef = useRef(null);
  const { windowHeight } = useWindowSize();

  return (
    <Container
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={windowHeight}
      ref={containerRef}
      style={{
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <Background variants={mobileBackgroundVariants}>
        <List variants={mobileListVariants}>
          {!notMainPage &&
            Object.entries(SECTIONS).map(([id, name], i) => {
              return (
                <ListItem
                  key={i}
                  variants={mobileItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    pointerEvents: isOpen ? "auto" : "none",
                    userSelect: isOpen ? "auto" : "none",
                  }}
                >
                  <a
                    key={id}
                    href={`/#${id}`}
                    onClick={() => toggleIsOpen()} // menu should close after section is clicked
                    tabIndex={isHidden ? -1 : 0}
                    aria-hidden={isHidden ? "true" : undefined}
                  >
                    <StyledBodyBold>{name}</StyledBodyBold>
                  </a>
                </ListItem>
              );
            })}
          {!notMainPage ? (
            <ListItem
              key={Object.keys(SECTIONS).length}
              variants={mobileItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                userSelect: isOpen ? "auto" : "none",
              }}
            >
              <a
                key={Object.keys(SECTIONS).length + 1}
                href={JOINURL}
                onClick={() => toggleIsOpen()} // menu should close after section is clicked
                tabIndex={isHidden ? -1 : 0}
                aria-hidden={isHidden ? "true" : undefined}
              >
                <StyledBodyBold>JOIN OUR TEAM</StyledBodyBold>
              </a>
            </ListItem>
          ) : null}
          <ListItem>
            <SocialList>
              {Object.entries(SOCIALS).map(
                ([id, { icon, link, fathomEventName }]) => (
                  <ListItem
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={id}
                    style={{
                      pointerEvents: isOpen ? "auto" : "none",
                      userSelect: isOpen ? "auto" : "none",
                    }}
                  >
                    <a
                      aria-label={id}
                      href={link}
                      tabIndex={isHidden ? -1 : 0}
                      aria-hidden={isHidden ? "true" : undefined}
                      target="_blank"
                      style={{
                        pointerEvents: isOpen ? "auto" : "none",
                        userSelect: isOpen ? "auto" : "none",
                      }}
                      rel="noreferrer"
                      onClick={() => Fathom.trackEvent(fathomEventName)}
                    >
                      <Icon name={icon} color={theme.colors.text.dark.white} />
                    </a>
                  </ListItem>
                )
              )}
            </SocialList>
          </ListItem>
        </List>
      </Background>
    </Container>
  );
};

export default MobileMenu;
