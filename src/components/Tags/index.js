/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Fragment } from "react";
import { useStoreState } from "easy-peasy";

import Tag from "./Tag";
import CardTitle from "components/Card/CardTitle";

export default (p) => {
  const { filter, filterValues } = p;

  const categories = useStoreState((state) => state.categories);

  return (
    <Flex
      sx={{
        width: "100%",
        flexWrap: "wrap",
        fontSize: "1",
        justifyContent: "column",
        mb: ["2", "4"],
      }}
    >
      {filterValues.map(({ id, label }) => {
        return (
          <Fragment key={id}>
            <CardTitle>{label}</CardTitle>
            {filter[id].map((value) => {
              const category = categories.find(c => c.id === value);
              return <Tag id={id} data={value} category={category} key={value} />;
            })}
          </Fragment>
        );
      })}
    </Flex>
  );
};
