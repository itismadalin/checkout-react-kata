import React from "react";
import { Router } from "@reach/router";
import Start from "./components/Start/Start";
import PricingRules from "./components/PricingRules/PricingRules";
import ScanItems from "./components/ScanItems/ScanItems";

function App() {
  return (
    <div>
      <Router>
        <Start path="/" />
        <PricingRules path="/pricingrules" component={PricingRules} />
        <ScanItems path="/scanitems" component={ScanItems} />
      </Router>
    </div>
  );
}

export default App;
