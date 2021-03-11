import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import BookClubsIndexContainer from "./containers/BookClubsIndexContainer";
import BookClubFormContainer from "./containers/BookClubFormContainer";
import BooksIndexContainer from "./containers/BooksIndexContainer";

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
            to="/user_book_clubs"
          >
            My Book Clubs
          </NavLink>
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/book_clubs/new"
          >
            New Book Club
          </NavLink>
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/books"
          >
            Books
          </NavLink>

        </nav>
        <Switch>
          <Route exact path="/">
            <BookClubsIndexContainer />
          </Route>
          <Route path="/book_clubs/new" component={BookClubFormContainer}/>
          <Route path="/books">
            <BooksIndexContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;