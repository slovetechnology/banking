
"use client"
import React, { useState } from 'react'
import { ImHome } from 'react-icons/im'
import { LuWallet } from 'react-icons/lu'
import { IoSwapHorizontal } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'
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
        url: '/admin/settings',
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
        url: '/admin',
        Icon: ImHome,
    },
    {
        title: 'Users',
        url: '/admin/users',
        Icon: FiUsers
    },
    {
        title: 'Deposit Histories',
        url: '/admin/deposit',
        Icon: LuWallet
    },
    {
        title: 'Transfer Histories',
        url: '/admin/transfer',
        Icon: IoSwapHorizontal
    },
    {
        title: 'Withdrawal Histories',
        url: '/admin/withdraw',
        Icon: PiHandWithdrawBold
    },
    {
        title: 'Profile',
        url: '/admin/profile',
        Icon: FaRegUser
    },
    {
        title: 'Notifications',
        url: '/admin/notifications',
        Icon: BsBell
    },
    {
        title: 'Saving Goals Histories',
        url: '/admin/savings',
        Icon: MdOutlineSavings
    },
]

export default function AdminSidebar({open}) {
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
                <div className="font-bold text-2xl mt-10 mb-3">Control Panel</div>
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
