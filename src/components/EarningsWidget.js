import React, { useEffect, useState, useCallback } from "react";
import EarningsList from "./EarningsList";
import { fetchData } from "../services/apiService";

const API_KEY = "f090a778d74f4450a11ad417ad72740c";
const EARNINGS_API = `https://api.benzinga.com/api/v2.1/calendar/earnings?token=${API_KEY}`;
const LOGO_API = `https://api.benzinga.com/api/v2/logos/search?token=${API_KEY}`;

const EarningsWidget = () => {
  const [earnings, setEarnings] = useState([]);
  const [logos, setLogos] = useState({});

  const fetchEarnings = useCallback(async () => {
    const data = await fetchData(EARNINGS_API);
    if (data?.earnings) {
      setEarnings(data.earnings);
      fetchLogos(data.earnings.map((e) => e.ticker));
    }
  }, []);

  const fetchLogos = useCallback(async (tickers) => {
    const data = await fetchData(`${LOGO_API}&search_keys=${tickers.join(",")}&search_keys_type=symbol&fields=mark_vector_light`);
    if (data?.data) {
      const logoMap = data.data.reduce((acc, item) => {
        if (item.files?.mark_vector_light) {
          acc[item.search_key] = item.files.mark_vector_light;
        }
        return acc;
      }, {});
      setLogos(logoMap);
    }
  }, []);

  useEffect(() => {
    fetchEarnings();
  }, [fetchEarnings]);

  return (
    <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", background: "#C19A6B", borderRadius: "8px", padding: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
      {/* Header Section */}
      <div style={{ textAlign: "center", color: "#2D2D2D", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "5px" }}>EARNINGS WHISPERS</h1>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Most Anticipated Earnings Releases</h2>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>for the week beginning</p>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>February 03, 2025</h3>
      </div>

      {/* Earnings List */}
      <EarningsList earnings={earnings} logos={logos} />
    </div>
  );
};

export default EarningsWidget;
