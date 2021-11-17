import { Switch, Route, Redirect } from "react-router-dom";

import styles from './styles/Router.module.css';
import { Routes } from "./routes";
import { Overview } from "./square/pages/Overview";

export function Router() {
  return (
    <div className={styles.routerContainer}>
      <Switch>
        <Route path={Routes.GAME_SQUARE}>
          <Overview />
        </Route>
        <Route path="*">
          <Redirect to={Routes.GAME_SQUARE} />
        </Route>
      </Switch>
    </div>
  );
}
