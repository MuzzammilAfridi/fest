import React from 'react';

const Card = ({ enents }) => {
  return (
    <div className="w-screen flex flex-wrap gap-10 justify-center items-center mx-auto p-8 my-4">
      {enents.map((e, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform  transition duration-300 hover:scale-105 mb-4">
          <img
            className=" w-[90vw] sm:w-[27vw] h-48 object-cover"
            src={e.img} // Assuming `imageUrl` is the property for the image URL
            alt={e.name} // Alt text for accessibility
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{e.name}</h2> {/* Assuming `name` is the title */}
            <p className="text-gray-700 mb-4">
              {e.des} {/* Assuming `description` is a property for the card description */}
            </p>
            <a
              href={e.link} // Assuming `link` is a property for the button link
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
