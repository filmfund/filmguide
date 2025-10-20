import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'Guide2Film3',
    projectId: '44a8ae335cf97241535ad4cfd78bbb14',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
});