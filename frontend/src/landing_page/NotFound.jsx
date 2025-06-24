import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import the separate CSS file

export const NotFound = () => {
  return (
    <div className="notfound-container">
      <img
        src="/media/images/404.gif" // Change path if needed
        alt="404 Not Found"
        className="notfound-image"
      />
      <h1 className="notfound-heading">404 - Page Not Found</h1>
      <p className="notfound-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="notfound-link">
        Go back to Home
      </Link>
    </div>
  );
};
