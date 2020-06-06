import React from 'react';
import { Link } from "@reach/router";

const Total = () => {
    return (
        <div>
            <div>
            <tr>Total:</tr>
             <td>£130</td>
            </div>
            <div>
                <Link to="/payment">
                <button>PAY</button>
                </Link>
            </div>
        </div>
    );
};

export default Total;