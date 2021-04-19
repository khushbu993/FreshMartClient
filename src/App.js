import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import AddProduct from './Component/AddProduct/AddProduct';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import CheckOut from './Component/CheckOut/CheckOut';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Component/Login/Login';
import Order from './Component/Order/Order';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [checkout, setCheckOut] = useState([{}]);
  return (
    <UserContext.Provider value={{value1: [loggedInUser, setLoggedInUser], value2: [checkout, setCheckOut]}}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path='/checkOut/:productId'>
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path='/addProduct'>
            <AddProduct />
          </PrivateRoute>
          <Route path='/manageProduct'>
            <ManageProduct />
          </Route>
          <Route exact path="/">
            <Home />
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
