import React from "react";
import styled from "styled-components";
import { NavLink, withRouter, matchPath } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import InfoIcon from "@material-ui/icons/InfoOutlined";

import EdgeButton from "components/EdgeButton";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: 0 2px 40px 0 rgba(30, 55, 145, 0.15);
  flex-grow: 0;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1000;
`;

const NavItem = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const navConfig = [
  { path: "/info", title: "Über das Projekt", icon: <InfoIcon /> },
];

const Nav = (p) => {
  const { location } = p;
  const { pathname } = location;
  const setHighlightData = useStoreActions((a) => a.setHighlightData);

  const isNavOpen =
    matchPath(pathname, {
      path: navConfig.map((m) => m.path),
    }) !== null;

  return (
    <NavWrapper isNavOpen={isNavOpen}>
      {navConfig.map((m) => (
        <NavItem
          exact
          to={{ pathname: m.path, search: "" }}
          key={m.path}
          onClick={() => setHighlightData(false)}
        >
          <EdgeButton
            title={m.title}
            aria-label={m.title}
            isActive={pathname === m.path}
          >
            {m.icon}
          </EdgeButton>
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default withRouter(Nav);
