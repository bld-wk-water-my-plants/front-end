import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
/* this may need to be edited because i was rushing while trying to do this so im not confident in it*/
//the url posted doesn't allow 

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setNumber] = useState("");
  const { push } = useHistory();

  const handleSubmit =e=>{
    e.preventDefault();
    axios.post('https://water-my-plants-build-week.herokuapp.com/api/auth/register', {username, password, phone_number})
      .then(esp=>{
        push('/login')
      })
      .catch(err=>{
        console.log(err.message)
      })
  }
  return (
    <div className="top">
      <div className="title">
        <h2 className="signup">
          Sign Up Here{" "}
        </h2>
      </div>

      <div className="fill">
          <form className="username" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
              >
                Username
              </label>
              <div className="info1">
                <input
                  id="userName"
                  name="userName"
                  type="username"
                  autoComplete="username"
                  required
                  className="style"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="styling"
              >
                Password
              </label>
              <div className="info1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="style"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phonenum"
                className="styling"
              >
                Phone Number
              </label>
              <div className="info1">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                  required
                  className="style"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={(e) => setNumber(e.target.value)}                />
              </div>
              <small>Format: 123-456-7890</small>
            </div>
            <div>
              <button
                type="submit"
                className ="styling"
              >
                Submit Signup
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default SignUp;
