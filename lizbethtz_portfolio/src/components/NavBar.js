import React from "react";
import { Row, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    const { type, date, time, location, image, eventLink } = this.props;
    return (
      <Container>
        <Col>
          <Row>
            <Navbar fixed expand="lg" variant="dark" className="fixed-top nav">
              <Navbar.Brand>HO</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Container>
                  <Nav fill className="m-auto fonts-style">
                    <Button href="/" className="fonts-style navButton">
                      Home
                    </Button>

                    <Button href="/featured" className="navButton">
                      About Me
                    </Button>
                    <Button href="/chessCom" className="navButton">

                    </Button>
                    <Button href="/play" className="navButton">
                      Chess.com
                    </Button>

                    <Button href="/login" className="navButton">
                      Login
                    </Button>
                  </Nav>
                </Container>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default NavBar;
