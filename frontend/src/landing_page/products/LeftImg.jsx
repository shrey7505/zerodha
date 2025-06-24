import React from 'react'

export const LeftImg = ({imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,}) => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="mb-3">{productName}</h1>
          <p>{productDesription}</p>

          <div className="mt-4">
            <a href={tryDemo} className="btn btn-outline-primary me-3">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-outline-primary me-3">
              Learn More
            </a>
          </div>

          <div className="mt-4 d-flex flex-wrap gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
