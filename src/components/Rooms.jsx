import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import Room from "../components/Room";
// import {SpinnerDotted} from 'react-spinners'

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);
  // console.log(rooms);
  return (
    <section className="mt-20">
        {/* ============SPINNER DOTTED NOT WORKING========== */}
      {/* {loading && (
        <div className="h-screen fixed top-0 bottom-0  bg-black/90 w-full z-50 flex items-center justify-center">
          <SpinnerDotted />
        </div>
      )} */}
      <div className="container mx-auto">
        <div className="text-center">
            <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
                Hotel & Spa Adina
            </div>
            <h2 className="font-primary text-[45px] mb-4">Rooms & Suits</h2>
        </div>
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-7 md:grid-cols-2 md:max-w-none lg:grid-cols-3 lg:max-w-none lg:mx-none">
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
