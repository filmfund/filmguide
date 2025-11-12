import React from "react";
import { Metadata } from "next";
import FilmTokensList from "./_components/FilmTokenList";

export const metadata: Metadata = {
    title: 'Film Tokens | Guide2Film3',
    description: 'Film Tokens — multiple collections of NFTs used in support of the making of Web3 Films.'
}

export default function TokensPage(): React.ReactElement {
    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-[#E1C586] text-center mb-3">
                    Film Tokens Insider
                </h1>
                <div className="max-w-2xl mx-auto mb-6">
                    <div className="bg-[#2b2b31] border-2 border-[#BB9867] rounded-lg p-4 text-center">
                        <h3 className="text-[#E1C586] font-semibold mb-3">Where crypto meets cinema - track, compare, and learn from real tokenized film projects.</h3>
                        <p className="text-[#999999] text-sm">
                            Go behind the scenes of blockchain film finance. Discover which tokens sold out in hours and which never made it past the trailer. See how much funding projects raised, whether the movies were completed, and if the teams are still active in web3 or moved on.
                        </p>
                        <p className="text-[#999999] text-sm">
                            Film Tokens Insider turns token data into storytelling - revealing the real successes and lessons of cinema on the blockchain.
                        </p>
                    </div>
                </div>
                <FilmTokensList />
            </main>
        </div>
    );
}
