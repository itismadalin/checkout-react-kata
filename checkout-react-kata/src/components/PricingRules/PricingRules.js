import React, { Component } from 'react';
import { Link } from "@reach/router";

class PricingRules extends Component {
    render() {
        return (
            <div>
        <div>
        <table>
                <thead>
                    <tr>
                        A
                    </tr>
                    <tr>
                        B
                    </tr>
                    <tr>
                        C
                    </tr>
                    <tr>
                        D
                    </tr>
                </thead>
                </table>
        </div>
        <div>
        <Link to="/scanitems">
        <button>Scan Items</button>
      </Link>
        </div>
            </div>
        );
    }
}

export default PricingRules;