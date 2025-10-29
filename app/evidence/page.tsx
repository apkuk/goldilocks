'use client';

import { useState } from 'react';
import Link from 'next/link';
import EvidenceCard from '@/components/EvidenceCard';
import { evidenceDatabase, filterEvidence } from '@/lib/evidence';
import type { EvidenceAxis } from '@/types/core';

export default function Evidence() {
  const [selectedAxis, setSelectedAxis] = useState<'all' | EvidenceAxis>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvidence = filterEvidence(evidenceDatabase, {
    axis: selectedAxis,
    search: searchQuery,
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Evidence Library</h1>
          <p className="text-xl opacity-90">
            Every claim backed by peer-reviewed research and credible sources
          </p>
        </div>
      </header>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Axis Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedAxis('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedAxis === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedAxis('capacity')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedAxis === 'capacity'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Capacity
              </button>
              <button
                onClick={() => setSelectedAxis('capability')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedAxis === 'capability'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Capability
              </button>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search evidence..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredEvidence.length} of {evidenceDatabase.length} evidence items
          </div>
        </div>
      </section>

      {/* Evidence Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {filteredEvidence.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No evidence found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedAxis('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvidence.map((item) => (
                <EvidenceCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to apply this evidence to your organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the practical implementation framework and 30-day playbook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/framework"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
            >
              Explore the Framework
            </Link>
            <Link
              href="/playbook"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg transition-all"
            >
              Download Playbook
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
