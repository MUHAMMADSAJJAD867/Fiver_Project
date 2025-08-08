import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [email, setemail] = useState(false);

  const [getemail, setgetemail] = useState("");
  const [getpassword, setgetpassword] = useState("");
  const [spinner, setspinner] = useState(false);
  const [exist, setexist] = useState("");
  const [emailenter, setemailentered] = useState(false);
  const [validname, setvalidname] = useState(false);
  const [incomName, setincomName] = useState(false);
  const [otpform, setotpform] = useState(false);
  const [getusername, setusername] = useState("");
  const [code, setCode] = useState(Array(6).fill(""));
  const [registerPopup, setregisterPopup] = useState(false);

  return (
    <AppContext.Provider
      value={{
        email,
        setemail,
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
        getusername,
        setusername,
        validname,
        setvalidname,
        incomName,
        setincomName,
        otpform,
        setotpform,
        code,
        setCode,
        registerPopup,
        setregisterPopup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
