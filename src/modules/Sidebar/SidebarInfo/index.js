import React from "react";
import { useStoreState } from "easy-peasy";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import CardParagraph from "components/Card/CardParagraph";
import TimeSelector from "../../../components/TimeSelector";
import Tags from "components/Tags";

const SidebarInfo = (p) => {
  const data = c.about;
  const { title, paragraphs } = data;
  const { filter } = c.filter;

  const shadeData = useStoreState((state) => state.shadeData);
  const filterState = useStoreState((state) => state.filter);

  return (
    <>
      <SidebarTitle>{title}</SidebarTitle>
      {shadeData && <TimeSelector />}
      {filterState && <Tags filterValues={filter} filter={filterState} />}
      {paragraphs.map((p, i) => (
        <CardParagraph title={p.title} text={p.content} key={i}></CardParagraph>
      ))}
    </>
  );
};

export default SidebarInfo;
