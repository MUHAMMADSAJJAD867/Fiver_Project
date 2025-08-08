import { User } from "../model/Usermodel.js";
import otpGenerator from "otp-generator";
import bcrypt from "bcrypt";
import { SendOtp } from "./OTP.js";
export const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    res.status(404);
    throw new Error("please enter all the Values");
  }
  // check that as there same email or username already exist or not
  // Email
  let checkemail = await User.findOne({ email });
  if (checkemail) {
    res.status(401);
    res.send("same email");
    throw new Error("Email already Exist");
  }
  // username
  let checkusername = await User.findOne({ username });
  if (checkusername) {
    res.status(401);
    throw new Error("Username already Exist");
  }
  //   storing password in hash form for safety
  let hashPassword = await bcrypt.hash(password, 10);

  // Sending OTP to Email

  // Creating OTP
  let OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  // function for OTP
  SendOtp(email, OTP);
  // Checking is there any email exist or not

  //   Sending Data in Database
  const createuser = await User.create({
    email,
    password: hashPassword,
    username,
    OTP,
  });
  res.send(createuser);
};
// Verify Email
export const Verifiedemail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(401);
    throw new Error("Please in insert email");
  }
  let isUser = await User.findOne({ email });
  if (isUser) {
    res.status(200).json({ message: "exists" });
  } else {
    res.status(200).json({ message: "Email not exists" });
  }
};
// Verifying Username
export const Verifyusername = async (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.status(401);
    throw new Error("Please in insert email");
  }
  let isUser = await User.findOne({ username });
  if (isUser) {
    res.status(200).json({ message: "exists" });
  } else {
    res.status(200).json({ message: "username not exists" });
  }
};

// Verifying OTP
export const VerifyOTP = async (req, res) => {
  const { OTP } = req.body;
  const user_id = req.params.id;
  // check that OTP is entered or not from frontend
  if (!OTP) {
    res.status(404);
    throw new Error("Please Enter OTP");
  }
  // check User
  const findUser = await User.findById(user_id);
  if (!findUser) {
    res.status(404);
    throw new Error("User not found");
  }
  // check OTP match or not
  if (OTP === findUser.OTP) {
    findUser.OTP = "Done";
    await findUser.save();
  } else {
    res.status(404);
    throw new Error("Wrong OTP or OTP time Expired");
  }
  res.send(findUser);
};

// // Verifying OTP
// export const VerifyOTP = async (req, res) => {
//   const { OTP } = req.body;
//   const user_id = req.params.id;
//   if (!OTP) {
//     throw new Error("Please Enter OTP");
//   }

//   // checking by user id
//   const findUser = await User.findById(user_id);
//   if (!findUser) {
//     res.status(404);
//     throw new Error("user no not found");
//   }
//   // Now check OTP match or not
//   if (OTP === findUser.OTP) {
//     findUser.OTP = "Done";
//     await findUser.save();
//   } else {
//     res.status(404);
//     throw new Error("Wrong OTP or OTP inspired");
//   }
//   res.send(findUser);
// };

export const resendOTP = async (req, res) => {
  const user_id = req.params.id;
  const { email } = req.body;

  let findUser = await User.findById(user_id);

  if (!findUser) {
    res.status("User not find");
    throw new Error("Something Wrong");
  }
  let OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  SendOtp(email, OTP);
  findUser.OTP = OTP;
  await findUser.save();
  res.send(findUser);
};
