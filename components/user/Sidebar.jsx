"use client"
import React, { useState } from 'react'
import { ImHome } from 'react-icons/im'
import { LuWallet } from 'react-icons/lu'
import { IoStatsChartSharp, IoSwapHorizontal } from 'react-icons/io5'
import { PiHandWithdrawBold } from 'react-icons/pi'
import { FaRegUser } from 'react-icons/fa6'
import { BsBell } from 'react-icons/bs'
import { SlPower, SlSettings } from'react-icons/sl'
import {MdOutlineSavings} from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logout from '@/utils/Logout'

const BottomSideLinks = [
    {
        title: 'Settings',
        url: '/settings',
        Icon: SlSettings
    },
    {
        title: 'Logout',
        url: 'login',
        Icon: SlPower
    }
]

const SideLinks = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        Icon: ImHome
    },
    {
        title: 'Deposit',
        url: '/deposit',
        Icon: LuWallet
    },
    {
        title: 'Transfer',
        url: '/transfer',
        Icon: IoSwapHorizontal
    },
    {
        title: 'Withdraw',
        url: '/withdraw',
        Icon: PiHandWithdrawBold
    },
    {
        title: 'Transactions',
        url: '/transactions',
        Icon: IoStatsChartSharp
    },
    {
        title: 'Profile',
        url: '/profile',
        Icon: FaRegUser
    },
    {
        title: 'Notifications',
        url: '/notifications',
        Icon: BsBell
    },
    {
        title: 'Saving Goals',
        url: '/savings',
        Icon: MdOutlineSavings
    },
]

export default function Sidebar({open}) {
    const navigate = useRouter()
    const [logout, setLogout] = useState(false)

    const handleNav = data => {
        open(false)
        if(data.title === 'Logout') {
            return setLogout(true)
        }
        navigate.push(`${data.url}`)
    }
    return (
        <>
        <Logout 
        open={logout}
        onClose={() => setLogout(false)}
        LogoutButton={() => navigate.push(`/login`)}
        />
        <div className='p-2 h-screen overflow-y-auto w-[16rem]'>
            <div className="flex flex-col h-[84dvh]">
                {SideLinks.map((item, index) => (
                    <Link 
                    onClick={open(false)}
                    href={`${item.url}`} className="px-2 py-3 hover:bg-slate-100 transition-all" key={index}>
                        <div className="flex items-center gap-2">
                            <item.Icon />
                            <div className="">{item.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col">
                {BottomSideLinks.map((item, index) => (
                    <div 
                    onClick={() => handleNav(item)}
                    className="px-2 py-3 hover:bg-slate-100 transition-all cursor-pointer" key={index}>
                        <div className="flex items-center gap-2">
                            <item.Icon />
                            <div className="">{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
