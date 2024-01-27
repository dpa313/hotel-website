import React from 'react'
import {Menu} from '@headlessui/react'
import {BsChevronDown} from 'react-icons/bs'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

const list = [
  { name: '1 Adult'},
  { name: '2 Adult'},
  { name: '3 Adult'},
  { name: '4 Adult'},
]

const AdultsDropDown = () => {
  const {adults,setAdults} = useContext(RoomContext)
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className="flex w-full h-full justify-between items-center px-8">
      <p>{adults}</p>
      <BsChevronDown className='text-base text-accent-hover'/>
      </Menu.Button>
      <Menu.Items as='ul' className="absolute w-full flex flex-col bg-white z-40">
      {
        list.map((li,index)=>{
          return (
            <Menu.Item 
              onClick={()=>setAdults(li.name)}
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white flex justify-center items-center cursor-pointer"
              as='li' key={index}>{li.name}</Menu.Item>
          )
        })
      }
      </Menu.Items>
    </Menu>
  )
}

export default AdultsDropDown