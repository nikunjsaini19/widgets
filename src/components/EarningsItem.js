import React from "react";

const EarningsItem = ({ company, logo }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "#fff",
        transition: "box-shadow 0.2s",
      }}
      onClick={() => window.open(`https://www.benzinga.com/quote/${company.ticker}`, "_blank")}
    >
      {logo ? (
        <img src={logo} alt={company.ticker} style={{ height: "40px", marginBottom: "5px" }} />
      ) : (
        <div style={{ height: "40px", width: "40px", background: "#ccc", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>N/A</div>
      )}
      <span style={{ fontWeight: "600" }}>{company.ticker}</span>
    </div>
  );
};

export default EarningsItem;
