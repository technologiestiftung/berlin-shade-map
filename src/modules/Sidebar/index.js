import React from "react";
import styled from "styled-components";
import { Route, withRouter, Switch } from "react-router-dom";

import SidebarInfo from "./SidebarInfo/";
import SidebarClose from "./SidebarClose/";
import SidebarWrapper from "./SidebarWrapper";

const SidebarContent = styled.div`
  width: calc(100vw - 24px);
  max-width: 370px;
  padding: 20px 15px;
`;

const Sidebar = (p) => {
  const { location } = p;
  const { pathname } = location;
  const isVisible = pathname !== "/";

  return (
    <SidebarWrapper isvisible={isVisible.toString()}>
      <SidebarClose />
      <SidebarContent>
        <Switch>
          <Route path="/info" render={() => <SidebarInfo />} />
        </Switch>
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default withRouter(Sidebar);
