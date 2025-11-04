// src/app/solutions/page.tsx
import React from 'react';

const Card = ({ title, content }: { title: string, content: string | JSX.Element }) => (
    <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-orion-green">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
    </div>
);

export default function SolutionsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-extrabold text-orion-dark mb-4 border-b-2 border-green-500 pb-2">
                Division 1: Sustainable Industrial Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-10">
                Focus: Carbon Credit Development. We convert climate projects into verifiable, tradeable carbon credits with minimal friction and high trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card 
                    title="Value Proposition"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Fast, affordable, and credible carbon credit issuance pipeline.</li>
                            <li>"Done-for-you" service: documentation, auditor coordination, and baseline studies.</li>
                            <li>Access to international buyers via trusted registries (Verra, Gold Standard).</li>
                        </ul>
                    )}
                />
                <Card 
                    title="Target Customers"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Primary: Small/medium renewable energy developers lacking certification expertise.</li>
                            <li>Secondary: Municipalities and community projects offsetting local emissions.</li>
                            <li>Tertiary: NGOs seeking verified impact measurement.</li>
                        </ul>
                    )}
                />
                <Card 
                    title="Key Activities"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Conduct project feasibility and baseline assessments.</li>
                            <li>Prepare documentation (PDDs, monitoring plans).</li>
                            <li>Coordinate third-party verification and validation.</li>
                        </ul>
                    )}
                />
            </div>
            
            <section className="mt-12 p-8 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Operational Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-orion-dark">Key Resources</h3>
                        <p className="text-gray-700">VCS methodology templates, remote monitoring tools (IoT), Auditor/VVB partnerships, AI documentation assistant.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-orion-dark">Key Partners</h3>
                        <p className="text-gray-700">Green Asset Exchange (market access), Verra / Gold Standard (certification), SGS/BlueNorth (verification), Solar installers & municipalities (project sourcing).</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
