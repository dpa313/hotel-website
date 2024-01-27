import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css'
import {BsCalendar} from 'react-icons/bs'
import { useState } from 'react';

const CheckIn = () => {
  const [startDate,setStartDate] = useState(false)
  return (
    <div className='relative flex h-full bg-white items-center '>
      <div className='absolute z-10 pr-8 right-0'>
        <div className='text-accent text-base '>
          <BsCalendar/>
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={startDate}
        placeholderText="Check In"
        onChange={(date)=>setStartDate(date)}
      />
    </div>
  )
}

export default CheckIn