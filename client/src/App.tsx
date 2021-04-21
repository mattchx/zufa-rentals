
//import * as React from "react"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Post from "./pages/Post"

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/property">Property</Link>
            </li>
            <li>
              <Link to="/submit-new-property">Submit New</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/property" component={Post}/>
          {/* <Route path="/submit-new-property"> */}
          <Route path="/submit-new-property" component={Home}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

function Home() {
  return <h2>Welcome to Zu Rentals</h2>;
}
