'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MOCK_SUBSCRIBED = false;

export default function SupportFilmmakerClient() {
    const [isSubscribed] = useState(MOCK_SUBSCRIBED);

    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-[#E1C586] text-center mb-3">
                    Support a Filmmaker
                </h1>
                <div className="max-w-2xl mx-auto mb-6">
                    <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-lg p-4 text-left">
                        <h3 className="text-[#E1C586] font-semibold mb-3 text-center">Contribute directly to verified filmmakers creating stories about ethereum, bitcoin, and the web3 revolution</h3>
                        <p className="text-[#999999] text-sm">
                            Contribute directly to emerging film projects.Every subscription and micro-donation in GUIDE2FILM3 directly supports real filmmakers telling stories about blockchain culture - bitcoin, ethereum, NFTs, and the people behind them.
                        </p>
                        <p className="text-[#999999] text-sm">
                            A small portion of every monthly plan is automatically shared with featured creators, fairly divided on-chain.
                        </p>
                        <p className="text-[#999999] text-sm">
                            Right now, support goes to one verified filmmaker developing a crypto-focused project, but soon, this space will open for submissions from others - projects in the stage of ideas, pitches, or scripts.
                        </p>
                        <p className="text-[#999999] text-sm">
                            In the next phase, users will be able to support projects through tiers that unlock deeper insights into the filmmaking process:
                        </p>
                        <ul className="list-disc list-inside text-[#999999] text-sm space-y-2 mt-3">
                            <li><span className="text-[#E1D486] font-semibold">$50 Tier</span> – Early project updates, concept art, and behind-the-scenes notes</li>
                            <li><span className="text-[#E1D486] font-semibold">$1,000 Tier</span> – Access to read the film&apos;s script and see exclusive footage, being in subtitles</li>
                            <li><span className="text-[#E1D486] font-semibold">$5,000 Tier</span> – Join weekly video calls with the crew and receive early screening access, being highlighted in subtitles</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src="/filmmaker_picture.jpg"
                                            alt="Filmmaker Name"
                                            width={150}
                                            height={200}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#E1C586] mb-2">
                                            Kristina Weiserova aka 113kw
                                        </h2>
                                        <p className="text-[#999999] mb-4">
                                            TV professional, filmmaker, lecturer, and early blockchain storyteller bridging cinema, technology, and subcultures
                                        </p>
                                        <a
                                            href="https://www.imdb.com/name/nm6663704/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors"
                                        >
                                            View artist on IMDB →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                                <h3 className="text-xl font-bold text-[#E1C586] mb-4">Something to believe in</h3>

                                <div className="grid md:grid-cols-2 gap-4 items-start">
                                    <div className="max-h-[350px] overflow-hidden">
                                        <Image
                                            src="/filmproject_image.png"
                                            alt="Project Title"
                                            width={300}
                                            height={300}
                                            className="w-full h-full rounded-lg object-cover"
                                        />
                                    </div>

                                    <div>
                                        {/* <h4 className="text-lg font-bold text-[#E1C586] mb-2">Project Title</h4> */}
                                        <p className="text-[#999999] text-sm mb-4 text-left">
                                            <span className="font-bold">Something to believe in</span> is a short, emotionally charged story by <span className="font-bold">113kw (Kristina Weiserová)</span> - a filmmaker and FAMU lecturer exploring where technology meets humanity.
                                            Told through interwoven timelines and characters, the film reveals how one small blockchain moment can ripple across lives, connecting a hacker, a dreamer, and a lost coder.
                                            Inspired by real people from the Bitcoin and Ethereum communities, it turns crypto history into a deeply human puzzle about belief and connection.
                                            Created as an independent three-day shoot with a modest $3,000 budget, the project invites early supporters through Guide2Film3.
                                            Your subscription helps bring <span className="font-bold">Something to believe in</span> to life - one of the first cinematic stories born directly from blockchain culture.
                                        </p>
                                        <a
                                            href="https://docs.google.com/presentation/d/10Gih3VumdYyTJzXQU-hs70YdXT-m5zgMUduIp0Bcldc/edit?slide=id.p6#slide=id.p6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors"
                                        >
                                            View project details →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">

                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 text-left">
                                <p className="text-[#999999] text-sm">
                                    Today, there&apos;s one project you can support directly, but soon this space will open for submissions from independent creators at different stages of development: from early pitches to completed scripts. Do you know one? Connect to us on our socials
                                </p>
                            </div>


                            {isSubscribed ? (
                                <div className="bg-[#01361b] rounded-xl p-6">
                                    <p className="text-[#2b2b31] text-sm mb-4 font-semibold">
                                        Thank you for being subscribed!
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <Link href="/subscribe">
                                        <button className="w-full py-3 bg-[#E71111] text-white rounded-lg font-semibold hover:bg-[#A60E0E] transition-colors mb-4">
                                            subscription button
                                        </button>
                                    </Link>
                                </div>
                            )}
                            <div className="bg-[#E1C586] rounded-xl p-4">
                                <p className="text-[#2b2b31] text-xs leading-relaxed">
                                    Your subscription does more than unlock films - it helps real blockchain storytellers turn decentralized ideas into cinematic reality.
                                </p>
                                <p className="text-[#2b2b31] text-xs leading-relaxed">
                                    Every dollar you contribute strengthens a new ecosystem of transparent, community-funded filmmaking - powered by the same technology these films celebrate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}