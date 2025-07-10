import React from 'react'

function page({ params }: { params: { productId: string, reviewsId: string } }) {

    const { productId, reviewsId } = params;
    return <h1>Review {reviewsId} product {productId}</h1>
}

export default page
