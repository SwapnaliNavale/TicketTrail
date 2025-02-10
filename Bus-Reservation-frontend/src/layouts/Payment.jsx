import React from "react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function PaymentGateway() {
  const location = useLocation();
  const { totalFare, selectedSeats, busId, busData } = location.state; 
  
  const [amount, setAmount] = useState(500);
  //   const farePerPassenger = 10;
  //   const totalFare = selectedSeats.length * farePerPassenger;

 
  // const total = location.state?.totalFare;
  // const payment = {
  //     noofPassenger: "2",
  //     farePerPassenger: "500",
  //     totalFare: "1000"
  // };
  // const{noofPassenger,farePerPassenger,totalFare} = payment;

  const handlePayment = async () => {
    try {
      const res = await fetch(`http://localhost:4000/payment/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ totalFare }),
      });

      const data = await res.json();
      console.log(data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // handlePaymentVerify Function
  const handlePaymentVerify = async (data) => {
    const options = {
      key: "rzp_test_QB1SpEjec4RrKY",
      amount: data.amount,
      currency: data.currency,
      name: "Abhishek",
      description: "Test Mode razorpay gateway",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await fetch(`http://localhost:4000/payment/verify`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await res.json();

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container p-3 mt-4">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 p-4 shadow">
          <h5 className="text-center fw-bold">Payment Gateway</h5>

          <div className='row'>
          <div className ='col'>
              <div className='mb-4'>
                  <strong>Bus : </strong>
                  {busData.busNo}
              </div>
          </div>
      </div>
          <div className='row'>
          <div className ='col'>
              <div className='mb-4'>
                  <strong>Selected Seat: </strong>
                  ${selectedSeats}
              </div>
          </div>
      </div>
          <div className="row">
            <div className="col">
              <div className="mb-4">
                <strong>Total fare: </strong>${totalFare}
              </div>
            </div>
          </div>
          <button onClick={handlePayment} className="btn btn-primary w-100">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
