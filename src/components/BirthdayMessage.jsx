// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';

// export default function BirthdayMessage({ onNext }) {
//   const fullText =
//     "I pray you achieve all your dreams, stay happy, and keep smiling the way you do every single day. Because that smile is truly my favorite thing in the universe ✨";
  
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + fullText.charAt(index));
//       index++;
//       if (index >= fullText.length) {
//         clearInterval(interval);
//       }
//     }, 35);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="screen-container">
//       <div className="message-card">
//         <div className="card-top-bar">
//           <span className="dot"></span>
//           <FaTimes className="card-close-icon" onClick={onNext} />
//         </div>

//         <h1 className="message-title">Happy Birthday ✨</h1>
//         <p className="message-subtitle">Just for you ♡</p>
        
//         <div className="message-tagline">
//           Happiest birthday my gurlll 🎂
//         </div>

//         <p className="message-body">
//           {displayedText}
//           <span className="typing-cursor">|</span>
//         </p>

//         <button className="primary-btn" onClick={onNext}>
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function BirthdayMessage({ onNext }) {
  const fullText =
    "I  pray you conquer every goal, stay blessed, and keep that genuine smile shining through everything you do. You truly bring so much positive energy into the world! ✨";
  
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 32);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="screen-container">
      <div className="message-card">
        <div className="card-top-bar">
          <span className="dot"></span>
          <FaTimes className="card-close-icon" onClick={onNext} />
        </div>

        <h1 className="message-title">Happy Birthday ✨</h1>
        <p className="message-subtitle">Just for you, Moiz ♡</p>
        
        <div className="message-tagline">
          Happiest birthday my bro Moiz! 🎂
        </div>

        <p className="message-body">
          {displayedText}
          <span className="typing-cursor">|</span>
        </p>

        <button className="primary-btn" onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}