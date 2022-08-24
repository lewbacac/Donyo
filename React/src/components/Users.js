import React from 'react';
import '../App.css';

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

const url = 'http://apis.chromeye.com:9191/people';

  return (
    <table>

      <tr>
        <th>Avatar</th>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Company</th>
        <th>Department</th>
        <th>Start Date</th>
      </tr>

      {users.map(user => (
      <tr key={user.id}>
        <td><img src={`${url + user.avatar.url}`} alt='alt'></img></td>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.company.name}</td>
        <td>{user.company.department}</td>
        <td>{user.company.startDate}</td>
      </tr>
      ))}

    </table>
  );
};

export default Users;