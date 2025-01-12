import React from "react";

const WaitingForRyder = (props) => {
  return (
    <div>
      <h5
        className=" text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setRyderFoundPanelOpen(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img className="h-12" src="/assets/Car1.png" alt="car" />
        <div className="text-right">
          <h2 className="text-lg font-medium">{props.ride?.captain.fullname.firstname}</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">{props.ride?.captain.vehicle.plate}</h4>
          <p className="text-sm text-gray-600">Mercedes Benz S class 350</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
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
      </div>
    </div>
  );
};

export default WaitingForRyder;
