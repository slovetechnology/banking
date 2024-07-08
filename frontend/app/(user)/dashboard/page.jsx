import Imaged from '@/utils/Imaged'
import React from 'react'
import profile from '@/public/images/profile.jpg'
import { IoCopy } from 'react-icons/io5'
import bgcard from '@/public/images/bgcard.jpg'
import img from '@/public/images/withdraw.png'
import img1 from '@/public/images/exchanging.png'
import img2 from '@/public/images/deposit.png'
import Link from 'next/link'
import { IoIosMailUnread } from 'react-icons/io'
import { FaArrowRight, FaMinus } from 'react-icons/fa6'
import { Progress } from 'antd'

const CardOptions = [
  {
    title: 'transfer',
    url: '/transfer',
    img: img1
  },
  {
    title: 'deposit',
    url: '/deposit',
    img: img2
  },
  {
    title: 'withdraw',
    url: '/withdraw',
    img: img
  },
]

const TransData = [
  {
    title: 'Today',
    data: [
      {
        title: 'Withdrawal',
        amount: '1200',
        content: "you have successfully transferred $1000 to keneth williams",
        status: 'Success',
        date: '12:00 PM'
      },
      {
        title: 'Deposit',
        amount: '1000',
        status: 'Failed',
        content: "you have successfully transferred $1000 to keneth williams",
        date: '11:00 PM'
      },
      {
        title: 'Transfer',
        amount: '500',
        content: "you have successfully transferred $1000 to keneth williams",
        status: 'Success',
        date: '10:00 PM'
      },
      {
        title: 'Transfer',
        amount: '700',
        content: "you have successfully transferred $1000 to keneth williams",
        status: 'Failed',
        date: '9:00 PM'
      }
    ]
  },
]


export default function UserDashboard() {
  return (
    <div className='w-11/12 mx-auto mt-5'>
      <div className="">
        <div className="flex items-center gap-5">
          <Imaged src={profile} width={100} height={100} className="rounded-full object-cover" />
          <div className="">
            <div className="text-3xl font-bold">Hi, Moses Alfred</div>
            <div className="flex items-center gap-2 text-zinc-500"> @jeamsauthor <IoCopy /> </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <div className="w-full h-44 rounded-xl bg-[#2c5ed9] relative"
          >
            <div className="w-full h-full mix-blend-overlay absolute top-0 left-0"
              style={{ background: `url(${bgcard.src})center/cover` }}></div>
            <div className="relative mx-auto p-3 rounded-xl w-full h-full bg-blue-900/50">
              <div className="text-right my-3 text-slate-200 text-sm">Available Balance</div>
              {/* <div className="w-fit ml-auto text-white text-xl"> <FaEye /> </div> */}
              <div className="text-white font-semibold text-4xl text-right">$100,000</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center mt-7">
          {CardOptions.map((item, index) => (
            <div className="flex flex-col items-center gap-2" key={index}>
              <Link href={`${item.url}`}
                className={`rounded-full p-4 relative border shadow-xl bg-white text-slate-500`}>
                <div className={`${index === 1 ? 'w-20 h-20' : 'w-12 h-12'} relative`}>
                  <Imaged src={item.img} fill />
                </div>
              </Link>
              <div className="text-sm capitalize font-bold text-zinc-500">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-3 mt-10">
        <div className="flex items-center justify-between my-6">
          <div className="font-semibold text-2xl lg:text-3xl">Latest Savings Goal</div>
          <div className="">
            <Link href="/transactions" className='text-blue-600'>View all</Link>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Progress
            type="dashboard"
            steps={8}
            percent={70}
            trailColor="rgba(0, 0, 0, 0.06)"
            strokeWidth={20} />
          <div className=" bg-white p-3 rounded-xl w-full text-sm">
            {/* <div className="border border-zinc-300 bg-white p-3 rounded-xl w-full text-sm"> */}
            <div className="border-b py-1 text-zinc-500 text-right"> Reason for starting up a savings goal tracker </div>
            <div className="border-b py-1">
              <div className=" text-right">Savings Goal</div>
              <div className="font-bold text-right text-primary">$300,000</div>
            </div>
            <div className="border-b py-1">
              <div className=" text-right">Current Saved</div>
              <div className="font-bold text-right text-primary">$150,000</div>
            </div>
            <div className="border-b py-1">
              <div className=" text-right">Last Saved</div>
              <div className="font-bold text-right text-primary">3 Dec 2021 6:20 pm </div>
            </div>
            <div className="py-1 flex justify-end">
              <Link href={`/savings/${3}`} className='flex text-blue-600 items-center justify-end gap-2'>More <FaArrowRight /> </Link>
            </div>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-between my-6">
          <div className="font-semibold text-2xl lg:text-3xl">Latest Transactions</div>
          <div className="">
            <Link href="/transactions" className='text-blue-600'>View all</Link>
          </div>
        </div>

        {TransData.map((item, index) => (
          <div className="rounded-xl mb-5 bg-white shadow-md" key={index}>
            <div className="p-3"> {item.title}</div>
            <div className="flex flex-col">
              {item.data.map((ele, i) => (
                <div
                  // onClick={() => setViews({status: true, data: ele})}
                  key={i} className="p-3 border-b last:border-none cursor-pointer">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full p-1 bg-blue-300 text-blue-50">
                        <div className="bg-blue-400 rounded-full p-1">
                          <IoIosMailUnread className='text-xl' />
                        </div>
                      </div>
                      <div className="text-sm font-bold">{ele.title}</div>
                      <FaMinus className='text-slate-500' />
                      <div className={`text-xs font-semibold ${ele.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>{ele.status}</div>
                    </div>
                    <div className="">
                      <div className={`text-base font-bold text-right ${ele.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>{ele.status === "Success" ? '+' : '-'}${parseInt(ele.amount).toLocaleString()}</div>
                      <div className="text-xs text-right">{ele.date}</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">{ele.content}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
