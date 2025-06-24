import React from "react";

export const Hero = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <div className="col-12">
          <h1>Pricing</h1>
          <h3 className="text-muted mt-3 fs-5">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="row p-4 mt-4 text-center">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid mb-3"
            alt="Equity Delivery"
            width={"80%"}
          />
          <h2 className="fs-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            className="img-fluid mb-3"
            alt="Intraday Trades"
            width={"80%"}
          />
          <h2 className="fs-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid mb-3"
            alt="Mutual Funds"
            width={"80%"}
          />
          <h2 className="fs-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};
