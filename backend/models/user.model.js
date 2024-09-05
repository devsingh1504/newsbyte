import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      minlength: 10,
    },
    photo: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    education: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: 6,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
