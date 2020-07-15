import React, { useEffect } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import { useStoreActions } from "easy-peasy";

import history from "../../history";

const NotFoundRoute = () => <Redirect to="/" />;

const App = (p) => {
  const loadData = useStoreActions((action) => action.loadData);
  const loadShadeData = useStoreActions((action) => action.loadShadeData);

  useEffect(() => {
    loadData();
    loadShadeData();

    setTimeout(() => {
      history.push("/info");
    }, 250);
  }, [loadData, loadShadeData]);

  return (
    <Router history={history}>
      <Switch>
        <Route path={["/"]} component={AppWrapper} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  );
};

export default App;
