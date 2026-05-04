
import { Head } from '@inertiajs/react';
import {
    AlertTriangle,
    CalendarDays,
    ChevronRight,
    Factory,
    Leaf,
    MapPin,
    Megaphone,
    PhoneCall,
    School,
    Share2,
    ShieldAlert,
    Sprout,
    Truck,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';


const concerns = [
    {
        icon: School,
        title: 'Schools and homes nearby',
        body: 'A heavy waste-processing use belongs under serious scrutiny when families, classrooms, farms, and small businesses are close enough to feel the impact.',
    },
    {
        icon: AlertTriangle,
        title: 'Odor and air-quality concerns',
        body: 'Food waste depackaging can create persistent odor issues if handling, storage, truck queues, or processing controls fall short.',
    },
    {
        icon: Truck,
        title: 'More industrial traffic',
        body: 'Truck trips, turning movements, early arrivals, and unloading operations should be addressed before any special use permit is approved.',
    },
    {
        icon: Leaf,
        title: 'Environmental safeguards',
        body: 'Residents deserve clear answers about runoff, pests, wastewater, emergency response, monitoring, enforcement, and long-term accountability.',
    },
];

const actionSteps = [
    'Attend the City Commission meeting and ask commissioners to deny the special use permit.',
    'Call or email commissioners before the hearing and ask for protections for nearby schools, homes, farms, and local businesses.',
    'Share this page with neighbors, parents, farm owners, business owners, and anyone who will live with the decision.',
];

const meetingDate = new Date('2026-06-02T00:00:00-04:00');

type MapPointer = {
    label: string;
    labelX: number;
    labelY: number;
    topX: number;
    topY: number;
    anchorX: number;
    anchorY: number;
};

const mapPointers: MapPointer[] = [
  {
    "label": "Fessenden Elementary",
    "labelX": 2.69,
    "labelY": -8.66,
    "topX": 2.11,
    "topY": -0.2,
    "anchorX": 16.93,
    "anchorY": 16.98
  },
  {
    "label": "Homes",
    "labelX": -8.62,
    "labelY": 19.49,
    "topX": -8.42,
    "topY": 29.23,
    "anchorX": 20.44,
    "anchorY": 48.72
  },
  {
    "label": "Church",
    "labelX": 71.73,
    "labelY": 18.46,
    "topX": 65.68,
    "topY": 22.56,
    "anchorX": 24.92,
    "anchorY": 26.92
  },
  {
    "label": "Local businesses",
    "labelX": 42.87,
    "labelY": 85.9,
    "topX": 43.45,
    "topY": 72.56,
    "anchorX": 81.09,
    "anchorY": 42.56
  }

];

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
    const [showMapPointers, setShowMapPointers] = useState(true);
    const [editMapPointers, setEditMapPointers] = useState(false);
    const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>(
        'idle',
    );
    const [mapPointerState, setMapPointerState] =
        useState<MapPointer[]>(mapPointers);
    const mapCanvasRef = useRef<HTMLDivElement | null>(null);
    const dragStateRef = useRef<{
        index: number;
        type: 'label' | 'anchor' | 'top';
    } | null>(null);

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

    const mapPointerConfig = useMemo(() => {
        return JSON.stringify(mapPointerState, null, 2);
    }, [mapPointerState]);

    const copyMapPointerConfig = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(mapPointerConfig);
            setCopyStatus('copied');
        } catch {
            setCopyStatus('error');
        }

        window.setTimeout(() => {
            setCopyStatus('idle');
        }, 1800);
    };

    useEffect(() => {
        if (!editMapPointers) {
            dragStateRef.current = null;
            return;
        }

        const handlePointerMove = (event: PointerEvent): void => {
            const dragState = dragStateRef.current;
            const mapCanvas = mapCanvasRef.current;

            if (dragState === null || mapCanvas === null) {
                return;
            }

            const rect = mapCanvas.getBoundingClientRect();
            const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
            const yPercent = ((event.clientY - rect.top) / rect.height) * 100;
            const clampedX = Math.max(-60, Math.min(160, xPercent));
            const clampedY = Math.max(-60, Math.min(160, yPercent));

            setMapPointerState((currentPointers) =>
                currentPointers.map((pointer, pointerIndex) => {
                    if (pointerIndex !== dragState.index) {
                        return pointer;
                    }

                    if (dragState.type === 'label') {
                        return {
                            ...pointer,
                            labelX: Number(clampedX.toFixed(2)),
                            labelY: Number(clampedY.toFixed(2)),
                        };
                    }
                    if (dragState.type === 'top') {
                        return {
                            ...pointer,
                            topX: Number(clampedX.toFixed(2)),
                            topY: Number(clampedY.toFixed(2)),
                        };
                    }

                    return {
                        ...pointer,
                        anchorX: Number(clampedX.toFixed(2)),
                        anchorY: Number(clampedY.toFixed(2)),
                    };
                }),
            );
        };

        const handlePointerUp = (): void => {
            dragStateRef.current = null;
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [editMapPointers]);

    return (
        <>
            <Head title="Protect Our Community" />
            <main className="min-h-screen bg-[#f7f4ed] text-[#17211b]">
                <section className="relative isolate overflow-hidden bg-[#17211b] text-white">
                    <div className="absolute inset-0 -z-10 opacity-35">
                        <div className="absolute top-10 left-[8%] h-56 w-56 rounded-full bg-[#7fb069] blur-3xl" />
                        <div className="absolute right-[10%] bottom-0 h-72 w-72 rounded-full bg-[#d96c3b] blur-3xl" />
                        <div className="absolute top-[35%] left-[45%] h-64 w-64 rounded-full bg-[#4f7cac] blur-3xl" />
                    </div>

                    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                        <a
                            href="#top"
                            className="flex items-center gap-3 text-sm font-semibold tracking-wide uppercase"
                        >
                            <span className="flex size-10 items-center justify-center rounded-md bg-[#d96c3b] text-white shadow-lg shadow-black/20">
                                <ShieldAlert className="size-5" />
                            </span>
                            Ocala Waste Watch
                        </a>
                        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
                            <a href="#proposal" className="hover:text-white">
                                Proposal
                            </a>
                            <a href="#concerns" className="hover:text-white">
                                Concerns
                            </a>
                            <a href="#meeting" className="hover:text-white">
                                Meeting
                            </a>
                        </nav>
                    </header>

                    <div
                        id="top"
                        className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-20 lg:pb-28"
                    >
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur">
                                <Megaphone className="size-4 text-[#f4b860]" />
                                Meeting countdown: {meetingCountdown}
                            </div>
                            <h1 className="max-w-4xl text-5xl leading-[0.95] font-black tracking-tight text-balance sm:text-6xl lg:text-7xl">
                                Protect our schools, Churches, homes, farms, and local
                                businesses.
                            </h1>
                            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
                                A food waste depackaging and fertilizer
                                operation is being proposed near places where
                                families learn, live, work, grow food, and run
                                local businesses. The City Commission needs to
                                hear from residents before deciding on the
                                special use permit.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#meeting"
                                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#f4b860] px-6 py-3 text-sm font-bold text-[#17211b] shadow-xl shadow-black/20 transition hover:bg-[#ffd27c]"
                                >
                                    Show up at the meeting
                                    <ChevronRight className="size-4" />
                                </a>
                                <a
                                    href="#commissioners"
                                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/18"
                                >
                                    Contact commissioners
                                    <PhoneCall className="size-4" />
                                </a>
                            </div>
                        </div>

                        <div className="relative overflow-visible rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                            <div className="pointer-events-none absolute inset-5 rounded-md border border-white/10 bg-[#e9e1cf]/95" />
                            <div
                                ref={mapCanvasRef}
                                className="relative min-h-[390px] overflow-visible rounded-md text-[#17211b]"
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-md">
                                    <img
                                        src="/images/proposal-map.png"
                                        alt="Map of the proposed waste facility and nearby community landmarks"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/12" />
                                </div>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowMapPointers(
                                            (currentValue) => !currentValue,
                                        )
                                    }
                                    className="absolute top-3 right-3 z-30 rounded-md border border-white/70 bg-white/90 px-3 py-2 text-xs font-black tracking-wide text-[#17211b] uppercase shadow-md transition hover:bg-white"
                                >
                                    {showMapPointers
                                        ? 'Hide labels'
                                        : 'Show labels'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setEditMapPointers(
                                            (currentValue) => !currentValue,
                                        )
                                    }
                                    className="absolute top-3 right-32 z-30 rounded-md border border-white/70 bg-white/90 px-3 py-2 text-xs font-black tracking-wide text-[#17211b] uppercase shadow-md transition hover:bg-white"
                                >
                                    {editMapPointers ? 'Stop editing' : 'Edit map'}
                                </button>
                                <div className="absolute top-[47%] left-[49%] rounded-md bg-[#17211b] px-3 py-2 text-xs font-black tracking-wide text-white -translate-x-1/2 -translate-y-1/2">
                                    Proposed parcel
                                </div>
                                {showMapPointers &&
                                    mapPointerState.map((pointer, pointerIndex) => (
                                        <div key={pointer.label}>
                                            <div
                                                className="absolute z-10 rounded-md bg-white px-3 py-2 text-sm font-bold shadow-lg"
                                                style={{
                                                    top: `${pointer.labelY}%`,
                                                    left: `${pointer.labelX}%`,
                                                    transform:
                                                        'translate(-50%, -50%)',
                                                    cursor: editMapPointers
                                                        ? 'grab'
                                                        : 'default',
                                                }}
                                                onPointerDown={() => {
                                                    if (!editMapPointers) {
                                                        return;
                                                    }

                                                    dragStateRef.current = {
                                                        index: pointerIndex,
                                                        type: 'label',
                                                    };
                                                }}
                                            >
                                                {pointer.label}
                                            </div>
                                            {(() => {
                                                const lineWidth = Math.hypot(
                                                    pointer.topX -
                                                        pointer.anchorX,
                                                    pointer.topY -
                                                        pointer.anchorY,
                                                );
                                                const lineAngle =
                                                    (Math.atan2(
                                                        pointer.topY -
                                                            pointer.anchorY,
                                                        pointer.topX -
                                                            pointer.anchorX,
                                                    ) *
                                                        180) /
                                                    Math.PI;

                                                return (
                                            <div
                                                className="absolute z-20 h-[2px] origin-left rounded-full bg-[#d96c3b]"
                                                style={{
                                                    top: `${pointer.anchorY}%`,
                                                    left: `${pointer.anchorX}%`,
                                                    width: `${lineWidth}%`,
                                                    transform: `rotate(${lineAngle}deg)`,
                                                }}
                                            />
                                                );
                                            })()}
                                            {editMapPointers && (
                                                <div
                                                    className="absolute z-20 size-2.5 rounded-full bg-[#f4b860] ring-2 ring-[#17211b]"
                                                    style={{
                                                        top: `${pointer.topY}%`,
                                                        left: `${pointer.topX}%`,
                                                        transform:
                                                            'translate(-50%, -50%)',
                                                        cursor: 'grab',
                                                    }}
                                                    onPointerDown={() => {
                                                        dragStateRef.current = {
                                                            index: pointerIndex,
                                                            type: 'top',
                                                        };
                                                    }}
                                                />
                                            )}
                                            <div
                                                className="absolute z-20 size-2 rounded-full bg-[#d96c3b]"
                                                style={{
                                                    top: `${pointer.anchorY}%`,
                                                    left: `${pointer.anchorX}%`,
                                                    transform:
                                                        'translate(-50%, -50%)',
                                                    cursor: editMapPointers
                                                        ? 'grab'
                                                        : 'default',
                                                }}
                                                onPointerDown={() => {
                                                    if (!editMapPointers) {
                                                        return;
                                                    }

                                                    dragStateRef.current = {
                                                        index: pointerIndex,
                                                        type: 'anchor',
                                                    };
                                                }}
                                            />
                                        </div>
                                    ))}
                            </div>
                            {editMapPointers && (
                                <div className="relative z-40 mt-4 rounded-md border border-white/20 bg-[#101714] p-3 text-[12px] leading-4 text-white shadow-xl pointer-events-auto">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="text-white/90">
                                            Drag labels, orange dots, and gold
                                            dots. Then copy this config:
                                        </p>
                                        <button
                                            type="button"
                                            onClick={copyMapPointerConfig}
                                            className="rounded-md bg-[#f4b860] px-3 py-1.5 text-[11px] font-black text-[#17211b] uppercase"
                                        >
                                            {copyStatus === 'copied'
                                                ? 'Copied'
                                                : copyStatus === 'error'
                                                  ? 'Copy failed'
                                                  : 'Copy config'}
                                        </button>
                                    </div>
                                    <textarea
                                        readOnly
                                        value={mapPointerConfig}
                                        className="mt-3 h-44 w-full resize-none rounded-md border border-white/20 bg-[#0a0f0d] p-3 font-mono text-[11px] leading-5 text-[#d8f3dc]"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section
                    id="proposal"
                    className="border-b border-[#17211b]/10 bg-white px-6 py-18 lg:px-8"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-black tracking-wide text-[#d96c3b] uppercase">
                                What is being proposed
                            </p>
                            <h2 className="mt-3 text-4xl leading-tight font-black text-balance sm:text-5xl">
                                An industrial food waste operation needs a
                                special use permit.
                            </h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-lg border border-[#17211b]/10 bg-[#f7f4ed] p-5">
                                <Factory className="mb-5 size-7 text-[#d96c3b]" />
                                <h3 className="text-lg font-black">
                                    Food waste depackaging
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[#4a554d]">
                                    Separating food waste from packaging before
                                    further processing.
                                </p>
                            </div>
                            <div className="rounded-lg border border-[#17211b]/10 bg-[#f7f4ed] p-5">
                                <Sprout className="mb-5 size-7 text-[#5d8f45]" />
                                <h3 className="text-lg font-black">
                                    Fertilizer production
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[#4a554d]">
                                    Converting waste streams into material that
                                    may be stored, transported, or applied.
                                </p>
                            </div>
                            <div className="rounded-lg border border-[#17211b]/10 bg-[#f7f4ed] p-5">
                                <CalendarDays className="mb-5 size-7 text-[#4f7cac]" />
                                <h3 className="text-lg font-black">
                                    M-2 zoning permit
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[#4a554d]">
                                    The decision point is the special use permit,
                                    not whether neighbors care after it opens.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="concerns" className="px-6 py-18 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <p className="text-sm font-black tracking-wide text-[#d96c3b] uppercase">
                                Why residents are concerned
                            </p>
                            <h2 className="mt-3 text-4xl leading-tight font-black text-balance sm:text-5xl">
                                This decision will shape daily life around the
                                site.
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-4 md:grid-cols-2">
                            {concerns.map((concern) => (
                                <article
                                    key={concern.title}
                                    className="rounded-lg border border-[#17211b]/10 bg-white p-6 shadow-sm"
                                >
                                    <concern.icon className="mb-6 size-8 text-[#d96c3b]" />
                                    <h3 className="text-2xl font-black">
                                        {concern.title}
                                    </h3>
                                    <p className="mt-4 leading-7 text-[#4a554d]">
                                        {concern.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="meeting"
                    className="bg-[#17211b] px-6 py-18 text-white lg:px-8"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="text-sm font-black tracking-wide text-[#f4b860] uppercase">
                                Show up when it matters
                            </p>
                            <h2 className="mt-3 text-4xl leading-tight font-black text-balance sm:text-5xl">
                                Ask commissioners to deny the special use
                                permit.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-white/75">
                                The exact meeting details should be confirmed
                                before publication. Until then, keep the call to
                                action visible and make it clear that neighbors
                                need to prepare now.
                            </p>
                        </div>
                        <div className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur">
                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="rounded-md bg-white p-5 text-[#17211b]">
                                    <CalendarDays className="mb-5 size-7 text-[#d96c3b]" />
                                    <p className="text-xs font-black tracking-wide uppercase">
                                        Date
                                    </p>
                                    <p className="mt-2 text-lg font-black">
                                        June 2, 2026
                                    </p>
                                </div>
                                <div className="rounded-md bg-white p-5 text-[#17211b]">
                                    <MapPin className="mb-5 size-7 text-[#d96c3b]" />
                                    <p className="text-xs font-black tracking-wide uppercase">
                                        Location
                                    </p>
                                    <p className="mt-2 text-lg font-black">
                                        City Commission
                                    </p>
                                </div>
                                <div className="rounded-md bg-white p-5 text-[#17211b]">
                                    <Megaphone className="mb-5 size-7 text-[#d96c3b]" />
                                    <p className="text-xs font-black tracking-wide uppercase">
                                        Agenda
                                    </p>
                                    <p className="mt-2 text-lg font-black">
                                        Special use permit
                                    </p>
                                </div>
                            </div>
                            <ol className="mt-6 grid gap-3">
                                {actionSteps.map((step) => (
                                    <li
                                        key={step}
                                        className="flex gap-3 rounded-md border border-white/15 bg-white/8 p-4 text-sm leading-6 text-white/85"
                                    >
                                        <ChevronRight className="mt-1 size-4 shrink-0 text-[#f4b860]" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                <section
                    id="commissioners"
                    className="border-b border-[#17211b]/10 bg-white px-6 py-18 lg:px-8"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
                        <div>
                            <p className="text-sm font-black tracking-wide text-[#d96c3b] uppercase">
                                Contact commissioners
                            </p>
                            <h2 className="mt-3 text-4xl leading-tight font-black text-balance sm:text-5xl">
                                Make the public record clear before the vote.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-[#4a554d]">
                                Ask for a denial of the special use permit, or
                                at minimum a full public review of odor control,
                                truck routing, environmental safeguards,
                                enforcement, and separation from sensitive
                                nearby uses.
                            </p>
                        </div>
                        <div className="rounded-lg border border-[#17211b]/10 bg-[#f7f4ed] p-6">
                            <div className="flex items-start gap-4">
                                <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-[#d96c3b] text-white">
                                    <PhoneCall className="size-6" />
                                </span>
                                <div>
                                    <h3 className="text-2xl font-black">
                                        Commissioner contact list pending
                                    </h3>
                                    <p className="mt-3 leading-7 text-[#4a554d]">
                                        Replace this placeholder with phone
                                        numbers, emails, and office addresses
                                        once confirmed by the city.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 rounded-md bg-white p-5 text-sm leading-6 text-[#4a554d]">
                                <p className="font-black text-[#17211b]">
                                    Suggested message
                                </p>
                                <p className="mt-2">
                                    Please deny the special use permit for the
                                    proposed food waste depackaging and
                                    fertilizer operation near schools, homes,
                                    farms, and local businesses. Residents need
                                    protection before approval, not promises
                                    after problems begin.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-16 lg:px-8">
                    <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg bg-[#d96c3b] p-7 text-white shadow-xl shadow-[#17211b]/10 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-black tracking-wide uppercase text-white/80">
                                Bring your neighbors
                            </p>
                            <h2 className="mt-2 text-3xl font-black text-balance">
                                One meeting can decide what this community has
                                to live with for years.
                            </h2>
                        </div>
                        <a
                            href="mailto:?subject=Please%20attend%20the%20City%20Commission%20meeting&body=A%20food%20waste%20depackaging%20and%20fertilizer%20operation%20is%20being%20proposed%20near%20schools%2C%20homes%2C%20farms%2C%20and%20local%20businesses.%20Please%20show%20up%20at%20the%20City%20Commission%20meeting%20and%20ask%20commissioners%20to%20deny%20the%20special%20use%20permit."
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-black text-[#17211b] transition hover:bg-[#fff4df]"
                        >
                            Share this page
                            <Share2 className="size-4" />
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
