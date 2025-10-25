'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useSubscription, useSubscriptionState } from '@/hooks/useSubscription';

const CONTRACT_ADDRESS = '0xe90700267De4BAbCa1F03e4C60e560988320C169';

export default function SubscriptionPayment() {
    const { address, isConnected } = useAccount();
    const [isProcessing, setIsProcessing] = useState(false);

    const {
        isLoading,
        error,
        createSubscription,
        clearError
    } = useSubscription({
        contractAddress: CONTRACT_ADDRESS,
        abi: [],
        onSuccess: (data) => {
            console.log('Subscription successful!', data);
            setIsProcessing(false);
            // Redirect to success page or show success message
            window.location.href = '/dashboard';
        }
    });

    const handleSubscribe = async () => {
        if (!isConnected) {
            alert('Please connect your wallet first');
            return;
        }

        setIsProcessing(true);
        try {
            await createSubscription();
        } catch (err) {
            console.error('Subscription failed:', err);
            setIsProcessing(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleSubscribe}
                disabled={isLoading || isProcessing || !isConnected}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${isLoading || isProcessing || !isConnected
                        ? 'bg-[#666666] text-[#999999] cursor-not-allowed'
                        : 'bg-[#E71111] text-white hover:bg-[#A60E0E]'
                    }`}
            >
                {isLoading || isProcessing ? 'Processing...' : 'Subscribe with PYUSD - $10/month'}
            </button>

            {error && (
                <div className="mt-4 p-3 bg-[#E71111] bg-opacity-10 border border-[#E71111] rounded text-[#E71111] text-sm">
                    {error}
                    <button onClick={clearError} className="ml-2 font-bold">×</button>
                </div>
            )}

            {!isConnected && (
                <p className="text-[#999999] text-xs mt-2 text-center">
                    Connect your wallet to subscribe
                </p>
            )}
        </div>
    );
}