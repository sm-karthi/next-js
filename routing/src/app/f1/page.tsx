import Link from "next/link";

export default function F1() {
    return (
        <div className="flex flex-col">
            <h1>F1 page</h1>

            <Link href="/f1/f2" className="text-blue-500 hover:underline w-fit">
                Go to F2 page
            </Link>

            <Link href="/f3" className="text-blue-500 hover:underline w-fit">
                Go to F3 page
            </Link>
        </div>
    );
}
