import { SubscribtionType } from '@/app/subscription/types';
import { useState, useCallback } from 'react';
import { useAccount, useSimulateContract, useBalance, useWriteContract } from 'wagmi';

// Simple contract configuration for Sepolia
interface SubscriptionConfig {
    contractAddress: string;
    abi: any[];
    onSuccess?: (data: any) => void;
}

// Contract ABI - simplified for single tier subscription
// Complete ABI matching the deployed contract
const SUBSCRIPTION_ABI = [
    {
        "inputs": [{ "name": "_pyusdToken", "type": "address" }],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "createSubscription",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "name": "_subscriptionId", "type": "uint256" }],
        "name": "cancelSubscription",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "name": "_subscriptionId", "type": "uint256" }],
        "name": "processPayment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "name": "_subscriptionId", "type": "uint256" }],
        "name": "getSubscription",
        "outputs": [
            {
                "components": [
                    { "name": "subscriber", "type": "address" },
                    { "name": "nextPayment", "type": "uint32" },
                    { "name": "createdAt", "type": "uint32" },
                    { "name": "active", "type": "bool" }
                ],
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "name": "_subscriber", "type": "address" }],
        "name": "getSubscriberSubscriptions",
        "outputs": [{ "name": "", "type": "uint256[]" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SUBSCRIPTION_PRICE",
        "outputs": [{ "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "name": "", "type": "uint256" }],
        "name": "subscriptions",
        "outputs": [
            { "name": "subscriber", "type": "address" },
            { "name": "nextPayment", "type": "uint32" },
            { "name": "createdAt", "type": "uint32" },
            { "name": "active", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextSubscriptionId",
        "outputs": [{ "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSubscribers",
        "outputs": [{ "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pyusdToken",
        "outputs": [{ "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawPYUSD",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SubscriptionNotFound",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SubscriptionNotActive",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PaymentNotDue",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidSubscription",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InsufficientAllowance",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "name": "subscriptionId", "type": "uint256" },
            { "indexed": true, "name": "subscriber", "type": "address" }
        ],
        "name": "SubscriptionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "name": "subscriptionId", "type": "uint256" },
            { "indexed": true, "name": "subscriber", "type": "address" }
        ],
        "name": "PaymentProcessed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "name": "subscriptionId", "type": "uint256" },
            { "indexed": true, "name": "subscriber", "type": "address" }
        ],
        "name": "SubscriptionCancelled",
        "type": "event"
    }
];

// ERC20 ABI for token approval
const ERC20_ABI = [
    {
        "inputs": [
            { "name": "spender", "type": "address" },
            { "name": "amount", "type": "uint256" }
        ],
        "name": "approve",
        "outputs": [{ "name": "", "type": "bool" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "name": "owner", "type": "address" },
            { "name": "spender", "type": "address" }
        ],
        "name": "allowance",
        "outputs": [{ "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }
];

// PYUSD token address and subscription price
const PYUSD_ADDRESS = '0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9';
const SUBSCRIPTION_PRICE = '10000000000000000000'; // 10 PYUSD (18 decimals) - correct for PYUSD token


export const useSubscription = (config: SubscriptionConfig) => {
    const { address, isConnected } = useAccount();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Prepare contract write for creating subscription
    const result = useSimulateContract({
        address: config.contractAddress as `0x${string}`,
        abi: SUBSCRIPTION_ABI,
        functionName: 'createSubscription',
        query: {
            enabled: isConnected && !!address // Enable when wallet is connected
        }
    });
    

    // Debug contract preparation
    console.log('useSimulateContract result:', result);

    // const writeContractResult = useWriteContract({
    //     //...result.config
    //     //...createConfig,
    //     onSuccess: (data) => {
    //         console.log('Subscription created successfully:', data);
    //         console.log('Transaction hash:', data.hash);
    //         setIsLoading(false);

    //         // Trigger success callback if provided
    //         if (config.onSuccess) {
    //             config.onSuccess(data);
    //         }
    //     },
    //     onError: (error) => {
    //         console.error('Subscription creation failed:', error);
    //         setError(error.message);
    //         setIsLoading(false);
    //     }
    // });
    


    // Prepare contract write for token approval
    const {
        data: approvalData,
        isFetching: approvalIsFetching,
        isError: approvalIsError
    } = useSimulateContract({
        address: PYUSD_ADDRESS as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [config.contractAddress as `0x${string}`, BigInt(SUBSCRIPTION_PRICE)],
        query: {
            enabled: isConnected && !!address
        }
    });
    const { writeContractAsync: approvePYUSD, isPending: approvePYUSDIsPending } = useWriteContract();

    // const { write: approveToken } = useContractWrite({
    //     ...approveConfig,
    //     onSuccess: (data) => {
    //         console.log('Token approval successful:', data);
    //         // Wait longer for approval to be processed on blockchain
    //         setTimeout(() => {
    //             console.log('Attempting subscription after approval...');
    //             if (createSubscription) {
    //                 createSubscription();
    //             } else {
    //                 console.error('createSubscription is still null after approval');
    //                 setError('Subscription function not available after approval');
    //                 setIsLoading(false);
    //             }
    //         }, 3000); // Wait 3 seconds for approval to be processed
    //     },
    //     onError: (error) => {
    //         console.error('Token approval failed:', error);
    //         setError(error.message);
    //         setIsLoading(false);
    //     }
    // });

    // // Debug approval preparation
    // if (approveError) {
    //     console.error('Approval preparation error:', approveError);
    // }

    // Prepare contract write for canceling subscription
    const cancelCall = useSimulateContract({
        address: config.contractAddress as `0x${string}`,
        abi: SUBSCRIPTION_ABI,
        functionName: 'cancelSubscription',
        args: [0], // Placeholder subscription ID
        query: {
            enabled: false // Disabled for now, will be enabled when we have subscription ID
        }
    });

    // const { write: cancelSubscription } = useContractWrite({
    //     ...cancelConfig,
    //     onSuccess: (data) => {
    //         console.log('Subscription canceled:', data);
    //         setIsLoading(false);
    //     },
    //     onError: (error) => {
    //         console.error('Subscription cancellation failed:', error);
    //         setError(error.message);
    //         setIsLoading(false);
    //     }
    // });

    // Create subscription - two-step process: approve then subscribe
    const createSubscriptionTx = useCallback(async () => {
        if (!isConnected || !address) {
            throw new Error('Wallet not connected');
        }

        setIsLoading(true);
        setError(null);

        try {
            // Step 1: Approve token spending
            if (approvalData?.result) {
                console.log('Starting token approval process...');
                //approveToken();
                await approvePYUSD(approvalData?.request);
            } else {
                console.error('approveToken is null/undefined');
                console.error('approveConfig:', approvalData);
                throw new Error('Token approval not available - check console for details');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
            setError(errorMessage);
            setIsLoading(false);
            throw err;
        }
    }, [isConnected, address, approvalData, approvePYUSD /* approveToken, approveConfig, approveError*/]);

    // // Cancel subscription
    // const cancelSubscriptionTx = useCallback(async () => {
    //     if (!isConnected || !address) {
    //         throw new Error('Wallet not connected');
    //     }

    //     setIsLoading(true);
    //     setError(null);

    //     try {
    //         if (cancelSubscription) {
    //             cancelSubscription();
    //         } else {
    //             throw new Error('Contract write not available');
    //         }
    //     } catch (err) {
    //         const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    //         setError(errorMessage);
    //         setIsLoading(false);
    //         throw err;
    //     }
    // }, [isConnected, address, cancelSubscription]);

    return {
        // State
        isLoading,
        error,
        isConnected,
        address,

        // Actions
        createSubscription: createSubscriptionTx,
        //cancelSubscription: cancelSubscriptionTx,

        // Error handling
        clearError: () => setError(null)
    };
};

// Hook for managing subscription state
export const useSubscriptionState = () => {
    const [subscriptions, setSubscriptions] = useState<SubscribtionType[]>([]);
    const [activeSubscription, setActiveSubscription] = useState<SubscribtionType | null>(null);

    const addSubscription = useCallback((subscription: any) => {
        setSubscriptions(prev => [...prev, subscription]);
        setActiveSubscription(subscription);
    }, []);

    const removeSubscription = useCallback((subscriptionId: number) => {
        setSubscriptions(prev => prev.filter(sub => sub.id !== subscriptionId));
        if (activeSubscription?.id === subscriptionId) {
            setActiveSubscription(null);
        }
    }, [activeSubscription]);

    return {
        subscriptions,
        activeSubscription,
        addSubscription,
        removeSubscription
    };
};

// Hook for community features
export const useCommunityFeatures = () => {
    const [canWriteReviews, setCanWriteReviews] = useState(false);
    const [canAccessDiscussions, setCanAccessDiscussions] = useState(false);
    const [festivalAccess, setFestivalAccess] = useState<string[]>([]);

    const updateFeatures = useCallback((hasActiveSubscription: boolean) => {
        if (hasActiveSubscription) {
            setCanWriteReviews(true);
            setCanAccessDiscussions(true);
            setFestivalAccess(['Bitcoin Film Festival', 'MetaCannes Festival']);
        } else {
            setCanWriteReviews(false);
            setCanAccessDiscussions(false);
            setFestivalAccess([]);
        }
    }, []);

    return {
        canWriteReviews,
        canAccessDiscussions,
        festivalAccess,
        updateFeatures
    };
};

// Hook for getting real wallet balance
export const useWalletBalance = (tokenAddress?: string) => {
    const { address, isConnected } = useAccount();

    const { data: balanceData, isError } = useBalance({
        address: address,
        token: tokenAddress as `0x${string}`,
        query: {
            enabled: isConnected && !!address && !!tokenAddress,
        },
        
        //FIXME: get this working in Wagmi v2.*
        // watch: true, // Keep updated
    });

    return {
        balance: isError ? '0.00' : (balanceData?.formatted || '0.00'),
        symbol: isError ? 'PYUSD' : (balanceData?.symbol || 'PYUSD'),
        isLoading: false,
        error: null
    };
};