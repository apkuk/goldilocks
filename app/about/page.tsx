import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">About Andrew Kilshaw</h1>
          <p className="text-xl opacity-90">
            Building capability for 30 years. Now building AI solutions.
          </p>
        </div>
      </header>

      {/* Bio */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Practitioner who codes. Operator who builds AI systems.
              </h2>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  I've spent three decades building organizational capability at some of the world's most complex companies. From pitching to Michael Jordan at Nike, to leading merger integrations at BlackRock, to running global transformation programs at Shell and Sanofi.
                </p>

                <p>
                  The constant? <strong>People capabilities at scale.</strong> How do you help thousands of people get better at what they do, faster than the competition?
                </p>

                <p>
                  AI changes the answer to that question. Not because it's magic—but because it's a fundamentally different type of tool. It doesn't just automate tasks. It augments human capability in ways that weren't possible before.
                </p>

                <p>
                  Which is why I retrained. Physics degree → MBA → AI engineering. I now code production systems, not just consult on them. Because to understand how AI creates value, you need to build with it.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Current</h3>
                <p className="text-gray-700">Founder, TalentOptima</p>
                <p className="text-sm text-gray-600">AI-augmented capability & transformation</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Previously</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sanofi (Group Head, 300-person team)</li>
                  <li>• Shell (VP OD & Learning)</li>
                  <li>• Nike (CLO, multiple VP roles)</li>
                  <li>• BlackRock/BGI (merger integration)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Physics (Manchester/France)</li>
                  <li>• MBA with distinction (IMD)</li>
                  <li>• AI Executive Ed (HEC)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Highlights */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Highlights</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nike</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Chief Learning Officer & VP Talent</strong>
                </p>
                <p className="text-gray-600">
                  Led global learning and talent development for 75,000+ employees. Built Nike University from the ground up. Pitched learning programs directly to Michael Jordan (yes, really). Created leadership development frameworks still in use today.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">BlackRock / Barclays Global Investors</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Merger Integration & Talent Management</strong>
                </p>
                <p className="text-gray-600">
                  Managed people integration for BlackRock's $13.5B acquisition of BGI. Led talent assessment and development for 13,000+ employees during one of the largest financial services mergers in history.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Shell</h3>
                <p className="text-gray-700 mb-2">
                  <strong>VP Organizational Development & Learning</strong>
                </p>
                <p className="text-gray-600">
                  Drove $1B+ transformation program. Designed and delivered leadership development at scale across 90+ countries. Built capability frameworks for technical and commercial roles in energy sector.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sanofi</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Group Head of Learning & Development</strong>
                </p>
                <p className="text-gray-600">
                  Led 300-person global team. Transformed learning delivery for 100,000+ employees. Built digital learning platforms and AI-augmented capability programs for pharmaceutical R&D and commercial teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Speaking & Consulting
          </h2>

          <p className="text-xl text-gray-700 text-center mb-12">
            I work with complex global organizations to design and implement AI-augmented transformation
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategy Consulting</h3>
              <p className="text-gray-600">
                AI adoption roadmaps, capability assessments, and transformation program design
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Executive Workshops</h3>
              <p className="text-gray-600">
                Hands-on sessions for C-suite and senior leaders on practical AI implementation
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advisory Roles</h3>
              <p className="text-gray-600">
                Board advisory and thought partnership for AI strategy and organizational capability
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              <strong>Industries:</strong> Pharma, Energy, Consumer, Financial Services, Technology
            </p>
            <p className="text-gray-700 mb-8">
              <strong>Academic partnerships:</strong> IMD and other global business schools
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:andrew@talentoptima.co"
                className="text-blue-600 hover:underline"
              >
                andrew@talentoptima.co
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/andrewkilshaw"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/andrewkilshaw
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+447307332331" className="text-blue-600 hover:underline">
                +44 7307 332 331
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
              <a
                href="https://talentoptima.co"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                talentoptima.co
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {' '}|{' '}
            <Link href="/framework" className="hover:text-white">
              Framework
            </Link>
            {' '}|{' '}
            <Link href="/evidence" className="hover:text-white">
              Evidence
            </Link>
            {' '}|{' '}
            <Link href="/playbook" className="hover:text-white">
              Playbook
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
