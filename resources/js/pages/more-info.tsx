import { Head } from '@inertiajs/react';
import {
    AlertTriangle,
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
        body: 'Compost, mulch, wood debris, and organic waste operations can create serious fire-response questions. Commissioners should require a full history of fires at comparable or related sites, whether each fire was accidental, what caused it, and what controls would prevent repeat events here.',
    },
    {
        title: 'Odor and fumes are not hypothetical',
        icon: Wind,
        body: 'Odor complaints and noxious-fume allegations have followed similar waste-handling operations elsewhere. Before approval, the applicant should prove how odors will be monitored, reported, enforced, and stopped when nearby residents or businesses are affected.',
    },
    {
        title: 'Water and runoff concerns need hard limits',
        icon: Droplets,
        body: 'EPA enforcement against Denali involved alleged sewage-sludge land-application violations and concerns about nitrogen moving into groundwater and surface water. Any approval should require site-specific sampling, stormwater controls, and enforceable operating limits.',
    },
    {
        title: 'The location deserves a real alternatives review',
        icon: MapPinned,
        body: 'If other sites are available, including existing waste-handling infrastructure in the region, commissioners should ask why this location near schools, businesses, trucking activity, homes, and wooded areas is the right place to add this risk.',
    },
];

const commissionerQuestions = [
    "How many fires have occurred at the applicant's facilities, affiliated facilities, or comparable compost, mulch, wood-debris, biosolids, or food-waste operations?",
    'Were all of those fires accidental? What ignition sources were identified, and what changed afterward?',
    'What fire-prevention plan will be required, including pile-size limits, temperature monitoring, water access, setbacks, emergency lanes, and fire department review?',
    'How many people, homes, businesses, school facilities, wooded areas, and truck routes are within 300, 500, and 1,000 feet of the proposed operation?',
    'What odor standard will be enforceable, who will inspect complaints, and what happens if odors leave the property?',
    'Why should this site be approved if other regional options exist for handling this material?',
    'What Florida DEP consent orders, complaints, enforcement actions, or settlements involve the applicant, operators, owners, or related entities?',
];

const recordRequests = [
    'Florida DEP consent order 49648',
    'Florida DEP consent order 104765, reportedly from February 2026',
    'Florida DEP matter 19-0084',
    'Fire incident reports for the applicant, affiliated facilities, and comparable operations',
    'A measured map showing schools, homes, businesses, trucking operations, wooded areas, and evacuation constraints near the proposed site',
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
                            Evidence to ask commissioners about
                        </div>
                        <h1
                            className="mt-5 max-w-4xl text-4xl leading-tight font-extrabold text-balance sm:text-5xl"
                            style={{
                                fontFamily:
                                    'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                            }}
                        >
                            The vote should not move forward without answers on
                            fire, odor, water, and location risk.
                        </h1>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-white/78 sm:text-lg">
                            These points organize the concerns residents can
                            raise before any special use permit is approved. The
                            key request is simple: require facts, records, and
                            enforceable safeguards before placing this operation
                            near people, schools, businesses, trucking activity,
                            and wooded areas.
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
                                    <p className="mt-3 text-sm leading-6 text-[#4a554d]">
                                        {concern.body}
                                    </p>
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
                                Questions for the record
                            </div>
                            <h2 className="mt-4 text-3xl font-black">
                                Talking points for public comment
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[#4a554d]">
                                Use these as direct questions. If the applicant
                                cannot answer them with documents, commissioners
                                should not treat the risks as resolved.
                            </p>
                        </div>
                        <ol className="grid gap-3">
                            {commissionerQuestions.map((question) => (
                                <li
                                    key={question}
                                    className="rounded-lg border border-[#17211b]/10 bg-[#f7f4ed] p-4 text-sm leading-6 font-semibold"
                                >
                                    {question}
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 lg:grid-cols-2 lg:px-8">
                    <div className="rounded-lg border border-[#17211b]/10 bg-white p-5 shadow-sm">
                        <div className="inline-flex items-center gap-2 rounded-md bg-[#17211b]/8 px-3 py-1.5 text-sm font-black text-[#17211b]">
                            <AlertTriangle className="size-4 text-[#d96c3b]" />
                            Records still needed
                        </div>
                        <h2 className="mt-4 text-2xl font-black">
                            Documents to obtain before the hearing
                        </h2>
                        <ul className="mt-4 grid gap-3">
                            {recordRequests.map((request) => (
                                <li
                                    key={request}
                                    className="flex gap-3 text-sm leading-6 text-[#4a554d]"
                                >
                                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#d96c3b]" />
                                    <span>{request}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-lg border border-[#17211b]/10 bg-white p-5 shadow-sm">
                        <h2 className="text-2xl font-black">Bottom line</h2>
                        <p className="mt-4 text-sm leading-6 text-[#4a554d]">
                            Commissioners should require a complete risk record:
                            fire history, emergency-response capacity, odor
                            controls, water protections, enforcement history,
                            and a real explanation for why this site is
                            preferable to less sensitive locations. Without that
                            record, approval shifts uncertainty onto nearby
                            residents, students, businesses, and first
                            responders.
                        </p>
                    </div>
                </section>

                <section className="bg-[#17211b] px-6 py-8 text-white lg:px-8">
                    <div className="mx-auto w-full max-w-7xl">
                        <h2 className="text-3xl font-black">
                            Sources and reference links
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
            </main>
        </>
    );
}
