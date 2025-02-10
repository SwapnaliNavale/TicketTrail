import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
//use location for total fair
export default function DemoPayments() {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    try {
      const res = await fetch(`http://localhost:4000/payment/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      console.log(data);
      handlePaymentVerify(data.data)
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
    <>
      <Card className="mt-6">
        <Card.Img
          variant="top"
          src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/pack-of-five-plain-tshirt-white/1.webp"
        />
        <Card.Body>
          <Card.Title>My First Product</Card.Title>
          <Card.Text>
            ₹500 <span className="text-muted">₹699</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handlePayment}>
            Buy Now
          </Button>
          <Toaster />
        </Card.Footer>
      </Card>
    </>
  );
}
