import mongoose from "mongoose";
async function connectDB() {
    try {
        const url = process.env.MONGODB_URI;
        if(!url) {
            throw new Error("MONGODB_URI is not defined")
        }
        await mongoose.connect(url);
        console.log("MongoDB Connection Successful");
    } catch(error) {
        console.error("MongoDB Connection Failed", error);
        process.exit(1);
    }
}
export {connectDB};