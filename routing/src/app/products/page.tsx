import Link from 'next/link'
import React from 'react'

function page() {

  const productId = 100;

  return (
    <div>

      <Link href="/" className='w-fit text-blue-500'>Home</Link>


      <h1>Product List</h1>

      <div className='flex flex-col gap-4 mt-10 mb-10'>

        <Link href="/products/1" className='w-fit text-blue-500'>Product 1</Link>
        <Link href="/products/2" className='w-fit text-blue-500'>Product 2</Link>
        <Link href="/products/3" className='w-fit text-blue-500' replace>Product 3</Link>

        <Link href={`/products/${productId}`} className='w-fit text-blue-500'>Product {productId}</Link>


      </div>


    </div>
  )
}

export default page
