import React from 'react'

async function page({
    params,
}: {
    params: Promise<{ productId: string, reviewsId: string }>
}) { 

    const{productId, reviewsId} = await params;
    return <h1>Review {reviewsId} product {productId}</h1>
}

export default page
