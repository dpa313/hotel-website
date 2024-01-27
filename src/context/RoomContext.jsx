import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import {roomData} from '../data'

export const RoomContext = createContext()
const RoomProvider = ({children}) => {
    const [rooms,setRooms] = useState(roomData)
    const [adults,setAdults] = useState('1 Adults')
    const [kids,setKids] = useState('0 Kids')
    const [total,setTotal] = useState(0)
    const [loading,setLoading] = useState(false)
    // console.log(Number(adults[0]));
    // console.log(Number(kids[0]));

    useEffect(()=>{
      setTotal(Number(adults[0])+ Number(kids[0]))
    })
    // console.log(total)

    const handleClick = (e) => {
        e.preventDefault()
        setLoading(true)
        // console.log(total);
        const newRooms = roomData.filter((room)=>{
          return total <= room.maxPerson
        });
        setTimeout(()=>{
          setLoading(false)
          setRooms(newRooms)
        },3000)
    }
    // console.log(rooms);
  return (
    <RoomContext.Provider 
        value={{rooms,adults,setAdults,kids,setKids,handleClick,loading}}>
        {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider