"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {

    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    }

    return (
        <div>

            <h2>{error.message}</h2>
            <button className="bg-blue-500 py-1 px-3 text-white rounded shadow-md mt-4 mb-4 
            hover:bg-blue-700 duration-150" onClick={reload}>Try again</button>

        </div>
    )
}
