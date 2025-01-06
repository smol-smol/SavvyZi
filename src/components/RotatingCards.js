import React, { useState, useEffect } from "react";

const RotatingCards = () => {
  const cards = [
    "Card One",
    "Card Two",
    "Card Three",
    "Card Four",
    "Card Five",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [cards.length]);

  // Manual navigation
  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Card Display */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-full h-[50vh] w-screen flex items-center justify-center bg-pink-300 text-black font-bold text-2xl rounded-lg shadow-lg"
          >
            {card}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-pink-500" : "bg-gray-300"
            }`}
            onClick={() => goToCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCards;
