/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import styled from "styled-components";
import { useStoreState, useStoreActions } from "easy-peasy";

import c from "../config";
import CloseIcon from "@material-ui/icons/Close";
import RoundButton from "./RoundButton";


const CookieDiv = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000001;
  font-size: 10px;
  box-shadow: 0 2px 40px 0 rgba(30, 55, 145, 0.15);
  height: min-content;
  width: 370px;
  background: white;

  @media screen and (max-width: 768px) {
    width: 100%;
    bottom: 0;
    right: 0;
  }
`;

const Inner = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
`;

const StyledCardDescription = styled.div`
  line-height: 150%;
  opacity: 0.66;
  a {
    color: black;
    &:hover {
      opacity: 0.33;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Cookies = () => {

  const { text, link, cookie } = c.cookies;

  const mapboxCookieAccepted = useStoreState((state) => state.mapboxCookieAccepted);
  const setMapboxCookieAccepted = useStoreActions((state) => state.setMapboxCookieAccepted);

  const acceptCookie = () => {
    document.cookie = cookie;
    setMapboxCookieAccepted(true);
  };
  
  return (
    <Fragment>
    {!mapboxCookieAccepted && (
      <CookieDiv>
        <Inner>
          <StyledCardDescription>
              {text}&nbsp;
              <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
          </StyledCardDescription>
          <RoundButton
            aria-label="Cookie-Hinweis schließen"
            title="Cookie-Hinweis schließen"
            onClick={() => acceptCookie()}
          >
            <CloseIcon />
          </RoundButton>
        </Inner>
      </CookieDiv>
    )}
    </ Fragment>
  );
};

export default Cookies;
