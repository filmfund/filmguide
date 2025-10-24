'use client';

import React from 'react';

export default function SubscribeClient() {
    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-12">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-[#E1C586] mb-4">
                            Unlock Full Access
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-8">
                            <div className="text-[#999999] space-y-4 text-sm leading-relaxed">
                                <p>
                                    Subscribing to Guide2Film3 unlocks the complete decentralized cinema experience.
                                </p>
                                <p>
                                    Your monthly $8.00 contribution provides unlimited AI-powered film recommendations,
                                    access to The Filmmaker&apos;s Guide, and deeper insights into blockchain-based film tokens.
                                </p>
                                <p>
                                    Subscribers can post and share their film impressions directly in the AI chat -
                                    making every conversation richer and more community-driven.
                                </p>
                                <p>
                                    Most importantly, each subscription automatically sends 10% directly to verified
                                    filmmakers on-chain, turning your support into real impact.
                                </p>
                                <p>
                                    You&apos;ll also receive festival-related perks, including exclusive offers and ticket
                                    discounts for major blockchain film events, bitcoin and film3 events.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-[#E1C586] mb-2">
                                    $8.00
                                    <span className="text-lg text-[#999999]">/month</span>
                                </div>
                                <p className="text-[#999999] text-xs">Cancel anytime</p>
                            </div>

                            <div className="space-y-2 mb-6 text-sm">
                                <div className="flex items-center gap-2 text-[#E1D486]">
                                    <span>✦</span>
                                    <span>Unlimited AI film recommendations</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#E1D486]">
                                    <span>✦</span>
                                    <span>Comment and share your film insights</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#E1D486]">
                                    <span>✦</span>
                                    <span>Access Filmmaker&apos;s Guide</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#E1D486]">
                                    <span>✦</span>
                                    <span>Film token insights</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#E1D486]">
                                    <span>✦</span>
                                    <span>Support independent creators directly</span>
                                </div>
                            </div>

                            <button className="w-full py-2 bg-[#E71111] text-white rounded-lg font-bold hover:bg-[#A60E0E] transition-colors mb-3">
                                Subscribe Now
                            </button>

                            <p className="text-center text-[#999999] text-xs">
                                Support the Web3 film community
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 flex items-start gap-3">
                            <div className="text-2xl flex-shrink-0">🎬</div>
                            <div>
                                <h3 className="text-[#E1C586] font-bold text-sm mb-1">100+ Films</h3>
                                <p className="text-[#999999] text-xs">Curated blockchain cinema database</p>
                            </div>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 flex items-start gap-3">
                            <div className="text-2xl flex-shrink-0">🤖</div>
                            <div>
                                <h3 className="text-[#E1C586] font-bold text-sm mb-1">AI Agent</h3>
                                <p className="text-[#999999] text-xs">Personalized film recommendations</p>
                            </div>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 flex items-start gap-3">
                            <div className="text-2xl flex-shrink-0">💬</div>
                            <div>
                                <h3 className="text-[#E1C586] font-bold text-sm mb-1">Comments & Insights</h3>
                                <p className="text-[#999999] text-xs">Your reviews appear in the AI chat</p>
                            </div>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 flex items-start gap-3">
                            <div className="text-2xl flex-shrink-0">💎</div>
                            <div>
                                <h3 className="text-[#E1C586] font-bold text-sm mb-1">Exclusive Guides</h3>
                                <p className="text-[#999999] text-xs">Filmmaker&apos;s Web3 knowledge hub</p>
                            </div>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 flex items-start gap-3">
                            <div className="text-2xl flex-shrink-0">🌍</div>
                            <div>
                                <h3 className="text-[#E1C586] font-bold text-sm mb-1">Real Support</h3>
                                <p className="text-[#999999] text-xs">10¢ goes directly to verified filmmakers</p>
                            </div>
                        </div>

                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 flex items-start gap-3">
                            <div className="text-2xl flex-shrink-0">🎟️</div>
                            <div>
                                <h3 className="text-[#E1C586] font-bold text-sm mb-1">Festival Perks</h3>
                                <p className="text-[#999999] text-xs">Discounts for Bitcoin Film Festival & MetaCannes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}