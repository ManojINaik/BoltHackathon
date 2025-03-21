import React from "react";
import styled from "styled-components";
import { mediaQueries } from "src/utils/responsive";

/**
 * A component to hold content for a section with enhanced responsive behavior
 */
const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1512px;
  width: 100%;
  padding: 0 32px;
  z-index: 20;
  transition: all 0.3s ease-in-out;

  ${mediaQueries.largeMobile} {
    padding: 0 24px;
  }

  ${mediaQueries.smallMobile} {
    padding: 0 16px;
  }
`;

export default React.memo(ContentWrapper);
