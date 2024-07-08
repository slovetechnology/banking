import Formbutton from '@/utils/Formbutton'
import Forminput from '@/utils/Forminput'
import Link from 'next/link'
import React from 'react'

export default function SignupPage() {
  return (
    <div>
            <div>
                <div className="font-bold text-3xl my-10">Create Account</div>
                <div className="grid grid-cols-2 gap-3">
                <Forminput label="First Name" />
                <Forminput label="Last Name" />
                </div>
                <Forminput label="Email Address" />
                <Forminput label="Phone Number" />
                <Forminput label="Password" formtype="password" />
                <Forminput label="Confirm Password" formtype="password" />
                <div className="grid grid-cols-1 lg:grid-cols-5 mb-5">
                    <div className="col-span-3">
                        <Forminput formtype='checkbox' label="Remember me" />
                    </div>
                    <div className="col-span-2 w-full lg:w-fit ml-auto">
                        <Formbutton title="Create Account" className={'capitalize py-3 w-full'} />
                    </div>
                </div>
                <div className="flex items-center gap-2">Already have an account? <Link href="/login" className='text-blue-600'>Login account</Link> </div>
                <div className="mb-5 mt-5">
                    <Link href="/" className='text-blue-600'>Back to Home</Link>
                </div>
            </div>
        </div>
  )
}
