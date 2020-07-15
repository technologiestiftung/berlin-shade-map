/** @jsx jsx */
import { jsx } from "theme-ui";
import c from "config";
import { Fragment } from "react";
import { useStoreActions } from "easy-peasy";

import CardTitle from "./CardTitle";
import CardLink from "./CardLink";
import CardTags from "./CardTags";
import CardDescription from "./CardDescription";
import Toggle from "components/Toggle";

export default (p) => {
  const { data } = p;
  if (data) {
  }
  const { properties } = data;
  const { autoid, isFaved } = properties;
  const setFav = useStoreActions((a) => a.setFav);
  return (
    <Fragment>
      {data && (
        <Fragment>
          {c.detail.map((block, i) => {
            switch (block.component) {
              case "title":
                return (
                  <Fragment>
                    <CardTitle key={`card-title-key-${i}`} size="responsive">
                      {properties[block.id]}
                    </CardTitle>
                    <Fragment>
                      <Toggle
                        isFaved={isFaved}
                        autoId={autoid}
                        onToggle={setFav}
                        type="detail"
                      />
                    </Fragment>
                  </Fragment>
                );
              case "description":
                return (
                  <CardDescription
                    key={`card-desc-key-${i}`}
                    label={block.label}
                    content={properties[block.id]}
                  />
                );
              case "link":
                return (
                  <CardLink
                    ismail="true"
                    key={`card-link-key-${i}`}
                    label={block.label}
                    content={properties[block.id]}
                    url={properties[block.id]}
                  />
                );
              case "tags":
                return (
                  <CardTags
                    ismail="true"
                    key={`card-link-key-${i}`}
                    label={block.label}
                    tags={properties[block.id]}
                  />
                );
              default:
                return null;
            }
          })}
        </Fragment>
      )}
    </Fragment>
  );
};
