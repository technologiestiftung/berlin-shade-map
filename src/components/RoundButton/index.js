/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export default (p) => {
  const { children, onClick } = p;
  return (
    <button
      sx={{
        minWidth: [3],
        minHeight: [3],
        width: [3],
        height: [3],
        padding: 0,
        borderRadius: "100px",
        backgroundColor: "text",
        cursor: "pointer",
        border: "none",
        outline: "0",
        transition: (theme) => theme.transitions[0],
        "&:hover": {
          backgroundColor: "textgrey",
        },
        "& > svg": {
          fill: "background",
          transform: "translateY(1px)",
        },
      }}
      onClick={onClick}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child);
      })}
    </button>
  );
};
