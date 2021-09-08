import React from "react";
import { Redirect, Route, useHistory, useRouteMatch } from "react-router-dom";
import Board from "./pages/board/Board";
import Settings from "./pages/settings/Settings";
import styled from "styled-components";
import Nav, { navWidth } from "./components/nav/Nav";
import SideBar, { sidebarWidth } from "./components/sidebar/Sidebar";

const StyledProject = styled.div`
  padding-left: calc(${navWidth} + ${sidebarWidth});
`;

const Project = () => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <StyledProject>
      <Nav />
      <SideBar />
      <Route path={`${match.path}/board`} render={() => <Board />} />
      <Route path={`${match.path}/settings`} render={() => <Settings />} />
      {match.isExact && <Redirect to={`${match.url}/board`} />}
    </StyledProject>
  );
};

export default Project;
