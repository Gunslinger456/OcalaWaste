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

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

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
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(244,184,96,0.18),transparent_32%),linear-gradient(135deg,rgba(23,33,27,0.96),rgba(23,33,27,0.78))]" />
                    <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10 lg:px-8">
                        <div className="grid w-full gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <div>
                            <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90">
                                <ShieldAlert className="size-4 text-[#f4b860]" />
                                Protect Ocala Neighborhoods
                            </div>
                            <h1
                                className="mt-5 max-w-4xl text-4xl leading-tight font-extrabold text-balance sm:text-6xl"
                                style={{
                                    fontFamily:
                                        'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                }}
                            >
                                They want to put this near our{' '}
                                <span
                                    className="hero-underline-word"
                                    style={{ ['--underline-delay' as string]: '40ms' }}
                                >
                                    schools
                                </span>
                                ,{' '}
                                <span
                                    className="hero-underline-word"
                                    style={{ ['--underline-delay' as string]: '120ms' }}
                                >
                                    churches
                                </span>
                                ,{' '}
                                <span
                                    className="hero-underline-word"
                                    style={{ ['--underline-delay' as string]: '200ms' }}
                                >
                                    homes
                                </span>
                                ,{' '}
                                <span
                                    className="hero-underline-word"
                                    style={{ ['--underline-delay' as string]: '280ms' }}
                                >
                                    farms
                                </span>
                                , and{' '}
                                <span
                                    className="hero-underline-word"
                                    style={{ ['--underline-delay' as string]: '360ms' }}
                                >
                                    businesses
                                </span>
                                !
                            </h1>
                            <p className="mt-5 max-w-3xl text-xl leading-8 font-semibold text-white sm:text-2xl">
                                Rotting food waste. Industrial processing. Fertilizer slurry. Heavy truck
                                traffic. Odor concerns. Pest concerns!
                            </p>
                            <div className="mt-5 max-w-3xl border-l-4 border-[#f4b860] bg-black/20 px-5 py-4">
                                <p className="text-base leading-7 text-white/86 sm:text-lg">
                                    And they want to put it on NW Gainesville Rd in Ocala, near the people and
                                    places that hold this community together. Public input before the vote is
                                    critical. Our community needs to speak up now!
                                </p>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button
                                            type="button"
                                            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#f4b860] bg-[#f4b860] px-5 py-3 text-center text-sm font-black text-[#17211b] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffd27c] focus-visible:ring-4 focus-visible:ring-[#f4b860]/40 focus-visible:outline-none"
                                        >
                                            Show up at the meeting
                                            <ChevronRight className="size-4" />
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="border-[#f4b860]/35 bg-[#17211b] text-white sm:max-w-2xl">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl leading-tight font-black text-white">
                                                Show up before the vote
                                            </DialogTitle>
                                            <DialogDescription className="text-sm leading-6 text-white/74">
                                                Public input before the vote is critical. Bring neighbors, speak
                                                clearly, and ask commissioners to deny the special use permit or
                                                require a full public review.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <p className="rounded-md bg-black/25 px-3 py-2 text-sm font-semibold text-white/90">
                                            Countdown: {meetingCountdown}
                                        </p>
                                        <div className="grid gap-3 sm:grid-cols-3">
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
                                                <p className="text-xs font-black tracking-wide uppercase">
                                                    Location
                                                </p>
                                                <p className="mt-1 text-sm leading-6 font-black">
                                                    McPherson Governmental Campus Auditorium
                                                </p>
                                                <p className="mt-1 text-sm leading-6 text-[#4a554d]">
                                                    601 SE 25th Ave, Ocala, FL 34471
                                                </p>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <a
                                                href="mailto:?subject=Please%20attend%20the%20City%20Commission%20meeting&body=A%20food%20waste%20depackaging%20and%20fertilizer%20operation%20is%20being%20proposed%20near%20schools%2C%20homes%2C%20farms%2C%20and%20local%20businesses.%20Please%20show%20up%20at%20the%20City%20Commission%20meeting%20and%20ask%20commissioners%20to%20deny%20the%20special%20use%20permit."
                                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-black text-white transition hover:bg-white/[0.14] focus-visible:ring-4 focus-visible:ring-white/20 focus-visible:outline-none"
                                            >
                                                Share this page
                                                <Share2 className="size-4" />
                                            </a>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
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

                            <aside className="overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                                <img
                                    src="/images/proposal-map.png"
                                    alt="Map of the proposed NW Gainesville Rd site area"
                                    className="aspect-[4/3] w-full object-cover"
                                />
                                <div className="p-5">
                                    <p className="text-sm font-black tracking-wide text-[#f4b860] uppercase">
                                        Proposed site
                                    </p>
                                    <h2 className="mt-2 text-2xl leading-tight font-black">
                                        NW Gainesville Rd in Ocala
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/76">
                                        A proposed food waste depackaging and fertilizer operation belongs under
                                        full public review before it is placed near schools, churches, homes,
                                        farms, and local businesses.
                                    </p>
                                    <div className="mt-4 rounded-md border border-[#f4b860]/35 bg-[#f4b860]/12 p-4">
                                        <p className="text-xs font-black tracking-wide text-[#ffd27c] uppercase">
                                            Vote meeting
                                        </p>
                                        <p className="mt-1 text-lg font-black">June 2 at 2:00 PM</p>
                                        <p className="mt-1 text-sm text-white/76">{meetingCountdown}</p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="border-t border-white/10 bg-[#111914] px-6 py-8 lg:px-8">
                    <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                        <div>
                            <p className="text-sm font-black tracking-wide text-[#f4b860] uppercase">
                                What to ask for
                            </p>
                            <h2 className="mt-2 text-3xl font-black text-white">
                                Put the risk on the public record.
                            </h2>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-lg border border-white/12 bg-white/[0.06] p-4">
                                <p className="text-sm leading-6 text-white/82">
                                    Ask for denial of the special use permit, or a full public review of odor
                                    control, truck routing, environmental safeguards, and enforcement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
