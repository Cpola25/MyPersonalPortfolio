import React from "react";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import banner1 from "../images/Banner1.png";

class RoadMap extends React.Component {
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
            <h1>Technical Skills</h1>
            <h1>Work Experience</h1>
            <h1>Software Engineering Applications</h1>
            <h1>Eduction</h1>
        </Row>
      </Container>
    );
  }
}

export default RoadMap;
