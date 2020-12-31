import { Route, Switch } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Resume } from "./Resume";

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact={true} path={"/"} component={Home} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/resume"} component={Resume} />
      </Switch>
    </main>
  );
};
