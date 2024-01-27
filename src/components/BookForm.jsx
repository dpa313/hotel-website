import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import AdultsDropDown from './AdultsDropDown'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import KidsDropDown from './KidsDropDown'

const BookForm = () => {
  const {handleClick} = useContext(RoomContext)
  return (
    <form className='bg-white h-[300px] w-full lg:h-[70px] '>
      <div className='flex flex-col w-full h-full lg:flex-row'>
        <div className='flex-1 border-r'>
          <CheckIn/>
        </div>
        <div className='flex-1 border-r'>
          <CheckOut/>
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropDown/>
        </div>
        <div className='flex-1 border-r'>
          <KidsDropDown/>
        </div>
        <button 
          onClick={(e)=> handleClick(e)}
          type='submit' 
          className='btn btn-primary'>Check now</button>
      </div>
    </form>
  )
}

export default BookForm