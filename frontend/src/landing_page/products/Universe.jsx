import React from "react";

export const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row justify-content-center mt-4">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 text-center">
          <img src="media/images/smallcaseLogo.png" width="199" className="img-fluid" alt="Smallcase" />
          <p className="text-muted mt-3">Thematic investment platform</p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 text-center">
          <img src="media/images/streakLogo.png" width="199" className="img-fluid" alt="Streak" />
          <p className="text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 text-center">
          <img src="media/images/dittoLogo.png" width="199" className="img-fluid" alt="Ditto" />
          <p className="text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 text-center">
          <img src="media/images/zerodhaFundhouse.png" width="199" className="img-fluid" alt="Fundhouse" />
          <p className="text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Card 5 */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 text-center">
          <img src="media/images/sensibullLogo.svg" width="199" className="img-fluid" alt="Sensibull" />
          <p className="text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Card 6 */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 text-center">
          <img src="media/images/tijori.svg" width="199" className="img-fluid" alt="Tijori" />
          <p className="text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary fs-5 px-4 py-2">
          Signup Now
        </button>
      </div>
    </div>
  );
};
