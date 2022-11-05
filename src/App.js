import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {

    axios.get('https://63661f2379b0914b75c9ad6a.mockapi.io/api/employees', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      }
    }).then(res => {
      setUsers(res.data)
      console.log(res.data)
    })

  }, [])

  
  return (
    <React.Fragment>
      <h1>Test call API successfully</h1>
      <h1>Users</h1>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>  
    </React.Fragment>
  )
}

export default App;
