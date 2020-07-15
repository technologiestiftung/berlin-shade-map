/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import CardCompact from "components/Card/CardCompact";

const SidebarFav = (p) => {
  const { data } = p;
  const fav = c.fav;
  const { title } = fav;
  return (
    <Fragment>
      <SidebarTitle>{title}</SidebarTitle>
      {data &&
        data.features
          .filter((d) => d.properties.isFaved)
          .map((d, i) => {
            return <CardCompact key={`item-${i}`} data={d} />;
          })}
    </Fragment>
  );
};

export default SidebarFav;
