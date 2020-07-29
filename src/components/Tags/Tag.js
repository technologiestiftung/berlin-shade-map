/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import LegendItem from "../Legend/LegendItem";

export default (p) => {
  const { data, id, category } = p;
  const { id: title, count, color } = category;
  
  const setFilter = useStoreActions((actions) => actions.setFilter);
  const isFilteredState = useStoreState((state) => state.isFiltered);
  const [isFiltered, setIsFiltered] = useState(isFilteredState[id][data]);

  const handleClick = (obj) => {
    setFilter(obj);
    setIsFiltered(isFilteredState[id][data]);
  };

  return (
    <span
      {...p}
      sx={{
        backgroundColor: "background",
        color: isFiltered ? "text" : "background",
        border: theme => isFiltered ? `1px solid ${theme.colors.midgrey}` : `1px solid black`,
        py: "1",
        px: "3",
        mr: "2",
        cursor: "pointer",
        mb: "2",
        borderRadius: "14px",
        transition: (t) => t.transitions[1],
      }}
      onClick={() => handleClick({ data, id })}
    >
      <LegendItem count={count} color={color} title={title} key={id} isFiltered={isFiltered} />
    </span>
  );
};
