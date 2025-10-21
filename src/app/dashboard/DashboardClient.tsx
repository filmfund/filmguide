'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MOCK_SUBSCRIBED = false;

export default function DashboardClient() {
    const [isSubscribed] = useState(MOCK_SUBSCRIBED);
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                            <h3 className="text-[#E1C586] font-semibold mb-3">What about the project?</h3>
                            <p className="text-[#999999] text-sm mb-2">What it is about</p>
                            <p className="text-[#999999] text-sm">
                                This is an AI-powered guide helping you discover the best blockchain and crypto films worth your attention.
                            </p>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                            <h3 className="text-[#E1C586] font-semibold mb-3">Recommended Films</h3>
                            <div className="space-y-3">
                                <p className="text-[#999999] text-sm">
                                    Based on your interests in blockchain and Web3:
                                </p>
                                <ul className="space-y-2 text-sm text-[#E1D486]">
                                    <li className="hover:text-[#E1C586] cursor-pointer">→ Movie 1</li>
                                    <li className="hover:text-[#E1C586] cursor-pointer">→ Movie 2</li>
                                    <li className="hover:text-[#E1C586] cursor-pointer">→ Movie 3</li>
                                    <li className="hover:text-[#E1C586] cursor-pointer">→ Movie 4</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                            <h2 className="text-xl font-bold text-[#E1C586] mb-4">
                                WHAT TO WATCH THIS EVENING WITH FRENS AND FAM?
                            </h2>
                            <div className="bg-[#2b2b31] border border-[#999999] rounded-lg p-4 mb-4">
                                <p className="text-[#999999] text-sm italic">
                                    Here AI will give the answers, for example a block of text with hyperlinks names of movies
                                </p>
                            </div>

                            {isSubscribed ? (
                                <div className="border-2 border-[#E1D486] rounded-lg p-4 bg-[#2b2b31]/50">
                                    <p className="text-[#E1C586] font-semibold mb-2">AI Agent Chat</p>
                                    <p className="text-[#999999] text-sm mb-3">
                                        Ask me about blockchain films and Web3 cinema
                                    </p>
                                    <button
                                        onClick={() => setShowDialog(!showDialog)}
                                        className="w-full px-4 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors"
                                    >
                                        {showDialog ? 'Close AI Agent' : 'Open AI Agent'}
                                    </button>
                                </div>
                            ) : (
                                <div className="border-2 border-[#A60E0E] rounded-lg p-4 bg-[#2b2b31]/50">
                                    <p className="text-[#E71111] font-semibold mb-2">Premium Feature</p>
                                    <p className="text-[#999999] text-sm mb-3">
                                        Subscribe to unlock the AI film agent and get personalized recommendations
                                    </p>
                                    <Link href="/subscribe">
                                        <button className="w-full px-4 py-2 bg-[#E71111] text-white rounded-lg font-semibold hover:bg-[#A60E0E] transition-colors">
                                            Subscribe to Unlock
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
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
                            <div className="bg-[#2b2b31] border-2 border-[#E71111] rounded-xl p-8 opacity-60 cursor-not-allowed relative">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-2xl font-bold text-[#999999]">
                                        not available without subscription / guide for a filmmaker in the world of blockchain
                                    </h3>
                                    <span className="px-3 py-1 bg-[#666666] text-[#2b2b31] text-xs font-semibold rounded-full">
                                        Premium
                                    </span>
                                </div>
                                <p className="text-[#666666] mb-4">
                                    Subscribe to unlock exclusive filmmaker guides
                                </p>
                                <Link href="/subscribe">
                                    <button className="px-6 py-2 bg-[#E71111] text-white rounded-lg font-semibold hover:bg-[#A60E0E] transition-colors">
                                        Subscribe to Unlock
                                    </button>
                                </Link>
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