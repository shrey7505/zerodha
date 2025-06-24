import React from "react";

export const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-4 p-md-5 mt-5 text-center text-md-start border-top">
        {/* Left Column - Brokerage Calculator & Info */}
        <div className="col-12 col-md-8 p-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted mt-3"
            style={{ lineHeight: "2.2", fontSize: "14px" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Column - List of Charges */}
        <div className="col-12 col-md-4 p-4 d-flex align-items-start justify-content-center justify-content-md-start">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
};
