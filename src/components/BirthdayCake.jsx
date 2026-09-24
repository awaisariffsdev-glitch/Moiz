// import React from 'react';

// export default function BirthdayCake({ onNext }) {
//   return (
//     <div className="screen-container">
//       <div className="cake-wrapper">
//         {/* Floating Confetti Elements */}
//         <div className="confetti c1"></div>
//         <div className="confetti c2"></div>
//         <div className="confetti c3"></div>
//         <div className="confetti c4"></div>
//         <div className="confetti c5"></div>

//         <h1 className="cake-heading">Happy Birthday, My Girl! ❤️</h1>

//         <div className="pixel-cake">
//           <div className="candles-row">
//             <div className="candle"><div className="flame"></div></div>
//             <div className="candle"><div className="flame"></div></div>
//             <div className="candle"><div className="flame"></div></div>
//           </div>
//           <div className="cake-tier tier-top">
//             <div className="frosting-drops">
//               <span></span><span></span><span></span><span></span>
//             </div>
//           </div>
//           <div className="cake-tier tier-bottom">
//             <div className="cream-line"></div>
//           </div>
//           <div className="cake-plate"></div>
//         </div>

//         <button className="primary-btn" onClick={onNext}>
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function BirthdayCake({ onNext }) {
  const [cutProgress, setCutProgress] = useState(0);
  const [isCutComplete, setIsCutComplete] = useState(false);
  const [isSlicing, setIsSlicing] = useState(false);
  const cakeRef = useRef(null);

  const handlePointerDown = (e) => {
    if (isCutComplete) return;
    setIsSlicing(true);
    updateProgress(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const handlePointerMove = (e) => {
    if (!isSlicing || isCutComplete) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    updateProgress(clientX);
  };

  const handlePointerUp = () => {
    setIsSlicing(false);
  };

  const updateProgress = (clientX) => {
    if (!cakeRef.current || !clientX) return;
    const rect = cakeRef.current.getBoundingClientRect();
    
    // Calculate slice progress across horizontal width of cake
    const relativeX = clientX - rect.left;
    const percentage = Math.min(Math.max(Math.round((relativeX / rect.width) * 100), 0), 100);

    setCutProgress((prev) => {
      const nextVal = Math.max(prev, percentage);
      if (nextVal >= 85) {
        setIsCutComplete(true);
        setIsSlicing(false);
        return 100;
      }
      return nextVal;
    });
  };

  return (
    <div
      className="screen-container"
      onMouseUp={handlePointerUp}
      onTouchEnd={handlePointerUp}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
    >
      <div className="cake-wrapper">
        {/* Floating Confetti shown continuously or popping when cut */}
        {isCutComplete && (
          <>
            <div className="confetti c1"></div>
            <div className="confetti c2"></div>
            <div className="confetti c3"></div>
            <div className="confetti c4"></div>
            <div className="confetti c5"></div>
            <div className="confetti c6"></div>
          </>
        )}

        <h1 className="cake-heading">
          {isCutComplete ? "Happy Birthday, Moiz! ❤️" : "Swipe to Cut the Cake! 🎂"}
        </h1>

        <p className="cake-instruction">
          {isCutComplete
            ? "Make a wish! ✨"
            : "Drag your finger / cursor across to slice"}
        </p>

        {/* Interactive Cake Area */}
        <div
          className={`interactive-cake-box ${isCutComplete ? "cake-sliced" : ""}`}
          ref={cakeRef}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
        >
          {/* Animated Celebration Heart when cut finishes */}
          {isCutComplete && (
            <div className="heart-burst">
              <FaHeart />
            </div>
          )}

          {/* Candle Flame disappears or turns off when cut */}
          <div className="candles-row">
            <div className="candle">
              <div className={`flame ${isCutComplete ? "blow-out" : ""}`}></div>
            </div>
            <div className="candle">
              <div className={`flame ${isCutComplete ? "blow-out" : ""}`}></div>
            </div>
            <div className="candle">
              <div className={`flame ${isCutComplete ? "blow-out" : ""}`}></div>
            </div>
          </div>

          {/* Split Cake Body */}
          <div className="cake-slices-container">
            {/* Left Tier */}
            <div
              className="cake-half left-half"
              style={{
                transform: isCutComplete ? "translateX(-14px) rotate(-4deg)" : "none"
              }}
            >
              <div className="tier tier-top-half">
                <div className="frosting-drop"></div>
                <div className="frosting-drop"></div>
              </div>
              <div className="tier tier-bottom-half"></div>
            </div>

            {/* Knife Cutting Line Indicator */}
            {isSlicing && (
              <div
                className="slice-guide-line"
                style={{ left: `${cutProgress}%` }}
              >
                <span className="knife-icon">🔪</span>
              </div>
            )}

            {/* Right Tier */}
            <div
              className="cake-half right-half"
              style={{
                transform: isCutComplete ? "translateX(14px) rotate(4deg)" : "none"
              }}
            >
              <div className="tier tier-top-half">
                <div className="frosting-drop"></div>
                <div className="frosting-drop"></div>
              </div>
              <div className="tier tier-bottom-half"></div>
            </div>
          </div>

          <div className="cake-plate"></div>
        </div>

        {/* Cutting Progress Circle or Bar */}
        {!isCutComplete ? (
          <div className="cut-indicator-badge">
            <span>{cutProgress}%</span>
          </div>
        ) : (
          <button className="primary-btn cake-next-btn" onClick={onNext}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
}