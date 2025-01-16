import React from 'react'
import { Link } from "react-router-dom";
const ConfirmRidePopUpPanel = (props) => {

  const [otp,setOtp]=React.useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <h5 className=" text-center w-[93%] absolute top-0 " onClick={() => {props.setConfirmRidePopUpOpen(false);}}>
        <i className="ri-arrow-down-wide-line text-3xl text-black"></i>
      </h5>
      <h3 className="text-3xl  font-semibold mt-3 ">Confirm to Pick Up</h3>
      <div className="flex items-center justify-between m-1 mt-5 p-3 bg-[#f4f4f4] rounded-lg">
        <div className="flex items-center gap-3  justify-center">
          <img
            className="h-[3.5rem] w-[3.5rem] rounded-full object-cover"
            src="/assets/ryder1.jpg"
            alt=""
          />
          <h2 className="font-medium text-2xl">{props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className="font-medium text-gray-900 text-xl">1.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center mt-3">
        <div className="w-full rounded-lg bg-[#f4f4f4] m-3">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <p className="text-sm -mt-1 text-gray-600">Pick Up</p>
              <h3 className="text-lg font-medium">{props.ride?.pickup}</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <p className="text-sm -mt-1 text-gray-600">Drop</p>
              <h3 className="text-lg font-medium">{props.ride?.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 pb-5">
            <i className="ri-currency-line "></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full mt-6">
        <form className='' onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input type="number" className='bg-[#eee] px-6 py-4 font-mono rounded-lg w-full mt-3 mb-6 text-xl' placeholder='Enter OTP' value={otp} onChange={(e)=>setOtp(e.target.value)}/>
        <Link to="/captain-riding"
          className="w-full flex mb-3 justify-center bg-green-800 text-white text-2xl font-medium p-5 rounded-lg "
        >
          Confirm Ryde
        </Link>
        <button
          onClick={() => {props.setRidePopUpOpen(false);props.setConfirmRidePopUpOpen(false);}}
          className="w-full bg-red-800 text-white text-2xl font-medium p-5 rounded-lg "
        >
          Cancel Ryde
        </button>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default ConfirmRidePopUpPanel
