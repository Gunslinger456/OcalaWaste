import { Head } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

const supportingSections = [
    {
        title: 'Project Summary',
        body: 'Add a short overview of the proposal, who submitted it, and what decision the City Commission is being asked to make.',
    },
    {
        title: 'Timeline',
        body: 'Add key dates here: filing date, neighborhood meetings, staff recommendations, and hearing dates.',
    },
    {
        title: 'Supporting Documents',
        body: 'Add links or references to maps, staff reports, traffic studies, environmental documents, and meeting packets.',
    },
    {
        title: 'Community Questions',
        body: 'List common questions from residents and the answers you want public officials to address on record.',
    },
];

export default function MoreInfo() {
    return (
        <>
            <Head title="More Info" />
            <main className="min-h-screen bg-[#f7f4ed] text-[#17211b]">
                <section className="border-b border-[#17211b]/10 bg-white">
                    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-6 py-4 text-sm lg:px-8">
                        <a href="/" className="font-semibold text-[#17211b] hover:text-[#d96c3b]">
                            Home
                        </a>
                        <ChevronRight className="size-4 text-[#17211b]/50" />
                        <span className="font-semibold text-[#17211b]/70">More info</span>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
                    <h1 className="text-3xl font-black sm:text-4xl">Supporting Information</h1>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-[#4a554d]">
                        This page is for supporting data and details you want to publish. Replace each block
                        below with your finalized content as you collect it.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {supportingSections.map((section) => (
                            <article
                                key={section.title}
                                className="rounded-lg border border-[#17211b]/10 bg-white p-5 shadow-sm"
                            >
                                <h2 className="text-xl font-black">{section.title}</h2>
                                <p className="mt-3 text-sm leading-6 text-[#4a554d]">{section.body}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
