'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ChatInterface from '@/components/ChatInterface';
import Image from 'next/image';
const MOCK_SUBSCRIBED = true;

export default function DashboardClient() {
    const [isSubscribed] = useState(MOCK_SUBSCRIBED);

    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                            <h3 className="text-[#E1C586] font-semibold mb-3">Tell me what mood you&apos;re in - I&apos;ll find the right blockchain movie</h3>
                            <p className="text-[#999999] text-sm">
                                Whether you want to impress a date, spark curiosity at dinner, or dive deep into the world of bitcoin and ethereum, our What to Watch AI agent has you covered.
                                From indie gems to full-length films and teasers, discover stories that make crypto culture cinematic.
                            </p>
                            <p className="text-[#999999] text-sm">
                                The What to Watch AI agent is an AI-powered film curator that knows over a hundred movies about bitcoin, ethereum, NFTs, and web3 - guiding you to the most insightful and authentic stories about crypto culture and its impact.
                            </p>
                        </div>
                        <ChatInterface />
                    </div>
                    <div className="flex flex-col gap-8">
                        <Link href="/tokens">
                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-8 hover:border-[#E1D486] transition-all cursor-pointer group">
                                <h3 className="text-2xl font-bold text-[#E1C586] mb-2">Film Tokens Insider</h3>
                                <p className="text-[#999999]">Where crypto meets cinema - track, compare, and learn from real tokenized film projects.</p>
                                <div className="mt-4 text-[#E1D486] font-semibold flex items-center gap-2">
                                    Explore Tokens
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {isSubscribed ? (
                            <Link href="/filmmakersguide">
                                <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-8 hover:border-[#E1D486] transition-all cursor-pointer group">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-[#E1C586] mb-3">
                                                Filmmaker's Guide to blockchain and web3
                                            </h3>
                                            <p className="text-[#999999] mb-4">
                                                A living manual for creators exploring decentralized tools, funding, and distribution.
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <div className="text-[#E1D486] font-semibold flex items-center gap-2">
                                                    Access Guide
                                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                                </div>
                                                <span className="px-3 py-1 bg-[#85840D] text-[#2b2b31] text-xs font-semibold rounded-full">
                                                    Premium
                                                </span>
                                            </div>
                                        </div>

                                        <div className="rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src="/subscribedimage.png"
                                                alt="Subscribed Image"
                                                width={200}
                                                height={200}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className="bg-[#2b2b31] border-2 border-[#E71111] rounded-xl p-4 opacity-60 cursor-not-allowed relative">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-2xl font-bold text-[#E1C586] mb-2">Filmmaker&apos;s Guide to blockchain and web3</h3>
                                            <p className="text-[#999999]">
                                                A living manual for creators exploring decentralized tools, funding, and distribution.
                                            </p>
                                        </div>
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
                                <h3 className="text-2xl font-bold text-[#E1C586] mb-2">Support a filmmaker</h3>
                                <p className="text-[#999999]">
                                    Contribute directly to emerging film projects. Every subscription or micro-donation helps real creators develop their blockchain related stories
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