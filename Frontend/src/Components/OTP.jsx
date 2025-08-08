import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AppContext } from "../Context/Contextfirst";
import axios from "axios";
import toast from "react-hot-toast";

const OTP = () => {
  const { otpform, setotpform, getemail, setregisterPopup } =
    useContext(AppContext);
  // state
  const [code, setCode] = useState("");
  const handleChange = (value) => {
    if (/^\d*$/.test(value) && value.length <= 6) {
      setCode(value);
    }
  };
  //
  // const handleChange = async (value, index) => {
  //   if (/^\d*$/.test(value)) {
  //     const newCode = [...code];
  //     newCode[index] = value;
  //     setCode(newCode);

  //     // Auto focus next input
  //     if (value && index < 5) {
  //       document.getElementById(`code-${index + 1}`).focus();
  //     }
  //   }
  // };
  console.log(localStorage.getItem("user"));
  const VerifyOTP = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    const { _id } = user;
    console.log(_id);

    try {
      // calling api
      const response = await axios.post(
        `http://localhost:5174/api/User/verifyOTP/${_id}`,
        {
          OTP: code,
        }
      );
      if (response.data) {
        toast.success("Welcome");
        setregisterPopup(false);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Wrong OTP Dear Try Again Sweaty"
      );
    }
  };
  const resendOTP = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    const { _id, email } = user;
    console.log(_id);

    try {
      // calling api
      const response = await axios.post(
        `http://localhost:5174/api/User/resendOTP/${_id}`,
        {
          email: email,
        }
      );
      if (response.data) {
        toast.success("Otp send");
      }
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      toast.error(
        error.response?.data?.message || "To much attemp try again later deat"
      );
    }
  };

  useEffect(() => {
    if (code.length === 6) {
      VerifyOTP();
    }
  }, [code]);
  return (
    <>
      {/* Email form */}
      <div className="flex flex-col  gap-5">
        {/* Back with Icon */}
        <div
          onClick={() => setotpform(false)}
          className="flex gap-2 items-center w-fit cursor-pointer "
        >
          <FaArrowLeftLong />
          <h3 className="text-md font-bold ">Back</h3>
        </div>
        {/* Heading for Email  */}
        <div className="flex flex-col items-center  min-h-screen bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold mb-2">Confirm your email</h1>
            <p className="text-gray-700 mb-6 text-[15px]">
              Enter the verification code we emailed to:
              <span className="font-semibold">{getemail}</span>.
              <a href="#" className="text-blue-600 hover:underline">
                Use a different email
              </a>
            </p>

            {/* Code input boxes */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                maxLength="6"
                value={code}
                onChange={(e) => handleChange(e.target.value)}
                className="w-30 h-12 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Resend code link */}
            <button
              onClick={resendOTP}
              className="text-sm p-3  bg-blue-600 text-white rounded-lg font-bold hover:underline"
            >
              Resend OTP
            </button>
          </div>
        </div>
        {/* Terms of Conditions */}
      </div>
    </>
  );
};

export default OTP;
