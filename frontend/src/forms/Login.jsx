import React from 'react'
import { Link } from 'react-router-dom'
import CountryStates from 'utils/CountryStates'
import DailOptions from 'utils/DailOption'
import Formbutton from 'utils/Formbutton'
import Forminput from 'utils/Forminput'

export default function Login() {

    const setup = () => {
        //
    }

    const handleCountry = () => {
        //
    }
    return (
        <div className='bg-gradient-to-tr from-primary to-purple-700 h-screen overflow-x-hidden flex items-center justify-center'>
            <div className="w-[97%] mx-auto max-w-xl bg-white backdrop-blur-sm p-5 rounded-lg mt-10 lg:mt-20">
                <div className="text-3xl lg:text-4xl font-bold text-primary">Login Account</div>
                <form className='mt-5'>
                    <Forminput formtype="text" label="Email Address" />
                    <Forminput formtype="password" label="Password" />
                    <div className="grid grid-cols-2 gap-4 items-center mb-3">
                    <Forminput formtype="checkbox" placeholder="Remeber me" />
                    <div className="text-right">
                        <Link to="/forgot-password" className='text-blue-600'>Forgot Password?</Link>
                    </div>
                    </div>
                    <Formbutton label="Login Account" loading={true} />
                    <div className="text-zinc-500 mt-5 text-center">Don't have an account? <Link to="/signup" className='text-blue-600'>Create Account</Link> </div>
                    <div className="text-zinc-500 mt-3 text-center"><Link to="/" className='text-blue-600'>Go back home</Link> </div>
                </form>
            </div>
        </div>
    )
}
