import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbBackspace } from 'react-icons/tb';

// Set your custom password/DOB here (e.g. DDMM or DDMMYYYY)
const CORRECT_DOB = "2006";

export default function DobLock({ onUnlock }) {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleKeyPress = (val) => {
    if (errorMessage) setErrorMessage("");
    if (code.length < 8) {
      const nextCode = code + val;
      setCode(nextCode);

      if (nextCode === CORRECT_DOB) {
        setTimeout(() => {
          onUnlock();
        }, 300);
      } else if (nextCode.length === CORRECT_DOB.length) {
        triggerError();
      }
    }
  };

  const triggerError = () => {
    setIsShaking(true);
    setErrorMessage("Wrong password. Try again.");
    setTimeout(() => {
      setIsShaking(false);
      setCode("");
    }, 650);
  };

  const handleDelete = () => {
    setCode((prev) => prev.slice(0, -1));
    if (errorMessage) setErrorMessage("");
  };

  const handleClear = () => {
    setCode("");
    if (errorMessage) setErrorMessage("");
  };

  return (
    <div className="screen-container">
      <div className={`lock-card ${isShaking ? "shake" : ""}`}>
        <div className="lock-icon-circle">
          <FaLock />
        </div>

        <h2 className="lock-title">Enter DOB To Unlock The Memories</h2>
        <p className="lock-subtitle">Enter Code</p>

        {/* Input & Display Box */}
        <div className="code-display-wrap">
          <div className="dots-container">
            {code.length === 0 ? (
              <span className="placeholder-text">Enter Passcode</span>
            ) : showCode ? (
              <span className="revealed-code">{code}</span>
            ) : (
              code.split("").map((_, i) => <span key={i} className="active-dot"></span>)
            )}
          </div>
          <button
            type="button"
            className="toggle-eye-btn"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* UI Error Box */}
        <div className="error-message-area">
          {errorMessage && <span className="error-text">{errorMessage}</span>}
        </div>

        {/* Custom Keypad */}
        <div className="keypad-grid">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button key={num} className="key-btn" onClick={() => handleKeyPress(num)}>
              {num}
            </button>
          ))}
          <button className="key-btn action-key" onClick={handleDelete} title="Delete">
            <TbBackspace />
          </button>
          <button className="key-btn" onClick={() => handleKeyPress("0")}>
            0
          </button>
          <button className="key-btn action-key" onClick={handleClear} title="Clear">
            C
          </button>
        </div>
      </div>
    </div>
  );
}