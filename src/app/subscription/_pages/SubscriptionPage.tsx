"use client";

import React, { useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useSubscription, useSubscriptionState, useWalletBalance } from '../../../hooks/useSubscription';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { SubscriptionType } from '../types';

const SubscriptionPage: React.FC = () => {
    const { address, isConnected, chain } = useAccount();
    const { disconnect } = useDisconnect();
    const [showCheckout, setShowCheckout] = useState(false);
    const [subscriptionComplete, setSubscriptionComplete] = useState(false);
    const { openConnectModal } = useConnectModal();

    // Debug current chain
    console.log('Current chain:', chain);
    console.log('Is connected:', isConnected);
    console.log('Address:', address);

    // Custom hooks
    const {
        isLoading,
        error,
        createSubscription,
        clearError
    } = useSubscription({
        contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0xe90700267De4BAbCa1F03e4C60e560988320C169',
        abi: [],
        onSuccess: (data) => {
            console.log('Payment result:', data);

            // Add to local state (in real app, this would come from contract events)
            const newSubscription: SubscriptionType = {
                id: Date.now(), // In real app, this would be the contract subscription ID
                amount: 8, // $8 (corrected amount)
                token: 'PYUSD',
                active: true,
                createdAt: new Date(),
                nextPayment: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
                txHash: data.hash // Store transaction hash
            };

            addSubscription(newSubscription);
            setShowCheckout(false);
            setSubscriptionComplete(true);
        }
    });

    const {
        addSubscription,
        activeSubscription
    } = useSubscriptionState();

    // Get real wallet balance for PYUSD
    const { balance: pyusdBalance, symbol: pyusdSymbol } = useWalletBalance('0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9');

    const handleConnectWallet = () => {
        openConnectModal?.();
    };

    const handleSubscribe = () => {
        setShowCheckout(true);
    };

    const handlePayment = async () => {
        try {
            // This will trigger the approval flow first, then subscription
            await createSubscription();
        } catch (error) {
            console.error('Subscription failed:', error);
        }
    };

    // const handleCancelSubscription = async (subscriptionId: number) => {
    //     try {
    //         removeSubscription(subscriptionId);
    //     } catch (error) {
    //         console.error('Cancellation failed:', error);
    //     }
    // };

    // Confirmation Screen
    if (subscriptionComplete) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you for subscribing to GUIDE2FILM3!</h2>
                    <p className="text-gray-600 mb-4">Your subscription is now active. You can access all premium features.</p>
                    <div className="mb-6 p-4 bg-gray-100 rounded-lg space-y-3">
                        {activeSubscription?.id && (
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Subscription ID:</p>
                                <p className="text-lg font-semibold text-gray-900">#{activeSubscription.id}</p>
                            </div>
                        )}
                        {activeSubscription?.txHash && (
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Transaction Hash:</p>
                                <a
                                    href={`https://eth-sepolia.blockscout.com/tx/${activeSubscription.txHash}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 break-all text-sm font-mono"
                                >
                                    {activeSubscription.txHash}
                                </a>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            setSubscriptionComplete(false);
                            setShowCheckout(false);
                        }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Continue to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    // Checkout Page (Two-column layout like Stripe)
    if (showCheckout) {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">F2G</span>
                                </div>
                                <h1 className="text-xl font-bold text-gray-900">GUIDE2FILM3</h1>
                            </div>
                            <button
                                onClick={() => setShowCheckout(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Subscription Details */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                <h2 className="text-2xl font-bold text-gray-900">Subscribe to GUIDE2FILM3</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Filmmaker Subscription</div>
                                            <div className="text-sm text-gray-600">Billed monthly</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-gray-900">$10.00</div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="text-gray-900">$10.00</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Tax</span>
                                        <span className="text-gray-900">$0.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-2">
                                        <span className="text-gray-900">Total due today</span>
                                        <span className="text-gray-900">$10.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Payment Form */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment</h3>

                            {/* Wallet Connection Status */}
                            <div className="mb-6">
                                {isConnected ? (
                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-medium text-green-900">Wallet Connected</div>
                                                <div className="text-sm text-green-700">{address?.slice(0, 6)}...{address?.slice(-4)}</div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => disconnect()}
                                            className="text-sm text-green-700 hover:text-green-800"
                                        >
                                            Disconnect
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="text-gray-500 mb-4">Please connect your wallet first</div>
                                        <button
                                            onClick={handleConnectWallet}
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            Connect Wallet
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Payment Method */}
                            {isConnected && (
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Payment method</label>
                                    <div className="space-y-3">
                                        <div className="flex items-center p-4 border-2 border-blue-200 bg-blue-50 rounded-lg">
                                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                                <span className="text-white font-bold text-sm">P</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">PYUSD</div>
                                                <div className="text-sm text-gray-600">PayPal USD on Sepolia</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-gray-600">Balance</div>
                                                <div className="font-medium text-gray-900">{pyusdBalance} {pyusdSymbol}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Subscribe Button */}
                            {isConnected && (
                                <button
                                    onClick={() => {
                                        // Handle payment directly
                                        handlePayment();
                                    }}
                                    disabled={isLoading}
                                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${isLoading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                        }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Processing...
                                        </div>
                                    ) : (
                                        'Subscribe for $10.00'
                                    )}
                                </button>
                            )}

                            {/* Terms */}
                            <p className="text-xs text-gray-500 mt-4 text-center">
                                By subscribing, you authorize GUIDE2FILM3 to charge you according to the terms until you cancel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Main Landing Page
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="max-w-md w-full text-center">
                {/* Logo */}
                <div className="mb-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">F2G</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">GUIDE2FILM3</h1>
                    <p className="text-gray-600">Join the future of filmmaking</p>
                </div>

                {/* Connect Wallet Button */}
                {!isConnected ? (
                    <div className="space-y-4">
                        <button
                            onClick={handleConnectWallet}
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Connect Wallet
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="text-green-600 font-medium">
                            ✓ Wallet Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                        </div>
                        <div className="text-sm text-gray-600">
                            Network: {chain?.name || 'Unknown'} (ID: {chain?.id || 'Unknown'})
                        </div>
                        {chain?.id !== 11155111 && (
                            <div className="text-red-600 text-sm">
                                ⚠️ Wrong network! Please switch to Sepolia Testnet
                            </div>
                        )}
                        <button
                            onClick={handleSubscribe}
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Subscribe for $10/month
                        </button>
                    </div>
                )}

                {/* Error Display */}
                {error && (
                    <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span className="text-red-700">{error}</span>
                            <button onClick={clearError} className="ml-2 text-red-500 hover:text-red-700">
                                ×
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubscriptionPage;