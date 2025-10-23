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
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src="/filmmaker-photo.png"
                                            alt="Filmmaker Name"
                                            width={150}
                                            height={150}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#E1C586] mb-2">
                                            Filmmaker Name
                                        </h2>
                                        <p className="text-[#999999] mb-4">
                                            Brief description or tagline
                                        </p>
                                        <a
                                            href="https://docs.google.com/presentation/d/YOUR_SLIDES_ID"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors"
                                        >
                                            View Project Details →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-6">
                                <h3 className="text-xl font-bold text-[#E1C586] mb-4">Projects</h3>

                                <div className="grid md:grid-cols-2 gap-4 items-start">
                                    <div className="max-h-[150px] overflow-hidden">
                                        <Image
                                            src="/project-poster-1.png"
                                            alt="Project Title"
                                            width={150}
                                            height={150}
                                            className="w-full h-full rounded-lg object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-[#E1C586] mb-2">Project Title</h4>
                                        <p className="text-[#999999] text-sm mb-4 line-clamp-4">
                                            Project description and details about the film...
                                        </p>
                                        <a
                                            href="https://www.imdb.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1D486] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1C586] transition-colors"
                                        >
                                            View on IMDB →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">

                            <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-xl p-4 text-center">
                                <p className="text-[#999999] text-sm">
                                    in future here will be more filmmakers
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
                                    motivational text about how great is to support a filmmaker.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}