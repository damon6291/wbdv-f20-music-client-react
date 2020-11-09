import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from '../Navbar/Navbar';
import { Nav } from 'reactstrap';

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        class="container webdv-playlist-style shadow animate__animated animate__fadeIn"
        // style={{ border: "solid 2px lightgrey", borderRadius: "20px" }}
      >
        <div className="d-flex flex-column align-items-center align-content-end m-3">
          <h2 className="mt-3">Login&nbsp;</h2>

          <span className="text-muted">Enter your account information below...</span>
        </div>

        <div class="form-group row">
          <label for="username" class="col-sm-2 col-form-label font-weight-bold">
            Username
          </label>
          <div class="col-sm-10">
            <input id="username" placeholder="..." type="text" class="form-control shadow" />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label font-weight-bold">
            Password
          </label>

          <div class="col-sm-10">
            <input
              type="password"
              class="form-control shadow"
              id="inputPassword"
              placeholder="123qwe!@#"
            />
          </div>
        </div>

        <div class="form-group row">
          <button class="m-2 btn btn-block btn-success">Sign In</button>
        </div>
        <a className="mt-4 float-left font-weight-bold">I don't have an account!</a>

        <a href="#" className="float-right mt-4 font-weight-bold">
          I forgot my password!
        </a>
      </div>
    </React.Fragment>
  );
};

export default Login;
