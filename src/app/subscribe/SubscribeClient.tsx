'use client';

import React from 'react';

export default function SubscribeClient() {
    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-[#E1C586] mb-4">
                            Unlock Full Access
                        </h1>
                        <p className="text-[#999999] text-lg">
                            Support filmmakers and get unlimited AI recommendations
                        </p>
                    </div>

                    <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-8 max-w-md mx-auto">

                        <div className="text-center mb-6">
                            <div className="text-5xl font-bold text-[#E1C586] mb-2">
                                $4.99
                                <span className="text-xl text-[#999999]">/month</span>
                            </div>
                            <p className="text-[#999999] text-sm">Cancel anytime</p>
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-[#999999]">
                                <span className="text-[#E1D486]">✦</span>
                                <span>Unlimited AI film recommendations</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#999999]">
                                <span className="text-[#E1D486]">✦</span>
                                <span>Access Filmmaker&apos;s Guide</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#999999]">
                                <span className="text-[#E1D486]">✦</span>
                                <span>Film token insights</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#999999]">
                                <span className="text-[#E1D486]">✦</span>
                                <span>Support independent creators</span>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-[#E71111] text-white rounded-lg font-bold text-lg hover:bg-[#A60E0E] transition-colors mb-4">
                            Subscribe Now
                        </button>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6 text-center">
                            <div className="text-3xl mb-3">🎬</div>
                            <h3 className="text-[#E1C586] font-bold mb-2">100+ Films</h3>
                            <p className="text-[#999999] text-sm">Curated blockchain cinema database</p>
                        </div>
                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6 text-center">
                            <div className="text-3xl mb-3">🤖</div>
                            <h3 className="text-[#E1C586] font-bold mb-2">AI Agent</h3>
                            <p className="text-[#999999] text-sm">Personalized recommendations</p>
                        </div>
                        <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6 text-center">
                            <div className="text-3xl mb-3">💎</div>
                            <h3 className="text-[#E1C586] font-bold mb-2">Exclusive</h3>
                            <p className="text-[#999999] text-sm">Filmmaker guides</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}