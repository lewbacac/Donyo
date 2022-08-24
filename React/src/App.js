import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [queryUrl, setUrl] = useState();
  const [usersPerPage, setValue] = useState();

  const handleSelect = (usersPerPage) => {
    setValue(usersPerPage);
  }

  const handleInput = (stringInput) => {
    setUrl(stringInput);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await axios.get(`http://apis.chromeye.com:9191/people`);
      setUsers(res.data);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>

      <h1 className='text-primary mb-3'>Users List</h1>

      <div className='container d-flex my-3 justify-content-between'>

      <DropdownButton 
        alignRight
        title="Dropdown right"
        id="dropdown-menu-align-right" 
        onSelect={handleSelect}
        >
        <Dropdown.Item eventKey="1">--1--</Dropdown.Item>
        <Dropdown.Item eventKey="3">--3--</Dropdown.Item>
        <Dropdown.Item eventKey="5">--5--</Dropdown.Item>
        <Dropdown.Item eventKey="9">--All--</Dropdown.Item>
      </DropdownButton>

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />

      <input placeholder='Search by name ...' onInput={handleInput} />
      </div>

      <Users users={currentUsers} loading={loading} />
    </div>
  );
};

export default App;