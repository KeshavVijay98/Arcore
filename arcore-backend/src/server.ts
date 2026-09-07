import "dotenv/config"
import { connectDB } from "./db";
import { User } from "./models/user-models";

connectDB();

console.log(User.modelName);
console.log(User.collection.name);