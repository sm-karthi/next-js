import React from 'react'

function page({ params }: { params: { productId: string, reviewsId: string } }) {

    function getRandomInt(count: number): number {
        return Math.floor(Math.random() * count)
    }

    const { productId, reviewsId } = params;

    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review")
    }

    return (
        <div>

            <h1>Review {reviewsId} product {productId}</h1>

        </div>
    )
}

export default page
