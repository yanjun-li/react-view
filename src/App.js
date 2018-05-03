import React from "react";
import Help from './components/Help/help'
import About from './components/About/about'
import Battery from './components/Battery/battery'
import Answer from './components/Answer/answer'
import Treaty from './components/Treaty'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      {/* <ul>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/battery">Battery</Link>
        </li>
      </ul>

      <hr/> */}
      <Switch>
        <Route exact path="/help" component={Help}/>
        <Route path="/help/:id" component={Answer} />
        <Route path="/about" component={About}/>
        <Route path="/treaty" component={Treaty}/>
        <Route path="/battery" component={Battery}/>
      </Switch>
    </div>
  </Router>
)

export default App;
