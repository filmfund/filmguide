import React from "react";
import Head from "next/head";

export default function TokensPage(): React.ReactElement {
    return (
        <>
            <Head>
                <title>Dashboard — Guide2Film3</title>
                <meta
                    name="description"
                    content="Dashboard - Your go to resource for Web3 Films and their creation."
                />
            </Head>
            
            <main className="container border-r-8 mx-auto mt-12 rounded-sm">
                <div className="grid grid-flow-col gap-2 border-8 rounded-sm">
                    <div className="border-2 border-r-2">01</div>
                    <div className="">02</div>
                </div>
            </main>
        </>
    );
}
