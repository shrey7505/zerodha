import React from "react";

export const Stats = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <div className="mb-3">
            <h2 className="fs-5">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div className="mb-3">
            <h2 className="fs-5">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-3">
            <h2 className="fs-5">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-3">
            <h2 className="fs-5">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="text-decoration-none text-primary fw-semibold">
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none text-primary fw-semibold">
              Try Kite demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
