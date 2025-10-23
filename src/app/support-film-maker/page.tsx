import React from "react";
import { Metadata } from "next";
import SupportFilmmakerClient from "./SupportFilmmakerClient";

export const metadata: Metadata = {
    title: 'Support a Filmmaker | Guide2Film3',
    description: 'Support independent blockchain filmmakers'
}

export default function SupportFilmmakerPage() {
    return <SupportFilmmakerClient />;
}