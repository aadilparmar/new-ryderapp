import React from "react";
import { Link } from "react-router-dom";
const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed right-2 top-2 flex items-center justify-center rounded-full bg-white h-10 w-10">
      <i className="text-lg font-bold ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="home"
        />  
      </div>
      <div className="h-1/2 px-5 pt-5 overfolw-hidden bg-white rounded-t-3xl">
      <div className="flex items-center justify-between">
        <img className="h-14" src="/assets/Car1.png" alt="car" />
        <div className="text-right">
          <h2 className="text-2xl font-bold text-green-700">Aadil Parmar</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ 03 2425</h4>
          <p className="text-sm text-gray-600 mt-1">Mercedes Benz S class 350</p>
        </div>
      </div>
      <div className="flex px-5 py-10 justify-between flex-col items-center">
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
        <button className="w-full bg-green-800 text-white text-xl font-semibold p-4 rounded-lg ">Make a Payment</button>
      </div>    
    </div>
  );
};

export default Riding;
