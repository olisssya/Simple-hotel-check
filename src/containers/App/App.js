import styles from "./App.module.scss";
import Main from "../../pages/Main/Main";
import Home from "../../pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuth ? <Redirect to="/main" /> : <Home />}
        </Route>
        <Route path="/main">{isAuth ? <Main /> : <Redirect to="/" />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
