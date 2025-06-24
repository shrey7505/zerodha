import React from "react";

export const RightImg = ({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) => {
  return (
    <div className="container mt-2">
      <div className="row align-items-center">
        {/* Image appears first on small screens, second on md+ */}
        <div className="col-12 col-md-6 text-center order-1 order-md-2">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text appears second on small screens, first on md+ */}
        <div className="col-12 col-md-6 p-4 order-2 order-md-1">
          <h1 className="mb-3">{productName}</h1>
          <p>{productDesription}</p>
          <div className="mt-3">
            <a href={learnMore} className="btn btn-outline-primary me-3">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
