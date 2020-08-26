import React from "react";
import { render } from "@testing-library/react";
import App from "./modules/App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { StoreProvider } from "easy-peasy";
import Store from "state/Store";

const allProviders = ({ children }) => {
  const history = createMemoryHistory();
  return (
    <StoreProvider store={Store}>
      <Router history={history}>
        <App />
      </Router>
    </StoreProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: allProviders, ...options })

export * from "@testing-library/react";

export { customRender as render };