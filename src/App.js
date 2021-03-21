import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";
import Destination from "./components/Destination/Destination";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  const [signOutUser, setSignOutUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, signOutUser, setSignOutUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/booking/:bookingId">
            <Booking />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/destination">
            <Checkout />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
