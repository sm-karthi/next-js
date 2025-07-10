import React from 'react'

import { Metadata } from 'next';

type Props = {
    params: { productId: string }
}


export const generateMetadata = ({ params } : Props) : Metadata =>{
    const id = params.productId
    return{
        title: `Product ${id}`
    }
}  


function page({ params }: Props) {

    const { productId } = params;
    return <h1>Product no: {productId}</h1>
}

export default page
