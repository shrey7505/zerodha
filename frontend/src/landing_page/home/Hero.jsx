import React from "react";

export const Hero = () => {
  return (
    <div className="container-fluid px-0">
      {/* Full-width Image */}
      <img
        src="media/images/homeHero.png"
        alt="hero"
        className="img-fluid w-100"
      />

      {/* Centered Content Below Image */}
      <div className="container py-5 text-center">
        <h1 className="fw-bold mb-3 fs-2">Invest in everything</h1>
        <p className="text-muted mb-4 fs-6">
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button className="btn btn-primary px-4 py-2">
          Signup Now
        </button>
      </div>
    </div>
  );
};
