'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MOCK_SUBSCRIBED = false;
const FREE_LIMIT = 3;

export default function FilmmakersGuideClient() {
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
                text: 'Here is the guide for filmmakers.'
            }]);
        }, 1000);
    };

    const limitReached = !isSubscribed && messageCount >= FREE_LIMIT;

    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-[#E1C586] text-center mb-3">
                    Filmmaker&apos;s Guide to blockchain and web3
                </h1>

                <div className="max-w-2xl mx-auto mb-6">
                    <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-lg p-4 text-center">
                        <h3 className="text-[#E1C586] font-semibold mb-3">Your no-nonsense AI mentor for navigating the new era of filmmaking</h3>
                        <p className="text-[#999999] text-sm">
                            Think of me as your no-nonsense AI mentor - I&apos;ve seen every hype cycle and can tell you which projects deliver and which don&apos;t. I&apos;ll help you find working DAOs, grants, streaming platforms, and communities that actually support filmmakers.
                        </p>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl h-[700px] flex flex-col">
                    <div className="p-4 border-b-2 border-[#BB9867] flex justify-between items-center">
                        <div>
                            <h3 className="text-[#E1C586] font-bold">Filmmaker&apos;s Guide to blockchain and web3</h3>
                            <p className="text-[#999999] text-xs">
                                {isSubscribed
                                    ? 'Unlimited messages'
                                    : `${FREE_LIMIT - messageCount} messages remaining`
                                }
                            </p>
                        </div>
                        <Link href="/dashboard" className="px-3 py-1 bg-[#E1C586] text-[#2b2b31] text-sm rounded-full hover:bg-[#E1D486] transition-colors">
                            ← Back
                        </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-[#999999] text-sm mb-4">
                                    Ask me for real advice - I can name funding DAOs, web3 festivals, and tokenized VOD platforms that are worth your time (and the ones that aren&apos;t).
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

                        {limitReached && (
                            <div className="text-center p-4 border-2 border-[#E71111] rounded-lg">
                                <p className="text-[#E71111] font-bold mb-2">Free Message Limit Reached</p>
                                <p className="text-[#999999] text-sm mb-3">Subscribe for unlimited access to the Filmmaker&apos;s Guide</p>
                                <Link href="/subscribe" className="px-4 py-2 bg-[#E71111] text-white rounded-lg inline-block hover:bg-[#A60E0E] transition-colors">
                                    Subscribe for Unlimited
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="p-4 border-t-2 border-[#BB9867]">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && send()}
                                disabled={limitReached}
                                placeholder={limitReached ? "Subscribe to continue..." : "How do I raise funds for a documentary using blockchain?"}
                                className={`flex-1 bg-[#3a3a40] text-[#E1C586] border-2 border-[#BB9867] rounded-lg px-4 py-2 focus:outline-none focus:border-[#E1D486] ${limitReached ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            />
                            <button
                                onClick={send}
                                disabled={limitReached || !input.trim()}
                                className={`px-6 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] ${limitReached || !input.trim()
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