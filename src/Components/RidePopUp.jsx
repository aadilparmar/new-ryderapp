import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5 className=" text-center w-[93%] absolute top-0 " onClick={() => {props.setRidePopUpOpen(false)}}>
        <i className="ri-arrow-down-wide-line text-3xl text-black"></i>
      </h5>
      <h3 className="text-3xl  font-semibold mt-3 ">Rydes Available for you</h3>
      <div className="flex items-center justify-between m-1 mt-5 p-3 bg-[#f4f4f4] rounded-lg">
        <div className="flex items-center gap-3  justify-center">
          <img
            className="h-[3.5rem] w-[3.5rem] rounded-full object-cover"
            src="/assets/ryder1.jpg"
            alt=""
          />
          <h2 className="font-medium text-2xl">Aadil Parmar</h2>
        </div>
        <h5 className="font-medium text-gray-900 text-xl">1.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center mt-3">
        <div className="w-full rounded-lg bg-[#f4f4f4] m-3">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <p className="text-sm -mt-1 text-gray-600">Pick Up</p>
              <h3 className="text-lg font-medium">561/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <p className="text-sm -mt-1 text-gray-600">Drop</p>
              <h3 className="text-lg font-medium">A2-304</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Shilpan Onyx,Rajkot,Gujarat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 pb-5">
            <i className="ri-currency-line "></i>
            <div>
              <h3 className="text-lg font-medium">₹123.86</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 w-full">
        <button
          onClick={() => {props.setConfirmRidePopUpOpen(true);props.setRidePopUpOpen(false);}}
          className="w-full bg-green-800 text-white text-2xl font-medium p-5 rounded-lg "
        >
          Accept Ryde
        </button>
        <button
          onClick={() => {props.setRidePopUpOpen(false)}}
          className="w-full bg-gray-400 text-gray-900 text-2xl font-medium p-5 rounded-lg "
        >
          Ignore Ryde
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default RidePopUp;
