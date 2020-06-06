import React from "react";
import { Router } from "@reach/router";
import Start from "./components/Start/Start";
import PricingRules from "./components/PricingRules/PricingRules";
import ScanItems from "./components/ScanItems/ScanItems";
import Total from "./components/Total/Total";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div>
      <Router>
        <Start path="/" />
        <PricingRules path="/pricingrules" component={PricingRules} />
        <ScanItems path="/scanitems" component={ScanItems} />
        <Total path="/total" component={Total} />
        <Payment path="/payment" component={Payment} />
      </Router>
    </div>
  );
}

export default App;
