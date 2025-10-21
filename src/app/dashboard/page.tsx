import React from "react";
import { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: 'Dashboard | Guide2Film3',
  description: 'Dashboard - AI-powered Web3 guide to blockchain films, funding, and decentralized cinema.'
}

export default function DashboardPage() {
    return <DashboardClient />;
}