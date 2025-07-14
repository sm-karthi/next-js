import Link from "next/link";

export default function F2() {
    return (
        <div>
            <h1>F2 page</h1>
            <Link href="/f4" className="text-blue-500 hover:underline w-fit">
                Go to F4 page
            </Link>
        </div>
    );
}