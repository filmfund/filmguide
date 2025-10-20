// 'use client';

// import { Button } from "../ui/button";

// export default function WalletConnect() {
//     return (
//         <Button type="button" onClick={() => alert('connect wallet not implemented yet')}>Connect Wallet</Button>
//     )
// }

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function WalletConnect() {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            style: {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        onClick={openConnectModal}
                                        className="px-6 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors duration-200 border border-[#BB9867]"
                                    >
                                        Wallet Connect
                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        className="px-6 py-2 bg-[#E71111] text-white rounded-lg font-semibold"
                                    >
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <div className="flex gap-2">
                                    <button
                                        onClick={openChainModal}
                                        className="px-4 py-2 bg-[#2b2b31] text-[#E1C586] rounded-lg border border-[#BB9867]"
                                    >
                                        {chain.name}
                                    </button>
                                    <button
                                        onClick={openAccountModal}
                                        className="px-6 py-2 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors duration-200 border border-[#BB9867]"
                                    >
                                        {account.displayName}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}