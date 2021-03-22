import styles from './App.module.scss'
import Main from '../../pages/Main/Main'
import Home from "../../pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
