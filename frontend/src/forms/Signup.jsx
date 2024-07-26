import { MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CountryStates from 'utils/CountryStates'
import DailOptions from 'utils/DailOption'
import Formbutton from 'utils/Formbutton'
import Forminput from 'utils/Forminput'

export default function Signup() {

    const setup = () => {
        //
    }

    const handleCountry = () => {
        //
    }
    return (
        <div className='bg-gradient-to-tr from-primary to-purple-700 h-screen overflow-x-hidden'>
            <div className="w-[97%] mx-auto max-w-xl bg-white backdrop-blur-sm p-5 rounded-lg my-10 lg:my-20">
                <div className="text-3xl lg:text-4xl font-bold text-primary">Create Account</div>
                <form className="mt-5">
                    <Forminput formtype="text" label="First Name" />
                    <div className="grid grid-cols-7 gap-1 lg:gap-5">
                        <div className="col-span-5"><Forminput formtype="text" label="Last Name" /></div>
                        <div className="col-span-2"><Forminput formtype="select" label={'Gender'}>
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                        </Forminput> </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 lg:gap-3">
                        <div className="col-span-2">
                            <DailOptions title="+234" setup={setup} />
                        </div>
                        <div className="col-span-5">
                            <Forminput formtype="text" />
                        </div>
                    </div>
                    <Forminput formtype="text" label="Email Address" />
                    <CountryStates onChange={handleCountry} />
                    <Forminput formtype="password" label="Password" />
                    <Forminput formtype="password" label="Confirm Password" />
                    <Forminput formtype="checkbox" placeholder="Confirm you agree to our terms and policies." />
                    <Formbutton label="Create Account" loading={true} />
                    <div className="text-zinc-500 mt-5 text-center">Already have an account? <Link to="/login" className='text-blue-600'>Login Account</Link> </div>
                    <div className="text-zinc-500 mt-3 text-center"><Link to="/" className='text-blue-600'>Go back home</Link> </div>
                </form>
            </div>
        </div>
    )
}
