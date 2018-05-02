import React from "react";
import Help from './components/help'
import About from './components/about'
import Battery from './components/battery'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
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

      <hr/>
      <Switch>
        <Route exact path="/help" component={Help}/>
        <Route path="/about" component={About}/>
        <Route path="/battery" component={Battery}/>
      </Switch>
    </div>
  </Router>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}/>
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
