import express from "express";
import {
  registerUser,
  resendOTP,
  Verifiedemail,
  VerifyOTP,
  Verifyusername,
} from "../Controller/ApiesController.js";

export const Apies = express.Router();

Apies.post("/registerUser", registerUser);
Apies.post("/verifyemail", Verifiedemail);
Apies.post("/verifyusername", Verifyusername);
Apies.post("/verifyOTP/:id", VerifyOTP);
Apies.post("/resendOTP/:id", resendOTP);
