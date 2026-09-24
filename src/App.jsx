// // import React, { useState } from 'react';
// // import Intro from './components/Intro';
// // import BirthdayMessage from './components/BirthdayMessage';
// // import BirthdayCake from './components/BirthdayCake';
// // import DobLock from './components/DobLock';
// // import Memories from './components/Memories';

// // export default function App() {
// //   const [screen, setScreen] = useState(1);

// //   return (
// //     <div className="app-viewport">
// //       {/* INTERNAL CSS */}
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

// //         * {
// //           box-sizing: border-box;
// //           margin: 0;
// //           padding: 0;
// //           -webkit-tap-highlight-color: transparent;
// //         }

// //         body {
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           background-color: #f7f3e8;
// //           color: #3b281f;
// //           overflow-x: hidden;
// //           width: 100vw;
// //           min-height: 100vh;
// //         }

// //         .app-viewport {
// //           min-height: 100vh;
// //           width: 100%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           background: radial-gradient(circle at center, #faf6ee 0%, #f1eadb 100%);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .screen-container {
// //           width: 100%;
// //           max-width: 480px;
// //           min-height: 100vh;
// //           padding: 24px 20px;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           justify-content: center;
// //           animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           position: relative;
// //           z-index: 10;
// //         }

// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: translateY(8px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         /* Screen 1: Intro Heart */
// //         .intro-heart-box {
// //           cursor: pointer;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .intro-heart-icon {
// //           font-size: 42px;
// //           color: #d94b38;
// //           animation: pulse 1.4s ease-in-out infinite;
// //         }

// //         @keyframes pulse {
// //           0% { transform: scale(1); }
// //           50% { transform: scale(1.28); }
// //           100% { transform: scale(1); }
// //         }

// //         /* Screen 2: Birthday Message Card */
// //         .message-card {
// //           width: 100%;
// //           background: rgba(255, 255, 255, 0.75);
// //           backdrop-filter: blur(12px);
// //           -webkit-backdrop-filter: blur(12px);
// //           border: 1px solid rgba(214, 196, 178, 0.4);
// //           box-shadow: 0 16px 36px rgba(92, 61, 46, 0.08);
// //           border-radius: 24px;
// //           padding: 28px 24px;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           text-align: center;
// //         }

// //         .card-top-bar {
// //           width: 100%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           margin-bottom: 12px;
// //         }

// //         .dot {
// //           width: 8px;
// //           height: 8px;
// //           border-radius: 50%;
// //           background: #d6c4b2;
// //         }

// //         .card-close-icon {
// //           cursor: pointer;
// //           color: #7b6255;
// //           font-size: 14px;
// //           transition: transform 0.2s ease;
// //         }

// //         .card-close-icon:hover {
// //           transform: scale(1.15);
// //         }

// //         .message-title {
// //           font-family: 'Playfair Display', serif;
// //           font-size: 26px;
// //           font-weight: 600;
// //           color: #3b281f;
// //           margin-bottom: 4px;
// //         }

// //         .message-subtitle {
// //           font-size: 13px;
// //           color: #8c7365;
// //           margin-bottom: 20px;
// //         }

// //         .message-tagline {
// //           font-size: 16px;
// //           font-weight: 600;
// //           color: #4a3429;
// //           margin-bottom: 16px;
// //           line-height: 1.4;
// //         }

// //         .message-body {
// //           font-size: 14px;
// //           line-height: 1.7;
// //           color: #5c473c;
// //           min-height: 80px;
// //           margin-bottom: 24px;
// //         }

// //         .typing-cursor {
// //           display: inline-block;
// //           color: #d94b38;
// //           animation: blink 0.9s infinite;
// //           margin-left: 2px;
// //         }

// //         @keyframes blink {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0; }
// //         }

// //         /* Screen 3: Birthday Cake */
// //         .cake-wrapper {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           text-align: center;
// //           position: relative;
// //           width: 100%;
// //         }

// //         .cake-heading {
// //           font-family: 'Playfair Display', serif;
// //           font-size: 26px;
// //           color: #3b281f;
// //           margin-bottom: 30px;
// //           z-index: 2;
// //         }

// //         .pixel-cake {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           margin-bottom: 40px;
// //         }

// //         .candles-row {
// //           display: flex;
// //           gap: 16px;
// //           margin-bottom: -2px;
// //           z-index: 3;
// //         }

// //         .candle {
// //           width: 8px;
// //           height: 24px;
// //           background: #fad02c;
// //           border-radius: 4px 4px 0 0;
// //           position: relative;
// //         }

// //         .flame {
// //           width: 10px;
// //           height: 14px;
// //           background: #ff5722;
// //           border-radius: 50% 50% 20% 20%;
// //           position: absolute;
// //           top: -14px;
// //           left: -1px;
// //           animation: flameFlicker 0.6s infinite alternate;
// //           box-shadow: 0 0 6px rgba(255, 87, 34, 0.7);
// //         }

// //         @keyframes flameFlicker {
// //           0% { transform: scale(0.9) rotate(-3deg); }
// //           100% { transform: scale(1.15) rotate(3deg); }
// //         }

// //         .cake-tier {
// //           background: #e8a87c;
// //           border: 3px solid #6b432e;
// //           position: relative;
// //         }

// //         .tier-top {
// //           width: 110px;
// //           height: 48px;
// //           border-radius: 12px 12px 0 0;
// //           background: #f4d3c4;
// //         }

// //         .frosting-drops {
// //           display: flex;
// //           justify-content: space-around;
// //           padding-top: 4px;
// //         }

// //         .frosting-drops span {
// //           width: 12px;
// //           height: 10px;
// //           background: #fff;
// //           border-radius: 0 0 10px 10px;
// //         }

// //         .tier-bottom {
// //           width: 154px;
// //           height: 58px;
// //           border-radius: 6px 6px 0 0;
// //           background: #e4976c;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .cream-line {
// //           width: 90%;
// //           height: 6px;
// //           background: #fff;
// //           border-radius: 3px;
// //         }

// //         .cake-plate {
// //           width: 180px;
// //           height: 10px;
// //           background: #d6c4b2;
// //           border-radius: 10px;
// //           margin-top: -2px;
// //           border: 2px solid #6b432e;
// //         }

// //         /* Confetti */
// //         .confetti {
// //           position: absolute;
// //           width: 8px;
// //           height: 8px;
// //           opacity: 0.8;
// //           border-radius: 2px;
// //           animation: floatAround 3s ease-in-out infinite alternate;
// //         }
// //         .c1 { background: #d94b38; top: 10%; left: 15%; animation-delay: 0.1s; }
// //         .c2 { background: #e28743; top: 25%; right: 15%; animation-delay: 0.4s; }
// //         .c3 { background: #eab676; bottom: 20%; left: 20%; animation-delay: 0.8s; }
// //         .c4 { background: #875c36; top: 40%; left: 10%; animation-delay: 0.3s; }
// //         .c5 { background: #d94b38; bottom: 30%; right: 18%; animation-delay: 0.6s; }

// //         @keyframes floatAround {
// //           0% { transform: translateY(0px) rotate(0deg); }
// //           100% { transform: translateY(-16px) rotate(45deg); }
// //         }

// //         /* Screen 4: DOB Lock */
// //         .lock-card {
// //           width: 100%;
// //           background: rgba(255, 255, 255, 0.7);
// //           backdrop-filter: blur(10px);
// //           border: 1px solid rgba(214, 196, 178, 0.4);
// //           border-radius: 24px;
// //           padding: 28px 20px;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           box-shadow: 0 16px 36px rgba(92, 61, 46, 0.06);
// //         }

// //         .lock-icon-circle {
// //           width: 44px;
// //           height: 44px;
// //           background: #f7eae1;
// //           color: #d94b38;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-size: 18px;
// //           margin-bottom: 14px;
// //         }

// //         .lock-title {
// //           font-family: 'Playfair Display', serif;
// //           font-size: 19px;
// //           color: #3b281f;
// //           margin-bottom: 4px;
// //           text-align: center;
// //         }

// //         .lock-subtitle {
// //           font-size: 13px;
// //           color: #8c7365;
// //           margin-bottom: 16px;
// //         }

// //         .code-display-wrap {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 12px;
// //           width: 100%;
// //           max-width: 240px;
// //           height: 46px;
// //           background: #fcfaf7;
// //           border: 1px solid #e5d7cc;
// //           border-radius: 12px;
// //           padding: 0 14px;
// //         }

// //         .dots-container {
// //           flex: 1;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 8px;
// //         }

// //         .placeholder-text {
// //           font-size: 13px;
// //           color: #b09e93;
// //         }

// //         .revealed-code {
// //           font-size: 16px;
// //           font-weight: 600;
// //           color: #3b281f;
// //           letter-spacing: 4px;
// //         }

// //         .active-dot {
// //           width: 10px;
// //           height: 10px;
// //           background-color: #3b281f;
// //           border-radius: 50%;
// //         }

// //         .toggle-eye-btn {
// //           background: none;
// //           border: none;
// //           color: #7b6255;
// //           cursor: pointer;
// //           font-size: 15px;
// //           display: flex;
// //           align-items: center;
// //         }

// //         .error-message-area {
// //           height: 24px;
// //           display: flex;
// //           align-items: center;
// //           margin: 6px 0 10px;
// //         }

// //         .error-text {
// //           color: #c93b2b;
// //           font-size: 13px;
// //           font-weight: 500;
// //         }

// //         .shake {
// //           animation: shakeCard 0.45s ease-in-out;
// //         }

// //         @keyframes shakeCard {
// //           0%, 100% { transform: translateX(0); }
// //           20% { transform: translateX(-8px); }
// //           40% { transform: translateX(8px); }
// //           60% { transform: translateX(-6px); }
// //           80% { transform: translateX(6px); }
// //         }

// //         .keypad-grid {
// //           display: grid;
// //           grid-template-columns: repeat(3, 1fr);
// //           gap: 12px;
// //           width: 100%;
// //           max-width: 250px;
// //         }

// //         .key-btn {
// //           height: 52px;
// //           border-radius: 14px;
// //           border: 1px solid #ebdcd0;
// //           background: #ffffff;
// //           color: #3b281f;
// //           font-size: 18px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           box-shadow: 0 3px 8px rgba(92, 61, 46, 0.03);
// //           transition: background 0.15s, transform 0.1s;
// //         }

// //         .key-btn:active {
// //           transform: scale(0.95);
// //           background: #f7eae1;
// //         }

// //         .action-key {
// //           font-size: 18px;
// //           color: #7b6255;
// //         }

// //         /* Screen 5: Memories Carousel */
// //         .memories-wrapper {
// //           width: 100%;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           text-align: center;
// //         }

// //         .memories-title {
// //           font-family: 'Playfair Display', serif;
// //           font-size: 26px;
// //           color: #3b281f;
// //           margin-bottom: 4px;
// //         }

// //         .memories-subtitle {
// //           font-size: 13px;
// //           color: #8c7365;
// //           margin-bottom: 24px;
// //         }

// //         .carousel-stage {
// //           width: 100%;
// //           overflow: hidden;
// //           padding: 16px 0;
// //           cursor: grab;
// //           user-select: none;
// //         }

// //         .carousel-stage:active {
// //           cursor: grabbing;
// //         }

// //         .carousel-track {
// //           display: flex;
// //           transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.3, 1);
// //         }

// //         .memory-card {
// //           flex: 0 0 240px;
// //           height: 320px;
// //           margin: 0 10px;
// //           border-radius: 20px;
// //           overflow: hidden;
// //           background: #fff;
// //           box-shadow: 0 12px 24px rgba(92, 61, 46, 0.08);
// //           border: 1px solid rgba(214, 196, 178, 0.5);
// //           display: flex;
// //           flex-direction: column;
// //           transition: transform 0.35s ease, opacity 0.35s ease;
// //         }

// //         .memory-card.active {
// //           transform: scale(1.05);
// //           opacity: 1;
// //         }

// //         .memory-card.inactive {
// //           transform: scale(0.92);
// //           opacity: 0.55;
// //         }

// //         .memory-image {
// //           width: 100%;
// //           height: 82%;
// //           object-fit: cover;
// //           display: block;
// //         }

// //         .memory-caption {
// //           height: 18%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           padding: 0 12px;
// //           font-size: 13px;
// //           font-weight: 500;
// //           color: #4a3429;
// //           background: #ffffff;
// //         }

// //         .carousel-indicators {
// //           display: flex;
// //           gap: 8px;
// //           margin-top: 18px;
// //           margin-bottom: 24px;
// //         }

// //         .indicator-dot {
// //           width: 7px;
// //           height: 7px;
// //           border-radius: 50%;
// //           background: #d6c4b2;
// //           cursor: pointer;
// //           transition: width 0.25s, background 0.25s;
// //         }

// //         .indicator-dot.active {
// //           width: 20px;
// //           border-radius: 4px;
// //           background: #d94b38;
// //         }

// //         /* General Button */
// //         .primary-btn {
// //           border: none;
// //           outline: none;
// //           background: #3b281f;
// //           color: #faf6ee;
// //           padding: 12px 28px;
// //           font-size: 14px;
// //           font-weight: 500;
// //           border-radius: 24px;
// //           cursor: pointer;
// //           transition: transform 0.2s, background 0.2s;
// //           box-shadow: 0 6px 16px rgba(59, 40, 31, 0.12);
// //         }

// //         .primary-btn:hover {
// //           background: #4f3629;
// //           transform: translateY(-2px);
// //         }

// //         .primary-btn:active {
// //           transform: translateY(0);
// //         }

// //         .restart-btn {
// //           background: #5c473c;
// //         }
// //       `}</style>

// //       {/* Screen Render Switch */}
// //       {screen === 1 && <Intro onNext={() => setScreen(2)} />}
// //       {screen === 2 && <BirthdayMessage onNext={() => setScreen(3)} />}
// //       {screen === 3 && <BirthdayCake onNext={() => setScreen(4)} />}
// //       {screen === 4 && <DobLock onUnlock={() => setScreen(5)} />}
// //       {screen === 5 && <Memories onRestart={() => setScreen(1)} />}
// //     </div>
// //   );
// // }





// import React, { useState } from 'react';
// import Intro from './components/Intro';
// import BirthdayMessage from './components/BirthdayMessage';
// import BirthdayCake from './components/BirthdayCake';
// import DobLock from './components/DobLock';
// import Memories from './components/Memories';

// export default function App() {
//   const [screen, setScreen] = useState(1);

//   return (
//     <div className="app-viewport">
//       {/* INTERNAL CSS */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//           -webkit-tap-highlight-color: transparent;
//         }

//         body {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           background-color: #f7f3e8;
//           color: #3b281f;
//           overflow-x: hidden;
//           width: 100vw;
//           min-height: 100vh;
//         }

//         .app-viewport {
//           min-height: 100vh;
//           width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: radial-gradient(circle at center, #faf6ee 0%, #f1eadb 100%);
//           position: relative;
//           overflow: hidden;
//         }

//         .screen-container {
//           width: 100%;
//           max-width: 480px;
//           min-height: 100vh;
//           padding: 24px 20px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           position: relative;
//           z-index: 10;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(8px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* Screen 1: Intro Heart */
//         .intro-heart-box {
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .intro-heart-icon {
//           font-size: 42px;
//           color: #d94b38;
//           animation: pulse 1.4s ease-in-out infinite;
//         }

//         @keyframes pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.28); }
//           100% { transform: scale(1); }
//         }

//         /* Screen 2: Birthday Message Card */
//         .message-card {
//           width: 100%;
//           background: rgba(255, 255, 255, 0.78);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           border: 1px solid rgba(214, 196, 178, 0.5);
//           box-shadow: 0 16px 36px rgba(92, 61, 46, 0.08);
//           border-radius: 24px;
//           padding: 28px 24px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//         }

//         .card-top-bar {
//           width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 12px;
//         }

//         .dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: #d6c4b2;
//         }

//         .card-close-icon {
//           cursor: pointer;
//           color: #7b6255;
//           font-size: 14px;
//         }

//         .message-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 26px;
//           font-weight: 600;
//           color: #3b281f;
//           margin-bottom: 4px;
//         }

//         .message-subtitle {
//           font-size: 13px;
//           color: #8c7365;
//           margin-bottom: 18px;
//         }

//         .message-tagline {
//           font-size: 16px;
//           font-weight: 600;
//           color: #4a3429;
//           margin-bottom: 16px;
//           line-height: 1.4;
//         }

//         .message-body {
//           font-size: 14px;
//           line-height: 1.7;
//           color: #5c473c;
//           min-height: 80px;
//           margin-bottom: 24px;
//         }

//         .typing-cursor {
//           display: inline-block;
//           color: #d94b38;
//           animation: blink 0.9s infinite;
//         }

//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }

//         /* Screen 3: Interactive Birthday Cake */
//         .cake-wrapper {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           position: relative;
//           width: 100%;
//           user-select: none;
//         }

//         .cake-heading {
//           font-family: 'Playfair Display', serif;
//           font-size: 24px;
//           color: #3b281f;
//           margin-bottom: 6px;
//           transition: all 0.3s ease;
//         }

//         .cake-instruction {
//           font-size: 13px;
//           color: #8c7365;
//           margin-bottom: 24px;
//         }

//         .interactive-cake-box {
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           cursor: col-resize;
//           touch-action: pan-y;
//           padding: 20px 10px 10px;
//           margin-bottom: 24px;
//         }

//         .heart-burst {
//           position: absolute;
//           top: -15px;
//           font-size: 24px;
//           color: #d94b38;
//           animation: popHeart 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
//           z-index: 10;
//         }

//         @keyframes popHeart {
//           0% { transform: scale(0) translateY(10px); opacity: 0; }
//           100% { transform: scale(1.2) translateY(-10px); opacity: 1; }
//         }

//         .candles-row {
//           display: flex;
//           gap: 18px;
//           margin-bottom: -2px;
//           z-index: 5;
//         }

//         .candle {
//           width: 8px;
//           height: 24px;
//           background: #fad02c;
//           border-radius: 4px 4px 0 0;
//           position: relative;
//         }

//         .flame {
//           width: 10px;
//           height: 14px;
//           background: #ff5722;
//           border-radius: 50% 50% 20% 20%;
//           position: absolute;
//           top: -14px;
//           left: -1px;
//           animation: flameFlicker 0.6s infinite alternate;
//           box-shadow: 0 0 8px rgba(255, 87, 34, 0.7);
//         }

//         .flame.blow-out {
//           animation: blowOff 0.4s forwards;
//         }

//         @keyframes blowOff {
//           to { opacity: 0; transform: scale(0.2) translateY(-10px); }
//         }

//         @keyframes flameFlicker {
//           0% { transform: scale(0.9) rotate(-3deg); }
//           100% { transform: scale(1.15) rotate(3deg); }
//         }

//         /* Cake Halves */
//         .cake-slices-container {
//           display: flex;
//           position: relative;
//           z-index: 3;
//         }

//         .cake-half {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//         }

//         .tier-top-half {
//           width: 60px;
//           height: 48px;
//           background: #f4d3c4;
//           border: 3px solid #6b432e;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           justify-content: space-around;
//         }

//         .left-half .tier-top-half {
//           border-radius: 12px 0 0 0;
//           border-right: none;
//         }

//         .right-half .tier-top-half {
//           border-radius: 0 12px 0 0;
//           border-left: none;
//         }

//         .tier-bottom-half {
//           width: 84px;
//           height: 56px;
//           background: #e4976c;
//           border: 3px solid #6b432e;
//           position: relative;
//         }

//         .left-half .tier-bottom-half {
//           border-radius: 8px 0 0 0;
//           border-right: none;
//         }

//         .right-half .tier-bottom-half {
//           border-radius: 0 8px 0 0;
//           border-left: none;
//         }

//         .frosting-drop {
//           width: 14px;
//           height: 12px;
//           background: #fff;
//           border-radius: 0 0 8px 8px;
//         }

//         .slice-guide-line {
//           position: absolute;
//           top: -20px;
//           bottom: 0;
//           width: 2px;
//           background: rgba(217, 75, 56, 0.6);
//           pointer-events: none;
//           z-index: 10;
//         }

//         .knife-icon {
//           position: absolute;
//           top: -15px;
//           left: -12px;
//           font-size: 18px;
//           transform: rotate(-45deg);
//         }

//         .cake-plate {
//           width: 188px;
//           height: 10px;
//           background: #d6c4b2;
//           border-radius: 10px;
//           margin-top: -2px;
//           border: 2px solid #6b432e;
//           z-index: 2;
//         }

//         .cut-indicator-badge {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           border: 2px dashed #bba495;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 12px;
//           font-weight: 600;
//           color: #7b6255;
//           margin-top: 8px;
//         }

//         .cake-next-btn {
//           animation: popNext 0.4s ease forwards;
//           margin-top: 10px;
//         }

//         @keyframes popNext {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }

//         /* Floating Confetti */
//         .confetti {
//           position: absolute;
//           width: 8px;
//           height: 8px;
//           opacity: 0.85;
//           border-radius: 2px;
//           animation: floatAround 3s ease-in-out infinite alternate;
//         }
//         .c1 { background: #d94b38; top: 12%; left: 10%; animation-delay: 0.1s; }
//         .c2 { background: #e28743; top: 22%; right: 12%; animation-delay: 0.4s; }
//         .c3 { background: #eab676; bottom: 25%; left: 16%; animation-delay: 0.8s; }
//         .c4 { background: #875c36; top: 38%; left: 8%; animation-delay: 0.3s; }
//         .c5 { background: #d94b38; bottom: 35%; right: 14%; animation-delay: 0.6s; }
//         .c6 { background: #fad02c; top: 18%; left: 45%; animation-delay: 0.2s; }

//         @keyframes floatAround {
//           0% { transform: translateY(0px) rotate(0deg); }
//           100% { transform: translateY(-20px) rotate(60deg); }
//         }

//         /* Screen 4: DOB Lock */
//         .lock-card {
//           width: 100%;
//           background: rgba(255, 255, 255, 0.75);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(214, 196, 178, 0.4);
//           border-radius: 24px;
//           padding: 26px 20px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           box-shadow: 0 16px 36px rgba(92, 61, 46, 0.06);
//         }

//         .lock-icon-circle {
//           width: 44px;
//           height: 44px;
//           background: #f7eae1;
//           color: #d94b38;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 18px;
//           margin-bottom: 12px;
//         }

//         .lock-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 19px;
//           color: #3b281f;
//           margin-bottom: 4px;
//           text-align: center;
//         }

//         .lock-subtitle {
//           font-size: 13px;
//           color: #8c7365;
//           margin-bottom: 16px;
//         }

//         .code-display-wrap {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           width: 100%;
//           max-width: 240px;
//           height: 46px;
//           background: #fcfaf7;
//           border: 1px solid #e5d7cc;
//           border-radius: 12px;
//           padding: 0 14px;
//         }

//         .dots-container {
//           flex: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//         }

//         .placeholder-text {
//           font-size: 13px;
//           color: #b09e93;
//         }

//         .revealed-code {
//           font-size: 16px;
//           font-weight: 600;
//           color: #3b281f;
//           letter-spacing: 4px;
//         }

//         .active-dot {
//           width: 10px;
//           height: 10px;
//           background-color: #3b281f;
//           border-radius: 50%;
//         }

//         .toggle-eye-btn {
//           background: none;
//           border: none;
//           color: #7b6255;
//           cursor: pointer;
//           font-size: 15px;
//           display: flex;
//           align-items: center;
//         }

//         .error-message-area {
//           height: 24px;
//           display: flex;
//           align-items: center;
//           margin: 6px 0 10px;
//         }

//         .error-text {
//           color: #c93b2b;
//           font-size: 13px;
//           font-weight: 500;
//         }

//         .shake {
//           animation: shakeCard 0.45s ease-in-out;
//         }

//         @keyframes shakeCard {
//           0%, 100% { transform: translateX(0); }
//           20% { transform: translateX(-8px); }
//           40% { transform: translateX(8px); }
//           60% { transform: translateX(-6px); }
//           80% { transform: translateX(6px); }
//         }

//         .keypad-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 12px;
//           width: 100%;
//           max-width: 250px;
//         }

//         .key-btn {
//           height: 52px;
//           border-radius: 14px;
//           border: 1px solid #ebdcd0;
//           background: #ffffff;
//           color: #3b281f;
//           font-size: 18px;
//           font-weight: 600;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 3px 8px rgba(92, 61, 46, 0.03);
//           transition: background 0.15s, transform 0.1s;
//         }

//         .key-btn:active {
//           transform: scale(0.95);
//           background: #f7eae1;
//         }

//         .action-key {
//           font-size: 18px;
//           color: #7b6255;
//         }

//         /* Screen 5: Memories Carousel */
//         .memories-wrapper {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//         }

//         .memories-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 26px;
//           color: #3b281f;
//           margin-bottom: 4px;
//         }

//         .memories-subtitle {
//           font-size: 13px;
//           color: #8c7365;
//           margin-bottom: 24px;
//         }

//         .carousel-stage {
//           width: 100%;
//           overflow: hidden;
//           padding: 16px 0;
//           cursor: grab;
//           user-select: none;
//         }

//         .carousel-stage:active {
//           cursor: grabbing;
//         }

//         .carousel-track {
//           display: flex;
//           transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.3, 1);
//         }

//         .memory-card {
//           flex: 0 0 240px;
//           height: 320px;
//           margin: 0 10px;
//           border-radius: 20px;
//           overflow: hidden;
//           background: #fff;
//           box-shadow: 0 12px 24px rgba(92, 61, 46, 0.08);
//           border: 1px solid rgba(214, 196, 178, 0.5);
//           display: flex;
//           flex-direction: column;
//           transition: transform 0.35s ease, opacity 0.35s ease;
//         }

//         .memory-card.active {
//           transform: scale(1.05);
//           opacity: 1;
//         }

//         .memory-card.inactive {
//           transform: scale(0.92);
//           opacity: 0.55;
//         }

//         .memory-image {
//           width: 100%;
//           height: 82%;
//           object-fit: cover;
//           display: block;
//         }

//         .memory-caption {
//           height: 18%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0 12px;
//           font-size: 13px;
//           font-weight: 500;
//           color: #4a3429;
//           background: #ffffff;
//         }

//         .carousel-indicators {
//           display: flex;
//           gap: 8px;
//           margin-top: 18px;
//           margin-bottom: 24px;
//         }

//         .indicator-dot {
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: #d6c4b2;
//           cursor: pointer;
//           transition: width 0.25s, background 0.25s;
//         }

//         .indicator-dot.active {
//           width: 20px;
//           border-radius: 4px;
//           background: #d94b38;
//         }

//         /* Buttons */
//         .primary-btn {
//           border: none;
//           outline: none;
//           background: #3b281f;
//           color: #faf6ee;
//           padding: 12px 28px;
//           font-size: 14px;
//           font-weight: 500;
//           border-radius: 24px;
//           cursor: pointer;
//           transition: transform 0.2s, background 0.2s;
//           box-shadow: 0 6px 16px rgba(59, 40, 31, 0.12);
//         }

//         .primary-btn:hover {
//           background: #4f3629;
//           transform: translateY(-2px);
//         }

//         .primary-btn:active {
//           transform: translateY(0);
//         }

//         .restart-btn {
//           background: #5c473c;
//         }
//       `}</style>

//       {/* Screen Render Switch */}
//       {screen === 1 && <Intro onNext={() => setScreen(2)} />}
//       {screen === 2 && <BirthdayMessage onNext={() => setScreen(3)} />}
//       {screen === 3 && <BirthdayCake onNext={() => setScreen(4)} />}
//       {screen === 4 && <DobLock onUnlock={() => setScreen(5)} />}
//       {screen === 5 && <Memories onRestart={() => setScreen(1)} />}
//     </div>
//   );
// }







import React, { useState } from 'react';
import Intro from './components/Intro';
import BirthdayMessage from './components/BirthdayMessage';
import BirthdayCake from './components/BirthdayCake';
import DobLock from './components/DobLock';
import Memories from './components/Memories';
import LoveProposal from './components/LoveProposal';

export default function App() {
  const [screen, setScreen] = useState(1);

  return (
    <div className="app-viewport">
      {/* INTERNAL CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #f7f3e8;
          color: #3b281f;
          overflow-x: hidden;
          width: 100vw;
          min-height: 100vh;
        }

        .app-viewport {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #faf6ee 0%, #f1eadb 100%);
          position: relative;
          overflow: hidden;
        }

        .screen-container {
          width: 100%;
          max-width: 480px;
          min-height: 100vh;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          z-index: 10;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Screen 1: Intro Heart */
        .intro-heart-box {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .intro-heart-icon {
          font-size: 42px;
          color: #d94b38;
          animation: pulse 1.4s ease-in-out infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.28); }
          100% { transform: scale(1); }
        }

        /* Screen 2: Birthday Message Card */
        .message-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(214, 196, 178, 0.5);
          box-shadow: 0 16px 36px rgba(92, 61, 46, 0.08);
          border-radius: 24px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .card-top-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d6c4b2;
        }

        .card-close-icon {
          cursor: pointer;
          color: #7b6255;
          font-size: 14px;
        }

        .message-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 600;
          color: #3b281f;
          margin-bottom: 4px;
        }

        .message-subtitle {
          font-size: 13px;
          color: #8c7365;
          margin-bottom: 18px;
        }

        .message-tagline {
          font-size: 16px;
          font-weight: 600;
          color: #4a3429;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .message-body {
          font-size: 14px;
          line-height: 1.7;
          color: #5c473c;
          min-height: 80px;
          margin-bottom: 24px;
        }

        .typing-cursor {
          display: inline-block;
          color: #d94b38;
          animation: blink 0.9s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Screen 3: Interactive Birthday Cake */
        .cake-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          width: 100%;
          user-select: none;
        }

        .cake-heading {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          color: #3b281f;
          margin-bottom: 6px;
          transition: all 0.3s ease;
        }

        .cake-instruction {
          font-size: 13px;
          color: #8c7365;
          margin-bottom: 24px;
        }

        .interactive-cake-box {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: col-resize;
          touch-action: pan-y;
          padding: 20px 10px 10px;
          margin-bottom: 24px;
        }

        .heart-burst {
          position: absolute;
          top: -15px;
          font-size: 24px;
          color: #d94b38;
          animation: popHeart 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          z-index: 10;
        }

        @keyframes popHeart {
          0% { transform: scale(0) translateY(10px); opacity: 0; }
          100% { transform: scale(1.2) translateY(-10px); opacity: 1; }
        }

        .candles-row {
          display: flex;
          gap: 18px;
          margin-bottom: -2px;
          z-index: 5;
        }

        .candle {
          width: 8px;
          height: 24px;
          background: #fad02c;
          border-radius: 4px 4px 0 0;
          position: relative;
        }

        .flame {
          width: 10px;
          height: 14px;
          background: #ff5722;
          border-radius: 50% 50% 20% 20%;
          position: absolute;
          top: -14px;
          left: -1px;
          animation: flameFlicker 0.6s infinite alternate;
          box-shadow: 0 0 8px rgba(255, 87, 34, 0.7);
        }

        .flame.blow-out {
          animation: blowOff 0.4s forwards;
        }

        @keyframes blowOff {
          to { opacity: 0; transform: scale(0.2) translateY(-10px); }
        }

        @keyframes flameFlicker {
          0% { transform: scale(0.9) rotate(-3deg); }
          100% { transform: scale(1.15) rotate(3deg); }
        }

        .cake-slices-container {
          display: flex;
          position: relative;
          z-index: 3;
        }

        .cake-half {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .tier-top-half {
          width: 60px;
          height: 48px;
          background: #f4d3c4;
          border: 3px solid #6b432e;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-around;
        }

        .left-half .tier-top-half {
          border-radius: 12px 0 0 0;
          border-right: none;
        }

        .right-half .tier-top-half {
          border-radius: 0 12px 0 0;
          border-left: none;
        }

        .tier-bottom-half {
          width: 84px;
          height: 56px;
          background: #e4976c;
          border: 3px solid #6b432e;
          position: relative;
        }

        .left-half .tier-bottom-half {
          border-radius: 8px 0 0 0;
          border-right: none;
        }

        .right-half .tier-bottom-half {
          border-radius: 0 8px 0 0;
          border-left: none;
        }

        .frosting-drop {
          width: 14px;
          height: 12px;
          background: #fff;
          border-radius: 0 0 8px 8px;
        }

        .slice-guide-line {
          position: absolute;
          top: -20px;
          bottom: 0;
          width: 2px;
          background: rgba(217, 75, 56, 0.6);
          pointer-events: none;
          z-index: 10;
        }

        .knife-icon {
          position: absolute;
          top: -15px;
          left: -12px;
          font-size: 18px;
          transform: rotate(-45deg);
        }

        .cake-plate {
          width: 188px;
          height: 10px;
          background: #d6c4b2;
          border-radius: 10px;
          margin-top: -2px;
          border: 2px solid #6b432e;
          z-index: 2;
        }

        .cut-indicator-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px dashed #bba495;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          color: #7b6255;
          margin-top: 8px;
        }

        .cake-next-btn {
          animation: popNext 0.4s ease forwards;
          margin-top: 10px;
        }

        @keyframes popNext {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Floating Confetti */
        .confetti {
          position: absolute;
          width: 8px;
          height: 8px;
          opacity: 0.85;
          border-radius: 2px;
          animation: floatAround 3s ease-in-out infinite alternate;
        }
        .c1 { background: #d94b38; top: 12%; left: 10%; animation-delay: 0.1s; }
        .c2 { background: #e28743; top: 22%; right: 12%; animation-delay: 0.4s; }
        .c3 { background: #eab676; bottom: 25%; left: 16%; animation-delay: 0.8s; }
        .c4 { background: #875c36; top: 38%; left: 8%; animation-delay: 0.3s; }
        .c5 { background: #d94b38; bottom: 35%; right: 14%; animation-delay: 0.6s; }
        .c6 { background: #fad02c; top: 18%; left: 45%; animation-delay: 0.2s; }

        @keyframes floatAround {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(60deg); }
        }

        /* Screen 4: DOB Lock */
        .lock-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(214, 196, 178, 0.4);
          border-radius: 24px;
          padding: 26px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 16px 36px rgba(92, 61, 46, 0.06);
        }

        .lock-icon-circle {
          width: 44px;
          height: 44px;
          background: #f7eae1;
          color: #d94b38;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          margin-bottom: 12px;
        }

        .lock-title {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          color: #3b281f;
          margin-bottom: 4px;
          text-align: center;
        }

        .lock-subtitle {
          font-size: 13px;
          color: #8c7365;
          margin-bottom: 16px;
        }

        .code-display-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          max-width: 240px;
          height: 46px;
          background: #fcfaf7;
          border: 1px solid #e5d7cc;
          border-radius: 12px;
          padding: 0 14px;
        }

        .dots-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .placeholder-text {
          font-size: 13px;
          color: #b09e93;
        }

        .revealed-code {
          font-size: 16px;
          font-weight: 600;
          color: #3b281f;
          letter-spacing: 4px;
        }

        .active-dot {
          width: 10px;
          height: 10px;
          background-color: #3b281f;
          border-radius: 50%;
        }

        .toggle-eye-btn {
          background: none;
          border: none;
          color: #7b6255;
          cursor: pointer;
          font-size: 15px;
          display: flex;
          align-items: center;
        }

        .error-message-area {
          height: 24px;
          display: flex;
          align-items: center;
          margin: 6px 0 10px;
        }

        .error-text {
          color: #c93b2b;
          font-size: 13px;
          font-weight: 500;
        }

        .shake {
          animation: shakeCard 0.45s ease-in-out;
        }

        @keyframes shakeCard {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }

        .keypad-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 250px;
        }

        .key-btn {
          height: 52px;
          border-radius: 14px;
          border: 1px solid #ebdcd0;
          background: #ffffff;
          color: #3b281f;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 8px rgba(92, 61, 46, 0.03);
          transition: background 0.15s, transform 0.1s;
        }

        .key-btn:active {
          transform: scale(0.95);
          background: #f7eae1;
        }

        .action-key {
          font-size: 18px;
          color: #7b6255;
        }

        /* Screen 5: Memories Carousel */
        .memories-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .memories-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          color: #3b281f;
          margin-bottom: 4px;
        }

        .memories-subtitle {
          font-size: 13px;
          color: #8c7365;
          margin-bottom: 24px;
        }

        .carousel-stage {
          width: 100%;
          overflow: hidden;
          padding: 16px 0;
          cursor: grab;
          user-select: none;
        }

        .carousel-stage:active {
          cursor: grabbing;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.3, 1);
        }

        .memory-card {
          flex: 0 0 240px;
          height: 320px;
          margin: 0 10px;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 12px 24px rgba(92, 61, 46, 0.08);
          border: 1px solid rgba(214, 196, 178, 0.5);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .memory-card.active {
          transform: scale(1.05);
          opacity: 1;
        }

        .memory-card.inactive {
          transform: scale(0.92);
          opacity: 0.55;
        }

        .memory-image {
          width: 100%;
          height: 82%;
          object-fit: cover;
          display: block;
        }

        .memory-caption {
          height: 18%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          font-size: 13px;
          font-weight: 500;
          color: #4a3429;
          background: #ffffff;
        }

        .carousel-indicators {
          display: flex;
          gap: 8px;
          margin-top: 18px;
          margin-bottom: 24px;
        }

        .indicator-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d6c4b2;
          cursor: pointer;
          transition: width 0.25s, background 0.25s;
        }

        .indicator-dot.active {
          width: 20px;
          border-radius: 4px;
          background: #d94b38;
        }

        /* Screen 6: Moiz Loves Minahil Screen */
        .proposal-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(214, 196, 178, 0.5);
          box-shadow: 0 16px 36px rgba(92, 61, 46, 0.08);
          border-radius: 24px;
          padding: 36px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          min-height: 380px;
        }

        .proposal-heart-badge {
          width: 50px;
          height: 50px;
          background: #f7eae1;
          color: #d94b38;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
          animation: pulse 1.4s infinite;
        }

        .proposal-title {
          font-family: 'Playfair Display', serif;
          font-size: 23px;
          font-weight: 600;
          color: #3b281f;
          margin-bottom: 6px;
        }

        .proposal-subtitle {
          font-size: 13px;
          color: #8c7365;
          margin-bottom: 36px;
        }

        .choice-container {
          position: relative;
          width: 100%;
          max-width: 280px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .yes-btn {
          background: #d94b38;
          padding: 14px 34px;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 6px 18px rgba(217, 75, 56, 0.28);
        }

        .yes-btn:hover {
          background: #bd3927;
        }

        .no-btn {
          border: 1px solid #d6c4b2;
          background: #ffffff;
          color: #6b432e;
          padding: 12px 28px;
          font-size: 15px;
          font-weight: 500;
          border-radius: 24px;
          cursor: pointer;
          user-select: none;
        }

        /* In-UI Alert / Modal */
        .love-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(59, 40, 31, 0.45);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .love-modal-box {
          background: #ffffff;
          border: 1px solid rgba(214, 196, 178, 0.6);
          border-radius: 24px;
          padding: 30px 24px;
          text-align: center;
          max-width: 320px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
          animation: popNext 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .modal-heart-icon {
          font-size: 44px;
          margin-bottom: 12px;
          animation: pulse 1.2s infinite;
        }

        .modal-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          color: #3b281f;
          margin-bottom: 8px;
        }

        .modal-message {
          font-size: 14px;
          color: #5c473c;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* General Button */
        .primary-btn {
          border: none;
          outline: none;
          background: #3b281f;
          color: #faf6ee;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 24px;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
          box-shadow: 0 6px 16px rgba(59, 40, 31, 0.12);
        }

        .primary-btn:hover {
          background: #4f3629;
          transform: translateY(-2px);
        }

        .primary-btn:active {
          transform: translateY(0);
        }

        .restart-btn {
          background: #5c473c;
        }
      `}</style>

      {/* Screen Render Switch */}
      {screen === 1 && <Intro onNext={() => setScreen(2)} />}
      {screen === 2 && <BirthdayMessage onNext={() => setScreen(3)} />}
      {screen === 3 && <BirthdayCake onNext={() => setScreen(4)} />}
      {screen === 4 && <DobLock onUnlock={() => setScreen(5)} />}
      {screen === 5 && <Memories onNext={() => setScreen(6)} />}
      {screen === 6 && <LoveProposal onRestart={() => setScreen(1)} />}
    </div>
  );
}