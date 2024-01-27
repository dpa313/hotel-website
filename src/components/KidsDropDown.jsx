import React from 'react'
import {RoomContext} from '../context/RoomContext'
import {Menu} from '@headlessui/react'
import {BsChevronDown} from 'react-icons/bs'
import { useContext } from 'react'

const list = [
  {name: '0 kids'},
  {name: '1 kids'},
  {name: '2 kids'},
  {name: '3 kids'},
  {name: '4 kids'},
]
const KidsDropDown = () => {
  const {kids,setKids} = useContext(RoomContext)
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {kids === '0 kids' ? 'No kids': kids}
        <BsChevronDown className='text-base text-accent-hover'/>
      </Menu.Button>
      <Menu.Items as='ul' className='absolute w-full flex flex-col bg-white z-40'>
        {
          list.map((item,index)=>{
            return (
              <Menu.Item as='li' 
                onClick={()=>setKids(item.name)}
                key={index} 
                className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer'>
                {item.name}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
}

export default KidsDropDown