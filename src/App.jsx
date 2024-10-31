import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './components/CardList'; // Ensure correct import path
import CardDetail from './components/CardDetail'; // Ensure correct import path
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  const cardData = [
    {
      id: 1,
    name : "Event-1",
    imageUrl : '/02.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 2,
    name : "Event-2",
    imageUrl : '/03.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 3,
    name : "Event-3",
    imageUrl : '04.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 4,
    name : "Event-3",
    imageUrl : '05.webp',
    description : 'This is the first Event'
    },
    {
      id: 5,
    name : "Event-3",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
]


const enents = [
  { id: 1, name: "Card 1", description: "Detailed description of Card 1." },
  { id: 2, name: "Card 2", description: "Detailed description of Card 2." },
  { id: 3, name: "Card 3", description: "Detailed description of Card 3." },
  { id: 4, name: "Card 4", description: "Detailed description of Card 4." },
  { id: 5, name: "Card 5", description: "Detailed description of Card 5." },
  // Add more card objects as needed
];

  return (
    <div className="p-4">
      <Navbar/>
      <h1 className="text-3xl text-center mb-6">Card Component with Animation</h1>
      <img src="" alt="" />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/event" element={<CardList cardData={cardData} />} />
        <Route path="/card/:id" element={<CardDetail enents={enents} />} />
      </Routes>
    </div>
  );
};

export default App;
