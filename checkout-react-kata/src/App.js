import React from "react";
import { Router } from "@reach/router";
import Start from "./components/Start/Start";
import PricingRules from "./components/PricingRules/PricingRules";

function App() {
  return (
    <div>
      <Router>
        <Start path="/" />
        <PricingRules path="/pricingrules" component={PricingRules} />
      </Router>
    </div>
  );
}

export default App;
