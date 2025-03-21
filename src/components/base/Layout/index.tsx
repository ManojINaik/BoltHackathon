import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import PageWrapper from "./PageWrapper";

type Props = ComponentPropsWithoutRef<"div">;

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  scroll-behavior: smooth;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Better touch handling for mobile */
  -webkit-overflow-scrolling: touch;
`;

const Layout: React.FC<Props> = ({ children }) => (
  <Container id="container">
    <PageWrapper>{children}</PageWrapper>
  </Container>
);

export default Layout;
