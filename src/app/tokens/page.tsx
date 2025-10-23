import React from "react";
import { Metadata } from "next";
import { FilmTokensList } from "./_components/FilmToken";

export const metadata: Metadata = {
    title: 'Film Tokens | Guide2Film3',
    description: 'Film Tokens — multiple collections of NFTs used in support of the making of Web3 Films.'
}

export default function TokensPage(): React.ReactElement {
    return (
        <div className="min-h-screen bg-[#2b2b31]">
            <main className="container mx-auto px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-[#E1C586] mb-3">Film Tokens Insider</h1>
                    <p className="text-[#999999]">Where crypto meets cinema - track, compare, and learn from real tokenized film projects.</p>
                </div>
                <FilmTokensList />
            </main>
        </div>
    );
}
