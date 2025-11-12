'use client';
import {useEffect, useState} from 'react';

import Link from 'next/link';
import { TokenInfo } from './types';

type BlockscoutTokenResponse = {
    name: string;
    symbol: string;
    type: string;
    address_hash: string;
};

type BlockChainInfo = {
    [chainId: number]: BlockChainInfoSegment
};

type BlockChainInfoSegment = {
    name: string;
    explorerMainpageUrl: string;
    explorerBaseUrl: string;
    apiBaseUrl: string;
};

const blockChainInfo: BlockChainInfo = {
    1: {
        name: 'Ethereum',
        explorerMainpageUrl: 'https://eth.blockscout.com/',
        explorerBaseUrl: 'https://eth.blockscout.com/address/',
        apiBaseUrl: 'https://eth.blockscout.com/api/v2/tokens/',
    },
    137: {
        name: 'Polygon',
        explorerMainpageUrl: 'https://polygon.blockscout.com/',
        explorerBaseUrl: 'https://polygon.blockscout.com/address/',
        apiBaseUrl: 'https://polygon.blockscout.com/api/v2/tokens/',
    },
    8453: {
        name: 'Base',
        explorerMainpageUrl: 'https://base.blockscout.com/',
        explorerBaseUrl: 'https://base.blockscout.com/address/',
        apiBaseUrl: 'https://base.blockscout.com/api/v2/tokens/',
    },
}

function getChainInfo(chainId: number): BlockChainInfoSegment {
    const chainInfo = blockChainInfo[chainId];
    if (chainInfo) {
        return chainInfo;
    }
    throw new Error("ChainID not implemented");
}

function FetchTokenInfo(address: string, chainId: number): Promise<BlockscoutTokenResponse | null> {

    const isClient = typeof window !== 'undefined';
    console.log('FetchTokenInfo called', { address, chainId, isClient });

    if (!isClient) {
        // if this runs on the server unexpectedly, skip the network call
        return Promise.resolve(null);
    }

    const apiBaseUrl = getChainInfo(chainId).apiBaseUrl;
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

export default function FilmToken(tokenInfo: TokenInfo): React.ReactElement {
    const [tokenData, setTokenData] = useState<BlockscoutTokenResponse | null>(null);

    useEffect(() => {
        FetchTokenInfo(tokenInfo.address, tokenInfo.chainId)
            .then(data => {
                setTokenData(data);
            });
    }, [tokenInfo.address, tokenInfo.chainId]);

    const blockChainInfo = getChainInfo(tokenInfo.chainId);

    return (
        <div className="bg-[#1a1a1f] rounded-xl overflow-hidden border-2 border-[#BB9867] hover:border-[#E1D486] transition-all">
            <div className="p-4 bg-[#2b2b31]">
                <h3 className="text-[#E1C586] font-bold text-xl mb-1 line-clamp-1">{tokenInfo.movieName}</h3>
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
                        <span className="text-[#999999]">Chain:</span>
                        <span className="text-[#E1C586]">{blockChainInfo.name}</span>
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
                                    <Link target="_blank" href={`${blockChainInfo.explorerBaseUrl}/${tokenInfo.address}`}>{tokenData.address_hash.slice(0, 10)}...{tokenData.address_hash.slice(-8)}</Link>
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
