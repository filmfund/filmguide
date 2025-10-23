import React from "react";
import { Metadata } from "next";
import WhatToWatchClient from "./WhatToWatchClient";

export const metadata: Metadata = {
    title: 'What to Watch | Guide2Film3',
    description: 'AI-powered blockchain film recommendations'
}

export default function WhatToWatchPage() {
    return <WhatToWatchClient />;
}