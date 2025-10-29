import Hero from '@/components/Hero';
import Link from 'next/link';
import EvidenceCard from '@/components/EvidenceCard';
import { evidenceDatabase } from '@/lib/evidence';

export default function Home() {
  // Show first 3 evidence items as preview
  const previewEvidence = evidenceDatabase.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Teaser Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-2xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            39% of my LinkedIn feed is about AI. Some think it's too cold (overhyped), others think it's too hot (dangerous).
            <span className="font-semibold"> Both are missing the sweet spot.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/article#tooCold"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-cyan-400"
            >
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">Too Cold</h3>
              <p className="text-gray-600">
                Skeptics dismissing AI as just autocomplete. They underestimate the opportunity...
              </p>
            </Link>

            <Link
              href="/article#justRight"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-amber-400"
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">Just Right</h3>
              <p className="text-gray-600">
                Where capacity meets capability. This is where real value happens.
              </p>
            </Link>

            <Link
              href="/article#tooHot"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-400"
            >
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Too Hot</h3>
              <p className="text-gray-600">
                Optimists expecting AI magic overnight. They overestimate the ease...
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Evidence Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              This isn't hype. It's data.
            </h2>
            <p className="text-xl text-gray-600">
              Every claim backed by peer-reviewed research
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {previewEvidence.map((item) => (
              <EvidenceCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/evidence"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
            >
              See Full Evidence Library →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to move beyond the hype?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the complete framework, risk assessment tools, and 30-day implementation playbook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/article"
              className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg transition-all"
            >
              Read the Full Article
            </Link>
            <Link
              href="/playbook"
              className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg shadow-lg transition-all"
            >
              Download the Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2">
            Created by{' '}
            <a
              href="https://talentoptima.co"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrew Kilshaw
            </a>
            {' '}| TalentOptima
          </p>
          <p className="text-sm">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            {' '}|{' '}
            <a
              href="https://linkedin.com/in/andrewkilshaw"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {' '}|{' '}
            <a href="mailto:andrew@talentoptima.co" className="hover:text-white">
              Contact
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
