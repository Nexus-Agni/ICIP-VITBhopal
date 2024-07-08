import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'
import chancellor from '../../assets/chancellor.png'
import vp from '../../assets/vp.png'
import avp from '../../assets/avp.png'
import vc from '../../assets/vc.png'
import registrar from '../../assets/registrar.png' 
export function Leadership() {

    const LeadershipItems = [
        {
            title : "Dr. G Vishwanathan",
            description : "Chancellor",
            img:chancellor
        },
        {
            title : "Mr. Sankar Viswanathan",
            description : "Vice President",
            img:vp
        },
        {
            title : "Ms. Kadambari Viswanathan",
            description : "Assistant Vice President",
            img:avp
        },
        {
            title : "Dr. Senthil Kumar Aramugam",
            description : "Vice Chancellor",
            img:vc
        },
        {
            title : "Dr. Debasis Adhikari",
            description : "Registrar",
            img:registrar
        }
    ]
  return (
    <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row flex-wrap items-center justify-center"><HoverEffect items={LeadershipItems} /></div>
  )
}
