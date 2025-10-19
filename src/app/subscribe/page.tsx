import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Subscribe | Guide2Film3',
  description: 'Subscribe - Support a Film Maker by subscribing.'
}

export default function SubscribePage(): React.ReactElement {
    return (
        <>           
            <main className="container border-r-8 mx-auto mt-12 rounded-sm">
                <div className="grid grid-flow-col gap-2 border-8 rounded-sm">
                    <div className="border-2 border-r-2">01</div>
                    <div className="">02</div>
                </div>
            </main>
        </>
    );
}
