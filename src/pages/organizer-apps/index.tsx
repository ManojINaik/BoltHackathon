import React from "react";
import { Layout, Navbar } from "src/components";
import styled from "styled-components";

import OrganizerAppsDescriptions from "./OrganizerAppsDescriptions";
import OrganizerAppsFooter from "./OrganizerAppsFooter";
import OrganizerAppsHero from "./OrganizerAppsHero";

const OrganizerApps: React.FC = () => {
  return (
    <LayoutWithBackground>
      <Navbar colour="black" />
      <OrgAppsContainer>
        <OrganizerAppsHero />
        <OrganizerAppsDescriptions />
      </OrgAppsContainer>
      <OrganizerAppsFooter />
    </LayoutWithBackground>
  );
};

const LayoutWithBackground = styled(Layout)`
  background-color: #fdf7ea;
`;

const OrgAppsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 100%;
  background-color: #fdf7ea;
`;

export default OrganizerApps;
