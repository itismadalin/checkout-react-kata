import React from 'react';
import { Link } from "@reach/router";

const Payment = () => {
    return (
        <div>
           <p>Thank you for your payment.</p>
           <p>Please press the button below to go back to the homepage...</p>
           <Link to="/">
           <button>DONE</button>
           </Link>
        </div>
    );
};

export default Payment;