import React from "react";

export const Team = () => {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row mt-5 border-top pt-5">
        <div className="col text-center">
          <h1>People</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div
        className="row align-items-center text-muted py-4"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        {/* Image Column */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid"
            style={{ borderRadius: "100%", maxWidth: "250px" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Text Column */}
        <div className="col-12 col-md-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect online
            <a href="#" className="text-decoration-none">
              Homepage
            </a>{" "}
            /
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
