import React from "react";

export const Awards = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Right Content Section */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Largest stock broker in India</h2>
          <p className="text-muted mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Two Column List */}
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
