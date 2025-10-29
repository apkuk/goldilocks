import Link from 'next/link';

export default function Playbook() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">AI Adoption Playbook</h1>
          <p className="text-xl opacity-90">
            Your 30-day guide to responsible, value-driven AI implementation
          </p>
        </div>
      </header>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What's Included
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">CAP² Mapper Template</h3>
              <p className="text-gray-700 mb-3">
                Excel template to map your work to capacity and capability opportunities
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Task inventory worksheet</li>
                <li>• Auto-calculated priorities</li>
                <li>• Risk tier assignment guide</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Risk Tier Checklist</h3>
              <p className="text-gray-700 mb-3">
                Decision tree and controls for T0, T1, T2, and T3 use cases
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Control requirements by tier</li>
                <li>• Vendor comparison matrix</li>
                <li>• Privacy policy checklist</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-green-900 mb-3">30-Day Action Plan</h3>
              <p className="text-gray-700 mb-3">
                Week-by-week implementation roadmap with specific deliverables
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pilot selection criteria</li>
                <li>• Measurement frameworks</li>
                <li>• Stakeholder communication templates</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Prompt Library</h3>
              <p className="text-gray-700 mb-3">
                Vetted, ready-to-use prompts for common business tasks
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Writing and editing prompts</li>
                <li>• Analysis and synthesis prompts</li>
                <li>• Meeting and documentation prompts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download the complete playbook package (PDF + Excel templates)
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Complete Playbook Package
            </h3>
            <p className="text-gray-600 mb-4">PDF Guide + Excel Templates</p>
            <p className="text-sm text-gray-500 mb-6">~5 MB • No email required</p>

            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
              Download Now (Free)
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Note: Download functionality will be enabled when PDF generation is implemented
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-2">This playbook is free and open-source.</p>
            <p>
              Questions or need help implementing?{' '}
              <Link href="/about" className="text-blue-600 hover:underline">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What people are saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "Finally, a practical framework that cuts through the AI hype. The risk tier approach made it easy to get started without overthinking it."
              </p>
              <p className="text-sm text-gray-600">
                — VP of Operations, Fortune 500 Company
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "The CAP² framework helped us identify quick wins and prioritize our AI initiatives. We saw measurable productivity gains within the first month."
              </p>
              <p className="text-sm text-gray-600">
                — Chief Learning Officer, Global Pharma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to dive deeper?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/framework"
              className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all"
            >
              Explore the Framework
            </Link>
            <Link
              href="/evidence"
              className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg transition-all"
            >
              See the Evidence
            </Link>
            <Link
              href="/article"
              className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg transition-all"
            >
              Read the Article
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="max-w-4xl mx-auto px-4">
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
          </p>
          <p className="text-sm">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            {' '}|{' '}
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
