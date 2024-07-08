import Image from 'next/image'
import React from 'react'
import { Sitename } from './functions'

export default function Imaged({...props}) {
  return (
    <Image {...props} alt={Sitename} />
  )
}
