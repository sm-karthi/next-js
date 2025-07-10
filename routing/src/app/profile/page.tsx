import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:{
    absolute:"Profile"
  }
}

function page() {
  return (
    <h1>Profile page!</h1>
  )
}

export default page
