import { Head } from '@inertiajs/react';
import {
    CalendarDays,
    ChevronRight,
    Clock3,
    FileText,
    Mail,
    MapPin,
    Share2,
    ShieldAlert,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const meetingDate = new Date('2026-06-02T14:00:00-04:00');

function formatCountdown(targetDate: Date, now: Date): string {
    const remainingMs = Math.max(targetDate.getTime() - now.getTime(), 0);
    const totalSeconds = Math.floor(remainingMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (totalSeconds === 0) {
        return 'Meeting day is here';
    }

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function Welcome() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentTime(new Date());

        const timer = window.setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    const meetingCountdown = useMemo(() => {
        if (currentTime === null) {
            return 'Loading countdown...';
        }

        return formatCountdown(meetingDate, currentTime);
    }, [currentTime]);

    return (
        <>
            <Head title="Protect Our Community" />
            <main className="min-h-screen bg-[#17211b] text-white">
                <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10 lg:px-8">
                    <div className="grid w-full gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                        <div className="rounded-lg border border-white/15 bg-black/20 p-6 md:p-8">
                            <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90">
                                <ShieldAlert className="size-4 text-[#f4b860]" />
                                Protect Ocala Neighborhoods
                            </div>
                            <h1
                                className="mt-5 text-4xl leading-tight font-extrabold text-balance sm:text-5xl"
                                style={{
                                    fontFamily:
                                        'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                }}
                            >
                                PROTECT OUR KIDS, NEIGHBORHOODS, CHURCHES AND BUSINESSES
                            </h1>
                            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">
                                A food waste depackaging and fertilizer operation is proposed near schools,
                                churches, homes, farms, and local businesses. Public input before the vote is
                                critical.
                            </p>
                            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                <a
                                    href="#meeting"
                                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#f4b860] bg-[#f4b860] px-5 py-3 text-center text-sm font-black text-[#17211b] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffd27c] focus-visible:ring-4 focus-visible:ring-[#f4b860]/40 focus-visible:outline-none"
                                >
                                    Show up at the meeting
                                    <ChevronRight className="size-4" />
                                </a>
                                <a
                                    href="https://www.marionfl.org/my-commissioners"
                                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.08] px-5 py-3 text-center text-sm font-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.14] focus-visible:ring-4 focus-visible:ring-white/20 focus-visible:outline-none"
                                >
                                    Contact commissioners
                                    <Mail className="size-4" />
                                </a>
                                <a
                                    href="/more-info"
                                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#d96c3b]/80 bg-[#d96c3b]/18 px-5 py-3 text-center text-sm font-black text-[#ffd7c2] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-[#f0844f] hover:bg-[#d96c3b]/28 hover:text-white focus-visible:ring-4 focus-visible:ring-[#d96c3b]/35 focus-visible:outline-none sm:col-span-2 xl:col-span-1"
                                >
                                    More info
                                    <FileText className="size-4" />
                                </a>
                            </div>
                        </div>

                        <aside id="meeting" className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur">
                            <p className="text-sm font-black tracking-wide text-[#f4b860] uppercase">Meeting Details</p>
                            <p className="mt-3 rounded-md bg-black/25 px-3 py-2 text-sm font-semibold text-white/90">
                                Countdown: {meetingCountdown}
                            </p>
                            <div className="mt-4 grid gap-3">
                                <div className="rounded-md bg-white p-4 text-[#17211b]">
                                    <CalendarDays className="mb-2 size-5 text-[#d96c3b]" />
                                    <p className="text-xs font-black tracking-wide uppercase">Date</p>
                                    <p className="mt-1 text-base font-black">June 2, 2026</p>
                                </div>
                                <div className="rounded-md bg-white p-4 text-[#17211b]">
                                    <Clock3 className="mb-2 size-5 text-[#d96c3b]" />
                                    <p className="text-xs font-black tracking-wide uppercase">Time</p>
                                    <p className="mt-1 text-base font-black">2:00 PM</p>
                                </div>
                                <div className="rounded-md bg-white p-4 text-[#17211b]">
                                    <MapPin className="mb-2 size-5 text-[#d96c3b]" />
                                    <p className="text-xs font-black tracking-wide uppercase">Location</p>
                                    <p className="mt-1 text-sm leading-6 font-black">
                                        McPherson Governmental Campus Auditorium
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-[#4a554d]">
                                        601 SE 25th Ave, Ocala, FL 34471
                                    </p>
                                </div>
                            </div>
                            <a
                                href="mailto:?subject=Please%20attend%20the%20City%20Commission%20meeting&body=A%20food%20waste%20depackaging%20and%20fertilizer%20operation%20is%20being%20proposed%20near%20schools%2C%20homes%2C%20farms%2C%20and%20local%20businesses.%20Please%20show%20up%20at%20the%20City%20Commission%20meeting%20and%20ask%20commissioners%20to%20deny%20the%20special%20use%20permit."
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 underline-offset-4 transition hover:text-white hover:underline"
                            >
                                Share this page
                                <Share2 className="size-4" />
                            </a>
                        </aside>
                    </div>
                </section>

                <section id="commissioners" className="border-t border-white/10 bg-[#111914] px-6 py-8 lg:px-8">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-white/85 md:flex-row md:items-center md:justify-between">
                        <p className="max-w-4xl text-sm leading-6">
                            Ask for denial of the special use permit, or a full public review of odor control,
                            truck routing, environmental safeguards, and enforcement.
                        </p>
                        <p className="text-sm font-semibold text-white">Commissioner contact list pending update.</p>
                    </div>
                </section>
            </main>
        </>
    );
}
