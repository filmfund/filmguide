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
            
            <main className="container">
                <div className="grid grid-flow-col gap-2">
                    <div className="row-span-3">01</div>
                    <div className="col-span-2">02</div>
                    <div className="col-span-2 row-span-2">03</div>
                </div>
            </main>
        </>
    );
}
