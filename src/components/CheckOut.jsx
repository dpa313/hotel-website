import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { useState } from "react";
const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex h-full items-center bg-white ">
      <div className="absolute z-10 pr-8 right-0">
        <div className="text-accent text-base ">
          <BsCalendar />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
