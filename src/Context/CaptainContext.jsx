import { createContext, useState, useContext } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    email: "",
    password: "",
    fullname: { firstname: "", lastname: "" },
    vehicle: { vehicleType: "", capacity: "", color: "", plate: "" },
  });

  return (
    <div>
      <CaptainDataContext.Provider value={{ captain, setCaptain }}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};
export default CaptainContext;
