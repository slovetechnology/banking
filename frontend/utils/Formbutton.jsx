import { Button } from '@mui/material'
import React from 'react'

export default function Formbutton({title, className, onClick, type="button"}) {
  return (
    <div>
        <Button 
        type={type}
        onClick={onClick}
        className={`${className} capitalize`}
        variant="contained" 
        size='large'>{title}</Button>
    </div>
  )
}
