import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = ({ enents }) => {
  const { id } = useParams();

  // Find the card with the matching ID
  const card = enents.find((e) => e.id === parseInt(id));

  // If no matching card is found, display an error message
  if (!card) {
    return <p>Card not found!</p>;
  }

  return (
    <div className="flex flex-col  sm:flex-row items-center w-[95vw] my-6 bg-white justify-between mx-auto p-6">
    <div className="max-w-lg sm:ml ">
      <h2 className="text-3xl font-bold mb-4">{card.name}</h2>
      <p className="text-gray-700">{card.description}</p>
      
      <h3 className="text-xl font-semibold mt-4">Rules & Regulations</h3>
      <ul className="list-disc list-inside">
        {/* Map through the 'list' array in the selected card */}
        {card.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className='text-lg mt-4 font-semibold mb-2'>Coordinators</p>
      <p><span className='font-medium'>Name :</span> {card.cname}</p>
      <p><span className='font-medium'>Contact :</span> {card.contact}</p>
      <p></p>
    </div>
    <img  className='w-[400px] mt-10' src="../02.jpeg" alt="img" />
    </div>
  );
};

export default CardDetail;
