import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForRyder from "../Components/LookingForRyder";
import WaitingForRyder from "../Components/WaitingForRyder";
import { useState } from "react";
import axios from "axios";
import { SocketContext } from "../Context/SocketContext";
import { UserDataContext } from "../Context/UserContext";
import { useContext } from "react";


const Home = () => {
  const [pickup, setPickup] = React.useState("");
  const [drop, setDrop] = React.useState("");
  const [panelOpen, setPanelOpen] = React.useState(false);
  const panelRef = useRef();
  const closePanelRef = useRef();
  const vehiclePanelRef = useRef();
  const confirmRideRef = useRef();
  const lookingForRyderRef = useRef();
  const ryderFoundRef = useRef();
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = React.useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = React.useState(false);
  const [lookingForRyderPanelOpen, setLookingForRyderPanelOpen] =
    React.useState(false);
  const [ryderFoundPanelOpen, setryderFoundPanelOpen] = React.useState(false);
  const [activeField, setActiveField] = useState(null);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [vehicleType, setVehicleType] = useState(null);
  const [fare, setFare] = useState({});
  const [ ride, setRide ] = useState(null)
  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user]);

  socket.on("ride-confirmed", ride => {
    setryderFoundPanelOpen(true);
    setLookingForRyderPanelOpen(false);
    setRide(ride);
  });

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch {
      console.log("error");
    }
  };

  const handleDestinationChange = async (e) => {
    setDrop(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch {
      console.log("error");
    }
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
  useGSAP(
    function () {
      if (ryderFoundPanelOpen) {
        gsap.to(ryderFoundRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ryderFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ryderFoundPanelOpen]
  );

  async function findTrip() {
    setVehiclePanelOpen(true);
    setPanelOpen(false);
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination: drop },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setFare(response.data);
  }
  async function creatRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination: drop,
        vehicleType: vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
  }
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-[6rem] absolute left-5 top-4"
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
          <h4 className="text-3xl  font-extrabold mb-6">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="flex flex-row">
              <i className="ri-map-pin-fill text-green-700 text-xl pt-4 pr-2 "></i>
              <input
                onClick={() => {
                  setPanelOpen(true);
                  setActiveField("pickup");
                }}
                value={pickup}
                className="bg-[#eee] px-2 py-2 rounded-lg mt-3 font-semibold w-full"
                type="text"
                onChange={handlePickupChange}
                placeholder="Add Pickup Location"
              />
            </div>
            <div className="flex flex-row ">
              <i className="ri-map-pin-fill text-red-700 text-xl pt-6 pr-2"></i>
              <input
                onClick={() => {
                  setPanelOpen(true);
                  setActiveField("drop");
                }}
                value={drop}
                className="bg-[#eee] px-2 py-2 rounded-lg mt-5 font-semibold w-full"
                type="text"
                onChange={handleDestinationChange}
                placeholder="Add Drop Location"
              />
            </div>
          </form>
          <button
            onClick={findTrip}
            className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
          >
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setPickup={setPickup}
            setDrop={setDrop}
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 translate-y-full rounded-tl-2xl rounded-tr-2xl"
      >
        <VehiclePanel
          creatRide={creatRide}
          selectVehicle={setVehicleType}
          fare={fare}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 rounded-tl-2xl rounded-tr-2xl translate-y-full"
      >
        <ConfirmRide
          pickup={pickup}
          drop={drop}
          fare={fare}
          creatRide={creatRide}
          vehicleType={vehicleType}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setLookingForRyderPanelOpen={setLookingForRyderPanelOpen}
        />
      </div>
      <div
        ref={lookingForRyderRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 rounded-tl-2xl rounded-tr-2xl  translate-y-full overflow-hidden"
      >
        <LookingForRyder
          pickup={pickup}
          drop={drop}
          fare={fare}
          creatRide={creatRide}
          vehicleType={vehicleType}
          setLookingForRyderPanelOpen={setLookingForRyderPanelOpen}
        />
      </div>
      <div
        ref={ryderFoundRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-8 translate-y-full rounded-tl-2xl rounded-tr-2xl "
      >
        <WaitingForRyder ride={ride} setryderFoundPanelOpen={setryderFoundPanelOpen} />
      </div>
    </div>
  );
};

export default Home;
