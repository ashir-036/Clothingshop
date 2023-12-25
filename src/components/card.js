import React, { useContext, useEffect } from "react";
import DataContext from "./DataContext"; // Adjust the path
import BootstrapCard from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Card({ data }) {
  return (
    <BootstrapCard style={{ width: "250px", margin: "20px 0px" }}>
      <BootstrapCard.Img
        variant="top"
        src={data.source}
        style={{ width: "240px", height: "300px" }}
      />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{data.title}</BootstrapCard.Title>
        <BootstrapCard.Subtitle className="mb-2 text-muted">
          {data.subtitle}
        </BootstrapCard.Subtitle>
        <BootstrapCard.Text>{data.text}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

function Cards() {
  const data = useContext(DataContext);

  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    rows.push(data.slice(i, i + 4));
  }

  return (
    <>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} style={{ marginBottom: "20px" }}>
          {row.map((cardData) => (
            <Col key={cardData.id} xs={6} md={4} lg={3}>
              <Card key={cardData.id} data={cardData} />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}

export default Cards;
