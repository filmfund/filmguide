'use client';

import WalletConnect from "../WalletConnect/index";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-b border-[#A60E0E] bg-[#2b2b31]">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="/favicon_filmfundeth.png"
                        alt="Guide2Film3 Logo"
                        width={65}
                        height={65}
                        className="object-contain"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-[#E1C586]">Guide2Film3</h1>
                        <p className="font-semibold text-sm text-[#999999]">aka Guide to Blockchain Cinema by <a href="http://filmfund.113kw.net/" className="text-[#E1C586]">FilmFund.ETH</a> . AI-powered Web3 guide to blockchain films, funding, and decentralized cinema.</p>
                    </div>
                </div>
                {/* <button className="px-6 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors duration-200 border border-[#BB9867]">
                    Wallet Connect
                </button> */}
                <WalletConnect />
            </div>
        </header>
    );
};
