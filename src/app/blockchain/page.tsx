// src/app/blockchain/page.tsx
import React from 'react';

const Card = ({ title, content }: { title: string, content: string | JSX.Element }) => (
    <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-gray-900">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
    </div>
);

export default function BlockchainPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-extrabold text-orion-dark mb-4 border-b-2 border-gray-900 pb-2">
                Division 2: Digital Integrity & Traceability
            </h1>
            <p className="text-xl text-gray-600 mb-10">
                Focus: Carbon Credit Tokenization. We offer integrity, transparency, and regulatory readiness for buyers and investors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card 
                    title="Value Proposition"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>1:1-linked, audit-proof digital carbon credits (blockchain tokens)[cite: 251].</li>
                            <li>Transparent "retire/burn" mechanism prevents double counting[cite: 252].</li>
                            <li>Fast settlement, low gas fees, and verifiable ownership trail[cite: 252].</li>
                        </ul>
                    )}
                />
                <Card 
                    title="Target Customers"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Primary: Corporate buyers seeking traceable credits for ESG and carbon tax offsets[cite: 246].</li>
                            <li>Secondary: Investors/traders who want digital, transparent green assets[cite: 247].</li>
                        </ul>
                    )}
                />
                <Card 
                    title="Key Activities"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Token creation and registry linkage[cite: 281].</li>
                            <li>Transaction and custody management[cite: 282].</li>
                            <li>Maintenance of the digital marketplace[cite: 284].</li>
                        </ul>
                    )}
                />
            </div>
            
            <section className="mt-12 p-8 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Partners & Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-orion-dark">Key Resources</h3>
                        <p className="text-gray-700">Smart contracts & token registry bridge [cite: 274], Compliance/legal documentation [cite: 275], Secure digital wallets and KYC system[cite: 277].</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-orion-dark">Key Partners</h3>
                        <p className="text-gray-700">Polygon/Celo blockchain providers [cite: 287], Verra & Gold Standard [cite: 287], Green Asset Exchange [cite: 287], legal advisors for KYC/AML[cite: 287].</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
