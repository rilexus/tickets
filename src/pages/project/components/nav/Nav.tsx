import styled from "styled-components";
import React from "react";

const navWidth = "3rem";

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${navWidth};
  background-color: cornflowerblue;
`;

const Nav = () => {
  return <StyledNav>Nav</StyledNav>;
};

export { navWidth };
export default Nav;
