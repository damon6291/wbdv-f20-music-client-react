import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from '../Navbar/Navbar';
import Services from '../../services/Services';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

  const handleRegister = () => {
    Services.registerUser({ username: UserName, password: Password, displayName: displayName });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div
        className="container webdv-playlist-style mt-4 shadow animate__animated animate__fadeIn "
        style={{ border: 'solid 2px lightgrey', borderRadius: '20px' }}>
        <div className="d-flex flex-column align-items-center align-content-end m-3">
          <h2 className="">Register&nbsp;</h2>

          <span className="text-muted">Enter your new profile information below...</span>
        </div>

        <div className="form-group row">
          <label htmlFor="realName" className="col-sm-2 col-form-label font-weight-bold">
            Your name
          </label>
          <div className="col-sm-10">
            <input
              id="realName"
              placeholder="Rob Smith"
              type="text"
              className="form-control shadow"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">
            Email
          </label>
          <div className="col-sm-10">
            <input
              id="email"
              placeholder="you@mail.org"
              type="email"
              className="form-control shadow"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label font-weight-bold">
            Username
          </label>
          <div className="col-sm-10">
            <input
              id="username"
              placeholder="..."
              type="text"
              className="form-control shadow"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label font-weight-bold">
            Password
          </label>

          <div className="col-sm-10">
            <input
              type="password"
              className="form-control shadow"
              id="inputPassword"
              placeholder="123qwe!@#"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <button className="m-2 btn btn-block btn-primary" onClick={() => handleRegister()}>
            Create my profile!
          </button>
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
