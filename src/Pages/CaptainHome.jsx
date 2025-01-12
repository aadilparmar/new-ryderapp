import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../Components/CaptainDetails";
import RidePopUp from "../Components/RidePopUp";
import ConfirmRidePopUpPanel from "../Components/ConfirmRidePopUpPanel";
import { CaptainDataContext } from "../Context/CaptainContext";
import { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const CaptainHome = () => {
  const panelRef = useRef();
  const ConfirmRidepanelRef = useRef();
  const [confirmRidePanel, setConfirmRidePopUpOpen] = React.useState(false);
  const [ridePopUpOpen, setRidePopUpOpen] = React.useState(false);
  const [ride, setRide] = useState(null);

  const { captain } = useContext(CaptainDataContext);
  const { socket } = useContext(SocketContext);
  useEffect(() => {
    socket.emit('join', {
        userId: captain._id,
        userType: 'captain'
    },[captain])
    const updateLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              
                socket.emit('update-location-captain', {
                    userId: captain._id,
                    location: {
                        ltd: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
            })
        }
    }

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()

    // return () => clearInterval(locationInterval)
}, [])

  socket.on("new-ride", (data) => {
    setRide(data);
    setRidePopUpOpen(true);
  });

  async function confirmRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {
        rideId: ride._id,
        userId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRidePopUpOpen(false);
    setConfirmRidePopUpOpen(true);
  }

  useGSAP(
    function () {
      if (ridePopUpOpen) {
        gsap.to(panelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(panelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpOpen]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(ConfirmRidepanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ConfirmRidepanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  return (
    <div className="h-screen relative">
      <Link
        to="/captain/logout"
        className="fixed right-5 top-4 flex items-center justify-center rounded-full h-[6rem] w-[6rem]"
      >
        <i className="text-3xl font-bold ri-logout-box-r-line"></i>
      </Link>
      <img
        className="w-[6rem]  absolute left-5 top-4"
        src="/assets/Ryderlogo2.png"
        alt="ryder-logo"
      />
      <div className="h-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="home"
        />
      </div>
      <div className="flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[1/2] px-5 pt-5 overfolw-hidden bg-[#f4d03f] rounded-t-3xl">
          <CaptainDetails  />
        </div>
        <div
          ref={panelRef}
          className="fixed z-10 bottom-0 bg-[#f4d03f] w-full px-3 py-8 translate-y-full rounded-tl-2xl rounded-tr-2xl "
        >
          <RidePopUp
            ride={ride}
            confirmRide={confirmRide}
            setRidePopUpOpen={setRidePopUpOpen}
            setConfirmRidePopUpOpen={setConfirmRidePopUpOpen}
          />
        </div>
        <div
          ref={ConfirmRidepanelRef}
          className="fixed z-10 bottom-0 bg-[#f4d03f] w-full px-3 py-8 h-screen translate-y-full"
        >
          <ConfirmRidePopUpPanel
            setConfirmRidePopUpOpen={setConfirmRidePopUpOpen}
            setRidePopUpOpen={setRidePopUpOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
