import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from '../Navbar/Navbar';

const Register = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        class="container webdv-playlist-style mt-4 shadow animate__animated animate__fadeIn "
        style={{ border: 'solid 2px lightgrey', borderRadius: '20px' }}>
        <div className="d-flex flex-column align-items-center align-content-end m-3">
          <h2 className="">Register&nbsp;</h2>

          <span className="text-muted">Enter your new profile information below...</span>
        </div>

        <div class="form-group row">
          <label for="realName" class="col-sm-2 col-form-label font-weight-bold">
            Your name
          </label>
          <div class="col-sm-10">
            <input id="realName" placeholder="Rob Smith" type="text" class="form-control shadow" />
          </div>
        </div>

        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label font-weight-bold">
            Email
          </label>
          <div class="col-sm-10">
            <input id="email" placeholder="you@mail.org" type="email" class="form-control shadow" />
          </div>
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
          <button class="m-2 btn btn-block btn-primary">Create my profile!</button>
        </div>
        <a className="m-2 float-right font-weight-bold">Already have an account?</a>

        {/* <a href="#" className="float-right mt-2">
				I forgot my password!
			</a> */}
      </div>
    </React.Fragment>
  );
};

export default Register;
