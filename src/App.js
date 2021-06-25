import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/LoginPage/Login';
import PrivateRoute from './components/LoginPage/PrivateRoute';
import DashedBoard from './components/Dashboard/Dashedboard/DashedBoard';
import { createContext, useState } from 'react';
import ServiceCard from './components/Home/ServiceItem/ServiceCard';
export const ContextUser = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    name: '',
    email: ''
  })
  const [order,setOrder] = useState()
  const [paymentSuccess,setPaymentSuccess] = useState(null)
  return (
    <ContextUser.Provider value={
      {
        value1: [loggedInUser, setLoggedInUser],
        value2: [order,setOrder],
        value3:[paymentSuccess,setPaymentSuccess] 
      }
    }>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/About">
            <DashedBoard></DashedBoard>
          </PrivateRoute>
        </Switch>
      </Router>
    </ContextUser.Provider>
  );
}

export default App;
