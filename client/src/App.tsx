//import * as React from "react"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Post from "./pages/Post"
import Nav from "./components/header/Nav"

const App: React.FC = () => {
  return (
    <Router>
      <div>
         <Nav/>
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



