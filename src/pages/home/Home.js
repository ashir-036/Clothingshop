import React, { useEffect } from "react";
import Cards from "../../components/card";
import DataContext from "../../components/DataContext";
import Container from "react-bootstrap/Container";

function Home() {
  const data = [
    {
      id: 1,
      source: "./images/Casual1.jpg",
      title: "Casual Shirt",
      subtitle: "Price: $15.00",
      text: "Lorem ipsum ",
    },
    {
      id: 2,
      source: "./images/DressShirt1.jpg",
      title: "Dress Shirt",
      subtitle: "Price: $20.00",
      text: "Lorem ipsum ",
    },
    {
      id: 3,
      source: "./images/DressShirt2.jpg",
      title: "Black Half-Sleeves",
      subtitle: "Price: $25.00",
      text: "Lorem ipsum ",
    },
    {
      id: 4,
      source: "./images/blackhoodie.jpg",
      title: "Black Hoodie",
      subtitle: "Price: $30.00",
      text: "Lorem ipsum ",
    },
  
 
    {
      id: 5,
      source: "./images/Jeans2.jpg",
      title: "Ripped Jeans",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },
    {
      id: 6,
      source: "./images/Jeans3.jpg",
      title: "Carrot Fit ",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },


    {
      id: 7,
      source: "./images/Tee2.webp",
      title: "Tribend Tshir",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },
    {
      id: 8,
      source: "./images/mens-tshirt.jpg",
      title: "White-Tshirt",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },
    {
      id: 9,
      source: "./images/blacktshirt.jpg",
      title: "Black-Tshirt",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },
    {
      id: 10,
      source: "./images/Royalblue.jpg",
      title: "Blue-Tshirt",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },
    {
      id: 11,
      source: "./images/maroon.jpg",
      title: "Maroon-Tshirt",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },
    {
      id: 12,
      source: "./images/orange.jpg",
      title: "Orange-Tshirt",
      subtitle: "Price: $35.00",
      text: "Lorem ipsum ",
    },






  
  ];

  return (
    <DataContext.Provider value={data}>
      <Container>
        <Cards />
      </Container>
    </DataContext.Provider>
  );
}

export default Home;
