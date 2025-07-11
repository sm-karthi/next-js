"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct(){

    const router = useRouter()

    function handleClick(){
        router.push("/")
    }

    return(
        <div>
            <h1>Order Product</h1>

            <button onClick={handleClick} className="text-blue-500">Place Order</button>
        </div>
    ) 
}