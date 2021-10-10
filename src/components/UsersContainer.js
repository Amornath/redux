import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchitems } from "../redux";
import { Link } from "react-router-dom";
import Paginate from "./Paginate";
import { Row, Card, Col, Container } from "react-bootstrap";

function UsersContainer({ rocketData, fetchitems }) {
  useEffect(() => {
    fetchitems();
  }, []);

  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 20;
  const totalPosts = rocketData.items.length;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = rocketData.items.slice(indexOfFirstPost, indexOfLastPost);

  return rocketData.loading ? (
    <h2>Loading</h2>
  ) : rocketData.error ? (
    <h2>{rocketData.error}</h2>
  ) : (
    <div>
      <h2>Rocket List</h2>

      <div>
        <label>Search:</label>
        <input
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      <Container>
        <Row>
          {console.log(rocketData)}
          {rocketData &&
            rocketData.items &&
            filterPosts
              .filter((item) => item.mission_name.startsWith(searchText))
              .map((item) => (
                <Col md={3} className="mt-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={item.links.mission_patch_small}
                    />
                    <Card.Body>
                      <Card.Title>{item.rocket.rocket_name}</Card.Title>
                      <Card.Text>{item.launch_date_utc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          {totalPosts > postPerPage && (
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalPosts}
              postPerPage={postPerPage}
            />
          )}
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rocketData: state.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchitems: () => dispatch(fetchitems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
