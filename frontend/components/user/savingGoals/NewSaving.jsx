import React, { useState } from 'react'
import ModalLayout from '@/utils/ModalLayout'
import Forminput from '@/utils/Forminput'
import Imaged from '@/utils/Imaged'
import img from '@/public/images/complain.png'
import Formbutton from '@/utils/Formbutton'
import SuccessLogo from "@/public/images/Success.json"
import Lottie from 'lottie-react'

export default function NewSaving({ open, onClose }) {
    const [screen, setScreen] = useState(0)
    return (
        <ModalLayout open={open} onClose={onClose} title={`Set New Goal`}>
            {screen === 0 && <div className="">
                <Forminput label="Expected Goal" />
                <Forminput label="Amount to start with" />
                <Forminput label="Reason for saving" formtype='textarea' />
                <div className="w-fit ml-auto"><Formbutton title="Continue" onClick={() => setScreen(1)} /></div>
            </div>}
            {screen === 1 && <div className="flex items-center justify-center flex-col">
                <Imaged src={img} width={100} height={100} />
                <div className="text-zinc-500 text-lg font-extralight mb-10 text-center mt-10"> <span className="text-red-600 font-semibold">-$300,000</span> will be deducted from your current available balance and transfered into your savings wallet</div>
                <div className="w-full grid grid-cols-2 gap-10">
                    <Formbutton title="Back" onClick={() => setScreen(0)} className={'bg-slate-400'} />
                    <Formbutton title="Proceed" onClick={() => setScreen(2)} />
                </div>
            </div>}
            {screen === 2 && <div className="flex items-center justify-center flex-col">
                    <Lottie
                        className='w-28'
                        animationData={SuccessLogo}
                        loop={false}
                    />
                    <div className="text-center text-green-600 font-semibold text-3xl">Savings Goal Activated!</div>
                    <div className="mb-2 w-full">
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Goal:</div>
                            <div className="text-right font-bold">$500,000</div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Transfered Amount:</div>
                            <div className="text-right font-bold">$10,000</div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Available Balance:</div>
                            <div className="text-right font-bold">$250,000</div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Date Started:</div>
                            <div className="text-right font-bold">11 Dec 2023, 6:43 pm</div>
                        </div>
                    </div>
            </div>}
        </ModalLayout>
    )
}
