import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function LoveProposal({ onRestart }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto', position: 'static' });
  const [showLoveModal, setShowLoveModal] = useState(false);

  // Dodges cursor/touch to a random index/position inside the card
  const dodgeNoButton = () => {
    // Generate safe bounds inside the 320x260 action area
    const randomX = Math.floor(Math.random() * 180) - 90;
    const randomY = Math.floor(Math.random() * 120) - 60;
    
    setNoButtonPosition({
      position: 'relative',
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
  };

  return (
    <div className="screen-container">
      <div className="proposal-card">
        <div className="proposal-heart-badge">
          <FaHeart />
        </div>

        <h1 className="proposal-title">Moiz Loves Minahil Forever? ❤️</h1>
        <p className="proposal-subtitle">Think carefully before answering... ♡</p>

        {/* Buttons Action Area */}
        <div className="choice-container">
          <button
            className="primary-btn yes-btn"
            onClick={() => setShowLoveModal(true)}
          >
            YES! 🥰
          </button>

          <button
            className="no-btn"
            style={noButtonPosition}
            onMouseEnter={dodgeNoButton}
            onTouchStart={dodgeNoButton}
            onClick={dodgeNoButton}
          >
            No 🙄
          </button>
        </div>

        {/* In-UI Alert / Love Modal */}
        {showLoveModal && (
          <div className="love-modal-backdrop">
            <div className="love-modal-box">
              <div className="modal-heart-icon">💖</div>
              <h2 className="modal-title">Yayyy!</h2>
              <p className="modal-message">
                Minahil also loves you forever and ever! 🥹❤️✨
              </p>
              <button
                className="primary-btn restart-btn"
                onClick={onRestart}
              >
                Restart Surprise ↺
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}