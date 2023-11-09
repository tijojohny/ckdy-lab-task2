import React from "react";
import Header from "./header";
import Footer from "./footer";
function Login() {
  return (
    <>
      <Header />
      <div
        style={{
          position: "relative",
          padding: " 3rem 20rem 5rem ",
          background: "white",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
