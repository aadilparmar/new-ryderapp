import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className=" text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setConfirmRidePanelOpen(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>
      <h3 className="text-3xl  font-extrabold ">Confirm Your Ryde</h3>
      <div className="flex gap-2 justify-between flex-col items-center ">
        <img className="h-20" src="/assets/Car1.png" alt="car" />
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">561/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">A2-304</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Shilpan Onyx,Rajkot,Gujarat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line "></i>
            <div>
              <h3 className="text-lg font-medium">₹123.86</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setConfirmRidePanelOpen(false);
            props.setLookingForRyderPanelOpen(true);
          }}
          className="w-full bg-green-800 text-white font-semibold p-2 rounded-lg "
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
