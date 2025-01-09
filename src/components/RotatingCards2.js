import React, { useState, useEffect } from "react";

const RotatingCards2 = () => {
  const cards = Array(9).fill(
    <>
      <p className="text-center">
        <strong>Sunita Joshi says -</strong>
        <br />
        “I have saved so much using SavvyZi... never going back to my old
        shopping ways.”
      </p>
      <div className="text-yellow-500 mt-2 text-lg">⭐⭐⭐⭐⭐</div>
    </>
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length / 3));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [cards.length]);

  // Manual navigation
  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[40vh] overflow-hidden flex flex-col items-center justify-center mt-8">
      {/* Card Display */}
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, i) => (
          <div
            key={i}
            className="flex w-full h-full space-x-4 px-4"
            style={{ flex: "0 0 100%" }}
          >
            {cards.slice(i * 3, i * 3 + 3).map((card, index) => (
              <div
                key={index}
                className="flex-1 h-full flex flex-col items-center justify-center bg-blue-300 text-black font-bold text-base rounded-lg shadow-lg p-4"
              >
                {card}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2 z-10">
        {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, index) => (
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
