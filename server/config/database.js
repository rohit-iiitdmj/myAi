


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);  // Exit process with failure
    }
};

export default connectDB;  // Ensure this is the default export


// exports.connect = () => {
//     mongoose.set('strictQuery', true);
//       console.log(process.env.MONGODB_URL)
//     mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
//     })
//     .then(() => console.log("DB Connected Successfully"))
//     .catch( (error) => {
//         console.log("DB Connection Failed");
//         console.error(error);
//         process.exit(1);
//     } )
// };