import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./Checkout/CheckoutForm";

const Payment = () => {
  const booking = useLoaderData();

  const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);

  const { price, tritment, selectedDate, slot } = booking;
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Payment for {tritment}</h1>
        <div className="divider"></div>
      </div>
      <div>
        <h1>
          Pless Pay <span className="font-bold">$ {price} </span> for your
          appointment on{selectedDate} at {slot}
        </h1>
      </div>
      <div className="border p-4 m-4 w-96 shadow-lg rounded">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
