import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import BookClubsIndexContainer from "./containers/BookClubsIndexContainer";
import BookClubFormContainer from "./containers/BookClubFormContainer";
import BooksIndexContainer from "./containers/BooksIndexContainer";
import BookClubShowContainer from "./containers/BookClubShowContainer";
import BookShowContainer from "./containers/BookShowContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="text-center bg-red-800 text-white-100 p-4">
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
            Find Books
          </NavLink>
        </nav>
        <Switch>
          <Route path="/book_clubs/new" component={BookClubFormContainer} />
          <Route exact path="/" component={BookClubsIndexContainer} />
          <Route path="/books">
            <BooksIndexContainer />
          </Route>
          <Route path = "/bookClubs/:id" component={BookClubShowContainer} />
          <Route path = "books/:id" component={BookShowContainer} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;