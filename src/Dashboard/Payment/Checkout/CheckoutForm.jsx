import React, { useEffect, useState } from "react";
// import { CardElement, useElements, useStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe();
  const element = useElements();
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [trangection, setTrangection] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { price, email, precentName, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accesToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh
    if (!stripe || !element) {
      return;
    }
    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log(paymentMethod);
    }

    setProcessing(true);
    const {
      paymentIntent,
      error: confirmeError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: precentName,
          email: email,
        },
      },
    });

    if (confirmeError) {
      console.log(confirmeError);
      setCardError(confirmeError.message);
      return;
    } else {
      console.log(paymentIntent);
      setCardError("");
    }
    setPaymentSuccess(" ");

    if (paymentIntent.status === "succeeded") {
      setPaymentSuccess(" Payment successful");
      setTrangection(paymentIntent.id);
      setProcessing(false);
      console.log("Payment successful");

      const payments = {
        transationId: paymentIntent.id,
        paymentMethod: paymentIntent.payment_method,
        paymentStatus: paymentIntent.status,
        paymentAmount: paymentIntent.amount,
        paymentCurrency: paymentIntent.currency,
        paymentEmail: paymentIntent.receipt_email,
        paymentDate: paymentIntent.created,
        bookingId: _id,
      };

      fetch("http://localhost:8000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accesToken")}`,
        },
        body: JSON.stringify(payments),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setPaymentSuccess(" Payment successful");
            setTrangection(paymentIntent.id);
          }
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              border: "2px solid black",
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="mt-3 btn btn-sm bg-gradient-to-r from-primary to-secondary hover:from-pink-500 hover:to-yellow-500 font-bold text-white"
          style={{
            cursor: !stripe || !clientSecret ? "not-allowed" : "pointer",
          }}
        >
          Pay
        </button>
      </form>
      <p className="text-center text-red-600 p-2">{cardError}</p>
      {paymentSuccess && (
        <div>
          <p className="text-center text-green-600 p-2">{paymentSuccess}</p>
          <p className="text-center text-green-600 p-2">
            Your Trangection Id : {trangection}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
