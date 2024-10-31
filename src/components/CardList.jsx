import React from 'react';
import { Link } from 'react-router-dom';

const CardList = ({cardData}) => {
//   const enents = [
//     {
      
//       name: "Card 1",
//       : "https://source.unsplash.com/random/400x300?sig=1",
//       : "This is the description for Card 1.",
//     },
//     {
//       id: 2,
//       name: "Card 2",
//       imageUrl: "https://source.unsplash.com/random/400x300?sig=2",
//       description: "This is the description for Card 2.",
//     },
//     // Add more card objects as needed
//   ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((e) => (
        <div key={e.id} className="max-w-sm mx-2 my-4">
          <Link to={`/card/${e.id}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                className="w-full h-48 object-cover"
                src={e.imageUrl}
                alt={e.name}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{e.name}</h2>
                <p className="text-gray-700 mb-4">{e.description}</p>
                <span className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Learn More</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardList;
