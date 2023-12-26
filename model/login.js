import mongoose from "mongoose";
const { Schema, model } = mongoose;

const loginSchema = new Schema({
  emailOrcontact: {
    type: String,
    required: [true, "Password Is Required"],
  },
  password: {
    type: String,
    required: [true, "Password Is Required"],
  },
});

export const Login = model("Login", loginSchema);
