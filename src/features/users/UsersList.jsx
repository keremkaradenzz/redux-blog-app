import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from './usersSlice'

const UsersList = () => {
    const users = useSelector(selectAllUsers)
    const renderedUsers = users.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))
    return (
        <div>
             <section>
      <h2>Users</h2>

      <ul>{renderedUsers}</ul>
    </section>
        </div>
    )
}

export default UsersList



