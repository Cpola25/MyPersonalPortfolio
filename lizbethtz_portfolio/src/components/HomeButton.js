import React from "react";
import { Container, Row, Col, Button, Navbar, Image } from "react-bootstrap";
class HomeButton extends React.Component {
  render() {
    const { width, height, image, top, link, marginLeft } = this.props;
    return (
      <Button
        href={link}
        className="home_button"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center", // Center the background image
          height: height,
          width: width,
          top: top,
          marginLeft: marginLeft,
        }}
      />
    );
  }
}

export default HomeButton;

