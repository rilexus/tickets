import styled from "styled-components";
import { navWidth } from "../nav/Nav";
import React from "react";

const sidebarWidth = "10rem";
const StyledSidebar = styled.div`
  left: ${navWidth};
  top: 0;
  position: fixed;
  height: 100vh;
  background-color: #cdd4e1;
  width: ${sidebarWidth};
`;
const SideBar = () => {
  return <StyledSidebar>Sidebar</StyledSidebar>;
};

export { sidebarWidth };
export default SideBar;
