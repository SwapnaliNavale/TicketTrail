
import connectToMongo from './database/db.js';
import express from 'express';
import cors from 'cors'
import payment from './routes/payment.js'
    
connectToMongo();
const app = express()
const port = 4000

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Razorpay Payment Gateway Using React And Node Js ')
})
app.use('/payment', payment);   


    
app.listen(port, () => {
    console.log(` App listening at http://localhost:${port}`)
})