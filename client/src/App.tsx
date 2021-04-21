
//import * as React from "react"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import styled from '@emotion/styled';


import Post from "./pages/Post"

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


const NavUnlisted = styled.ul`
  display: flex;
  a {
    text-decoration: none;
  }
  li {
    color: black;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid blue;
    }
  }
`;


const links = [
  {name: "Home",path:"/"},
  {name: "Property",path:"/property"},
  {name: "Submit New Property",path:"/submit-new-property"},
];

function Nav() {
  return (
    <NavUnlisted>
      {links.map((link,index) => (
        <NavLink key={index} to={link.path} exact activeClassName="current">
          <li>{link.name}</li>
        </NavLink>
      ))}
    </NavUnlisted>
  );
}
