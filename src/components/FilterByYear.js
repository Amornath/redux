import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  
const [searchText, setSearchText]=useState("");
 
 
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div >
      <label>Search:</label>
      <input type="text" onChange={(event) =>setSearchText(event.target.value)} />
      </div>
  
      <div>
          {console.log(userData)}
        {userData &&
          userData.users &&
          userData.users.slice(0, 50).filter(user => user.launch_year.startsWith("2006")).map(user => 
              <div>
              <p>{user.mission_name}</p>
              <img src={user.links.mission_patch} />
              </div>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user,
    // filteredItems: state.user.users.filter((item) => item.startsWith("Ra"))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)

{/* <div>
  {names.filter(name => name.includes('J')).map(filteredName => (
    <li>
      {filteredName}
    </li>
  ))}
</div> */}
