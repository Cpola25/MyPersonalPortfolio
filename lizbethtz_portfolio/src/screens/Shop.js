import React from "react";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import banner1 from "../images/Banner1.png";

class Shop extends React.Component {
  render() {
    const { type, date, time, location, image, eventLink } = this.props;
    return (
      <Container style={{ width: "100%", color: "white" }} className="">
        <Row
          className="sage1"
          style={{
            backgroundSize: "cover",
            height: "950px",
            backgroundPosition: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "relative", // Add position relative to the row
          }}
        >
        </Row>
      </Container>
    );
  }
}

export default Shop;
