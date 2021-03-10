import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import BookClubsIndexContainer from "./containers/BookClubsIndexContainer";
import BookClubFormContainer from "./containers/BookClubFormContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="text-center bg-blue-900 text-yellow-100 p-4">
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/"
          >
            Book Clubs
          </NavLink>
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/book_clubs/new"
          >
            New Book Club
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <BookClubsIndexContainer />
          </Route>
          <Route path="/book_clubs/new" render={(routerProps) => <BookClubFormContainer anotherProp="myProp" {...routerProps}/>}>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;