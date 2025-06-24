import React from 'react';

export const Pricing = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Content - Pricing Boxes */}
        <div className="col-md-6">
          <div className="row text-center g-3">
            <div className="col-6">
              <div className="p-4 border rounded h-100">
                <h1 className="mb-2">₹0</h1>
                <p className="text-muted mb-0">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-4 border rounded h-100">
                <h1 className="mb-2">₹20</h1>
                <p className="text-muted mb-0">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
