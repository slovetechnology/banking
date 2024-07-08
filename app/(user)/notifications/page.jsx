import React from 'react'
import {BiSolidBellRing} from 'react-icons/bi'

export default function UserNotifications() {
  return (
    <div>
        <div className="text-primary text-3xl font-bold px-4 mt-10 mb-5">Latest Notifications</div>
        <div className="bg-white px-6 pt-14 pb-5">
                    <ol className="relative border-l border-gray-200">
                        {new Array(20).fill(0).map((item, i) => (
                            <li key={i} className={`mb-10 ml-6 cursor-pointer`}>
                                <span className={`absolute flex items-center text-sm ${i % 1 === 0 ? 'text-slate-400 bg-slate-100 ring-white' : 'text-blue-100 bg-blue-500 ring-white'} justify-center w-8 h-8  rounded-full -left-4 ring-4 `}>
                                    <BiSolidBellRing />
                                </span>
                                <div className="grid grid-cols-2">
                                    <div className="">
                                        <h3 className="leading-tight font-bold text-sm capitalize text-primary"> Notification Title </h3>
                                    </div>
                                    <div className="">
                                        <div className="text-xs text-right font-medium">10/10/2024 10:10 AM</div>
                                    </div>
                                </div>
                                <div className="text-sm text-left mr-2 text-slate-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi! Lorem ipsum dolor sit amet. </div>
                            </li>
                        ))}
                    </ol>
                </div>
    </div>
  )
}
