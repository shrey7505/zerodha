import React from "react";


export const Hero = () => {
  return (
    <section className="container-fluid  text-white p-5"  id="supportHero">
      <div className="container" height={"370px"}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h4 className="m-0">Support Portal</h4>
          <a href="#" className="text-white text-decoration-underline">
            Track tickets
          </a>
        </div>

        {/* Main Content */}
        <div className="row g-5 align-items-start">
          {/* Left Column */}
          <div className="col-md-7">
            <h5 className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h5>

            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              />
            </div>

            <div className="d-flex flex-wrap gap-4">
              <a href="#" className="text-white border-bottom pb-1">
                Track account opening
              </a>
              <a href="#" className="text-white border-bottom pb-1">
                Track segment activation
              </a>
              <a href="#" className="text-white border-bottom pb-1">
                Intraday margins
              </a>
              <a href="#" className="text-white border-bottom pb-1">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5">
            <h5 className="mb-4">Featured</h5>
            <ol className="ps-3">
              <li>
                <a href="#" className="text-white text-decoration-none ">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Rights Entitlements listing in June 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
