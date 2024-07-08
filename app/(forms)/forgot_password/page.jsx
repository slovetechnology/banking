import Formbutton from '@/utils/Formbutton'
import Forminput from '@/utils/Forminput'
import Link from 'next/link'
import React from 'react'

export default function ForgotPassword() {
    return (
        <div>
            <div>
                <div className="font-bold text-3xl my-10">Find my Email</div>
                <Forminput label="Email Address" />
                <Formbutton title="Create Account" className={'capitalize py-3 w-full'} />
                <div className="flex items-center mt-10 gap-2">Don't have an account yet? <Link href="/signup" className='text-blue-600'>Create account</Link> </div>
                <div className="mb-5 mt-5">
                    <Link href="/" className='text-blue-600'>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
