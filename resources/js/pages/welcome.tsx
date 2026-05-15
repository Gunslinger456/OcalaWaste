import { Head } from '@inertiajs/react';
import {
    CalendarDays,
    ChevronRight,
    Clipboard,
    CopyCheck,
    Clock3,
    ExternalLink,
    FileText,
    Mail,
    MapPin,
    Share2,
    ShieldAlert,
    Skull,
    Video,
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
import { useClipboard } from '@/hooks/use-clipboard';

const meetingDate = new Date('2026-06-02T14:00:00-04:00');
const planningZoningMeetingUrl =
    'https://marionfl.granicus.com/player/clip/1509';
const concernChips = [
    'Open-Air Odor',
    'Truck Traffic',
    'Pest Risk',
    'Home Value Risk',
    'Near Schools',
];
const heroImages = [
    {
        src: '/images/proposal-map.png',
        alt: 'Map of the proposed NW Gainesville Rd site area',
        label: 'Proposed Site',
    },
    {
        src: '/images/signs/Yellow%20Black%20and%20Red%20Bold%20Caution%20Yard%20Sign.png',
        alt: 'Road sign opposing the proposed waste facility near NW Gainesville Road',
        label: 'Road Sign',
    },
    {
        src: '/images/signs/Yellow%20Black%20and%20Red%20Bold%20Caution%20Yard%20Sign%20(1).png',
        alt: 'Road sign warning Ocala residents about the proposed waste facility vote',
        label: 'Road Sign',
    },
];
const denaliImages = [
    {
        src: '/images/DenaliPics/c_f.jpg',
        alt: 'Food waste material associated with depackaging concerns',
    },
    {
        src: '/images/DenaliPics/food-picture.webp',
        alt: 'Discarded food waste before processing',
    },
    {
        src: '/images/DenaliPics/Walmart_Denali_depack_2.66bbb40db3321.avif',
        alt: 'Food depackaging equipment handling packaged waste',
    },
];
const commissionerLetter = `Dear Commissioner,

I am writing to oppose the proposed food waste depackaging and slurrification facility on NW Gainesville Road.

This is the wrong location for an operation that would receive rotting food waste, tear open packaged waste, separate plastics and contaminants, and turn the remaining wet organic material into a pumpable slurry for fertilizer-related use. Residents are concerned about odors, pests, runoff, heavy truck traffic, fire risk, and the long-term effect on nearby homes, schools, churches, farms, and local businesses.

Please vote no on the special use permit and require any proposal like this to go through a full public review in a location that does not put established neighborhoods and daily travel routes at risk.

Sincerely,`;

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
    const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
    const [currentDenaliImageIndex, setCurrentDenaliImageIndex] = useState(0);
    const [copiedText, copy] = useClipboard();
    const letterWasCopied = copiedText === commissionerLetter;
    const currentHeroImage = heroImages[currentHeroImageIndex];
    const currentDenaliImage = denaliImages[currentDenaliImageIndex];

    useEffect(() => {
        setCurrentTime(new Date());

        const timer = window.setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentHeroImageIndex(
                (currentIndex) => (currentIndex + 1) % heroImages.length,
            );
        }, 4500);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentDenaliImageIndex(
                (currentIndex) => (currentIndex + 1) % denaliImages.length,
            );
        }, 3800);

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
                <section className="border-b border-[#f4b860]/30 bg-[#1f2b23] px-6 py-3 lg:px-8">
                    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 text-sm font-semibold">
                        <p className="inline-flex items-center gap-2 text-[#ffd27c]">
                            <span className="size-2.5 animate-pulse rounded-full bg-[#f4b860]" />
                            Public comment is limited to 2 minutes
                        </p>
                        <p className="inline-flex items-center gap-2 text-white/90">
                            <span className="size-2.5 animate-pulse rounded-full bg-[#d96c3b]" />
                            Vote date: June 2, 2026 at 2:00 PM
                        </p>
                    </div>
                </section>
                <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#17211b]/95 px-3 py-2 backdrop-blur lg:px-8">
                    <div className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-2 text-sm font-black">
                        <a
                            href="#take-action"
                            className="rounded-md border border-[#f4b860] bg-[#f4b860] px-3 py-2 text-center text-[#17211b] transition hover:bg-[#ffd27c] focus-visible:ring-4 focus-visible:ring-[#f4b860]/40 focus-visible:outline-none"
                        >
                            Take Action
                        </a>
                        <a
                            href="#what-is-it"
                            className="rounded-md border border-white/15 bg-white/[0.07] px-3 py-2 text-center text-white transition hover:bg-white/[0.14] focus-visible:ring-4 focus-visible:ring-white/20 focus-visible:outline-none"
                        >
                            What Is It?
                        </a>
                        <a
                            href="/more-info"
                            className="rounded-md border border-[#d96c3b]/60 bg-[#d96c3b]/16 px-3 py-2 text-center text-[#ffd7c2] transition hover:bg-[#d96c3b]/28 hover:text-white focus-visible:ring-4 focus-visible:ring-[#d96c3b]/35 focus-visible:outline-none"
                        >
                            More Info
                        </a>
                    </div>
                </nav>
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(244,184,96,0.18),transparent_32%),linear-gradient(135deg,rgba(23,33,27,0.96),rgba(23,33,27,0.78))]" />
                    <div
                        id="take-action"
                        className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-20 items-center px-6 py-10 lg:px-8"
                    >
                        <div className="grid w-full gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90">
                                    <ShieldAlert className="size-4 text-[#f4b860]" />
                                    Protect Ocala Neighborhoods
                                </div>
                                <h1
                                    className="mt-5 max-w-5xl text-4xl leading-tight font-extrabold text-balance sm:text-6xl"
                                    style={{
                                        fontFamily:
                                            'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    OCALA: VOTE NO ON THE NW GAINESVILLE RD
                                    WASTE FACILITY!
                                </h1>
                                <p className="mt-4 max-w-4xl text-2xl leading-8 font-black text-[#ffd7c2] sm:text-3xl">
                                    Rotting food waste. Industrial processing.
                                    Fertilizer slurry. Heavy truck traffic. Odor
                                    concerns. Pest concerns!
                                </p>
                                <p className="mt-4 max-w-3xl text-base leading-7 text-white/86 sm:text-lg">
                                    They want to put this near our{' '}
                                    <span
                                        className="hero-underline-word"
                                        style={{
                                            ['--underline-delay' as string]:
                                                '40ms',
                                        }}
                                    >
                                        schools
                                    </span>
                                    ,{' '}
                                    <span
                                        className="hero-underline-word"
                                        style={{
                                            ['--underline-delay' as string]:
                                                '120ms',
                                        }}
                                    >
                                        churches
                                    </span>
                                    ,{' '}
                                    <span
                                        className="hero-underline-word"
                                        style={{
                                            ['--underline-delay' as string]:
                                                '200ms',
                                        }}
                                    >
                                        homes
                                    </span>
                                    ,{' '}
                                    <span
                                        className="hero-underline-word"
                                        style={{
                                            ['--underline-delay' as string]:
                                                '280ms',
                                        }}
                                    >
                                        farms
                                    </span>
                                    , and{' '}
                                    <span
                                        className="hero-underline-word"
                                        style={{
                                            ['--underline-delay' as string]:
                                                '360ms',
                                        }}
                                    >
                                        businesses
                                    </span>
                                    .
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {concernChips.map((chip) => (
                                        <span
                                            key={chip}
                                            className="rounded-md border border-[#f4b860]/40 bg-[#f4b860]/12 px-3 py-1.5 text-sm font-black text-[#ffd27c]"
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 rounded-lg border border-[#f4b860]/30 bg-black/25 p-5">
                                    <p className="text-sm font-black tracking-wide text-[#ffd27c] uppercase">
                                        What Happens If We Do Nothing
                                    </p>
                                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/85">
                                        <li>
                                            Odor exposure near daily
                                            neighborhood routes and homes.
                                        </li>
                                        <li>
                                            More heavy trucks around schools,
                                            churches, and local roads.
                                        </li>
                                        <li>
                                            Harder home sales and long-term
                                            neighborhood impact concerns.
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-5 rounded-lg border border-white/15 bg-white/[0.06] p-4">
                                    <p className="text-sm font-black tracking-wide text-[#f4b860] uppercase">
                                        Do this next
                                    </p>
                                    <ol className="mt-3 grid gap-2 text-sm leading-6 text-white/86">
                                        <li>
                                            Step 1: Tap "I Will Speak At The
                                            Meeting" and commit to showing up.
                                        </li>
                                        <li>
                                            Step 2: Tap "Contact commissioners"
                                            and submit your opposition.
                                        </li>
                                        <li>
                                            Step 3: Tap "More info" and pick
                                            your strongest talking points.
                                        </li>
                                    </ol>
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button
                                                type="button"
                                                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#f4b860] bg-[#f4b860] px-5 py-3 text-center text-base font-black text-[#17211b] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffd27c] focus-visible:ring-4 focus-visible:ring-[#f4b860]/40 focus-visible:outline-none"
                                            >
                                                I Will Speak At The Meeting
                                                <ChevronRight className="size-4" />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="border-[#f4b860]/35 bg-[#17211b] text-white sm:max-w-2xl">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl leading-tight font-black text-white">
                                                    Show up before the vote
                                                </DialogTitle>
                                                <DialogDescription className="text-sm leading-6 text-white/74">
                                                    Public input before the vote
                                                    is critical. Bring
                                                    neighbors, speak clearly,
                                                    and ask commissioners to
                                                    deny the special use permit
                                                    or require a full public
                                                    review.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <p className="rounded-md bg-black/25 px-3 py-2 text-sm font-semibold text-white/90">
                                                Countdown: {meetingCountdown}
                                            </p>
                                            <div className="grid gap-3 sm:grid-cols-3">
                                                <div className="rounded-md bg-white p-4 text-[#17211b]">
                                                    <CalendarDays className="mb-2 size-5 text-[#d96c3b]" />
                                                    <p className="text-xs font-black tracking-wide uppercase">
                                                        Date
                                                    </p>
                                                    <p className="mt-1 text-base font-black">
                                                        June 2, 2026
                                                    </p>
                                                </div>
                                                <div className="rounded-md bg-white p-4 text-[#17211b]">
                                                    <Clock3 className="mb-2 size-5 text-[#d96c3b]" />
                                                    <p className="text-xs font-black tracking-wide uppercase">
                                                        Time
                                                    </p>
                                                    <p className="mt-1 text-base font-black">
                                                        2:00 PM
                                                    </p>
                                                </div>
                                                <div className="rounded-md bg-white p-4 text-[#17211b]">
                                                    <MapPin className="mb-2 size-5 text-[#d96c3b]" />
                                                    <p className="text-xs font-black tracking-wide uppercase">
                                                        Location
                                                    </p>
                                                    <p className="mt-1 text-sm leading-6 font-black">
                                                        McPherson Governmental
                                                        Campus Auditorium
                                                    </p>
                                                    <p className="mt-1 text-sm leading-6 text-[#4a554d]">
                                                        601 SE 25th Ave, Ocala,
                                                        FL 34471
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button
                                                type="button"
                                                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-3 text-center text-sm font-semibold text-white/90 transition hover:bg-white/[0.1] focus-visible:ring-4 focus-visible:ring-white/20 focus-visible:outline-none"
                                            >
                                                Contact commissioners
                                                <Mail className="size-4" />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="border-[#f4b860]/35 bg-[#17211b] text-white sm:max-w-3xl">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl leading-tight font-black text-white">
                                                    Send commissioners a clear
                                                    no
                                                </DialogTitle>
                                                <DialogDescription className="text-sm leading-6 text-white/74">
                                                    Copy this letter, add your
                                                    name and address, then send
                                                    it through the county
                                                    commissioner contact page.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="max-h-[48vh] overflow-y-auto rounded-md border border-white/15 bg-black/25 p-4">
                                                <pre className="text-sm leading-6 whitespace-pre-wrap text-white/86">
                                                    {commissionerLetter}
                                                </pre>
                                            </div>
                                            <DialogFooter className="gap-2 sm:justify-between">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        void copy(
                                                            commissionerLetter,
                                                        )
                                                    }
                                                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#f4b860] bg-[#f4b860] px-4 py-2 text-sm font-black text-[#17211b] transition hover:bg-[#ffd27c] focus-visible:ring-4 focus-visible:ring-[#f4b860]/40 focus-visible:outline-none"
                                                >
                                                    {letterWasCopied
                                                        ? 'Letter copied'
                                                        : 'Copy letter'}
                                                    {letterWasCopied ? (
                                                        <CopyCheck className="size-4" />
                                                    ) : (
                                                        <Clipboard className="size-4" />
                                                    )}
                                                </button>
                                                <a
                                                    href="https://www.marionfl.org/my-commissioners"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-black text-white transition hover:bg-white/[0.14] focus-visible:ring-4 focus-visible:ring-white/20 focus-visible:outline-none"
                                                >
                                                    Open commissioner page
                                                    <ExternalLink className="size-4" />
                                                </a>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <a
                                        href="/more-info"
                                        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#d96c3b]/50 bg-[#d96c3b]/12 px-4 py-3 text-center text-sm font-semibold text-[#ffd7c2] transition hover:bg-[#d96c3b]/24 hover:text-white focus-visible:ring-4 focus-visible:ring-[#d96c3b]/35 focus-visible:outline-none"
                                    >
                                        More info
                                        <FileText className="size-4" />
                                    </a>
                                    <a
                                        href={planningZoningMeetingUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#f4b860]/45 bg-[#f4b860]/12 px-4 py-3 text-center text-sm font-semibold text-[#ffd27c] transition hover:bg-[#f4b860]/22 hover:text-white focus-visible:ring-4 focus-visible:ring-[#f4b860]/35 focus-visible:outline-none"
                                    >
                                        Watch P&Z meeting
                                        <Video className="size-4" />
                                    </a>
                                </div>
                            </div>

                            <aside className="overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                                <div className="relative">
                                    <img
                                        src={currentHeroImage.src}
                                        alt={currentHeroImage.alt}
                                        className="aspect-[4/3] w-full object-cover"
                                    />
                                    <div className="absolute right-3 bottom-3 rounded-md border border-black/20 bg-[#17211b]/88 px-3 py-1.5 text-xs font-black tracking-wide text-[#ffd27c] uppercase">
                                        {currentHeroImage.label}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div
                                        className="flex gap-2"
                                        aria-label="Featured image controls"
                                    >
                                        {heroImages.map((image, index) => (
                                            <button
                                                key={image.src}
                                                type="button"
                                                aria-label={`Show ${image.label.toLowerCase()} image ${index + 1}`}
                                                onClick={() =>
                                                    setCurrentHeroImageIndex(
                                                        index,
                                                    )
                                                }
                                                className={`h-2.5 flex-1 rounded-full transition ${
                                                    index ===
                                                    currentHeroImageIndex
                                                        ? 'bg-[#f4b860]'
                                                        : 'bg-white/25 hover:bg-white/45'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="mt-4 text-sm font-black tracking-wide text-[#f4b860] uppercase">
                                        Proposed site and road signs
                                    </p>
                                    <h2 className="mt-2 text-2xl leading-tight font-black">
                                        NW Gainesville Rd in Ocala
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/76">
                                        The rotating image shows the proposed
                                        location map and the road signs
                                        residents are seeing around town, so
                                        visitors know they are on the right
                                        site.
                                    </p>
                                    <div className="mt-4 rounded-md border border-[#f4b860]/35 bg-[#f4b860]/12 p-4">
                                        <p className="text-xs font-black tracking-wide text-[#ffd27c] uppercase">
                                            Vote meeting
                                        </p>
                                        <p className="mt-1 text-lg font-black">
                                            June 2 at 2:00 PM
                                        </p>
                                        <p className="mt-1 text-sm text-white/76">
                                            {meetingCountdown}
                                        </p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <section
                    id="what-is-it"
                    className="scroll-mt-20 border-t-8 border-[#d96c3b] bg-[#0f1713] px-6 py-12 lg:px-8"
                >
                    <div className="mx-auto mb-8 w-full max-w-7xl rounded-lg border border-[#f4b860]/45 bg-[#f4b860] px-4 py-4 text-[#17211b] shadow-[0_18px_42px_rgba(0,0,0,0.28)] sm:px-6">
                        <div className="flex items-center gap-3">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[#17211b] text-[#ffd27c]">
                                <Skull className="size-6" />
                            </span>
                            <p className="text-2xl leading-tight font-black sm:text-3xl">
                                What is this plant?
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                        <div>
                            <h2 className="mt-4 text-3xl leading-tight font-black text-white sm:text-4xl">
                                A nasty food-waste grinding and slurry
                                operation.
                            </h2>
                            <p className="mt-4 text-sm leading-6 text-white/76">
                                Food waste depackaging is where expired,
                                spoiled, and rejected packaged food is hauled
                                in, ripped open, and separated from wrappers,
                                plastic, boxes, cans, and other trash.
                                Slurrification means the wet organic mess left
                                behind is mixed and ground into a pumpable
                                sludge.
                            </p>
                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                {[
                                    'Dropped-off food waste is processed through the depackaging machine.',
                                    'The machine separates packaging from organic food material.',
                                    'The slurry goes through a hammermill process into leachate tanks, then can be sprayed into open-air windrows of vegetative debris like mulch or tree debris.',
                                ].map((point, index) => (
                                    <div
                                        key={point}
                                        className="rounded-lg border border-white/12 bg-white/[0.06] p-4"
                                    >
                                        <p className="text-xs font-black tracking-wide text-[#f4b860] uppercase">
                                            Step {index + 1}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-white/84">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <aside className="overflow-hidden rounded-lg border border-[#f4b860]/35 bg-white/[0.07] shadow-[0_18px_42px_rgba(0,0,0,0.24)]">
                            <div className="relative">
                                <img
                                    src={currentDenaliImage.src}
                                    alt={currentDenaliImage.alt}
                                    className="aspect-[4/3] w-full object-cover"
                                />
                                <div className="absolute right-3 bottom-3 rounded-md border border-black/20 bg-[#17211b]/88 px-3 py-1.5 text-xs font-black tracking-wide text-[#ffd27c] uppercase">
                                    Food waste example
                                </div>
                            </div>
                            <div className="p-4">
                                <div
                                    className="flex gap-2"
                                    aria-label="Food waste image controls"
                                >
                                    {denaliImages.map((image, index) => (
                                        <button
                                            key={image.src}
                                            type="button"
                                            aria-label={`Show food waste example ${index + 1}`}
                                            onClick={() =>
                                                setCurrentDenaliImageIndex(
                                                    index,
                                                )
                                            }
                                            className={`h-2.5 flex-1 rounded-full transition ${
                                                index ===
                                                currentDenaliImageIndex
                                                    ? 'bg-[#f4b860]'
                                                    : 'bg-white/25 hover:bg-white/45'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-white/78">
                                    Images from the added DenaliPics folder
                                    rotate here to show what this kind of waste
                                    handling looks like.
                                </p>
                            </div>
                        </aside>
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
                                    Ask for denial of the special use permit
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="border-t border-white/10 bg-[#0f1713] px-6 py-6 lg:px-8">
                    <div className="mx-auto w-full max-w-7xl rounded-lg border border-white/15 bg-white/[0.06] p-4">
                        <p className="text-sm leading-6 text-white/82">
                            Notice: This page shares residents&apos; opinions
                            and concerns for public discussion. It does not
                            claim undisputed facts about any person or company.
                            For public comments, stick to documented sources,
                            firsthand experiences, and policy concerns.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
