/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Container, Row} from "react-bootstrap";
import "./footer.scss";

function Footer() {
  return (
    <footer className="text-light ftr">
      <Container className="cntr">
        <Row className="ftr-row">
          <article>
            <p className="ftr-text text-center">by Jayant Singh &copy; 2024</p>
          </article>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
