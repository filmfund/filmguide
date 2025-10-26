export type SubscribtionType = {
    id: number;
    amount: number;
    token: string;
    active: boolean;
    createdAt: Date;
    nextPayment: Date;
    txHash: string;
};
