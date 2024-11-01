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
    name : "AIsthetica",
    imageUrl : '/02.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 2,
    name : "Bytes Of Knowledge",
    imageUrl : '/03.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 3,
    name : "Bits & Brains  ",
    imageUrl : '04.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 4,
    name : "Script Sprint:",
    imageUrl : '05.webp',
    description : 'This is the first Event'
    },
    {
      id: 5,
    name : "Cipher Challenge",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 6,
    name : "Break The Query",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 7,
    name : "The Code Crusade - Hackathon ",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 8,
    name : "Code Red",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 9,
    name : "Web Craft ",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 10,
    name : "CKey Clash ",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 11,
    name : "Treasure Hunt",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 12,
    name : "CE-Sport (Pc/Mobile)",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 13,
    name : "Spell Bee",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 14,
    name : "The Click Chronicles",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    {
      id: 15,
    name : "Twirl & Whirl (Dance)",
    imageUrl : '06.jpeg',
    description : 'This is the first Event'
    },
    
]


const enents = [
  { id: 1,
    name: "Card 1", 
    description: "Unleash your creativity with AIsthetica, the AI art generation competition where art and technology blend! Create stunning visuals using AI tools and compete for a chance to showcase your visionary artwork.",
    list : ["All entries must be generated using AI tools, with original prompts.",
      "Plagiarized or re-used prompts or images from previous competitions will be disqualified.",
      "Artworks must align with the provided theme.",
      "Submissions will be judged on creativity, theme relevance, and overall visual impact."
    ],
     cname:"Ali",
    contact:"98765432"
     },
  { id: 2, name: "Card 2", description: "Bytes of Knowledge challenges quick thinking and technical insight in this extemporaneous speaking event! Participants draw on their tech expertise to speak impromptu on diverse topics in the world of technology.",
    list : ["Each participant will have 2 minutes to prepare once a topic is given and 5 minutes to present their ideas.",
    "Speakers must stay on topic and avoid excessive generalizations.",
    "Judging will focus on relevance, technical depth, and clarity of expression."],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 3, name: "Card 3", description: "Bits & Brains is the ultimate technical quiz challenge, where participants test their knowledge across various fields in technology. Compete in rounds that push your understanding, speed, and technical expertise to the limit!",
    list : ["Participants may compete individually or in teams of up to two. No changes to teams are allowed once the quiz begins.",
      "Each question has a strict time limit for answering. Late responses won’t be accepted, so speed and accuracy are essential.",
    "Points are awarded for each correct answer, with bonus points for speed. Top-scoring individuals or teams advance to subsequent rounds."],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 4, name: "Card 4", description: "Join Script Sprint, the ultimate coding challenge where skills meet strategy! Tackle complex problems, test your limits, and compete for glory in this thrilling battle of code.",
    list:["Time limit is fixed ",
      "Each problem includes hidden test cases that must be passed for full points.",
      "Partial solutions earn partial points based on completed cases.",
      "Decisions made by the judges and organizers are final."
    ],
     cname:"Ali",
    contact:"98765432"
  },
  { id: 5, name: "Card 5", description: "Cipher Challenge is a thrilling debugging competition where participants dive into complex code, locate hidden bugs, and apply their problem-solving skills to achieve the correct output. Test your analytical thinking in this battle against the bugs!",
    list:["Points are awarded based on both accuracy in finding the bug and the efficiency of the solution. Fast and effective debugging is key!",
      "Participants may only use the provided environment and tools; external software or resources are not permitted.",
      "Participants can only modify a limited number of lines to fix bugs in the code. Excessive alterations may lead to disqualification."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 6, name: "Card 6", description: "Break The Query is an SQL challenge where participants showcase their database skills by solving complex SQL queries. Put your query-writing expertise to the test and solve real-world problems efficiently!",
    list:["Solutions must meet the problem requirements exactly. Points are awarded based on accuracy and completeness of each query.",
      "Each query must be solved within the given time.",
      "Participants must use the provided SQL environment; use of external resources or databases is prohibited."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 7, name: "Card 7", description: "Unleash your creativity, solve real-world problems, and push the limits of innovation. Join forces with like-minded creators and turn ideas into impact. This is more than a challenge—it's a journey to transform the future!",
    list:[" Participants can work solo or in teams of up to four. Team members cannot be changed once the event starts.",
      "All work must be original and created during the hackathon. Pre-existing code or projects are not allowed, except for open-source libraries."
    ],
     cname:"Ali",
    contact:"98765432"
    
   },
  { id: 8, name: "Card 8", description: "Engage in a high-stakes debate where tech minds clash and ideas ignite! Code Red is the arena to defend your stance and challenge the opposition.",
    list:["TDebates will be held in teams of two, with each team representing opposing sides of the assigned topic.Debates will be held in teams of two, with each team representing opposing sides of the assigned topic.",
      "Each team is allocated specific time slots for opening statements, rebuttals, and closing arguments. Exceeding the time limit will lead to point deductions.",
      "Participants must maintain respect toward opponents and judges. Personal attacks or disruptive behavior will result in disqualification."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 9, name: "Card 9", description: "Web Craft challenges participants to create visually stunning and user-friendly web interfaces. Showcase your design skills, responsiveness, and creativity in this frontend web development competition!",
    list:["All designs and code must be created from scratch during the competition. Use of templates or pre-made themes is not allowed.",
      "Time limit is of 4 hours, Late submissions will not be accepted",
      "Only one submission per participant or team of 2 is permitted."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 10, name: "Card 10", description: "Key Clash is the ultimate typing speed and accuracy showdown! Compete to hit top speeds while maintaining precision, and see who can reign supreme on the keyboard",
    list:["Points are based on a combination of typing speed and accuracy. Errors will result in penalties, so precision is key.",
      " Each round has a set time limit. Participants must complete as much text as possible within this time.",
      "All participants will use the provided devices and software to ensure a fair playing field."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 11, name: "Card 11", description: "Embark on an exhilarating Treasure Hunt, where clues lead to hidden secrets, and every solved puzzle brings you closer to the ultimate prize. Team up, think fast, and let the adventure begin!",
    list:["Embark on an exhilarating Treasure Hunt, where clues lead to hidden secrets, and every solved puzzle brings you closer to the ultimate prize. Team up, think fast, and let the adventure begin!",
      "Clues must be solved in order. Skipping clues or using unauthorized shortcuts will result in disqualification.",
      "Teams must complete the hunt within the allotted time. Collaboration between teams or using external help is prohibited."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 12, name: "E-Sport (Pc/Mobile)", description: "E-Sport brings gamers together to compete in high-stakes PC and mobile gaming! Show off your skills, strategy, and teamwork in this action-packed tournament for the ultimate champion title",
    list:["Participants must register for either the PC or mobile division. Switching platforms after registration is not allowed.",
      "Any form of cheating, including the use of unauthorized software, will lead to immediate disqualification.",
      "Each match must be completed within the designated time frame. Failing to show up on time will result in a forfeit."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 13, name: "Spell Bee", description: "Showcase your vocabulary and precision in the Spell Bee! Compete against fellow spellers to tackle challenging words, one letter at a time, and claim the title of spelling champion",
    list:["Participants will compete in elimination rounds, with progressively challenging words in each round.",
      "Each participant has a fixed time to spell each word. Exceeding the time limit or making an error will result in elimination.",
      "Participants may ask for the word’s pronunciation, origin, or usage in a sentence but are limited to one repeat per word."
    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 14, name: "The Click Chronicles", description: "The Click Chronicles is a captivating photography challenge where participants capture the world through their unique lens. From nature to urban scenes, tell your story and let your photos speak!",
    list:["All photos must be original and taken by the participant. No previously published photos or stock images are allowed.",
      "Photos must align with the event’s theme, and submissions should include a brief description explaining how they reflect the theme.",
      "Basic photo editing (e.g., color correction, cropping) is allowed, but excessive manipulation or use of filters that alter the essence of the image is prohibited.",
      "All the necessary requirement should be brought by yourself."

    ],
     cname:"Ali",
    contact:"98765432"
   },
  { id: 15, name: "Twirl & Whirl (Dance)", description: "Twirl & Whirl celebrates rhythm, grace, and creativity in dance! Showcase your moves and captivate the audience with performances that blend style, energy, and passion.",
    list:["Each solo or group performance should be within the designated time limit. Exceeding the limit may lead to point deductions.",
      "Choreography must be original or adapted uniquely by the performers. Plagiarizing famous routines without creative input is not allowed.",
      "Music tracks must be submitted in advance and checked for approval. Explicit content or inappropriate themes are prohibited."
    ],
    cname:"Ali",
    contact:"98765432"
  }
  
    
   
  // Add more card objects as needed
];

  return (
    <div className="">
      <Navbar/>
   
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
