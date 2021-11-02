import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "./routes";
import { Login } from "./login/login";
import { Overview } from "./square/pages/Overview";

export function Router() {
  return (
    <Switch>
      <Route path={Routes.LOGIN}>
        <Login />
      </Route>
      <Route path={Routes.GAME_SQUARE}>
        <Overview />
      </Route>
      <Route path="*">
        <Redirect to={Routes.GAME_SQUARE} />
      </Route>
    </Switch>
  );
}
