import React from "react";
import EarningsItem from "./EarningsItem";


const EarningsList = ({ earnings, logos }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
      {earnings.map((company) => (
        <EarningsItem key={company.ticker} company={company} logo={logos[company.ticker]} />
      ))}
    </div>
  );
};

export default EarningsList;
