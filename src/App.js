import { Route, Switch, Redirect, Link } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Plants from './components/Plants';
import Logout from './components/Logout';
import EditUser from './components/EditUser';
import AddPlant from "./components/AddPlant";
import EditPlant from "./components/EditPlant";
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
            {isLoggedIn && <Link to="/edituser" className='li'>Edit Account</Link>}
          </li>
          <li>
            {isLoggedIn && <Link to="/plants" className='li'>Plants</Link>}
          </li>
          <li>
            <Link to="/signup" className='li' >Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className='li'>Login</Link>
          </li>
          <li>
            {isLoggedIn && <Link to="/logout" className='li'>Logout</Link>}
          </li>
        </ul>
      </header>
      <Switch>
        <PrivateRoute path='/plants' component={Plants} />
        <PrivateRoute path='/addplant' component={AddPlant} />
        <PrivateRoute path='/editplant/:id' component={EditPlant} />
        <PrivateRoute path='/edituser' component={EditUser}/>
        <Route path='/signup' component={SignUp} />
        <PrivateRoute path='/logout' component={Logout}/>
        <Route path='/login' component={Login} />
        <Route path="/" />    
      </Switch>
    </div>
  );
}

export default App;
