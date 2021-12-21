import React from "react";

/* this may need to be edited because i was rushing while trying to do this so im not confident in it*/


const SignUp = () => {
  return (
    <div className="top">
      <div className="title">
        <h2 className="signup">
          Sign Up Here{" "}
        </h2>
      </div>

      <div className="fill">
          <form className="usernamee" action="#" method="POST">
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
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"                />
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


