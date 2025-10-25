'use client';

import { ReactNode, useState } from 'react';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/lib/wagmi';

import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const wagmiConfig = createConfig({
    chains: [sepolia],
    transports: {
        [sepolia.id]: http(
            process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ??
            "https://eth-sepolia.public.blastapi.io"
        ),
    },
    connectors: [
        new MetaMaskConnector({ chains: [sepolia] }),
        new WalletConnectConnector({
            chains: [sepolia],
            options: {
                projectId:
                    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "your-project-id",
            },
        }),
    ],
    ssr: true, // good for Next.js
    autoConnect: true,
});

export default function Providers({ children }: { children: ReactNode }) {

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: { staleTime: 5 * 60 * 1000, gcTime: 10 * 60 * 1000 }, // gcTime replaces cacheTime
        },
    }));
    return (
        <WagmiConfig config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiConfig>
    );
}
