import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
     const [ captain, setCaptain ] = useState(null
    //   email: "",
    //   password: "",
    //   fullname: { firstname: "", lastname:""},
    //   vehicle: {
    //     vehicleType:"",
    //     capacity:"",
    //     color: "",
    //     plate:"",
    //   },
    // }
     );


    const updateCaptain = (captainData) => {
        setCaptain(captainData);
        console.log(captainData)
    };
    return (
        <CaptainDataContext.Provider value={{captain,setCaptain,updateCaptain}}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;