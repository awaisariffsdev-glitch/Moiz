// import React, { useState, useRef } from 'react';

// const memoriesData = [
//   {
//     image: "/images/memory1.jpg",
//     caption: "The first day we met ✨"
//   },
//   {
//     image: "/images/memory2.jpg",
//     caption: "Our endless conversations & laughs ♡"
//   },
//   {
//     image: "/images/memory3.jpg",
//     caption: "Every adventure by your side 🌸"
//   },
//   {
//     image: "/images/memory4.jpg",
//     caption: "To many more happy years together 🥂"
//   }
// ];

// export default function Memories({ onRestart }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const startX = useRef(0);
//   const isDragging = useRef(false);

//   const handleTouchStart = (e) => {
//     startX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     const endX = e.changedTouches[0].clientX;
//     const diff = startX.current - endX;
//     if (diff > 45 && currentIndex < memoriesData.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     } else if (diff < -45 && currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   const handleMouseDown = (e) => {
//     startX.current = e.clientX;
//     isDragging.current = true;
//   };

//   const handleMouseUp = (e) => {
//     if (!isDragging.current) return;
//     isDragging.current = false;
//     const diff = startX.current - e.clientX;
//     if (diff > 45 && currentIndex < memoriesData.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     } else if (diff < -45 && currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="screen-container">
//       <div className="memories-wrapper">
//         <h1 className="memories-title">Special Memories</h1>
//         <p className="memories-subtitle">Swipe for more ✨</p>

//         <div
//           className="carousel-stage"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//         >
//           <div
//             className="carousel-track"
//             style={{
//               transform: `translateX(calc(50% - ${currentIndex * 260 + 130}px))`
//             }}
//           >
//             {memoriesData.map((item, idx) => {
//               const isActive = idx === currentIndex;
//               return (
//                 <div
//                   key={idx}
//                   className={`memory-card ${isActive ? "active" : "inactive"}`}
//                   onClick={() => setCurrentIndex(idx)}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.caption}
//                     onError={(e) => {
//                       // Fallback image placeholder if personal photo is missing
//                       e.target.src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60";
//                     }}
//                     className="memory-image"
//                   />
//                   <div className="memory-caption">{item.caption}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="carousel-indicators">
//           {memoriesData.map((_, i) => (
//             <span
//               key={i}
//               className={`indicator-dot ${i === currentIndex ? "active" : ""}`}
//               onClick={() => setCurrentIndex(i)}
//             />
//           ))}
//         </div>

//         <button className="primary-btn restart-btn" onClick={onRestart}>
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// }






import React, { useState, useRef } from 'react';

const memoriesData = [
  {
    image: "/images/memory1.jpg",
    caption: "The first day we met ✨"
  },
  {
    image: "/images/memory2.jpg",
    caption: "Our endless conversations & laughs ♡"
  },
  {
    image: "/images/memory3.jpg",
    caption: "Every adventure by your side 🌸"
  },
  {
    image: "/images/memory4.jpg",
    caption: "To many more happy years together 🥂"
  }
];

export default function Memories({ onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 45 && currentIndex < memoriesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -45 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.clientX;
    if (diff > 45 && currentIndex < memoriesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -45 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="screen-container">
      <div className="memories-wrapper">
        <h1 className="memories-title">Special Memories</h1>
        <p className="memories-subtitle">Swipe for more ✨</p>

        <div
          className="carousel-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="carousel-track"
            style={{
              transform: `translateX(calc(50% - ${currentIndex * 260 + 130}px))`
            }}
          >
            {memoriesData.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`memory-card ${isActive ? "active" : "inactive"}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60";
                    }}
                    className="memory-image"
                  />
                  <div className="memory-caption">{item.caption}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-indicators">
          {memoriesData.map((_, i) => (
            <span
              key={i}
              className={`indicator-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

        <button className="primary-btn restart-btn" onClick={onNext}>
          One Last Thing... →
        </button>
      </div>
    </div>
  );
}