// src/app/impact/page.tsx
import React from 'react';

const Card = ({ title, content }: { title: string, content: string | JSX.Element }) => (
    <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
    </div>
);

export default function ImpactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-extrabold text-orion-dark mb-4 border-b-2 border-yellow-500 pb-2">
                Division 3: Community & Impact (Green Skills Academy)
            </h1>
            <p className="text-xl text-gray-600 mb-10">
                Focus: Local Value Creation. Committed to addressing the skills gap by providing affordable, job-ready green training for the local South African community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card 
                    title="Value Proposition"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Affordable and accessible certification courses in green technology (solar, biogas, etc.).</li>
                            <li>Direct placement opportunities through Key Partners (Green Asset Exchange).</li>
                            <li>Mentorship and practical, skills-based training (e.g., Solar Panel installation).</li>
                        </ul>
                    )}
                />
                <Card 
                    title="Target Customers"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Primary: Unemployed youth and recent graduates seeking skills in the green economy.</li>
                            <li>Secondary: Existing technicians requiring formal green certification.</li>
                            <li>Tertiary: Corporates needing customised ESG training for their staff.</li>
                        </ul>
                    )}
                />
                <Card 
                    title="Key Activities"
                    content={(
                        <ul className="list-disc ml-5">
                            <li>Teaching and training facilitation (online/physical).</li>
                            <li>Curriculum development and content production.</li>
                            <li>Student job placement and industry outreach.</li>
                        </ul>
                    )}
                />
            </div>
            
            <section className="mt-12 p-8 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Partners & Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-orion-dark">Key Resources</h3>
                        <p className="text-gray-700">Learning Management System (LMS) platform, Certified instructors, Practical workshop facilities, AI assessment tools.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-orion-dark">Key Partners</h3>
                        <p className="text-gray-700">Local universities, Sector Education and Training Authorities (SETAs), NGOs, Green Asset Exchange (placement partner).</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
