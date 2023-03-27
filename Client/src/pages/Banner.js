import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

// locally import
import Layout from "../components/Layout/Layout";
import "../styles/GlobalTop.css"

// imported images
import heroImg from "../assets/images/hero.png";


export default function Banner() {
  return (
    <Container className="about">
      <Row>
        <Col lg="6" md="6">
          <div className="hero__content  ">
            <h5 className="mb-3">Easy way to make an order</h5>
            <h1 className="mb-4 hero__title">
              <span style={{color:"#df2020"}}>HUNGRY?</span> Just wait <br /> food at
              <span> your door</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </p>

            <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
              <p className=" d-flex align-items-center gap-2 ">
                <span style={{color:"#df2020"}} className="shipping__icon">
                <i class="fa-solid fa-truck-fast"></i>
                </span>{" "}
                No shipping charge
              </p>

              <p className=" d-flex align-items-center gap-2 ">
                <span style={{color:"#df2020"}} className="shipping__icon">
                <i class="fa-solid fa-file-shield"></i>
                </span>{" "}
                100% secure checkout
              </p>
            </div>
          </div>
        </Col>
        <Col lg="6" md="6">
          <div className="hero__img">
            <img src={heroImg} alt="hero-img" className="w-100" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
