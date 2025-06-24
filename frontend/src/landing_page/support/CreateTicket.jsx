import React from "react";

export const CreateTicket = () => {
  const cardData = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user-circle",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and DP",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-line-chart",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF)",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-credit-card",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "fa-desktop",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa-coins", // Use font awesome 6+ for this
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cardData.map((card, index) => (
          <div className="col" key={index}>
            <div className="p-4 border rounded shadow-sm h-100 text-md-start text-center bg-white">
              <h5 className="mb-3">
                <i className={`fa ${card.icon} me-2 text-secondary`}></i>
                {card.title}
              </h5>
              <ul className="list-unstyled">
                {card.links.map((link, idx) => (
                  <li key={idx} className="my-1">
                    <a href="#" className="text-decoration-none text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
