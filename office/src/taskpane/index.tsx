import * as React from "react";
import { createRoot } from "react-dom/client";
import Shared from "../../../shared";

/* global document, Office, module, require, HTMLElement */

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Render application after Office initializes */
Office.onReady(() => {
  root?.render(<Shared />);
});

if ((module as any).hot) {
  (module as any).hot.accept("../../../shared/index", () => {
    const NextApp = require("../../../shared/index").default;
    root?.render(NextApp);
  });
}
