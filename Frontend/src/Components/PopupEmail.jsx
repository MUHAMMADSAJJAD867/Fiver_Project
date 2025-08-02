import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AppContext } from "../Context/Contextfirst";

const PopupEmail = () => {
  const { setemail, email } = useContext(AppContext);
  return (
    <>
      {/* Email form */}
      <form action="" className="flex flex-col justify-content-between gap-5">
        {/* Back with Icon */}
        <div
          onClick={() => setemail(false)}
          className="flex gap-2 items-center w-fit cursor-pointer "
        >
          <FaArrowLeftLong />
          <h3 className="text-md font-bold ">Back</h3>
        </div>
        {/* Heading for Email  */}
        <h1 className="text-2xl font-bold mb-2">Continue with your email</h1>
        {/* Email */}
        <div className="flex gap-3 flex-col">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border-gray-300 border rounded-lg "
              placeholder="name@email.com"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border-gray-300 border rounded-lg "
              placeholder="name@email.com"
            />
            {/* Password Conditions */}
            <ul className="flex flex-col">
              <li className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-gray-500" />
                <p className="text-gray-500">At least 8 characters</p>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-gray-500" />
                <p className="text-gray-500">At least 1 uppercase letter</p>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-gray-500" />
                <p className="text-gray-500">At least 1 lowercase letter</p>
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-gray-500" />
                <p className="text-gray-500">At least 1 number</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Continue Button to Submit */}
        <button
          type="button"
          className="w-full p-2 text-lg bg-gray-200 text-gray-500 text-center font-bold rounded-lg"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default PopupEmail;
