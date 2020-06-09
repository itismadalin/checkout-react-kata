import React from "react";
import { Router } from "@reach/router";
import Start from "./components/Start/Start";
import PricingRules from "./components/PricingRules/PricingRules";
import ScanItems from "./components/ScanItems/ScanItems";
import Payment from "./components/Payment/Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Start path="/" />
        <PricingRules path="/pricingrules" component={PricingRules} />
        <ScanItems path="/scanitems" component={ScanItems} />
        <Payment path="/payment" component={Payment} />
      </Router>
    </div>
  );
}

export default App;
