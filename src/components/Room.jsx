import React from 'react'
import {BsArrowsFullscreen,BsPeople} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Room = ({room}) => {
    const {id,name,image,size,maxPerson,description,price} = room
    // console.log(room);
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>
        <div className='overflow-hidden'>
            <img 
                className='group-hover:scale-110 duration-300 transition-all w-full'
                src={image} alt="" 
            />
        </div>
        <div className='bg-white shadow-xl h-[60px] max-w-[300px] mx-auto -translate-y-1/2 flex justify-center items-center font-semibold uppercase font-tertiary text-base tracking-[1px]'>
            <div className='flex items-center w-[80%] justify-between'>
                <div className='flex items-center gap-x-2'>
                    <div className='text-accent'>
                        <BsArrowsFullscreen className='text-[15px]'/>
                    </div>
                    <div className='flex gap-x-1'>
                        <div>Size</div>
                        <div>{size}m2</div>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div className='text-accent'>
                        <BsPeople className='text-[18px]'/>
                    </div>
                    <div className='flex gap-x-1'>
                        <div>Max people</div>
                        <div>{maxPerson}</div>
                    </div>
                </div>
            </div>
        </div>
        {/* Name & Description */}
        <div className='text-center'>
            <Link to={`/room/${id}`}>
                <h3 className='h3'>{name}</h3>
            </Link>
            <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0,56)}</p>
        </div>
        <Link to={`/room/${id}`}>
            <button className='btn btn-secondary btn-sm mx-w-[240px] mx-auto'>Book now from ${price}</button>
        </Link>
    </div>
  )
}

export default Room