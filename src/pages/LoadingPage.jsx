import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default LoadingPage;