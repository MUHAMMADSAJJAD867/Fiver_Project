import React, { useContext } from "react";
import { FaApple, FaFacebookF } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AppContext } from "../Context/Contextfirst";

const PopupRegistration = () => {
  const { email, setemail } = useContext(AppContext);

  return (
    <>
      <div className="h-[30px]"></div>

      <div className=" bg-white flex flex-col justify-between items-center h-full">
        {/* Space Bar */}
        <div className="w-full">
          {/* Create a new Account */}
          <div className="h2 text-xl mb-10">
            <h2 className="text-2xl font-bold ">Create a new account</h2>
            <div className="flex text-[15px] gap-2 my-2 ">
              <h3 className=" ">Already have an account?</h3>
              <button type="button" className="underline cursor-pointer">
                Sign in
              </button>
            </div>
          </div>
          {/* For Google direct login */}
          <div className="flex flex-col gap-2 my-2">
            {/* Google Login */}
            <button
              type="button"
              className="hover:bg-gray-100 cursor-pointer border border-gray-300 flex justify-center items-center rounded  p-1 w-full relative"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/2875/2875404.png"
                alt=""
                className="w-[25px] absolute start-5 "
              />
              <h3 className="text-center font-bold text-lg">Goolge</h3>
            </button>
            {/* Email Login */}
            <button
              onClick={() => setemail(true)}
              className="hover:bg-gray-100 cursor-pointer border border-gray-300 flex justify-center items-center rounded  p-1 w-full relative"
            >
              <MdOutlineMailOutline
                size={25}
                className="w-[25px] absolute start-5"
              />
              <h3 className="text-center font-bold text-lg">Goolge</h3>
            </button>
          </div>
          {/* OR hr line */}
          <div className="flex items-center gap-3 my-4">
            <hr className="border-0 bg-gray-300 h-[1px] w-full" />
            <p className="text-gray-400 font-bold text-sm">OR</p>
            <hr className="border-0 bg-gray-300 h-[1px] w-full" />
          </div>

          {/* Apple and facebook Login */}
          <div className="flex items-center gap-2">
            {/* Apple Login */}
            <button
              type="button"
              className="hover:bg-gray-100 cursor-pointer border border-gray-300 flex justify-center items-center rounded  p-1 w-full relative"
            >
              <FaApple
                size={20}
                className="hidden lg:block w-[25px] absolute start-2"
              />
              <h3 className="text-center font-bold text-[15px]">Apple</h3>
            </button>
            {/* Facebook Login */}
            <button
              type="button"
              className="hover:bg-gray-100 cursor-pointer border border-gray-300 flex justify-center items-center rounded  p-1 w-full relative"
            >
              <FaFacebookF
                size={15}
                className="hidden lg:block w-[25px] absolute start-2 text-blue-600"
              />
              <h3 className="text-blue-500 lg:text-black text-center font-bold text-[15px]">
                Facebook
              </h3>
            </button>
          </div>
        </div>
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
  );
};

export default PopupRegistration;
