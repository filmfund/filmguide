import React from "react";
import { Metadata } from "next";

import Link from "next/link";

//Film Token Details | Guide2Film3
export const metadata: Metadata = {
  title: 'Dashboard | Guide2Film3',
  description: 'Dashboard - AI-powered Web3 guide to blockchain films, funding, and decentralized cinema.'
}

export default function DashboardPage(): React.ReactElement {
    return (
        <>           
            <main className="container border-r-8 mx-auto mt-12 rounded-sm">
                <div className="grid grid-flow-col gap-2 border-8 rounded-sm">
                    <div className="border-2 border-r-2">01</div>
                    <div className="">
                        <Link href="/tokens">Compare Film Tokens</Link>
                    </div>
                </div>
            </main>
        </>
    );
}
