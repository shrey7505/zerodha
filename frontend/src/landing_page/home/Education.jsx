import React from "react";

export const Education = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education Illustration"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Text Content */}
        <div className="col-md-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
