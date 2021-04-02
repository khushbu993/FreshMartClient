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
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Component/Login/Login';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkOut/:productId'>
            <CheckOut />
          </Route>
          <Route path='/addProduct'>
            <AddProduct />
          </Route>
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
