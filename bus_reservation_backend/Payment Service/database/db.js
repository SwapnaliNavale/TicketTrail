import { connect } from "mongoose";

const connectToMongo = async () => {
    try {
        await connect('mongodb://localhost:27017/',
            {
                dbName: 'PaymentGateway'
            }
        );
        console.log("---***Database Connected Successfully***---")
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;