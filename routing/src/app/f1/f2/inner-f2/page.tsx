import Link from "next/link";

export default function InnerF2() {
    return (
        <div>
            <h1>Inner F2 page</h1>

            <Link href="/f5" className="text-blue-500 hover:underline w-fit">
                Go to F5 page
            </Link>
        </div>
    );
}