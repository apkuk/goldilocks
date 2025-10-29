import RiskDial from '@/components/RiskDial';
import Link from 'next/link';

export default function Framework() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">The CAP² Framework</h1>
          <p className="text-xl opacity-90">
            A practical guide to AI adoption: Capacity × Capability × Risk
          </p>
        </div>
      </header>

      {/* CAP² Explanation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding CAP²</h2>

          <p className="text-xl text-gray-700 mb-8">
            Real value from AI emerges at the intersection of two dimensions:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Capacity</h3>
              <p className="text-gray-700 mb-4">
                <strong>Acceleration of existing work.</strong> AI helps you do what you already know how to do, but faster and more efficiently.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Writing and editing documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Code generation and debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Summarizing meetings and reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Routine data analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Capability</h3>
              <p className="text-gray-700 mb-4">
                <strong>Expansion of what's possible.</strong> AI enables work you couldn't do before, expanding your professional frontier.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Complex data pattern recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Cross-domain knowledge synthesis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Personalization at scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Tasks outside your prior expertise</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Multiplier Effect</h3>
            <p className="text-center text-3xl font-bold text-gray-800 mb-4">
              Value = Capacity × Capability
            </p>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              Maximum impact comes from identifying use cases that deliver both: work that can be done faster
              AND enables new possibilities that weren't feasible before.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Risk-Tiered Controls</h2>

          <p className="text-xl text-gray-700 mb-8">
            Not all AI use cases carry the same risk. Match your governance to the stakes involved.
          </p>

          <RiskDial initialTier="T1" />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Principles</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Start with low-risk experimentation (T0)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Scale governance as stakes increase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use Enterprise tools for T1+</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Never skip T3 controls for regulated work</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Common Mistakes</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using consumer tools for customer data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Applying T3 controls to T0 experimentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>No human review for high-stakes content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Ignoring vendor privacy policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 30-Day Action Plan */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">30-Day Action Plan</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Week 1: Assess</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Map your current work to CAP² framework</li>
                <li>• Identify quick wins (high capacity, low risk)</li>
                <li>• Survey team AI usage (shadow IT check)</li>
                <li>• Define your risk tier boundaries</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Week 2: Pilot</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Launch 3-5 T0/T1 pilots with volunteers</li>
                <li>• Document what works and what doesn't</li>
                <li>• Measure time savings and quality</li>
                <li>• Gather user feedback and iterate</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Week 3: Govern</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Establish approval workflows for T2+</li>
                <li>• Create vetted prompt libraries</li>
                <li>• Set up usage monitoring and logging</li>
                <li>• Train teams on controls and best practices</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Week 4: Scale</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Expand successful pilots organization-wide</li>
                <li>• Share learnings and case studies internally</li>
                <li>• Establish metrics and KPIs</li>
                <li>• Plan next wave of capability use cases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to implement?</h2>
          <p className="text-xl mb-8 opacity-90">
            Download the complete playbook with templates, checklists, and vendor comparisons
          </p>
          <Link
            href="/playbook"
            className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg transition-all"
          >
            Download Playbook →
          </Link>
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
