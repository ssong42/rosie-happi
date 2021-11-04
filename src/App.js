import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Info from "./components/Info";
import Question from "./containers/Questions";
import History from "./containers/History";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/">
          <Question />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
