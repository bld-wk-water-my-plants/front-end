import { Route, Switch, Redirect, Link } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Plants from './components/Plants';
import Logout from './components/Logout';
import EditUser from './components/EditUser';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Water My Plants</h1>
        <ul>
          <li>
            {!isLoggedIn && <Link to="/edituser">Edit Account</Link>}
          </li>
          <li>
            {!isLoggedIn && <Link to="/plants">Plants</Link>}
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            {!isLoggedIn && <Link to="/logout">Logout</Link>}
          </li>
        </ul>
      </header>
      <Switch>
<<<<<<< HEAD
        <PrivateRoute path='/plants' component={Plants} />
        <PrivateRoute path='/edituser' />
        <Route path='/signup' component={SignUp} />
        <PrivateRoute path='/logout' />
=======
        <Route path='/plants' component={Plants}/>
        <Route path='/edituser/:id' />
        <Route path='/signup' component={SignUp}/>
        <Route path='/logout' />
>>>>>>> 8ef3d8bc0ecb088a497c98826908a19bb73372b9
        <Route path='/login' component={Login} />
        <Route path="/" />    
      </Switch>
    </div>
  );
}

export default App;
