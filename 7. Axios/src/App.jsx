import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

const BASE_URL = "http://localhost:3005";

function App() {

  //GET
  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users?id=${userId}`);
    console.log(response.data);
  }

  //POST
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  }

  //PUT
  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }

  //DELETE
  const deleteUserById = async userId => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  }

  useEffect(() => {
    // getUserById(2);

    //   createUser({
    //     "id" : 2,
    //   "username" : "Şeyma",
    //   "password" : "543sdf123"
    // });

    // updateUser(2,{
    //   "username" : "Kardelen",
    //   "password" : "321321"
    // });

    deleteUserById(2);

    getAllUsers();

  }, [])

  return (
    <div>
    </div>
  )
}

export default App
