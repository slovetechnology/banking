import Formbutton from '@/utils/Formbutton';
import ModalLayout from '@/utils/ModalLayout'
import { DatePicker } from 'antd'
import React from 'react'

export default function AccountStatementModal({ open, onClose }) {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <ModalLayout open={open} onClose={onClose} title="Select period of statement you need">
            <div className="">
                <DatePicker
                    placeholder='Start Date'
                    className='w-full border border-zinc-400 p-3 my-5 placeholder:text-black'
                    onChange={onChange} />
                <DatePicker
                    placeholder='End Date'
                    className='w-full border border-zinc-400 p-3 placeholder:text-black'
                    onChange={onChange} />
                    <div className="w-fit ml-auto mt-5">
                        <Formbutton title="Send Request" />
                    </div>
            </div>
        </ModalLayout>
    )
}
