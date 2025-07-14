import Card from "@/app/_components/dashboard-components/card";
import Link from "next/link";

export default function NotificationsPage() {
    return (
        <Card>
            <h1>Notifications Page</h1>
            <p>This is the notifications page content.</p>
            <Link className="text-blue-500" href="/complex-dashboard/archived">Archived</Link>
        </Card>
    );
}