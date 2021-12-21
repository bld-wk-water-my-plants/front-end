import React from "react";

const Signup = () => {
  return (
    <div className="top">
      <div className="title">
        <h2 className="signup">
          Sign Up Here{" "}
        </h2>
      </div>

      <div className="fill">
          <form className="emailaddress" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
              >
                Email address
              </label>
              <div className="email1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
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
              <div className="email1">
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
                htmlFor="email"
                className="styling"
              >
                Phone Number
              </label>
              <div className="email1">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  className="style"                />
              </div>
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

export default Signup;




