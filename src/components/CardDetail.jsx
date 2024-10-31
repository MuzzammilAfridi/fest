import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = ({enents}) => {
  const { id } = useParams();

  // Example data - in a real application, you would fetch this from an API or state
//   const enents = [
//     { id: 1, name: "Card 1", description: "Detailed description of Card 1." },
//     { id: 2, name: "Card 2", description: "Detailed description of Card 2." },
//     { id: 3, name: "Card 3", description: "Detailed description of Card 3." },
//     { id: 4, name: "Card 4", description: "Detailed description of Card 4." },
//     // Add more card objects as needed
//   ];

  const card = enents.find(e => e.id === parseInt(id));

  if (!card) {
    return <p>Card not found!</p>;
  }

  return (
    <div className="max-w-lg mx-auto my-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{card.name}</h2>
      <p className="text-gray-700">{card.description}</p>
    </div>
  );
};

export default CardDetail;
