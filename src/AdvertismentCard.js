import React from "react";
import { Container, Row, Col, Card, logo, Button } from "react-bootstrap";
import "./Advertisment.css";

function AdvertismentCard(props) {
  const { logo, adData } = props;
  const showAlert = () => {
    alert(adData.contact);
  };

  return (
    <div className="row">
      <Container>
        <Row>
          <Col className="col-12 text-center py-2"></Col>
        </Row>
        <Row>
          <Col lg="3" md="6">
            <Card
              style={{ width: "22rem", height: "35rem", marginBottom: "2rem" }}
            >
              {/* //<Card.Img
                variant="top"
                style={{ border: "2px solid #000", borderRadius: "10px" }}
                src={logo}
                height="50px"
              /> */}
              <img
                style={{ border: "2px solid #000", borderRadius: "10px" }}
                className="card-img-top"
                src={adData.image}
                alt="No image"
              />

              <Card.Body>
                <Card.Title>{adData.title} </Card.Title>
                <br />
                <Card.Text>{adData.description}</Card.Text>
                <Card.Text>{adData.contact}</Card.Text>

                <div className="container-fluid">
                  <Button
                    className="detBtn"
                    style={{
                      border: "1px solid #000",
                      boxShadow: "10px",
                      borderRadius: "10px",
                      width: "10rem",
                    }}
                    variant="primary"
                    onClick={showAlert}
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdvertismentCard;
