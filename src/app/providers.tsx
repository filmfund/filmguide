'use client';

import { ReactNode, useState } from 'react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, createStorage, cookieStorage, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { baseAccount, injected, walletConnect } from 'wagmi/connectors'


const wagmiConfig = createConfig({
    chains: [sepolia],
    transports: {
        [sepolia.id]: http(
            process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ??
            "https://eth-sepolia.public.blastapi.io"
        ),
    },
    storage: createStorage({
      storage: cookieStorage,
    }),
    connectors: [
        //new MetaMaskConnector({ chains: [sepolia] }),
        injected(),
        baseAccount(),
        walletConnect({
            projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "your-project-id"
        })
    ],
    ssr: true, // good for Next.js
});

export default function Providers({ children }: { children: ReactNode }) {

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: { staleTime: 5 * 60 * 1000, gcTime: 10 * 60 * 1000 }, // gcTime replaces cacheTime
        },
    }));
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
