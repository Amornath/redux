import Button from "@restart/ui/esm/Button";
import React from "react";
import { ButtonToolbar, ButtonGroup, Container } from "react-bootstrap";

const Paginate = ({ currentPage, setCurrentPage, totalPosts, postPerPage }) => {
  const totalPages = Math.ceil(totalPosts / postPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  return (
    <Container>
      <ButtonToolbar aria-label="" className="ml-5">
        <ButtonGroup className="me-2" aria-label="">
          <Button
            variant="primary"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &laquo;
          </Button>
        </ButtonGroup>
        {pages.map((page) => (
          <ButtonGroup
            className="me-2"
            aria-label=""
            key={page}
            className={`page-item ${page === currentPage && `active`}`}
            onClick={() => setCurrentPage(page)}
          >
            <Button>{page}</Button>
          </ButtonGroup>
        ))}
        <ButtonGroup className="me-2" aria-label="">
          <Button onClick={() => setCurrentPage(currentPage + 1)}>
            &raquo;
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  );
};

export default Paginate;
