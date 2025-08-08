import React, { useContext, useState } from "react";

import PopupRegistration from "./PopupRegistration";
import { AppContext } from "../Context/Contextfirst";
import PopupEmail from "./PopupEmail";
const RegPopUp = () => {
  const { email } = useContext(AppContext);

  return (
    <>
      <div className="h-screen w-full fixed top-0 bg-black/50 flex justify-center items-center">
        <div className="w-[90%] h-[90%] mx-auto sm:w-[80%] md:w-[70%] lg:w-[65%] rounded-lg overflow-hidden ">
          <div className="flex  h-full">
            <div className="w-1/2 bg-blue-200">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* form Area */}
            <div className="flex flex-col  justify-between p-8 bg-white w-1/2">
              {/* form start */}
              {email ? <PopupEmail /> : <PopupRegistration />}
              {/* from end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegPopUp;
