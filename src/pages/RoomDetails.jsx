import React from 'react'
import {useParams} from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import AdultsDropDown from '../components/AdultsDropDown'
import KidsDropDown from '../components/KidsDropDown'
import ScrollToTop from '../components/ScrollToTop'


const RoomDetails = () => {
  const {rooms} = useContext(RoomContext)
  const {id} = useParams()

  const room = rooms.find((room)=>{
    return room.id === Number(id)
  });
  // console.log(room)
  const {name,description,facilities,imageLg,price} = room
  return (
    <section>
      <ScrollToTop/>
      <div className='relative flex items-center justify-center bg-room bg-cover bg-center h-[560px]'>
          <div className='absolute w-full h-full bg-black/70'></div>
          <h1 className='text-white text-6xl text-center font-primary z-30'>{name} Details</h1>
      </div>  
      <div className='flex flex-col lg:flex-row h-full py-12'>
        <div className='w-full h-full lg:w-[60%] px-6'>
          <h2 className='h2'>{name}</h2>
          <p className='mb-8'>{description}</p>
          <img className='mb-8' src={imageLg} alt=""/>
          <div className='mt-12'>
            <h3 className='h3 mb-3'>Room Facilities</h3>
            <p className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse at nisi unde, necessitatibus minima fuga rem aut rerum hic autem laboriosam fugiat repudiandae a voluptas officiis est harum porro!</p>
            <div className='grid grid-cols-3 gap-6 mb-12'>
              {
                facilities.map((item,index)=>{
                  const {name,icon} = item
                  return <div key={index} className="flex items-center gap-x-3 flex-1">
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base'>{name}</div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className='w-full h-full lg:w-[40%]'>
          <div className='py-8 px-6 bg-accent/20 mb-12'>
            <div className='flex flex-col space-y-4 mb-4'>
              <h3>Your Reservation</h3>
              <div className='h-[60px]'>
                <CheckIn/>
              </div>
              <div className='h-[60px]'>
                <CheckOut/>
              </div>
              <div className='h-[60px]'>
                <AdultsDropDown/>
              </div>
              <div className='h-[60px]'>
                <KidsDropDown/>
              </div>
            </div>
            <button className='btn btn-lg btn-primary w-full'>Book Now for ${price}</button>
          </div>
          <div>
            <h3 className='h3'>Hotel Rules</h3>
            <p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, deleniti.</p>
            <ul className='flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-in: 3.00 PM - 9:00 PM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-out: 10:30 AM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                No Pets
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                No Smoking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetails