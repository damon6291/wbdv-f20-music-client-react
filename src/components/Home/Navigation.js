import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faSearch, faDna } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation = (login = false) => (
  <div style={{ padding: '20px' }}>
    <Nav
      defaultActiveKey="/home"
      style={{ height: '100%', width: '20%' }}
      className="flex-column fixed-left">
      <NavLink style={{ color: 'orange', marginTop: '20px' }} href="/home">
        <h5>
          <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faHome} />
          Home
        </h5>
      </NavLink>
      <div>
        <NavLink style={{ color: 'orange', marginTop: '20px' }} eventKey="link-1">
          <h5>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUserCircle} />
            Profile
          </h5>
        </NavLink>
        <NavLink style={{ color: 'orange', marginTop: '20px' }} eventKey="link-2">
          <h5>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faSearch} />
            Search
          </h5>
        </NavLink>
        <NavLink style={{ marginTop: '20px' }} eventKey="link-3">
          <h5>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faDna} />
            Music Analysis
          </h5>
        </NavLink>
      </div>
    </Nav>
  </div>
);

export default Navigation;
