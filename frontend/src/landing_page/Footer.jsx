import React from 'react'

export const Footer = () => {
  return (
     <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 pt-5">
        {/* Top Row */}
        <div className="row gy-4">
          <div className="col-md-6 col-lg-3">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="img-fluid mb-4"
              style={{ width: "50%" }}
            />
            <p className="text-muted small">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <p className="fw-semibold">Company</p>
            <ul className="list-unstyled text-muted small">
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">About</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Products</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Pricing</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Referral programme</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Careers</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Zerodha.tech</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Press & media</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <p className="fw-semibold">Support</p>
            <ul className="list-unstyled text-muted small">
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Contact</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Support portal</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Z-Connect blog</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">List of charges</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Downloads & resources</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <p className="fw-semibold">Account</p>
            <ul className="list-unstyled text-muted small">
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Open an account</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">Fund transfer</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-muted">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="row mt-5">
          <div className="col">
            <div className="text-muted small" style={{ fontSize: "13px" }}>
              <p>
                Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
                INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. –
                SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha
                Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered
                Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
                Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                complaints pertaining to securities broking please write to complaints@zerodha.com,
                for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
                Document as prescribed by SEBI | ICF
              </p>
              <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory
                details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
                Benefits: Effective Communication, Speedy redressal of the grievances
              </p>
              <p>
                Investments in securities market are subject to market risks; read all the related
                documents carefully before investing.
              </p>
              <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs
                with your stock brokers. Receive information of your transactions directly from Exchange
                on your mobile/email at the end of the day. Issued in the interest of investors. KYC is
                one time exercise while dealing in securities markets - once KYC is done through a SEBI
                registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same
                process again when you approach another intermediary." Dear Investor, if you are
                subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account
                number and sign the IPO application form to authorize your bank to make payment in case
                of allotment. In case of non allotment the funds will remain in your bank account. As a
                business we don't give stock tips, and have not authorized anyone to trade on behalf of
                others. If you find anyone claiming to be part of Zerodha and offering such services,
                please create a ticket here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
