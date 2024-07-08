"use client"
import Formbutton from '@/utils/Formbutton'
import OtpForm from '@/utils/OtpForm'
import Link from 'next/link'
import React from 'react'

export default function VerifyEmail() {
    const [pins, setPins] = React.useState(['', '', '', ''])
    return (
        <div>
            <div className="font-bold text-3xl mt-10">Confirm Email Address</div>
            <div className="mb-10 text-zinc-500">Copy and paste below the 4 digits verification code sent to your email address</div>
            <OtpForm
                pins={pins}
                setPins={setPins}
            />
            <div className="mt-10">
                Didn't get any code? <button className='text-blue-600'>Resend</button>
            </div>
            <div className="mt-10 lg:w-11/12 mx-auto">
            <Formbutton title="Verify Email" className={'w-full py-4 capitalize'} />
            </div>
            <div className="mt-10">
                Email Address not correct? <Link href="forgot_password" className='text-blue-600'>Change email</Link>
            </div>
        </div>
    )
}
