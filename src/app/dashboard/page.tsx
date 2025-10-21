import React from "react";
import { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
    title: 'Dashboard | Guide2Film3',
    description: 'Dashboard - Your go to resource for Web3 Films and their creation.'
}

export default function DashboardPage() {
    return <DashboardClient />;
}