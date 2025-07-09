import React from 'react'

async function page({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;
    return <h1>Product no: {productId}</h1>
}

export default page
