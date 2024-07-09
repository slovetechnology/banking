import React from 'react'
import ModalLayout from './ModalLayout'
import Formbutton from './Formbutton'
import Imaged from './Imaged'
import img from '@/public/images/hello.png'

export default function Logout({onClose, open, LogoutButton}) {
  return (
    <ModalLayout onClose={onClose} open={open} title="">
        <div className="w-fit mx-auto mb-3">
            <div className="w-20 h-20 relative">
            <Imaged src={img} fill />
            </div>
        </div>
        <div className="text-center text-zinc-500">Hi <span className="font-bold text-black">Username</span>, Confirm your request to logout. </div>
        <div className="flex items-center justify-between mt-5 pt-5 border-t gap-10">
            <Formbutton title="Cancel" onClick={onClose} className={'bg-slate-400'} />
            <Formbutton title="Logout" onClick={LogoutButton} className={'bg-red-500'} />
        </div>
    </ModalLayout>
  )
}
