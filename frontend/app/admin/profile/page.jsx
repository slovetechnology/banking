import Imaged from '@/utils/Imaged'
import React from 'react'
import { SlEnvolope, SlPhone } from 'react-icons/sl'
import img from '@/public/images/profile.svg'


export default function page() {
    return (
        <div>

            <div className="bgprofile h-44"></div>
            <div className="-mt-16 flex items-center">
                <Imaged src={img} width={150} height={100} />
                <div className="font-bold text-3xl mt-10">Williams keneth</div>
            </div>
            <div className="w-11/12 mx-auto mt-1">
                <div className="flex items-start lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full p-1 bg-blue-300 text-blue-50">
                            <div className="bg-blue-400 rounded-full p-1">
                                <SlEnvolope className='text-xl' />
                            </div>
                        </div>
                        <div className="">
                            <div className="font-bold mt-3">Email Address</div>
                            <div className="text-slate-500">williamskeneth@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-full p-1 bg-blue-300 text-blue-50">
                            <div className="bg-blue-400 rounded-full p-1">
                                <SlPhone className='text-xl' />
                            </div>
                        </div>
                        <div className="">
                            <div className="font-bold mt-3">Contact</div>
                            <div className="text-slate-500">+2340796505040430</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
