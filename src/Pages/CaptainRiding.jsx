import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRIde from "../Components/FinishRIde";

const CaptainRiding = () => {
  const FinishRideRef=useRef();
  const[FinishRidePanel,setFinishRidePanel]=React.useState(false);

  useGSAP(
    function () {
      if (FinishRidePanel) {
        gsap.to(FinishRideRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(FinishRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [FinishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="/assets/Ryderlogo2.png" alt="" />
        <Link to='/captain-home' className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        
      </div>
      <div className="h-[20%] flex flex-col items-center relative justify-between bg-yellow-400">
      <h5
        className=" text-center w-[93%] absolute top-0 "
        onClick={() => {setFinishRidePanel(true)}}
      >
        <i className="ri-arrow-up-wide-line text-3xl text-black"></i>
      </h5>
        <h4 className="text-2xl font-bold mt-10">5 km Away</h4>
        <button className="bg-green-600 text-white text-2xl p-5 font-semibold w-full "onClick={()=>{setFinishRidePanel(true)}}>Complete Ride</button>
      </div>
      <div
        ref={FinishRideRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 translate-y-full rounded-tl-2xl rounded-tr-2xl"
      >
        <FinishRIde
          setFinishRidePanel={setFinishRidePanel}
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
