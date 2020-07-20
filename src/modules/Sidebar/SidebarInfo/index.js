import React from "react";
import { useStoreState } from "easy-peasy";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import CardParagraph from "components/Card/CardParagraph";
import Legend from "components/Legend";
import TimeSelector from "../../../components/TimeSelector";

const SidebarInfo = (p) => {
  const data = c.about;
  const { title, paragraphs } = data;

  const shadeData = useStoreState((state) => state.shadeData);

  return (
    <>
      <SidebarTitle>{title}</SidebarTitle>
      {shadeData && <TimeSelector />}
      <Legend />
      {paragraphs.map((p, i) => (
        <CardParagraph title={p.title} text={p.content} key={i}></CardParagraph>
      ))}
    </>
  );
};

export default SidebarInfo;
