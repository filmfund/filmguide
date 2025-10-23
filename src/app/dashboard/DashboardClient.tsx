'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ChatInterface from '@/components/ChatInterface';
import Image from 'next/image';
const MOCK_SUBSCRIBED = false;

export default function DashboardClient() {
    const [isSubscribed] = useState(MOCK_SUBSCRIBED);

    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                            <h3 className="text-[#E1C586] font-semibold mb-3">Want to watch a movie about blockchain?</h3>
                            <p className="text-[#999999] text-sm">
                                The What to Watch agent is your personal AI film curator - trained on hundreds of blockchain-related titles, it instantly recommends the best movies about Bitcoin, Ethereum, NFTs, Web3 innovation, crypto scams, and meaningful decentralized projects.
                            </p>
                        </div>
                        <ChatInterface />
                    </div>
                    <div className="flex flex-col gap-8">
                        <Link href="/tokens">
                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-8 hover:border-[#E1D486] transition-all cursor-pointer group">
                                <h3 className="text-2xl font-bold text-[#E1C586] mb-2">Film tokens comparison</h3>
                                <p className="text-[#999999]">Compare and explore tokens</p>
                                <div className="mt-4 text-[#E1D486] font-semibold flex items-center gap-2">
                                    Explore Tokens
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {isSubscribed ? (
                            <Link href="/film-makers-guide">
                                <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-8 hover:border-[#E1D486] transition-all cursor-pointer group">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-[#E1C586]">
                                            guide for a filmmaker in the world of blockchain
                                        </h3>
                                        <span className="px-3 py-1 bg-[#85840D] text-[#2b2b31] text-xs font-semibold rounded-full">
                                            Premium
                                        </span>
                                    </div>
                                    <p className="text-[#999999]">
                                        Access exclusive guides for blockchain filmmakers
                                    </p>
                                    <div className="mt-4 text-[#E1D486] font-semibold flex items-center gap-2">
                                        Access Guide
                                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className="bg-[#2b2b31] border-2 border-[#E71111] rounded-xl p-4 opacity-60 cursor-not-allowed relative">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex-1">
                                        <p className="text-[#666666] mb-4 text-lg font-semibold">
                                            <span className="text-[#E71111]">Filmmaker’s Guide to Blockchain and Web3 –</span> A living manual for creators exploring decentralized tools, funding, and distribution.
                                        </p>
                                        <Link href="/subscribe">
                                            <button className="px-6 py-2 bg-[#E71111] text-white rounded-lg font-semibold hover:bg-[#A60E0E] transition-colors">
                                                Subscribe to Unlock
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="rounded-xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/subscriptionimage.png"
                                            alt="Subscription"
                                            width={200}
                                            height={150}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <Link href="/support-film-maker">
                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-8 hover:border-[#E1D486] transition-all cursor-pointer group">
                                <h3 className="text-2xl font-bold text-[#E1C586] mb-2">support a filmmaker</h3>
                                <p className="text-[#999999]">
                                    Directly contribute to emerging blockchain film projects
                                </p>
                                <div className="mt-4 text-[#E1D486] font-semibold flex items-center gap-2">
                                    Support Now
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