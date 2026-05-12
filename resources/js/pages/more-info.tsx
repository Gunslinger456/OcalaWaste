import { Head } from '@inertiajs/react';
import {
    ChevronRight,
    ClipboardList,
    Droplets,
    ExternalLink,
    FileWarning,
    Flame,
    MapPinned,
    Wind,
} from 'lucide-react';

const concernCards = [
    {
        title: 'Fire risk near people, schools, and businesses',
        icon: Flame,
        points: [
            'Food waste, mulch, and wood debris sites can catch fire.',
            'Nearby schools, homes, and businesses increase the risk.',
            'Vote no until fire history and prevention plans are verified.',
        ],
    },
    {
        title: 'Odor and fumes are not hypothetical',
        icon: Wind,
        points: [
            'This is not a closed facility. It is open-air.',
            'Open-air processing can create strong, persistent odors.',
            'Vote no until odor limits and enforcement are clear.',
        ],
    },
    {
        title: 'Water and runoff concerns need hard limits',
        icon: Droplets,
        points: [
            'Similar operations have raised runoff concerns.',
            'Nearby water and soil need strict local protection.',
            'Vote no until sampling and enforcement limits are set.',
        ],
    },
    {
        title: 'The location needs to be somewhere else',
        icon: MapPinned,
        points: [
            'The site is near schools, homes, churches, farms, and businesses.',
            'Safer locations should be reviewed in public first.',
            'Vote no on this location.',
        ],
    },
    {
        title: 'Home sale and property value concerns',
        icon: MapPinned,
        points: [
            'Persistent odors can affect buyer interest.',
            'Residents are concerned homes may be harder to sell.',
            'Residents are concerned property values may be harmed.',
        ],
    },
];

const commissionerQuestions = [
    'I oppose this because fire risk at similar operations can put nearby homes, schools, and businesses in danger.',
    'I oppose this because this is an open-air operation, and strong odors can affect surrounding neighborhoods.',
    'I oppose this because this site is too close to homes, schools, churches, farms, and local businesses.',
    'I oppose this because there are other Florida facilities better suited for this type of operation.',
    'I oppose this because added heavy truck traffic will burden nearby roads and neighborhoods.',
    'I oppose this because unresolved DEP enforcement concerns should be addressed before any approval.',
];

const sources = [
    {
        title: 'EPA: Denali Water Solutions Clean Water Act settlement summary',
        href: 'https://www.epa.gov/enforcement/denali-water-solutions-llc-clean-water-act-settlement-summary#health',
        note: 'EPA says Denali agreed to a $610,000 civil penalty and a soil-sampling protocol tied to alleged biosolids violations in Arizona and California.',
    },
    {
        title: 'EPA news release: alleged illegal sewage sludge application',
        href: 'https://www.epa.gov/newsreleases/denali-water-solutions-llc-pay-610k-alleged-illegal-sewage-sludge-application',
        note: 'EPA stated that alleged over-application can contribute to nitrogen and pollutant movement into groundwater or surface waters.',
    },
    {
        title: 'Fort Smith Denali noxious fumes lawsuit',
        href: 'https://www.mccutchenlawfirm.com/practice-areas/denali-noxious-fumes-lawsuit',
        note: 'Law firm summary of allegations from residents and businesses. These are lawsuit claims, not findings by this page.',
    },
    {
        title: 'Tampa Bay 28: two-alarm mulch fire at debris recycling site',
        href: 'https://www.tampabay28.com/news/region-pinellas/two-alarm-mulch-fire-at-gastons-tree-debris-recycling',
        note: 'A nearby Florida example showing why fire planning for mulch and debris recycling sites matters.',
    },
    {
        title: 'WFTV: Marion County compost odor complaints',
        href: 'https://www.wftv.com/news/neighbors-say-compost-company-stinks/286636673/',
        note: 'Local reporting described neighbors asking Marion County to shut down a composting facility after odor complaints.',
    },
    {
        title: 'Villages-News: landfill, Compost USA, and drinking-water concerns',
        href: 'https://www.villages-news.com/2026/03/25/sumter-county-officials-fear-landfills-potential-impact-on-drinking-water/',
        note: 'Regional reporting on odor concerns, leachate handling, and aquifer-related questions near Lake Panasoffkee.',
    },
    {
        title: 'Highlands News-Sun: compost plant talks continue',
        href: 'https://www.midfloridanewspapers.com/highlands_news-sun/compost-plant-talks-continue/article_1f4768f1-431d-40f1-97d0-1dd1271abaf4.html',
        note: 'Additional local reporting to review for odor and siting concerns.',
    },
    {
        title: 'Ocala StarBanner: composting plant court battle',
        href: 'https://www.ocala.com/story/news/local/2012/10/23/composting-plant-loses-court-battle/31910411007/',
        note: 'Additional Marion County history to review and attach if available.',
    },
];

export default function MoreInfo() {
    return (
        <>
            <Head title="More Info" />
            <main className="min-h-screen bg-[#f7f4ed] text-[#17211b]">
                <section className="border-b border-[#17211b]/10 bg-white">
                    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-6 py-4 text-sm lg:px-8">
                        <a
                            href="/"
                            className="font-semibold text-[#17211b] hover:text-[#d96c3b]"
                        >
                            Home
                        </a>
                        <ChevronRight className="size-4 text-[#17211b]/50" />
                        <span className="font-semibold text-[#17211b]/70">
                            More info
                        </span>
                    </div>
                </section>

                <section className="bg-[#17211b] px-6 py-10 text-white lg:px-8">
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="inline-flex items-center gap-2 rounded-md border border-[#f4b860]/35 bg-[#f4b860]/12 px-3 py-1.5 text-sm font-black text-[#ffd27c]">
                            <FileWarning className="size-4" />
                            Evidence to speak out upon
                        </div>
                        <h1
                            className="mt-5 max-w-4xl text-4xl leading-tight font-extrabold text-balance sm:text-5xl"
                            style={{
                                fontFamily:
                                    'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                            }}
                        >
                            Commissioners should vote no on this proposal.
                        </h1>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-white/78 sm:text-lg">
                            This project brings major concerns: fire risk, odor,
                            pests, water impacts, and heavy truck traffic near
                            neighborhoods. The owner has numerous other
                            facilities in Florida that are better suited for
                            operations like this.
                        </p>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
                    <div className="grid gap-4 md:grid-cols-2">
                        {concernCards.map((concern) => {
                            const Icon = concern.icon;

                            return (
                                <article
                                    key={concern.title}
                                    className="rounded-lg border border-[#17211b]/10 bg-white p-5 shadow-sm"
                                >
                                    <Icon className="size-6 text-[#d96c3b]" />
                                    <h2 className="mt-4 text-xl font-black">
                                        {concern.title}
                                    </h2>
                                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#4a554d]">
                                        {concern.points.map((point) => (
                                            <li key={point} className="flex gap-2">
                                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d96c3b]" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="border-y border-[#17211b]/10 bg-white px-6 py-8 lg:px-8">
                    <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-md bg-[#d96c3b]/10 px-3 py-1.5 text-sm font-black text-[#a64824]">
                                <ClipboardList className="size-4" />
                                Public comment guide
                            </div>
                            <h2 className="mt-4 text-3xl font-black">
                                2-minute talking points
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[#4a554d]">
                                Public comment is not a debate. Each speaker gets
                                about 2 minutes to state opposition. Use one or
                                two points below as short statements.
                            </p>
                        </div>
                        <ol className="grid gap-3 sm:grid-cols-2">
                            {commissionerQuestions.map((question, index) => (
                                <li
                                    key={question}
                                    className="rounded-lg border border-[#17211b]/10 bg-[#f7f4ed] p-4 text-sm leading-6"
                                >
                                    <p className="mb-2 text-xs font-black tracking-wide text-[#a64824] uppercase">
                                        Point {index + 1}
                                    </p>
                                    {question}
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

            
                <section className="bg-[#17211b] px-6 py-8 text-white lg:px-8">
                    <div className="mx-auto w-full max-w-7xl">
                        <h2 className="text-3xl font-black">
                            Violations and References
                        </h2>
                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            {sources.map((source) => (
                                <a
                                    key={source.href}
                                    href={source.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group rounded-lg border border-white/12 bg-white/[0.06] p-4 transition hover:border-[#f4b860]/70 hover:bg-white/[0.1]"
                                >
                                    <span className="flex items-start justify-between gap-3 text-base font-black text-white">
                                        {source.title}
                                        <ExternalLink className="mt-1 size-4 shrink-0 text-[#f4b860]" />
                                    </span>
                                    <span className="mt-2 block text-sm leading-6 text-white/72 group-hover:text-white/85">
                                        {source.note}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="border-t border-[#17211b]/10 bg-[#efece4] px-6 py-6 lg:px-8">
                    <div className="mx-auto w-full max-w-7xl rounded-lg border border-[#17211b]/15 bg-white p-4">
                        <p className="text-sm leading-6 text-[#4a554d]">
                            Notice: This page shares residents&apos; opinions and concerns for public
                            discussion. It does not claim undisputed facts about any person or company. For
                            public comments, stick to documented sources, firsthand experiences, and policy
                            concerns.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
