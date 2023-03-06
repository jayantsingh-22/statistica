// import React from "react";
// import "./footer.scss";

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-wrapper">
//         <nav>
//           <ul className="tags">
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#publication">Publication</a>
//             </li>
//             <li>
//               <a href="#careers">Careers</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="cntr">
        <Row className="ftr-row">
          <Col className="col-3">
            <h6 className="ftr-head">Contact</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#links">Email</a>
              </li>
              <li>
                <a href="#links">Phone</a>
              </li>
            </ul>
          </Col>
          <Col className="col-3">
            <h6 className="ftr-head">About</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#links">Our Story</a>
              </li>
              <li>
                <a href="#links">Team</a>
              </li>
            </ul>
          </Col>
          <Col className="col-3">
            <h6 className="ftr-head">Publication</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#links">Blog</a>
              </li>
              <li>
                <a href="#links">Whitepapers</a>
              </li>
            </ul>
          </Col>
          <Col className="col-3">
            <h6 className="ftr-head">Careers</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#links">Jobs</a>
              </li>
              <li>
                <a href="#links">Culture</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
