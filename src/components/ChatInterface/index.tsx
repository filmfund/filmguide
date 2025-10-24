'use client';

import { useState } from 'react';
import Link from 'next/link';

const FREE_LIMIT = 3;

export default function ChatInterface() {
    const [messages, setMessages] = useState<{ role: string; text: string; hasMore?: boolean }[]>([]);
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);

    const send = () => {
        if (!input.trim() || count >= FREE_LIMIT) return;

        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
        setCount(count + 1);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                text: 'Great choice! Try this movie.'
            }]);
        }, 800);
    };

    const limitHit = count >= FREE_LIMIT;

    return (
        <div className="border-2 border-[#BB9867] rounded-xl h-[600px] flex flex-col bg-[#2b2b31]">
            <div className="p-4 border-b-2 border-[#BB9867] flex justify-between items-center">
                <div>
                    <h3 className="text-[#E1C586] font-bold">What to Watch AI agent</h3>
                    <p className="text-[#999999] text-xs">{FREE_LIMIT - count} messages left</p>
                </div>
                <div className="flex gap-2">
                    <Link href="/subscribe" className="px-3 py-1 bg-[#85840D] text-[#2b2b31] text-xs rounded-full">
                        Upgrade
                    </Link>
                    <Link href="/whattowatch" className="px-3 py-1 bg-[#E1C586] text-[#2b2b31] text-xs rounded-full hover:bg-[#E1D486] transition-colors">
                        Extend →
                    </Link>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#999999] text-sm mb-4">
                            Want to watch a movie about blockchain?
                            Let me guide you through the best films and documentaries on the topic of web3, bitcoin, ethereum, and the world of crypto storytelling…
                        </p>
                    </div>
                )}

                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`rounded-lg p-3 max-w-[80%] ${m.role === 'user' ? 'bg-[#E1C586] text-[#2b2b31]' : 'bg-[#3a3a40] text-[#999999]'
                            }`}>
                            <p className="text-sm">{m.text}</p>
                            {m.hasMore && (
                                <Link href="/whattowatch" className="text-[#E1D486] text-xs mt-2 inline-block hover:underline">
                                    Learn more →
                                </Link>
                            )}
                        </div>
                    </div>
                ))}

                {limitHit && (
                    <div className="text-center p-4 border-2 border-[#E71111] rounded-lg">
                        <p className="text-[#E71111] font-bold mb-2">Limit Reached</p>
                        <Link href="/subscribe" className="px-4 py-2 bg-[#E71111] text-white rounded-lg inline-block">
                            Subscribe
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
                        disabled={limitHit}
                        placeholder="I want to watch something about Vitalik"
                        className="flex-1 bg-[#3a3a40] text-[#E1C586] border-2 border-[#BB9867] rounded-lg px-4 py-2 text-sm"
                    />
                    <button
                        onClick={send}
                        disabled={limitHit || !input.trim()}
                        className="px-6 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold disabled:bg-[#666666] disabled:text-[#999999]"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}