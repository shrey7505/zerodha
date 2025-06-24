import React from "react";

export const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row justify-content-center text-center mt-5 p-3">
        <div className="col-12 col-md-10">
          <h1>Technology</h1>
          <h3 className="text-muted mt-3 fs-4">
            Sleek, modern and intuitive trading platforms
          </h3>
          <p className="mt-3 mb-4">
            Check out our
            <a href="#" className="text-decoration-none">
              investment offerings
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
