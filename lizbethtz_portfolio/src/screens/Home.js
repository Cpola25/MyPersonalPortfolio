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
      <Container style={{ width: "100%", color: "white" }} className="">
        <Row
          className="sage1"
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundSize: "cover",
            height: "950px",
            backgroundPosition: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "relative", // Add position relative to the row
          }}
        >
          <h1 style={{ position: "absolute", top: "25%" }}>Lizbeth Trujillo</h1>
          <h2 style={{ top: "30%", position: "absolute" }}>
            Software Developer | Artist | Entreprenuer
          </h2>
          <h3 style={{position: "absolute", top: "35%"}}>Hello</h3>
        </Row>
      </Container>
    );
  }
}

export default Home;
