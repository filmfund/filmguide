import React from "react";
import Head from "next/head";

export default function TokensPage(): React.ReactElement {
    return (
        <>
            <Head>
                <title>Film Tokens — Guide2Film3</title>
                <meta
                    name="description"
                    content="Film Tokens — multiple collections of NFTs used in support of the making of Web3 Films."
                />
            </Head>
            
            <main className="container">
                <header className="hero">
                    <h1>Film Tokens</h1>
                    <p className="tagline">
                        This page contains several NFTs used in support of the making of Web3 Films. (Editor please add more descriptive text here.)
                    </p>
                </header>
            </main>
        </>
    );
}
