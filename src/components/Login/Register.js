import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from '../Navbar/Navbar';
import Services from '../../services/Services';
import { useHistory } from 'react-router-dom';
import { url } from '../../utils/constant';
import { Link } from 'react-router-dom';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const filled =
    displayName !== '' && UserName !== '' && Password !== '' && Phone !== '' && email !== '';

  const handleRegister = async () => {
    console.log(UserName);
    await Services.registerUser({
      userName: UserName,
      password: Password,
      displayName: displayName,
      phone: Phone,
      email: email,
    }).then((result) => {
      if (result.message === 'success') {
        window.location.assign(`${url}spotifylogin/${UserName}`);
      } else {
        alert('There was an error in registering');
        history.push('/Register');
      }
    });
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label font-weight-bold">
            Phone number
          </label>
          <div className="col-sm-10">
            <input
              id="phone"
              placeholder="800-000-0000"
              type="tel"
              className="form-control shadow"
              onChange={(e) => setPhone(e.target.value)}
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
              placeholder="me123"
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
          <button
            className="m-2 btn btn-block btn-primary"
            onClick={() => handleRegister()}
            disabled={!filled}>
            Create my profile!
          </button>
        </div>
        <Link to="/Login" className="m-2 float-right font-weight-bold">
          Already have an account?
        </Link>

        {/* <a href="#" className="float-right mt-2">
				I forgot my password!
			</a> */}
      </div>
    </React.Fragment>
  );
};

export default Register;
