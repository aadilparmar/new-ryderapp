import React from "react";

const LocationSearchPanel = (props) => {
  const location = [
    "Shilpan Onyx Opp. Nand Hieghts 132 Feet Ring Road, Naranpura, Ahmedabad, Gujarat 380013",
    "Shilpan Nova Opp. Nand Hieghts 150 Feet Ring Road , Ahmedabad, Gujarat 380013",
    "Shilpan Reva Opp. 17843 Feet Ring Road, Naranpura, Mehsana, Gujarat 380013",
    "Relinace Mall Opp. Nand Hieghts 132 Feet Ring Road, Naranpura, Ahmedabad, Gujarat 380013",
  ];

  return (
    <div>
      {location.map(function (elem,idx) {
        return (
          <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }} className="flex  m-2 p-2 border-2 border-white active:border-black  rounded-xl items-center justify-center gap-4 my-2">
            <h2 className="bg-[#eee] h-12 flex items-center justify-center w-24 rounded-full">
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
