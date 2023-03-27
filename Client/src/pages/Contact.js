import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

//locally imported
import Layout from "./../components/Layout/Layout";

//imported images
import whyImg from "../assets/images/location.png";



const Contact = () => {
  return (
    <section className="why__choose-us mt-5">
      <Container >
        <Row>
          <Col lg="6" md="6">
            <img src={whyImg} alt="why-tasty-treat" className="w-100" />
          </Col>

          <Col lg="6" md="6">
            <div className="why__tasty-treat">
              <h2 className="tasty__treat-title mb-4">
                Why <span>SnapEats?</span>
              </h2>
              <p className="tasty__treat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, minus. Tempora reprehenderit a corporis velit,
                laboriosam vitae ullam, repellat illo sequi odio esse iste
                fugiat dolor, optio incidunt eligendi deleniti!
              </p>

              <ListGroup className="mt-4">
                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items-center gap-2 ">
                    <i style={{color:"green"}} class="fa-solid fa-circle-check"></i> Fresh and tasty
                    foods
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, voluptatibus.
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                  <i  style={{color:"green"}} class="fa-solid fa-circle-check" ></i> Quality support
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                  <i style={{color:"green"}} class="fa-solid fa-circle-check" ></i>Order from any
                    location{" "}
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
