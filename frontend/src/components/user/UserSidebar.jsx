import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Currency } from 'utils/functions'

const SideLinks = [
    {path: 'dashboard', url: '/user'},
    {path: 'savings', url: ''},
    {path: 'transfer', url: ''},
    {path: 'withdraw', url: ''},
    {path: 'transactions', url: ''},
    {path: 'notifications', url: ''},
]

const SideLinks2 = [
    {path: 'settings', url:''},
    {path: 'logout', url:''},
]

export default function UserSidebar() {
  return (
    <div>
        <div className="flex flex-col px-3 h-[80dvh]">
            <div className="bg-slate-100/20 rounded-lg p-3 flex flex-col items-center justify-center gap-3 mt-6 mb-5">
                <div className="py-3 px-3.5 rounded-full text-white bg-gradient-to-tr from-primary to-purple-700 w-fit h-fit uppercase">DB</div>
                <div className="text-white text-center text-sm">Derbi Benedict</div>
                <div className="text-white font-bold text-xl flex justify-center"> <span className='text-sm self-end'>{Currency}</span>30,000,000 <IoEyeOutline className='text-sm self-center ml-2' /> </div>
            </div>
            {SideLinks.map((item, index) => (
                <Link to={item.url} key={index} className="text-sm rounded-lg hover:scale-105 text-slate-200 hover:bg-slate-100/20 px-3 py-3 font-extralight capitalize transition-all">
                    {item.path}
                </Link>
            ))}
        </div>
        <div className="flex flex-col px-3">
            {SideLinks2.map((item, index) => (
                <Link to={item.url} key={index} className="text-sm rounded-lg hover:scale-105 text-slate-200 hover:bg-slate-100/20 px-3 py-3 font-extralight capitalize transition-all">
                    {item.path}
                </Link>
            ))}
        </div>
    </div>
  )
}
