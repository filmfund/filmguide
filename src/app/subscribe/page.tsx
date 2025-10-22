import React from "react";
import { Metadata } from "next";
import SubscribeClient from "./SubscribeClient";

export const metadata: Metadata = {
    title: 'Subscribe | Guide2Film3',
    description: 'Subscribe - Support a Film Maker by subscribing.'
}

export default function SubscribePage(): React.ReactElement {
    return (
        <SubscribeClient />
    );
}