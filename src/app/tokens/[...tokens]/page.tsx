import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Film Token Details | Guide2Film3',
  description: 'Film Tokens — multiple collections of NFTs used in support of the making of Web3 Films.'
}

export default async function TokenDetailsPage(props: PageProps<'/tokens/[...tokens]'>): Promise<React.ReactElement> {
    const { tokens } = await props.params;
    console.log(tokens);
    return (
        <>            
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
