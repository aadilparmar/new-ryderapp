import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForRyder from "../Components/LookingForRyder";
const Home = () => {
  const [pickup, setPickup] = React.useState("");
  const [drop, setDrop] = React.useState("");
  const [panelOpen, setPanelOpen] = React.useState(false);
  const panelRef = useRef();
  const closePanelRef = useRef();
  const vehiclePanelRef = useRef();
  const confirmRideRef = useRef();
  const lookingForRyderRef = useRef();
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = React.useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = React.useState(false);
  const [lookingForRyderPanelOpen, setLookingForRyderPanelOpen] = React.useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          duration: 0.5,
        });
        gsap.to(closePanelRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          duration: 0.5,
        });
        gsap.to(closePanelRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );
  useGSAP(
    function () {
      if (confirmRidePanelOpen) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanelOpen]
  );
  useGSAP(
    function () {
      if (lookingForRyderPanelOpen) {
        gsap.to(lookingForRyderRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(lookingForRyderRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForRyderPanelOpen]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-4"
        src="/assets/Ryderlogo2.png"
        alt="ryder-logo"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[30%] p-5 bg-white rounded-tl-2xl rounded-tr-2xl">
          <h5
            onClick={() => setPanelOpen(false)}
            ref={closePanelRef}
            className="absolute opacity-0 top-3 right-5 p-2 text-2xl "
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-8 py-2 rounded-lg mt-3 font-semibold w-full"
              type="text"
              placeholder="Add Pickup Location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="bg-[#eee] px-8 py-2 rounded-lg mt-5 font-semibold w-full"
              type="text"
              placeholder="Add Drop Location"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 translate-y-full rounded-tl-2xl rounded-tr-2xl"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 rounded-tl-2xl rounded-tr-2xl translate-y-full"
      >
        <ConfirmRide
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setLookingForRyderPanelOpen={setLookingForRyderPanelOpen}
        />
      </div>
      <div
        ref={lookingForRyderRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 rounded-tl-2xl rounded-tr-2xl  translate-y-full"
      >
        <LookingForRyder
          setLookingForRyderPanelOpen={setLookingForRyderPanelOpen}
        />
      </div>
    </div>
  );
};

export default Home;
