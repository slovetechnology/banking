"use client"

import Imaged from "@/utils/Imaged"
import Link from "next/link"
import img from '@/public/images/500.svg'



export default function error({refetch, error}) {
  return (
    <div className='w-11/12 mx-auto'>
            <div className='flex items-center justify-center h-screen gap-3 flex-col'>
                <div className="w-full h-[60dvh] relative">
                <Imaged src={img} fill />
                </div>
                <div className='font-extrabold text-4xl lg:text-5xl text-primary text-center'>Something has gone seriously wrong!</div>
                <div className='text-zinc-500 text-xl text-center cursor-pointer'> <span className="text-red-600">{error.toString()}</span> </div>
                <div
                onClick={refetch}
                className='mt-10 text-white bg-primary py-3 px-8 rounded-lg cursor-pointer'>
                    Reload Page
                </div>
            </div>
        </div>
  )
}
