import ModalLayout from '@/utils/ModalLayout'
import React from 'react'

export default function ManageGoal({onClose, open}) {
  return (
    <ModalLayout onClose={onClose} open={open} title="Manage Goal">ManageGoal</ModalLayout>
  )
}
