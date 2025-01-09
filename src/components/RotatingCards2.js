import React, { useState, useEffect } from "react";

const RotatingCards2 = () => {
  const cards = ["Review1", "Review2", "Review3", "Review4", "Review5"];
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
    <div className="relative w-full h-[30vh] overflow-hidden flex flex-col items-center justify-center mt-8">
      {/* Card Display */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="h-[30vh] flex items-center justify-center bg-blue-300 text-black font-bold text-2xl rounded-lg shadow-lg"
            style={{ height: "100%" }}
          >
            {card}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-4 z-10">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCards2;
