import React, { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Intro({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="screen-container">
      <div className="intro-heart-box" onClick={onNext}>
        <FaHeart className="intro-heart-icon" />
      </div>
    </div>
  );
}