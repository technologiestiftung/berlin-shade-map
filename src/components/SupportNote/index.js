/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";

const SupportNote = (p) => {

  return (
    <div
      sx={{
        fontSize: 1,
        color: theme => theme.colors.text,
        backgroundColor: theme => theme.colors.lightgrey,
        padding: [3, 4],
        marginBottom: [3, 4],
      }}
    >
      Die Schattenwürfe können auf älteren iOS-Geräten und im Safari-Browser aktuell nicht korrekt dargestellt werden. Bitte versuche ein anderes Gerät bzw. einen anderen Browser, um die Karte zu öffnen.
    </div>
  );
};

export default SupportNote;
