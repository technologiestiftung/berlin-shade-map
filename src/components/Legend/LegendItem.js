/** @jsx jsx */
import { jsx } from "theme-ui";

export default (p) => {
  const { color, count, title } = p;
  return (
    <div
      sx={{
        textDecoration: "none",
        color: "text",
        mb: "3px",
        display: "flex",
        fontSize: 1,
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
