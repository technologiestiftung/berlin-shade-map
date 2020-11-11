import React from "react";
import { useStoreState } from "easy-peasy";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import CardParagraph from "components/Card/CardParagraph";
import TimeSelector from "../../../components/TimeSelector";
import Tags from "components/Tags";
import SupportNote from "components/SupportNote";
import LocationSearch from "components/LocationSearch";
import Logos from "components/Logos";

const SidebarInfo = (p) => {
  const data = c.about;
  const { title, paragraphs } = data;
  const { filter } = c.filter;

  const webpIsSupported = useStoreState((state) => state.webpIsSupported);
  const shadeData = useStoreState((state) => state.shadeData);
  const filterState = useStoreState((state) => state.filter);

  return (
    <>
      <SidebarTitle>{title}</SidebarTitle>
      {webpIsSupported !== null && !webpIsSupported && <SupportNote />}
      {webpIsSupported && shadeData && <TimeSelector />}
      {filterState && <Tags filterValues={filter} filter={filterState} />}
      <LocationSearch />
      {paragraphs.map((p, i) => (
        <CardParagraph title={p.title} text={p.content} key={i}></CardParagraph>
      ))}
      <Logos />
    </>
  );
};

export default SidebarInfo;
