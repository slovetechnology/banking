"use client"

import React from 'react'
import { IoIosMailUnread } from 'react-icons/io'
import { FaMinus } from 'react-icons/fa6'


export default function UserTransactions() {
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
        {
            title: '23-01-2024',
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
                    content: "you have successfully transferred $1000 to keneth williams",
                    status: 'Failed',
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
                    status: 'Failed',
                    content: "you have successfully transferred $1000 to keneth williams",
                    date: '9:00 PM'
                }
            ]
        },
        {
            title: '13-01-2024',
            data: [
                {
                    title: 'Withdrawal',
                    amount: '1200',
                    status: 'Success',
                    date: '12:00 PM',
                    content: "you have successfully transferred $1000 to keneth williams"
                },
                {
                    title: 'Deposit',
                    amount: '1000',
                    status: 'Failed',
                    date: '11:00 PM',
                    content: "you have successfully transferred $1000 to keneth williams"
                },
                {
                    title: 'Transfer',
                    amount: '500',
                    status: 'Success',
                    date: '10:00 PM',
                    content: "you have successfully transferred $1000 to keneth williams"
                },
                {
                    title: 'Transfer',
                    amount: '700',
                    status: 'Failed',
                    content: "you have successfully transferred $1000 to keneth williams",
                    date: '9:00 PM'
                },
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
                    status: 'Success',
                    content: "you have successfully transferred $1000 to keneth williams",
                    date: '10:00 PM'
                },
                {
                    title: 'Transfer',
                    amount: '700',
                    status: 'Failed',
                    content: "you have successfully transferred $1000 to keneth williams",
                    date: '9:00 PM'
                }
            ]
        },
    ]

    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div className="bg-primary p-4 my-5 rounded-lg">
                    <div className="text-white text-2xl font-semibold">Transactions</div>
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
