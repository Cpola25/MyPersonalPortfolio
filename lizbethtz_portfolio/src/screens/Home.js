import React from "react";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import banner1 from "../images/Banner1.png";
class Home extends React.Component {
  render() {
    const { type, date, time, location, image, eventLink } = this.props;
    return (
      <Container style={{ width: "100%" }} className="">
        <Row
          className="sage1"
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundSize: "cover", // You can customize background properties here
            height: "950px",
            backgroundPosition: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
           <h1>Hi I'm Lizbeth Trujill</h1>
        </Row>
        <Row className="white">H</Row>
      </Container>
    );
  }
}

export default Home;
