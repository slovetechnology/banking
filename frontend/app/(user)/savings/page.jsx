"use client"

import NewSaving from '@/components/user/savingGoals/NewSaving'
import Formbutton from '@/utils/Formbutton'
import { Progress } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function SavingsGoalsPage() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <NewSaving
                open={open}
                onClose={() => setOpen(false)}
            />
            <div className='w-11/12 mx-auto mt-5'>
                <div className="bg-primary p-4 my-5 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="text-white text-2xl font-semibold">Savings Goals</div>
                        <Formbutton title="New Goals" onClick={() => setOpen(true)} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5">
                    {new Array(10).fill(0).map((item, index) => (
                        <div className="flex gap-2 justify-center items-center bg-white p-3 rounded-xl" key={index}>
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
                                    <Link href={`/savings/${index + 1}`} className='flex text-blue-600 items-center justify-end gap-2'>More <FaArrowRight /> </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
