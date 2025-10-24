'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MOCK_SUBSCRIBED = false;
const FREE_LIMIT = 3;

export default function WhatToWatchClient() {
    const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [messageCount, setMessageCount] = useState(0);
    const isSubscribed = MOCK_SUBSCRIBED;

    const send = () => {
        if (!input.trim()) return;
        if (!isSubscribed && messageCount >= FREE_LIMIT) return;

        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
        setMessageCount(messageCount + 1);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                text: 'Here are some great blockchain films.'
            }]);
        }, 1000);
    };

    const limitReached = !isSubscribed && messageCount >= FREE_LIMIT;

    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">

                <h1 className="text-3xl font-bold text-[#E1C586] text-center mb-3">
                    What to Watch AI agent
                </h1>

                <div className="max-w-2xl mx-auto mb-6">
                    <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-lg p-4 text-center">
                        <h3 className="text-[#E1C586] font-semibold mb-3">Tell me what mood you&apos;re in - I&apos;ll find the right blockchain movie.</h3>
                        <p className="text-[#999999] text-sm">
                            Whether you want to impress a date, spark curiosity at dinner, or dive deep into the world of bitcoin and ethereum, our What to Watch AI agent has you covered.
                        </p>
                        <p className="text-[#999999] text-sm">
                            From indie gems to full-length films and teasers, discover stories that make crypto culture cinematic.
                        </p>
                        <p className="text-[#999999] text-sm">
                            The What to Watch AI agent is an AI-powered film curator that knows over a hundred movies about bitcoin, ethereum, NFTs, and web3 - guiding you to the most insightful and authentic stories about crypto culture and its impact.

                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl h-[700px] flex flex-col">

                    <div className="p-4 border-b-2 border-[#BB9867] flex justify-between items-center">
                        <div>
                            <h3 className="text-[#E1C586] font-bold">What to Watch AI agent</h3>
                            <p className="text-[#999999] text-xs">
                                {isSubscribed
                                    ? 'Unlimited messages'
                                    : `${FREE_LIMIT - messageCount} messages remaining`
                                }
                            </p>
                        </div>
                        <Link href="/dashboard" className="px-3 py-1 bg-[#E1C586] text-[#2b2b31] text-xs rounded-full hover:bg-[#E1D486] transition-colors">
                            ← Back
                        </Link>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-[#E1D486] mb-4">
                                    Want to watch a movie about blockchain?
                                </p>
                                <div className="space-y-2 text-[#999999] text-sm">
                                    <p>Let me guide you through the best films and documentaries on the topic of web3, bitcoin, ethereum, and the world of crypto storytelling…</p>
                                </div>
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`rounded-lg p-3 max-w-[80%] ${m.role === 'user' ? 'bg-[#E1C586] text-[#2b2b31]' : 'bg-[#3a3a40] text-[#999999]'
                                    }`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}

                        {limitReached && (
                            <div className="text-center p-4 border-2 border-[#E71111] rounded-lg">
                                <p className="text-[#E71111] font-bold mb-2">Free Message Limit Reached</p>
                                <Link href="/subscribe" className="px-4 py-2 bg-[#E71111] text-white rounded-lg inline-block hover:bg-[#A60E0E] transition-colors">
                                    Subscribe for Unlimited
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t-2 border-[#BB9867]">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && send()}
                                disabled={limitReached}
                                placeholder={limitReached ? "Subscribe to continue..." : "Ask about films..."}
                                className={`flex-1 bg-[#3a3a40] text-[#E1C586] border-2 border-[#BB9867] rounded-lg px-4 py-2 focus:outline-none focus:border-[#E1D486] ${limitReached ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            />
                            <button
                                onClick={send}
                                disabled={limitReached || !input.trim()}
                                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${limitReached || !input.trim()
                                    ? 'bg-[#666666] text-[#999999] cursor-not-allowed'
                                    : 'bg-[#E1C586] text-[#2b2b31] hover:bg-[#E1D486]'
                                    } disabled:bg-[#666666] disabled:text-[#999999]`}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}