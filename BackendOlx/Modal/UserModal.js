import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Buyer', 'User', "Admin","Seller"],
        default: "Buyer"
    },
    
    cart: {
        type: [String]
    },
    wishlist: {
        type: [String]
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
})
export default mongoose.model("User", userSchema)
