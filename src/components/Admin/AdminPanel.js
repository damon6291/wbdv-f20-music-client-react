import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Service from '../../services/Services';
import { adminFindAllUsers } from '../../actions/AdminAction';
import { clienturl } from '../../utils/constant';

import Navbar from '../Navbar/Navbar';

const AdminPanel = ({ users, findAllUsers, deleteUser, count, userId }) => {
  useEffect(() => {
    findAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteHandler = async (id) => {
    await deleteUser(id);
    window.location.assign(`${clienturl}Admin`);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-1">
        <h2 className="d-flex justify-content-center font-weight-bold float-">
          <FontAwesomeIcon icon={faLock} />
          &nbsp;Admin Panel
        </h2>
        <h5 className="d-flex justify-content-center text-muted">
          total registered users: {count}
        </h5>
        <ul className="list-group">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Display Name</th>
                <th scope="col">Role</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <span className="font-weight-bold">@{user.displayName}</span>
                    </td>
                    <td>
                      <span>{user.role}</span>
                    </td>
                    <td>
                      <div className="float-right">
                        {userId === user._id ? null : (
                          <button className="btn btn-light float-right">
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => deleteHandler(user._id)}
                            />
                          </button>
                        )}
                        <Link to={`/Admin/edit/${user._id}`} className="float-right btn btn-light">
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>
    </React.Fragment>
  );
};

const stateToPropertyMapper = (state) => ({
  users: state.AdminReducer.users,
  count: state.AdminReducer.count,
  userId: state.LoginReducer.userId,
});

const propertyToDispatchMapper = (dispatch) => ({
  findAllUsers: () => {
    Service.findAllUsers().then((response) => {
      adminFindAllUsers(dispatch, response);
    });
  },
  deleteUser: (id) => {
    Service.deleteUser(id).then((response) => console.log(response));
    Service.deletePostByUserId(id).then((response) => console.log(response));
  },
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(AdminPanel);
