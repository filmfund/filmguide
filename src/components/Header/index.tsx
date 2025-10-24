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
        <header className="border-b-4 border-[#A60E0E] bg-[#54010b]">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href={logoLink} className="flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer">
                    {logoImageElement}
                    <div>
                        <h5 className="text-2xl font-bold text-[#E1C586]" style={{ fontFamily: 'ITC Benguiat' }}>GUIDE2FILM3</h5>
                    </div>
                </Link>
                <WalletConnect />
            </div>
        </header>
    );
};
