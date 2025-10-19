import React from "react";
import Head from "next/head";

export default async function TokenDetailsPage(props: PageProps<'/tokens/[...tokens]'>): React.ReactElement {
    const { tokens } = await props.params;
    console.log(tokens);
    return (
        <>
            <Head>
                <title>Film Token Details — Guide2Film3</title>
                <meta
                    name="description"
                    content="Film Tokens — multiple collections of NFTs used in support of the making of Web3 Films."
                />
            </Head>
            
            <main className="container">
                <header className="hero">
                    <h1>Film Token Details</h1>
                    <p className="tagline">
                        Details of the Film Token
                    </p>
                </header>
            </main>
        </>
    );
}
