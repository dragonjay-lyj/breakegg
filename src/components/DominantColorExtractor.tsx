// Import React for handling dynamic content
import React, { useState, useEffect } from 'react';

// Define the Component to extract dominant color
const DominantColorExtractor = ({ imageUrl, children }) => {
  const [dominantColor, setDominantColor] = useState('#111827');

  useEffect(() => {
    // Function to extract dominant color from image
    const extractDominantColor = async () => {
      // Assuming there's an API endpoint to extract the color
      const response = await fetch(`https://img2color-go.vercel.app/api?img=${encodeURIComponent(imageUrl)}`);
      const data = await response.json();
      setDominantColor(data.RGB);
    };

    extractDominantColor();
  }, [imageUrl]);

  return (
    <div style={{ backgroundColor: dominantColor }}>
      {children}
    </div>
  );
};

export default DominantColorExtractor;