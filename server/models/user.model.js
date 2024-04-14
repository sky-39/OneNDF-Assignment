import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 6,
    },
    referrer: {
      type: "string",
      default: "",
    },
    referral_code: {
      type: "string",
      unique: true,
    },
    referred_users: {
      type: "array",
      default: [],
    },
    referrals_used: {
      type: "array",
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
