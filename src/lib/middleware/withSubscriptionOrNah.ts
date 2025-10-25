// This middleware is a place holder for when the real subscription logic is implemented.

// Middleware function that will append subscription data to the request in case of valid wallet token otherwise append that it's a guest user
export function withSubscriptionOrNah(handler: (req: Request, user: any) => Promise<Response>) {
    return async (req: Request) => {
        const walletToken = req.headers.get('x-wallet-token');
        const signature = req.headers.get('x-wallet-signature');
        let user : { isSubscribed: boolean, walletAddress?: string} = { isSubscribed: false };

        if (walletToken && walletToken === 'valid-token') {
            user = { isSubscribed: true, walletAddress: '0x1234...abcd' };
        }
        
        return handler(req, user);
    }
};
