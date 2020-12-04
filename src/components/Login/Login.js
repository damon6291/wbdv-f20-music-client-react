import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from '../Navbar/Navbar';
import Services from '../../services/Services';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ addUserName }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    Services.handleLogin({ userName: userName, password: password }).then((result) => {
      if (result.message !== 'error') {
        addUserName(result.message);
        history.push('/Home');
      } else {
        alert("Your login information was incorrect. Please re-enter your username and/or password and try again.")
        history.push('/Login');
      }
    });
  };
  return (
    <React.Fragment>
      <Navbar />
      <div
        className="container webdv-playlist-style shadow animate__animated animate__fadeIn"
        // style={{ border: "solid 2px lightgrey", borderRadius: "20px" }}
      >
        <div className="d-flex flex-column align-items-center align-content-end m-3">
          <h2 className="mt-3">Login&nbsp;</h2>

          <span className="text-muted">Enter your account information below...</span>
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
          <button className="m-2 btn btn-block btn-success" onClick={() => handleLogin()}>
            Sign in
          </button>
        </div>

        <Link to="/Register" className="mt-4 float-left font-weight-bold">
          I don't have an account!
        </Link>

        <a href="#" className="float-right mt-4 font-weight-bold">
          I forgot my password!
        </a>
      </div>
    </React.Fragment>
  );
};

export default Login;
