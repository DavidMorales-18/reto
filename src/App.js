import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/authentication/login";
import TableDetails from "./components/table/tableDetails";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  // function PrivateRoute({ component: Component, authed, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) => authed === true
  //         ? <Component {...props} />
  //         : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
  //     />
  //   )
  // }
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/details">
            <TableDetails />
          </Route>
        </Switch>
    </Router>
  );
}
