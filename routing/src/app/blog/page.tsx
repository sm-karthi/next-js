import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog"
}

function page() {
  return (
    <h1>Blog page!</h1>
  )
}

export default page
