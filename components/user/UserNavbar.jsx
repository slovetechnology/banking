import Imaged from '@/utils/Imaged'
import React from 'react'
import { RiMenu2Fill } from 'react-icons/ri'
import profile from '@/public/images/profile.jpg'
import {BsBell} from 'react-icons/bs'
import {LuScanLine} from 'react-icons/lu'
import notes from '@/public/images/notification.png'
import Link from 'next/link'

export default function UserNavbar({open}) {
    return (
        <div className="bg-white px-3 py-2 shadow-xl z-10 border-b">
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="lg:hidden">
                        <RiMenu2Fill 
                        onClick={open(true)}
                        className='cursor-pointer text-2xl' />
                    </div>
                    <div className="hidden lg:block"></div>
                    <div className="flex items-center gap-6">
                        <button className='text-2xl relative'> <LuScanLine /> </button>
                        <Link href="/notifications" className='text-2xl relative'> 
                        <Imaged src={notes} width={30} height={100} />
                        </Link>
                        {/* <Link href="/notifications" className='text-2xl relative'> <BsBell /> <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white absolute -top-0 -right-1"></div> </Link> */}
                        <button className='flex items-center gap-2 bg-zinc-100 p-1 px-3 rounded-xl'>
                            <Imaged src={profile} className="rounded-full object-cover" width={45} height={100} />
                            <div className="hidden lg:block">
                                <div className="text-left text-sm text-zinc-500 font-bold">Emeka williams</div>
                                <div className="text-left text-sm text-green-600">Online</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
