'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function WhatToWatchClient() {
    const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
    const [input, setInput] = useState('');

    const send = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                text: 'Here are some great blockchain films.'
            }]);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-[#E1C586] text-center mb-6">
                    AI Film Chat
                </h1>

                <div className="max-w-4xl mx-auto bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl h-[700px] flex flex-col">
                    <div className="p-4 border-b-2 border-[#BB9867] flex justify-between">
                        <h3 className="text-[#E1C586] font-bold">What to Watch AI Agent</h3>
                        <Link href="/dashboard" className="text-[#E1D486] text-sm hover:underline">
                            ← Back
                        </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.length === 0 && (
                            <div className="text-center py-12">
                                <h3 className="text-[#E1C586] text-lg">Tell me what mood you&apos;re in - I&apos;ll find the right blockchain movie</h3>
                                <p className="text-[#999999] text-sm mb-4">
                                    Whether you want to impress a date, spark curiosity at dinner, or dive deep into the world of Bitcoin and Ethereum, our AI curator has you covered.
                                    From indie gems to full-length films and teasers, discover stories that make crypto culture cinematic.
                                </p>
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
                    </div>

                    <div className="p-4 border-t-2 border-[#BB9867]">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && send()}
                                placeholder="I want to watch something about Vitalik"
                                className="flex-1 bg-[#3a3a40] text-[#E1C586] border-2 border-[#BB9867] rounded-lg px-4 py-2"
                            />
                            <button
                                onClick={send}
                                className="px-6 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486]"
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