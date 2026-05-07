import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';

type DashboardProps = {
    qrScanCount: number;
};

export default function Dashboard({ qrScanCount }: DashboardProps) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                        <p className="text-sm font-medium text-muted-foreground">
                            QR code visits
                        </p>
                        <p className="mt-4 text-5xl font-bold tracking-tight">
                            {qrScanCount.toLocaleString()}
                        </p>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Link your QR code to /qr to track each scan.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
