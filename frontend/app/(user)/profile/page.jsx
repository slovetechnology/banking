import Imaged from '@/utils/Imaged'
import React from 'react'
import img from '@/public/images/profile.svg'
import { SlEnvolope, SlPhone } from 'react-icons/sl'
import { BsCheck } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'

export default function UserProfilePage() {
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
        <div className="bg-white px-3 py-4 mb-2 grid grid-cols-2 gap-5 mt-5">
          <div className="">Verification Status</div>
          <div className="text-green-700 flex items-center gap-1 justify-end">Verified <BsCheck className='text-xl' /> </div>
        </div>
        <div className="bg-white mb-2 px-3 py-4 flex cursor-pointer">
          <div className="">
            <div className="font-bold">Invite and Earn</div>
            <div className="text-slate-500">Earn cash when you invest family and friend on their first deposit.</div>
          </div>
          <div className="w-fit ml-auto"> <FaArrowRight className='' /></div>
        </div>
        <div className="bg-white mb-2 px-3 py-4 flex cursor-pointer">
          <div className="">
            <div className="font-bold">Transfer Limit</div>
            <div className="text-slate-500">Check your account money transfer limits</div>
          </div>
          <div className="w-fit ml-auto"><FaArrowRight className='' /></div>
        </div>
        <div className="bg-white mb-2 px-3 py-4 flex cursor-pointer">
          <div className="">
            <div className="font-bold">Account Statement</div>
            <div className="text-slate-500">Request for your statement of account records</div>
          </div>
          <div className="w-fit ml-auto"><FaArrowRight className='' /></div>
        </div>
        <div className="bg-white mb-2 px-3 py-4 flex cursor-pointer">
          <div className="">
            <div className="font-bold">Settings</div>
            <div className="text-slate-500">Control your notifications and account security settings</div>
          </div>
          <div className="w-fit ml-auto"><FaArrowRight className='' /></div>
        </div>
      </div>
    </div>
  )
}
