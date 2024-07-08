import { Dialog, Slide } from '@mui/material'
import { Modal } from 'antd';
import React from 'react'

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

export default function ModalLayout({open, onClose, children, title}) {
  return (
    <Modal
        title={title}
        centered
        open={open}
        onCancel={onClose}
        footer={""}
      >
        <div className={`${title ? '' : 'mt-8'}`}>
        {children}
        </div>
      </Modal>
  //   <Dialog
  //   open={open}
  //   TransitionComponent={Transition}
  //   keepMounted
  //   onClose={onClose}
  //   aria-describedby="alert-dialog-slide-description"
  // >
  //   <div className="w-full max-w-3xl">
  //     wfijwdnf vnvodnv vdovjnovjndv dfvjnfojvf vfovjnfovjsfov fsvjfsvnfovkfokvfv flv fov flfkvmfov fovkfovfs vofskv fvpfsv fv 
  //   {children}
  //   </div>
  //   </Dialog>
  )
}
