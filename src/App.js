import React from "react";
import EarningsWidget from "./components/EarningsWidget";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f5f5f5" }}>
      <EarningsWidget />
    </div>
  );
}

export default App;
