import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please Enter all the Value"],
    },
    username: {
      type: String,
      required: [true, "Please Enter all the Value"],
    },
    password: {
      type: String,
      required: [true, "Please Enter all the Value"],
    },
  },
  { timestamps: [true, "Please Enter all the Value"] }
);
export const User = mongoose.model("user", userSchema);
