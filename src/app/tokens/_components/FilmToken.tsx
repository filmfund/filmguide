'use client';
import React from 'react';

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link';

// const filmTokens = await import('../filmTokens.json', {
//   with: { type: 'json' }
// }) as unknown as TokenInfo[];

type TokenInfo = {
    address: string;
    chainId: number;
    movieName: string;
    tokenCollectionName: string;
    tokenSymbol: string;
    tokenType: string;
    openSeaUrl?: string;
    director: string;
    website?: string;
}

/*
https://eth.blockscout.com/api/v2/tokens/{address_hash}
{
  "circulating_market_cap": "83606435600.3635",
  "icon_url": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
  "name": "Tether USD",
  "decimals": "6",
  "symbol": "USDT",
  "address_hash": "0x394c399dbA25B99Ab7708EdB505d755B3aa29997",
  "type": "ERC-20",
  "holders_count": "837494234523",
  "exchange_rate": "0.99",
  "total_supply": "10000000"
}
*/
type BlockscoutTokenResponse = {
    name: string;
    symbol: string;
    type: string;
    address_hash: string;
};

type BlockChainInfo = {
    [chainId: number]: {
        name: string;
        explorerBaseUrl: string;
        apiBaseUrl: string;
    }
};

const blockChainInfo: BlockChainInfo = {
    1: {
        name: 'Ethereum',
        explorerBaseUrl: 'https://eth.blockscout.com/address/',
        apiBaseUrl: 'https://eth.blockscout.com/api/v2/tokens/',
    },
    137: {
        name: 'Polygon',
        explorerBaseUrl: 'https://polygon.blockscout.com/address/',
        apiBaseUrl: 'https://polygon.blockscout.com/api/v2/tokens/',
    },
    8453: {
        name: 'Base',
        explorerBaseUrl: 'https://base.blockscout.com/address/',
        apiBaseUrl: 'https://base.blockscout.com/api/v2/tokens/',
    },
}

function getAPIUrlForChain(chainId: number): string {
    const chainInfo = blockChainInfo[chainId];
    if (chainInfo) {
        return chainInfo.apiBaseUrl;
    }
    throw new Error("ChainID not implemented");
}

function getBlockscoutExplorerLink(chainId: number, address_hash: string): string{
    const chainInfo = blockChainInfo[chainId];
    if (chainInfo) {
        return `${chainInfo.explorerBaseUrl}${address_hash}`;
    }
    throw new Error("ChainID not implemented");
}

function FetchTokenInfo(address: string, chainId: number): Promise<BlockscoutTokenResponse | null> {
    const apiBaseUrl = getAPIUrlForChain(chainId);
    if (!apiBaseUrl) {
        console.error(`Unsupported chain ID: ${chainId}`);
        return Promise.resolve(null);
    }
    const apiUrl = `${apiBaseUrl}${address}`;

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data as BlockscoutTokenResponse;
        })
        .catch(error => {
            console.error('Error fetching token info:', error);
            return null;
        });
}

function FilmToken(tokenInfo: TokenInfo): React.ReactElement {
    const [tokenData, setTokenData] = React.useState<BlockscoutTokenResponse | null>(null);

    React.useEffect(() => {
        FetchTokenInfo(tokenInfo.address, tokenInfo.chainId)
            .then(data => {
                setTokenData(data);
            });
    }, [tokenInfo.address, tokenInfo.chainId]);

    return (
        <div className="bg-[#1a1a1f] rounded-xl overflow-hidden border-2 border-[#BB9867] hover:border-[#E1D486] transition-all">
            <div className="p-4 bg-[#2b2b31]">
                <h3 className="text-[#E1C586] font-bold text-xl mb-1">{tokenInfo.movieName}</h3>
                <p className="text-[#999999] text-sm mb-3">({tokenInfo.tokenCollectionName})</p>
                <div className="mb-4">
                    <p className="text-[#999999] text-sm">
                        <span className="font-semibold">Director:</span> {tokenInfo.director}
                    </p>
                </div>

                <div className="space-y-2 text-sm mb-4 p-3 bg-[#1a1a1f] rounded border border-[#BB9867]">
                    <div className="flex justify-between">
                        <span className="text-[#999999]">Token Symbol:</span>
                        <span className="text-[#E1D486] font-semibold">{tokenInfo.tokenSymbol || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#999999]">Token Type:</span>
                        <span className="text-[#E1C586]">{tokenInfo.tokenType}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#999999]">Chain ID:</span>
                        <span className="text-[#E1C586]">{tokenInfo.chainId}</span>
                    </div>
                </div>

                {tokenData ? (
                    <div className="bg-[#1a1a1f] rounded p-3 mb-4 border border-[#BB9867]">
                        <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                                <span className="text-[#999999]">Token Name:</span>
                                <span className="text-[#E1C586]">{tokenData.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#999999]">Symbol:</span>
                                <span className="text-[#E1C586]">{tokenData.symbol}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#999999]">Type:</span>
                                <span className="text-[#E1C586]">{tokenData.type}</span>
                            </div>
                            <div className="mt-2 pt-2 border-t border-[#BB9867]">
                                <p className="text-[#999999] mb-1">Contract Address:</p>
                                <p className="text-[#E1D486] font-mono wrap-break-word" title={tokenData.address_hash}>
                                    <Link target="_blank" href={getBlockscoutExplorerLink(tokenInfo.chainId, tokenInfo.address)}>{tokenData.address_hash.slice(0, 10)}...{tokenData.address_hash.slice(-8)}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-[#999999] text-xs mb-4 italic">Loading blockchain data...</p>
                )}

                <div className="space-y-2">
                    {tokenInfo.website && (
                        <a href={tokenInfo.website} target="_blank" rel="noopener noreferrer"
                            className="block w-full py-2 px-4 bg-[#E1C586] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1D486] transition-colors text-center text-sm">
                            Official Website
                        </a>
                    )}
                    {tokenInfo.openSeaUrl && (
                        <a href={tokenInfo.openSeaUrl} target="_blank" rel="noopener noreferrer"
                            className="block w-full py-2 px-4 bg-[#BB9867] text-[#2b2b31] rounded-lg font-semibold hover:bg-[#E1C586] transition-colors text-center text-sm">
                            View on OpenSea
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function FilmTokensList(): React.ReactElement {

    const { data, isPending, error } = useQuery<TokenInfo[]>({
        queryKey: ['filmtokens'],
        queryFn: () => fetch('/api/tokens').then(r => r.json()),
    })

    console.log('Token data:', data);
    console.log('Number of tokens:', data?.length);

    if (isPending) return <div className="text-center text-[#999999] py-12">Loading...</div>
    if (error) return <div className="text-center text-[#E71111] py-12">Oops!</div>

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((tokenInfo, index) => (
                <FilmToken key={index} {...tokenInfo} />
            ))}
        </div>
    );
}

export { FilmToken, FilmTokensList, type TokenInfo };
