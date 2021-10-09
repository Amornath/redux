import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import { Link } from "react-router-dom";
import Paginate from './Paginate';
import {Row, Card, Col, CardGroup, Container } from 'react-bootstrap';


function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  
const [searchText, setSearchText]=useState("");
const [currentPage, setCurrentPage] = useState(1);

const postPerPage = 10;
const totalPosts = userData.users.length;
const numberOfCards =12

const indexOfLastPost = currentPage * postPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage;
const filterPosts = userData.users.slice(indexOfFirstPost, indexOfLastPost);
 
 
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <Link to="/year">Last Year</Link>
      <div >
      <label>Search:</label>
      <input type="text" onChange={(event) =>setSearchText(event.target.value)} />
      </div>
  
      <div>
          {console.log(userData)}
        {userData &&
          userData.users &&
          filterPosts.filter(user => user.mission_name.startsWith(searchText)).map(user => 
              <div>
                <Container >
                <Card style={{ width: '18rem' }}>
                  <Row className='no-gutters'>
                  <Col md={5} lg={5}  >
                  <Card.Img variant="top" src={user.links.mission_patch_small} />
                  </Col>
                  <Col>
                  <Card.Body>
                    <Card.Title>{user.mission_name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                  </Col>
                  </Row>
                </Card>
        </Container>
              {/* <p>{user.mission_name}</p>
              <img src={user.links.mission_patch_small} /> */}
              </div>
              )}
              {totalPosts > postPerPage && (
						<Paginate
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPosts={totalPosts}
							postPerPage={postPerPage}
						/>
					)}
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

// =
