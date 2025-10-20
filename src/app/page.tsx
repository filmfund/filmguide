import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-[85vh] bg-[#2b2b31] flex flex-col">
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-4 items-start max-w-7xl mx-auto scale-95">
          <div className="bg-[#2b2b31] rounded-2xl p-8 border-2 border-[#A60E0E] shadow-2xl">
            <h2 className="text-3xl font-bold text-[#E1C586] mb-6">
              Guide to Blockchain Cinema
            </h2>
            <div className="space-y-4 text-[#999999] leading-relaxed">
              <p>
                AI-powered Web3 guide to blockchain films, funding, and decentralized cinema
              </p>
              <div className="pt-4 border-t border-[#BB9867] mt-6">
                <h3 className="text-lg font-semibold text-[#E1C586] mb-3">Features:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-6">
                    {/* <span className="text-[#E1D486]">✦</span> */}
                    <div>
                      <span className="text-[#E1D486]">✦ What to Watch –</span> Our AI film agent knows over a hundred films and series about Bitcoin, Ethereum, NFTs, Web3, crypto scammers, and meaningful blockchain stories and can guide you to the ones worth your time.
                    </div>
                  </li>
                  <li className="flex items-center gap-6">
                    {/* <span className="text-[#E1D486]">✦</span> */}
                    <div>
                      <span className="text-[#E1D486]">✦ Support the Filmmaker –</span> Contribute directly to emerging film projects. Every subscription or micro-donation helps real creators develop their blockchain-powered stories.
                    </div>
                  </li>
                  <li className="flex items-center gap-6">
                    {/* <span className="text-[#E1D486]">✦</span> */}
                    <div>
                      <span className="text-[#E1D486]">✦ Film Tokens Insider –</span> Compare tokens, discover on-chain film projects, and learn how blockchain enables transparent film finance.
                    </div>
                  </li>
                  <li className="flex items-center gap-6">
                    {/* <span className="text-[#E1D486]">✦</span> */}
                    <div>
                      <span className="text-[#E1D486]">✦ Filmmaker’s Guide to Blockchain and Web3 –</span> A living manual for creators exploring decentralized tools, funding, and distribution.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">

            <Link href="/dashboard">
              <div className="group bg-[#E1C586] rounded-2xl p-8 cursor-pointer hover:bg-[#E1D486] transition-all duration-200 shadow-xl border-2 border-[#BB9867]">
                <h3 className="text-2xl font-bold text-[#2b2b31] mb-2">Try the App</h3>
                <p className="text-[#2b2b31]">
                  Explore film tokens and try the app
                </p>
                <div className="mt-4 text-[#85840D] font-semibold flex items-center gap-2">
                  Get Started
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>

            <Link href="/subscribe">
              <div className="group bg-[#2b2b31] rounded-2xl p-8 cursor-pointer hover:border-[#E1D486] transition-all duration-200 border-2 border-[#BB9867] shadow-xl">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E71111]">Subscribe</h3>
                  <span className="px-3 py-1 bg-[#85840D] text-[#2b2b31] text-xs font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <p className="text-[#999999]">
                  Get the full experience
                </p>
                <div className="mt-4 text-[#E71111] font-semibold flex items-center gap-2">
                  View Plans
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>

            <Link href="/support-film-maker">
              <div className="group bg-[#2b2b31] rounded-2xl p-8 cursor-pointer hover:border-[#E1D486] transition-all duration-200 border-2 border-[#BB9867] shadow-xl">
                <h3 className="text-2xl font-bold text-[#E1C586] mb-2">Support a Filmmaker</h3>
                <p className="text-[#999999]">
                  Directly support independent filmmakers
                </p>
                <div className="mt-4 text-[#E1D486] font-semibold flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
