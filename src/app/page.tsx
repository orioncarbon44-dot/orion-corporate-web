// src/app/page.tsx
import Link from 'next/link';

// Simple Reusable Component for the Hero Section
const HeroSection = () => (
    <div className="bg-gray-800 text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 max-w-4xl mx-auto">
            Verifiable Trust: Securing the Future of Sustainable Carbon with Blockchain.
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Orion Carbon is the global industrial leader bridging physical, low-carbon materials with immutable digital traceability to deliver high-integrity assets for the Net-Zero economy.
        </p>
        <Link href="/blockchain/ledger-portal" legacyBehavior>
            <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                View the Live Carbon Ledger
            </a>
        </Link>
    </div>
);

// Simple Reusable Component for the Division Cards
const DivisionCard = ({ title, description, link }: { title: string, description: string, link: string }) => (
    <Link href={link} legacyBehavior>
        <a className="block p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] bg-white">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </a>
    </Link>
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* Introduction to the Three Strategic Divisions */}
      <section id="divisions" className="py-20 container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-14 text-gray-800">Our Three Pillars of Integrity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <DivisionCard 
            title="1. Sustainable Industrial Solutions"
            description="The core of our business: proprietary manufacturing of circular and renewable carbon materials (ECORAX®) that generate verifiable, high-integrity offsets."
            link="/solutions"
          />
          
          <DivisionCard 
            title="2. Digital Integrity & Traceability"
            description="Our custom blockchain platform eliminates fraud by converting real-world production data into immutable Tokenized Carbon Credits (TCCs)."
            link="/blockchain"
          />
          
          <DivisionCard 
            title="3. Community & Impact (ESG)"
            description="Committed to global ESG compliance and local value creation, focusing on job creation, SMME development, and sustainable infrastructure in South Africa."
            link="/impact"
          />
          
        </div>
      </section>

    </main>
  );
}
