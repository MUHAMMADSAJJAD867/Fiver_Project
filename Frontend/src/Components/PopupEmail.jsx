import React, { useContext } from "react";
import { FaArrowLeftLong, FaGreaterThanEqual } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AppContext } from "../Context/Contextfirst";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import toast from "react-hot-toast";
import Username from "./Username";

const PopupEmail = () => {
  const {
    setemail,
    email,
    getemail,
    setgetemail,
    getpassword,
    setgetpassword,
    spinner,
    setspinner,
    exist,
    setexist,
    emailenter,
    setemailentered,
  } = useContext(AppContext);

  const checkmail = async () => {
    try {
      if (getemail) {
        setspinner(true);

        const response = await axios.post(
          "http://localhost:5174/api/User/verifyemail",
          {
            email: getemail,
          }
        );
        setspinner(false);
        setexist(response.data.message);
        console.log(exist);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    let aboundense = setTimeout(() => {
      checkmail();
    }, 1500);
    return () => {
      clearInterval(aboundense);
    };
  }, [getemail]);
  const submitEmailForm = () => {
    const isValidEmail = getemail.endsWith("@gmail.com");
    const isValidPassword =
      getpassword.length >= 8 &&
      /[A-Z]/.test(getpassword) && // has uppercase
      /[a-z]/.test(getpassword) && // has lowercase
      /[0-9]/.test(getpassword); // has number

    if (isValidEmail && isValidPassword && exist !== "exists") {
      setemailentered(true); // move to Username.jsx
    } else {
      toast.error("Please enter a valid email and password");
    }
  };
  const isValidEmail = getemail.endsWith("@gmail.com");
  const hasMinLength = getpassword.length >= 8;
  const hasUppercase = /[A-Z]/.test(getpassword);
  const hasLowercase = /[a-z]/.test(getpassword);
  const hasNumber = /[0-9]/.test(getpassword);

  const isValidPassword =
    hasMinLength && hasUppercase && hasLowercase && hasNumber;
  return (
    <>
      {emailenter ? (
        <Username />
      ) : (
        <>
          {" "}
          {/* Email form */}
          <div className="flex flex-col justify-content-between gap-5">
            {/* Back with Icon */}
            <div
              onClick={() => setemail(false)}
              className="flex gap-2 items-center w-fit cursor-pointer "
            >
              <FaArrowLeftLong />
              <h3 className="text-md font-bold ">Back</h3>
            </div>
            {/* Heading for Email  */}
            <h1 className="text-2xl font-bold mb-2">
              Continue with your email
            </h1>
            <form action="">
              {/* Email */}
              <div className="flex gap-3 flex-col">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-lg font-bold">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      value={getemail}
                      onChange={(e) => setgetemail(e.target.value)}
                      type="email"
                      className="w-full p-2 border-gray-300 border rounded-lg "
                      placeholder="name@email.com"
                    />
                    {exist === "exists" && (
                      <p className="text-red-600 text-sm mt-1">
                        Email already exists
                      </p>
                    )}
                    {spinner && (
                      <PulseLoader
                        size={6}
                        className="absolute right-2 top-1/2 -translate-y-1/2 "
                      />
                    )}
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-lg font-bold">
                    Password
                  </label>
                  <input
                    value={getpassword}
                    onChange={(e) => setgetpassword(e.target.value)}
                    type="password"
                    className="w-full p-2 border-gray-300 border rounded-lg "
                    placeholder="Password"
                  />
                  {/* Password Conditions */}
                  <ul className="flex flex-col">
                    <li
                      className={`flex items-center gap-2 ${
                        hasMinLength
                          ? "text-green-600 underline"
                          : "text-gray-500"
                      }`}
                    >
                      <IoCheckmarkCircleOutline
                        className={`${
                          hasMinLength ? "text-green-600" : "text-gray-500"
                        }`}
                      />
                      <p>At least 8 characters</p>
                    </li>
                    <li
                      className={`flex items-center gap-2 ${
                        hasUppercase
                          ? "text-green-600 underline"
                          : "text-gray-500"
                      }`}
                    >
                      <IoCheckmarkCircleOutline
                        className={`${
                          hasUppercase ? "text-green-600" : "text-gray-500"
                        }`}
                      />
                      <p>At least 1 uppercase letter</p>
                    </li>
                    <li
                      className={`flex items-center gap-2 ${
                        hasLowercase
                          ? "text-green-600 underline"
                          : "text-gray-500"
                      }`}
                    >
                      <IoCheckmarkCircleOutline
                        className={`${
                          hasLowercase ? "text-green-600" : "text-gray-500"
                        }`}
                      />
                      <p>At least 1 lowercase letter</p>
                    </li>
                    <li
                      className={`flex items-center gap-2 ${
                        hasNumber ? "text-green-600 underline" : "text-gray-500"
                      }`}
                    >
                      <IoCheckmarkCircleOutline
                        className={`${
                          hasNumber ? "text-green-600" : "text-gray-500"
                        }`}
                      />
                      <p>At least 1 number</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Continue Button to Submit */}
              <button
                type="button"
                onClick={submitEmailForm}
                disabled={
                  !(isValidEmail && isValidPassword && exist !== "exists")
                }
                className={`w-full p-2 text-lg text-center font-bold rounded-lg transition-all duration-200 ${
                  isValidEmail && isValidPassword && exist !== "exists"
                    ? "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {exist === "exists" ? "Sign in" : "Continue"}
              </button>
            </form>
            {/* Terms of Conditions */}
            <div className="">
              <p className="text-[13px]">
                By joining, you agree to the Fiverr{" "}
                <a href="#" className="underline text-green-600">
                  Terms of Service
                </a>{" "}
                and to occasionally receive emails from us. Please read our{" "}
                <a href="#" className="underline text-green-600">
                  Privacy
                </a>{" "}
                <a href="#" className="underline text-green-600">
                  Policy
                </a>
                to learn how we use your personal data.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopupEmail;
