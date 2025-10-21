'use client';
import React from 'react';

import { useQuery } from '@tanstack/react-query'

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

function getAPIUrlForChain(chainId: number): string | null {
    switch (chainId) {
        case 1:
            return 'https://eth.blockscout.com/api/v2/tokens/';
        case 56:
            return 'https://bsc.blockscout.com/api/v2/tokens/';
        case 137:
            return 'https://polygon.blockscout.com/api/v2/tokens/';
        default:
            return null;
    }
}

function FetchTokenInfo(address: string, chainId: number) : Promise<BlockscoutTokenResponse | null> {
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

// Component to display a single film token
function FilmToken(tokenInfo: TokenInfo) : React.ReactElement {
    const [tokenData, setTokenData] = React.useState<BlockscoutTokenResponse | null>(null);

    React.useEffect(() => {
        FetchTokenInfo(tokenInfo.address, tokenInfo.chainId)
            .then(data => {
                setTokenData(data);
            });
    }, [tokenInfo.address, tokenInfo.chainId]);


    return (
        <div className="film-token-card border border-gray-300 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{tokenInfo.movieName} ({tokenInfo.tokenCollectionName})</h2>
            <p><strong>Director:</strong> {tokenInfo.director}</p>
            <p><strong>Token Symbol:</strong> {tokenInfo.tokenSymbol}</p>
            <p><strong>Token Type:</strong> {tokenInfo.tokenType}</p>
            <p><strong>Chain ID:</strong> {tokenInfo.chainId}</p>
            <p><strong>Contract Address:</strong> {tokenInfo.address}</p>
            {tokenInfo.website && (
                <p>
                    <a href={tokenInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        Official Website
                    </a>
                </p>
            )}
            {tokenInfo.openSeaUrl && (
                <p>
                    <a href={tokenInfo.openSeaUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View on OpenSea
                    </a>
                </p>
            )}
            {tokenData ? (
                <div className="token-data mt-2">
                    <p><strong>Token Name:</strong> {tokenData.name}</p>
                    <p><strong>Token Symbol:</strong> {tokenData.symbol}</p>
                    <p><strong>Token Type:</strong> {tokenData.type}</p>
                    <p><strong>Address Hash:</strong> {tokenData.address_hash}</p>
                </div>
            ) : (
                <p>Loading token data...</p>
            )}
        </div>
    );
}

function FilmTokensList(): React.ReactElement {

    const { data, isPending, error } = useQuery<TokenInfo[]>({
        queryKey: ['filmtokens'],
        queryFn: () => fetch('/api/tokens').then(r => r.json()),
    })

    if (isPending) return <span>Loading...</span>
    if (error) return <span>Oops!</span>

    return (
        <div className="film-tokens-list">
            {data.map((tokenInfo, index) => (
                <FilmToken key={index} {...tokenInfo} />
            ))}
        </div>
    );
}

export { FilmToken, FilmTokensList, type TokenInfo };
