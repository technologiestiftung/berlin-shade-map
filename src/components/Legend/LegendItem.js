/** @jsx jsx */
import { jsx } from "theme-ui";

export default (p) => {
  const { color, count, title, isFiltered } = p;
  return (
    <div
      sx={{
        textDecoration: "none",
        color: isFiltered ? "midgrey" : "text",
        display: "flex",
        alignItems: "baseline",
        fontSize: 1,
        transition: (t) => t.transitions[1],
      }}
    >
      <div
        sx={{
          width: "12px",
          transform: "translateY(2px)",
          mr: "5px",
          borderRadius: "6px",
          height: "12px",
          backgroundColor: color,
        }}
      ></div>
      <span>
        {title} ({count})
      </span>
    </div>
  );
};
