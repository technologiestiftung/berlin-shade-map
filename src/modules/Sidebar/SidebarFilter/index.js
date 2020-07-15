/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { useStoreState } from "easy-peasy";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import Tags from "components/Tags";

const SidebarFilter = (p) => {
  const data = c.filter;
  const { title, filter } = data;
  const filterState = useStoreState((state) => state.filter);
  return (
    <Fragment>
      <SidebarTitle>{title}</SidebarTitle>
      {filterState && <Tags filterValues={filter} filter={filterState} />}
    </Fragment>
  );
};

export default SidebarFilter;
