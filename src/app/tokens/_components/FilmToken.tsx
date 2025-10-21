'use client';
import React from 'react';

type TokenInfo = {
    address: string;
    chainId: number;
    movieName: string;
    tokenCollectionName: string;
    tokenSymbol: string;
    tokenType: string;
    openSeaUrl?: string;
    director: string;
}

// Read tokens from filmTokens.json in this folder:
function loadFilmTokens() : TokenInfo[] {
    const filmTokens: TokenInfo[] = require('../filmTokens.json');
    return filmTokens;
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

function FetchTokenInfo(address: string, chainId: number) : Promise<BlockscoutTokenResponse | null> {
    const apiUrl = `https://eth.blockscout.com/api/v2/tokens/${address}`;

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
    // https://docs.blockscout.com/api-reference/get-token-info
    // Get Token info:
    // https://eth.blockscout.com/api/v2/tokens/{address_hash}
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
    const filmTokens = loadFilmTokens();
    return (
        <div className="film-tokens-list">
            {filmTokens.map((tokenInfo, index) => (
                <FilmToken key={index} {...tokenInfo} />
            ))}
        </div>
    );
}

export { FilmToken, loadFilmTokens, FilmTokensList, type TokenInfo };