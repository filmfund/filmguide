'use client';

import { Suspense } from "react";
import Link from "next/link";
import WalletConnect from "../WalletConnect/index";
import Image from "next/image";
import { SuspenseImage } from "suspense-next-image";

function isOnClient(): boolean {
    return typeof window !== 'undefined';
}

export default function Header() {
    const isSubscribed = false;
    const logoLink = isSubscribed ? '/dashboard' : '/';
    const logoAltText = "Guide2Film3 Logo";
    const logoWidth = 65;
    const logoHeight = 65;

    const fallbackImage = (
        <Image
            src="/guide2film3.png"
            alt={logoAltText}
            width={logoWidth}
            height={logoHeight}
            className="object-contain"
        />
    );

    let logoImageElement = fallbackImage;
    if (isOnClient()) {
        logoImageElement = (
            <Suspense fallback={fallbackImage}>
                <SuspenseImage
                    src="/guide2film3.gif"
                    alt={logoAltText}
                    width={logoWidth}
                    height={logoHeight}
                    unoptimized={true}
                    className="object-contain"
                />
            </Suspense>
        );
    }

    return (
        <header className="border-b border-[#A60E0E] bg-[#2b2b31]">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href={logoLink} className="flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer">
                    {logoImageElement}
                    <div>
                        <h1 className="text-2xl font-bold text-[#E1C586]">Guide2Film3</h1>
                        <p className="font-semibold text-sm text-[#999999]">aka Guide to Blockchain Cinema by <a href="http://filmfund.113kw.net/" className="text-[#E1C586]">FilmFund.ETH</a> . AI-powered Web3 guide to blockchain films, funding, and decentralized cinema.</p>
                    </div>
                </Link>
                <WalletConnect />
            </div>
        </header>
    );
};
