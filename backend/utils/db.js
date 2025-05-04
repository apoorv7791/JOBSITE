import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://apoorv32singhiitm:APOORVMONGODB@database.yx2gu.mongodb.net/JOBNITIN");
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;