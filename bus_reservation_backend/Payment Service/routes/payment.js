// import express from 'express';
// import Razorpay from 'razorpay';
// const router = express.Router();
// import Payment from '../Models/Payment.js'
// import crypto from 'crypto';

// const razorpayInstance = new Razorpay({
//     key_id: 'rzp_test_QB1SpEjec4RrKY',
//     key_secret: '4RXJmXk5Vs6VuBdTfRgBSbda',
// });

// // ROUTE 1
// router.get('/get-payment', (req, res) => {
//     res.json("Payment Details");
// });

// router.post(`/order`, (req, res) => {
//     const { amount } = req.body;
//     console.log(amount);

//     try {
//         const options = {
//             amount: Number(amount * 100),
//             currency: 'INR',
//             receipt: crypto.randomBytes(10).toString('hex'),
//         };

//         razorpayInstance.orders.create(options, (error, order) => {
//             if (error) {
//                 console.log(error);
//                 return res.status(500).json({
//                     message: "Something went wrong!!..."
//                 });
//             }

//             // Send the order data in the response
//             res.status(200).json({
//                 data: order
//             });
//             console.log(order);
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: "Error creating order"
//         });
//     }
// });

// // Route 2: Create and verify Api using post method
// //http://localhost:4000/payment/verify

// router.post('/verify', async (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     console.log("req.body", req.body);

//     try {
//         //create sign
//         const sign = razorpay_order_id + "|" + razorpay_payment_id;
//         //creating expected Sign
//         const expectedSign = crypto.createHmac("sha256", "4RXJmXk5Vs6VuBdTfRgBSbda").update(sign.toString()).digest("hex");

//         console.log(razorpay_signature===expectedSign);

//         //creating isAuthentic check
//         const isAuthentic = expectedSign===razorpay_signature;

//         //conditional checking
//         if(isAuthentic){
//             const payment = new Payment({
//                 razorpay_order_id,
//                 razorpay_payment_id,
//                 razorpay_signature
//             });

//             //save payment here
//             await payment.save();

//             //send res

//             res.json({
//                 message : "Payment Successfully Done!!"
//             })
//         }
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message : "Internal server error!!!..."
//         })
        
//     }

// })



// export default router;


import express from 'express';
import Razorpay from 'razorpay';
const router = express.Router();

import crypto from 'crypto';

const razorpayInstance = new Razorpay({
    key_id: 'rzp_test_QB1SpEjec4RrKY',
    key_secret: '4RXJmXk5Vs6VuBdTfRgBSbda',
});

// ROUTE 1
router.get('/get-payment', (req, res) => {
    res.json("Payment Details");
});

router.post(`/order`, (req, res) => {
    const { amount } = req.body;
    console.log(amount);
    
    try {
        const options = {
            amount: Number(amount * 100), 
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex'),
        };

        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    message: "Something went wrong!!..."
                });
            }

            // Send the order data in the response
            res.status(200).json({
                data : order
            });
            console.log(order);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating order" 
        });
    }
});

export default router;