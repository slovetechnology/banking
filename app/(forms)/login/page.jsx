"use client"

import Formbutton from '@/utils/Formbutton'
import Forminput from '@/utils/Forminput'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginPage() {
    const navigate = useRouter()
    return (
        <div>
            <div>
                <div className="font-bold text-3xl my-10">Login Account</div>
                <Forminput label="Email Address" />
                <div className="w-fit ml-auto text-blue-600 mb-5">
                    <Link href="/forgot_password">Forgot Password?</Link>
                </div>
                <Forminput label="Password" formtype="password" />
                <div className="grid grid-cols-1 lg:grid-cols-5 mb-5">
                    <div className="col-span-3">
                        <Forminput formtype='checkbox' label="Remember me" />
                    </div>
                    <div className="col-span-2 w-full lg:w-fit ml-auto">
                        <Formbutton onClick={() => navigate.push('/dashboard')} title="Login Account" className={'capitalize py-3 w-full'} />
                    </div>
                </div>
                <div className="flex items-center gap-2">Don't have an account yet? <Link href="/signup" className='text-blue-600'>Create account</Link> </div>
                <div className="mb-5 mt-5">
                    <Link href="/" className='text-blue-600'>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
