import React from "react";
import { Link } from "react-router-dom";
import {  Row, Col, ListGroup, ListGroupItem } from "reactstrap";

//import css 
import "../../styles/Footer.css"

//import images
import logo from "../../assets/images/logoo.png";



const Footer = () => {
  return (
    <div className="footer">
      <Row>

        <Col lg="3" md="4" sm="6">
          <div className=" footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5 style={{ color: "black" }}>SnapEats</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt pariatur accusamus
            </p>
          </div>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Delivery Time</h5>
          <ListGroup className="deliver__time-list">
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Friday - Saturday</span>
              <p>Off day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Contact</h5>
          <ListGroup className="deliver__time-list">
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <p>Location: Chennai Marina 6200001 India</p>
            </ListGroupItem>
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Phone: 123456789</span>
            </ListGroupItem>
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Email: snapeats@gmail.com</span>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 style={{ color: "black" }} className="footer__title">Newsletter</h5>
          <p style={{ color: "black" }}>Subscribe our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <span >
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg="6" md="6">
          <p className="copyright__text">
            Copyright - 2022, website made by Mohamed Asfer Ali. All Rights
            Reserved.
          </p>
        </Col>
        <Col lg="6" md="6">
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p style={{ color: "black" }} className="m-0">Follow: </p>
            <span>
              {" "}
              <Link to="">
                <i class="fa-brands fa-instagram"></i>
              </Link>{" "}
            </span>
            <span>
              <Link to="">
                <i class="fa-brands fa-github"></i>
              </Link>
            </span>
            <span>
              {" "}
              <Link to="">
                <i class="fa-brands fa-facebook"></i>
              </Link>{" "}
            </span>
            <span>
              {" "}
              <Link to="">
                <i class="fa-brands fa-linkedin"></i>
              </Link>{" "}
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
