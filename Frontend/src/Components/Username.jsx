import React, { useContext } from "react";
import { FaArrowLeftLong, FaGreaterThanEqual } from "react-icons/fa6";
import { AppContext } from "../Context/Contextfirst";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import axios from "axios";
import OTP from "./OTP";
const Username = () => {
  const {
    emailentered,
    setemailentered,
    getusername,
    setusername,
    getemail,
    getpassword,
    setspinner,
    spinner,
    exist,
    setexist,
    validname,
    setvalidname,
    incomName,
    setincomName,
    otpform,
    setotpform,
  } = useContext(AppContext);
  // Checking user name is already exist or not in database
  const checkusername = async () => {
    try {
      if (getusername) {
        setspinner(true);

        const response = await axios.post(
          "http://localhost:5174/api/User/verifyusername",
          {
            username: getusername,
          }
        );
        setspinner(false);
        setexist(response.data.message);
        console.log(exist);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setspinner(true);
    let aboundense = setTimeout(() => {
      checkusername();
    }, 100);
    // checking is value start with number or symbol

    let userError = /^[A-Za-z][A-Za-z0-9_]*$/;
    if (userError.test(getusername)) {
      setvalidname(false);
    } else if (getusername === "") {
      setvalidname(false);
    } else {
      setvalidname(true);
    }
    // checking is username greater then 4
    if (getusername.length < 4 && getusername !== "") {
      setincomName(true);
    } else {
      setincomName(false);
    }
    return () => {
      clearInterval(aboundense);
      setspinner(false);
    };
  }, [getusername]);
  // button Control + sending data in data base
  const submitOTP = async () => {
    if (exist !== "exist" && !incomName && !validname) {
      setotpform(true);
    }

    try {
      let response = await axios.post(
        "http://localhost:5174/api/User/registerUser",
        {
          email: getemail,
          password: getpassword,
          username: getusername,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {otpform ? (
        <OTP />
      ) : (
        <>
          {/* Email form */}
          <div className="flex flex-col justify-content-between gap-5">
            {/* Back with Icon */}
            <div
              onClick={() => setemailentered(false)}
              className="flex gap-2 items-center w-fit cursor-pointer "
            >
              <FaArrowLeftLong />
              <h3 className="text-md font-bold ">Back</h3>
            </div>
            {/* Heading for Email  */}
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold ">Get your profile started</h1>
              <p className="text-lg text-gray-500">
                Add a username that's unique to you, this is how you'll appear
                to others.
              </p>
              <p className="text-md font-bold text-gray-600">
                You can't change your username, so choose wisely.
              </p>
            </div>
            {/* Username */}
            <div className="flex gap-3 flex-col my-3">
              <div className="flex flex-col gap-2 relative">
                <label className="text-[18px] font-bold text-gray-600">
                  Choose a username
                </label>

                <input
                  value={getusername}
                  onChange={(e) => setusername(e.target.value)}
                  type="text"
                  className="w-full p-2 border-gray-300 border rounded-lg "
                  placeholder="M_Sajjad"
                />
                {incomName ? (
                  <p className="text-md text-red-600 ">
                    Look like name is incomplete
                  </p>
                ) : exist === "exists" ? (
                  <p className="text-red-600 text-sm mt-1">
                    Username already exists
                  </p>
                ) : validname ? (
                  <p className="text-red-600 text-sm mt-1">
                    Username must start with Alphabet no space and symbol
                    between them
                  </p>
                ) : (
                  <p className="text-md text-gray-600 ">
                    Build trust by using your full name or business name
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
            {/* Continue Button to Submit */}

            {/* <button
              onClick={submitOTP}
              disabled={exist === "exists" || incomName || validname}
              type="button"
              className={`w-full p-2 text-lg text-center font-bold rounded-lg transition-all duration-200 ${
                exist === "exists" || incomName || validname
                  ? "bg-gray-200 text-black cursor-not-allowed"
                  : "bg-black text-white cursor-pointer"
              }`}
            >
              Create my account
            </button> */}

            <button
              onClick={submitOTP}
              disabled={exist === "exists" || incomName || validname}
              type="button"
              className={`w-full p-2 text-lg text-center font-bold rounded-lg transition-all duration-200 ${
                exist === "exists" || incomName || validname
                  ? "bg-gray-400 text-black  cursor-not-allowed"
                  : "bg-black text-white cursor-pointer"
              }`}
            >
              Create my account
            </button>
            <form action=""></form>
            {/* Terms of Conditions */}
          </div>
        </>
      )}
    </>
  );
};

export default Username;
