import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {

  const user = useSelector(state => state.user) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
        <h2>List of users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length ? (
          <ul>
            {user.users.map(user => (
              <li key={user.id}>{user}</li>
            ))}
          </ul>
        ): null}
    </>
  )
}

export default UserView