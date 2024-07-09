import Image from 'next/image'
import React from 'react'
import { Sitename } from './functions'

export default function Imaged({...props}) {
  return (
    <Image unoptimized={true} {...props} priority alt={Sitename} style={{height: props.fill ? "100%" : "auto", width: props.fill ? "100%" : 'auto'}} />
  )
}
