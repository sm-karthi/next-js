import Card from "@/app/_components/dashboard-components/card";
import Link from "next/link";

export default function ArchivedNotificationsPage() {
    return (
        <Card>
            <h1>Archived Notifications</h1>
            <p>This is the archived notifications page content.</p>

            <Link className="text-blue-500" href="/complex-dashboard">Default</Link>
        </Card>
    );
}