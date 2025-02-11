import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const PaymentSchema = new Schema({
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id: {
        type: String,
        required: true,
    },
    razorpay_signature: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
export default model('payment', PaymentSchema);






// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     orderId: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     amount: {
//         type: Number,
//         required: true,
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'User', // Assuming you have a User model
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ['PENDING', 'SUCCESS', 'FAILED'],
//         default: 'PENDING',
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model('Order', orderSchema);