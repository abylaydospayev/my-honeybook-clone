'use client';
import './loader3d.css';

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="cube">
        <div className="face front">B</div>
        <div className="face back">U</div>
        <div className="face right">L</div>
        <div className="face left">L</div>
        <div className="face top">E</div>
        <div className="face bottom">!</div>
      </div>
    </div>
  );
}
