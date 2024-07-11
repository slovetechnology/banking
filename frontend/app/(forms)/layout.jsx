import React from 'react'
import banner from "@/public/images/ban.jpg"
import { Sitename } from '@/utils/functions'

export default function layout({ children }) {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-7 h-screen">
                <div className="hidden lg:block lg:col-span-3 bg-blue-900 h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay"
                        style={{ background: `url(${banner.src})center/cover no-repeat` }}
                    ></div>
                    <div className="p-5">
                        <div className="text-white text-5xl">{Sitename}</div>
                    </div>
                </div>
                <div className="lg:col-span-4 bg-white">
                    <div className="w-11/12 mx-auto mt-10 lg:mt-16">
                    <div className="rounded-xl max-w-2xl mx-auto">
                        {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
