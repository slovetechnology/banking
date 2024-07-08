"use client"

import Formbutton from '@/utils/Formbutton';
import Forminput from '@/utils/Forminput';
import { SiteShort } from '@/utils/functions';
import { Box, Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6';
import SuccessLogo from "@/public/images/Success.json"
import Lottie from 'lottie-react';
import { IoCopy } from 'react-icons/io5';
import OtpForm from '@/utils/OtpForm';



const steps = [
    'Select user to transfer to',
    'Transfer Summary',
    'Confirm Transfer',
    'Trasfer confirmation',
];

export default function TransferPage() {
    const [screen, setScreen] = useState(0)
    const [pins, setPins] = useState(['', '', '', ''])

    const HandleNext = async () => {
        setScreen((prev) => prev + 1);
    }
    return (
        <div className='w-11/12 mx-auto max-w-3xl mt-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={screen} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel className='text-sm font-semibold'>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            {screen === 0 && <div className="bg-white px-5 py-10 mt-10">
                <Forminput label="Amount to send" />
                <Forminput label={`User ${SiteShort} Username`} />
                <div className="mb-3">
                    <div className="flex items-center justify-end gap-2"> <FaRegCircleCheck className='text-green-500' /> Ebera Kamson</div>
                </div>
                <Forminput label="Reason for transfer" formtype="textarea" />
                <div className="">
                    <Formbutton onClick={HandleNext} title="Next" className={'py-3 w-full'} />
                </div>
            </div>}
            {screen === 1 && <div className="bg-white px-5 py-10 mt-10">
                <div className="mb-5">
                    <div className="grid grid-cols-2 py-3.5 border-b">
                        <div className="text-zinc-500">Transfer to:</div>
                        <div className="text-right font-bold">williams okonjo</div>
                    </div>
                    <div className="grid grid-cols-2 py-3.5 border-b">
                        <div className="text-zinc-500">Reason:</div>
                        <div className="text-right font-bold"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, laborum! </div>
                    </div>
                    <div className="grid grid-cols-2 py-3.5 border-b">
                        <div className="text-zinc-500">Transfer Amount:</div>
                        <div className="text-right font-bold">$300,000</div>
                    </div>
                    <div className="grid grid-cols-2 py-3.5 border-b">
                        <div className="text-zinc-500">Transfer Fee:</div>
                        <div className="text-right font-bold">$5</div>
                    </div>
                    <div className="grid grid-cols-2 py-3.5 border-b">
                        <div className="text-zinc-500">Total Amount:</div>
                        <div className="text-right font-bold">$300,005</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    {screen > 0 && <Formbutton onClick={() => setScreen(prev => prev - 1)} title="Back" className={'py-3 w-full !bg-slate-400'} />}
                    <Formbutton onClick={HandleNext} title="Proceed" className={'py-3 w-full'} />
                </div>
            </div>}
            {screen === 2 && <div className="bg-white px-5 py-10 mt-10">
                <div className="mb-7">
                    <div className="">Provide your account transaction pin</div>
                <OtpForm 
                pins={pins}
                setPins={setPins}
                />
                </div>
                <div className="grid grid-cols-2 gap-10">
                    {screen > 0 && <Formbutton onClick={() => setScreen(prev => prev - 1)} title="Back" className={'py-3 w-full !bg-slate-400'} />}
                    <Formbutton onClick={HandleNext} title="Verify" className={'py-3 w-full'} />
                </div>
            </div>}
            {screen === 3 && <div className="bg-white px-5 py-10 mt-10">
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="text-center font-bold text-green-600 text-3xl">$300,000</div>
                    <Lottie
                        className='w-28'
                        animationData={SuccessLogo}
                        loop={false}
                    />
                    <div className="text-center text-green-600 font-semibold text-3xl">Transfer Completed!</div>
                    <div className="mb-2">
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Transfered Amount:</div>
                            <div className="text-right font-bold">$300,000</div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Transfer to:</div>
                            <div className="text-right font-bold">williams okonjo</div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Reference ID:</div>
                            <div className="flex items-center justify-end gap-2 font-bold"> 85494993030320 <IoCopy /> </div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Reason:</div>
                            <div className="text-right font-bold"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, laborum! </div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Available Balance:</div>
                            <div className="text-right font-bold">$250,000</div>
                        </div>
                        <div className="grid grid-cols-2 py-3.5 border-b">
                            <div className="text-zinc-500">Transaction Date:</div>
                            <div className="text-right font-bold">11 Dec 2023, 6:43 pm</div>
                        </div>
                        <div className="w-fit ml-auto mt-5">
                            <Formbutton title="Download receipt" />
                        </div>
                        <div className="text-zinc-500 text-sm mt-3">The recipient account is expected to be credited within 5 minutes, subject to notification.</div>
                    </div>
                </div>
            </div>}
        </div>
    )
}
