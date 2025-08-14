// src/projects.js
import Project1 from "./assets/Project_1.1.png";
import Project2 from "./assets/Project_2.1.png";
import Project3 from "./assets/Project_3.1.png";

export const projects = [
  {
    id: "vehicle-rental-system",
    title: "Vehicle Rental System",
    description: "MERN stack platform to manage vehicle rentals efficiently.",
    image: Project1,
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Javascript",
      "CSS",
      "HTML",
    ],
    overview:
      "The VEHICLE RENTAL SYSTEM USING REACTJS & MONGODB project is an online platform for renting vehicles, created by K Karthik Narayan Pai during an internship at Accelerlab Solutions Pvt Ltd. The system was built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables customers to search, book, and pay for vehicles online. The system uses JWT tokens for secure authentication and Razorpay for online payments. The frontend was styled with Tailwind CSS and the system was deployed using Netlify, AWS, and Render.",
    challenges: [
      "Tested APIs using Postman and monitored database interactions with MongoDB Compass.",
      "Gained experience in an agile environment with Git and GitHub for version control.",
      "Implemented secure login using bcrypt for password hashing and JWT for authentication.",
    ],
    futureScope: [
      "Incorporate AI-driven recommendations to suggest suitable vehicles to users.",
      "Integrate blockchain technology to make transactions more secure and transparent.",
      "Develop a mobile application to expand reach and provide easier access to services.",
    ],
  },
  {
    id: "ai-interview-chatbot",
    title: "AI Based Interview ChatBot",
    description:
      "The AI-Driven Interviewer automates interviews using AI, making recruitment faster and fairer.",
    image: Project2,
    tech: ["HTML", "CSS", "Javascript", "NLP", "Flask"],
    overview:
      "The AI-Based Interview Chatbot is designed to simplify recruitment using Natural Language Processing (NLP) and Machine Learning (ML). It automates candidate assessments by analyzing answers in real-time and generating follow-up questions. Built with Flask, it offers an easy-to-use interface for both candidates and recruiters. The system saves time, reduces bias, and provides a personalized interview experience. Candidates receive real-time feedback, while recruiters benefit from increased efficiency and better-quality hiring decisions.",
    challenges: [
      "Traditional interviews are prone to interviewer bias, leading to inconsistent evaluations.",
      "Scaling interviews for many candidates is difficult, limiting recruitment efficiency.",
      "Conventional methods like BEI are time-consuming and require significant resources.",
    ],
    futureScope: [
      "Improve the chatbot’s accuracy to provide more reliable candidate assessments.",
      "Enhance scalability to handle larger candidate pools smoothly.",
      "Add AI-driven suggestions, analytics, and mobile access to improve usability and reach.",
    ],
  },
  {
    id: "cybersecurity-ctf-game",
    title: "Cybersecurity - Capture The Flag Game",
    description:
      "CTF is a game to capture flags, either physically or digitally.",
    image: Project3,
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "Steganography",
      "Cryptography",
      "Web Exploitation",
    ],
    overview:
      "The report describes a Capture the Flag (CTF) game designed to foster cybersecurity awareness and skills. The game includes five main challenges: a Web-Based Quiz, a Memory Game, Digital Forensics, a Password Cracker, and a Programming Error challenge. The game was developed using front-end technologies like HTML, CSS, and JavaScript, and back-end technologies like PHP and SQL.",
    challenges: [
      "Participants must answer at least 4 of 6 quiz questions correctly to get the flag.",
      "Find hidden flags in images (steganography) or notepad files.",
      "Crack one correct password from 100 options using provided tools.",
    ],
    futureScope: [
      "Helps participants improve cybersecurity knowledge and problem-solving.",
      "Encourages teamwork in a dynamic environment.",
      "Offers an engaging platform to understand cybersecurity concepts.",
    ],
  },
];
