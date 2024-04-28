import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import AdvertismentCard from "./AdvertismentCard";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const links = ["Login", "Sign Up", "About"];
  const logo = "logo.jpg";
  const PageTitle = "MarketPlace";

  const advertisementsData = [
    {
      title: "Ad 1",
      description: "This is the first advertisement.",
      image: "https://via.placeholder.com/150",
      contact: "contact1@example.com",
    },
    {
      title: "Ad 2",
      description: "This is the second advertisement.",
      image: "https://via.placeholder.com/150",
      contact: "contact2@example.com",
    },
    {
      title: "Ad 3",
      description: "This is the third advertisement.",
      image: "https://via.placeholder.com/150",
      contact: "contact3@example.com",
    },
    {
      title: "Ad 4",
      description: "This is the fourth advertisement.",
      image: "https://via.placeholder.com/150",
      contact: "contact4@example.com",
    },
    {
      title: "Ad 5",
      description: "This is the fifth advertisement.",
      image: "https://via.placeholder.com/150",
      contact: "contact5@example.com",
    },
    {
      title: "Ad 6",
      description: "This is the sixth advertisement.",
      image: "https://via.placeholder.com/150",
      contact: "contact6@example.com",
    },
  ];

  return (
    <div className="container-fluid">
      <Nav links={links} logo={logo} />
      <Header PageTitle={PageTitle} />
      <br />

      <h2 className="container">Advertisement List</h2>
      <Container>
        <div className="advLine">
          {advertisementsData.map((ad, index) => (
            <AdvertismentCard key={index} logo={logo} adData={ad} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
