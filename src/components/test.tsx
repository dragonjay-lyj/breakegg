---
// Import necessary React components and hooks
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

// ShareComponent definition
const ShareComponent = () => {
  const [showQR, setShowQR] = useState(false);

  // Function to copy current page URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("Link copied to clipboard!"))
      .catch(err => console.error("Error copying text: ", err));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={copyToClipboard}>
        Copy Link
      </button>
      <button
        className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowQR(!showQR)}>
        {showQR ? 'Hide QR Code' : 'Show QR Code'}
      </button>
      {showQR && <QRCode value={window.location.href} />}
    </div>
  );
};

export default ShareComponent;