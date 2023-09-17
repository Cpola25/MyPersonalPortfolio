import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import banner1 from "../images/Banner2.png";
import HomeButton from "../components/HomeButton";
import { LeftButtonData, RightButtonData } from "../constants/webData";
import { Spinner } from "react-bootstrap";
import { PropagateLoader, RingLoader } from "react-spinners";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []);

  return (
    <Container
      fluid
      className="black "
      style={{
        backgroundSize: "cover",
        height: "1000px",
        backgroundPosition: "center",
      }}
    >
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", 
          }}
        >
          <PropagateLoader color="#728f61" size={30} />
        </div>
      ) : (
        <div
          style={{
            color: "white",
            backgroundImage: `url(${banner1})`,
            backgroundSize: "cover",
            height: "1000px",
            backgroundPosition: "center",
          }}
        >
          <div style={{ float: "left" }}>
            {LeftButtonData.map((button, index) => (
              <HomeButton key={index} {...button} />
            ))}
          </div>

          <div
            className="centerContent"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="text-center"
              style={{ marginTop: "10%", textAlign: "center" }}
            >
              <div>
                <h1
                  style={{
                    fontFamily: "Shrikhand, cursive",
                    fontSize: "5em",
                    marginBottom: "0px",
                    MaxWidth: "680px"
                  }}
                >
                  Lizbeth Trujillo
                </h1>
                <div
                  style={{
                    fontFamily: "Short Stack, cursive",
                    fontSize: "1.5em",
                    marginBottom: "5%",
                  }}
                >
                  Software Developer | Artist | Entrepreneur
                </div>
                {/* Buttons on the left */}
                <div className="text-center">
                  <Button>H</Button>
                  <Button>H</Button>
                  <Button>H</Button>
                </div>
              </div>
            </div>

            <div style={{ float: "right", maxWidth: "500px" }}>
              {/* Additional content or components */}
              {RightButtonData.map((button, index) => (
                 <HomeButton
                 key={index}
                 {...button}
                 className="right-button" // Add a custom class name
               />
              ))}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Home;
