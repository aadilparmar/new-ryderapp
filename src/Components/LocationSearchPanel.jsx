import React from "react";

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDrop, activeField }) => {
  
  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickup(suggestion)
    } else if (activeField === 'drop') {
        setDrop(suggestion)
    }
    //setVehiclePanel(true)
    // setPanelOpen(false)
}


  return (
    <div>
      {suggestions.map(function (elem,idx) {
        return (
          <div key={idx} onClick={()=>{
            handleSuggestionClick(elem)
          }} className="flex justify-items-start m-2 p-2 border-2 border-white active:border-black  rounded-xl items-center  gap-5 my-2">
            <h2 className="bg-[#eee]   flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="text-lg font-semibold">
              {elem}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
