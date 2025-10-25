"use client";
import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useWalletBalance } from '../hooks/useSubscription';

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubscribe: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
    isOpen,
    onClose,
    onSubscribe
}) => {
    const { address, isConnected } = useAccount();
    const [isProcessing, setIsProcessing] = useState(false);

    // Get real wallet balance for PYUSD
    const { balance: pyusdBalance, symbol: pyusdSymbol } = useWalletBalance('0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9');

    const handlePayment = async () => {
        setIsProcessing(true);
        try {
            await onSubscribe();
            onClose();
        } catch (error) {
            console.error('Payment failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Pay GUIDE2FILM3</h2>
                        <p className="text-gray-600">$10.00</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Wallet/Network Selection */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">MetaMask</div>
                                    <div className="text-sm text-gray-600">{address?.slice(0, 6)}...{address?.slice(-4)}</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-900">Sepolia</span>
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Crypto Selection */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">P</span>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">PYUSD</div>
                                    <div className="text-sm text-gray-600">PayPal USD</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-600">Balance</div>
                                <div className="font-medium text-gray-900">{pyusdBalance} {pyusdSymbol}</div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Button */}
                    <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${isProcessing
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gray-900 hover:bg-gray-800'
                            }`}
                    >
                        {isProcessing ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Processing...
                            </div>
                        ) : (
                            'Pay 10.00 PYUSD'
                        )}
                    </button>

                    {/* Terms */}
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        By subscribing, you allow GUIDE2FILM3 to charge you for this payment and future payments according to their terms until you cancel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionModal;