import Formbutton from '@/utils/Formbutton'
import Forminput from '@/utils/Forminput'
import React from 'react'

export default function ChangePasswordRequestPage() {
  return (
    <div>
            <div>
                <div className="font-bold text-3xl my-10">Change Account Password</div>
                <Forminput label="Password" formtype="password" />
                <Forminput label="Confirm Password" formtype="password" />
                        <Formbutton title="Change password" className={'capitalize py-3 w-full'} />
            </div>
        </div>
  )
}
