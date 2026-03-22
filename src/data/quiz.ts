export interface Question {
  id: number;
  text: string;
  image: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Which planet is known as the 'Red Planet'?",
    image: "https://placehold.co/600x400/ef4444/ffffff?text=Planet+1",
    options: ["Mars", "Venus", "Jupiter"],
    correctAnswer: 0
  },
  {
    id: 2,
    text: "What is the capital city of France?",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=City+2",
    options: ["Berlin", "Paris", "London"],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Which animal is the largest mammal on Earth?",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Animal+3",
    options: ["Elephant", "Blue Whale", "Giraffe"],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Who painted the Mona Lisa?",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Art+4",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
    correctAnswer: 2
  },
  {
    id: 5,
    text: "What is the largest ocean in the world?",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=Ocean+5",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    correctAnswer: 2
  },
  {
    id: 6,
    text: "How many continents are there on Earth?",
    image: "https://placehold.co/600x400/ec4899/ffffff?text=World+6",
    options: ["5", "6", "7"],
    correctAnswer: 2
  },
  {
    id: 7,
    text: "Which element has the chemical symbol 'O'?",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Element+7",
    options: ["Oxygen", "Gold", "Osmium"],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "What is the square root of 64?",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=Math+8",
    options: ["6", "7", "8"],
    correctAnswer: 2
  },
  {
    id: 9,
    text: "Who was the first person to walk on the moon?",
    image: "https://placehold.co/600x400/f43f5e/ffffff?text=Moon+9",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin"],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "Which language is primarily used for web styling?",
    image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Code+10",
    options: ["HTML", "CSS", "Python"],
    correctAnswer: 1
  }
];
