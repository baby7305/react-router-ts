import * as React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/User";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    );
  }
}

export default AppRouter;