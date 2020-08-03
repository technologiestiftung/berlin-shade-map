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
      Teile der Karte können in einigen Browsern nicht korrekt dargestellt werden. Bitte öffne die Karte in einem anderen Browser, zum Beispiel in Google Chrome.
    </div>
  );
};

export default SupportNote;
