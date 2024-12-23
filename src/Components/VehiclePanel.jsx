import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
          className=" text-center w-[93%] absolute top-0 "
          onClick={() => {
            props.setVehiclePanelOpen(false);
          }}
        >
          <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
        </h5>
        <h3 className="text-2xl font-semibold ">Choose your Ryde</h3>
        <div onClick={()=>{props.setConfirmRidePanelOpen(true)}} className="active:border-black border-2 rounded-2xl flex p-3 items-center justify-between my-3 mt-5">
          <img className="h-12" src="/assets/Car1.png" alt="car-1" />
          <div className=" w-1/2">
            <h4 className="font-medium text-sm">
              GoRyder{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins Away</h5>
            <p className="font-medium text-xs text-gray-500">
              Affordable,compact Rides
            </p>
          </div>
          <h2 className="text-2xl font-semibold">₹203.40</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanelOpen(true)}} className="active:border-black border-2 rounded-2xl flex p-3 items-center justify-between my-3">
          <img className="h-12" src="/assets/Scooter1.png" alt="Moto-1" />
          <div className="ml-10 w-1/2">
            <h4 className="font-medium text-sm">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins Away</h5>
            <p className="font-medium text-xs text-gray-500">
              Affordable,compact Rides
            </p>
          </div>
          <h2 className="text-2xl font-semibold">₹203.40</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanelOpen(true)}} className="active:border-black border-2 rounded-2xl flex p-3 items-center justify-between my-3">
          <img className="h-12" src="/assets/Auto1.png" alt="car-1" />
          <div className="ml-4 w-1/2">
            <h4 className="font-medium text-sm">
              Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins Away</h5>
            <p className="font-medium text-xs text-gray-500">
              Affordable,compact Rides
            </p>
          </div>
          <h2 className="text-2xl font-semibold">₹203.40</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
