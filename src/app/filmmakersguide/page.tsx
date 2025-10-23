import React from "react";
import { Metadata } from "next";
import FilmmakersGuideClient from "./FilmmakersGuideClient";

export const metadata: Metadata = {
    title: 'Film Makers Guide | Guide2Film3',
    description: 'Blockchain guide for filmmakers'
}

export default function FilmmakersGuide() {
    return (
        <FilmmakersGuideClient />
    );
}