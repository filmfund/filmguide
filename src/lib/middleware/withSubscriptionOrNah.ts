// This middleware is a place holder for when the real subscription logic is implemented.

import { User } from "@/types/global";

// Middleware function that will append subscription data to the request in case of valid wallet token otherwise append that it's a guest user
export function withSubscriptionOrNah(handler: (req: Request, user: User) => Promise<Response>) {
    return async (req: Request) => {
        const walletToken = req.headers.get('x-wallet-token');
        const signature = req.headers.get('x-wallet-signature');
        let user : User = { isSubscribed: false };

        if (walletToken && walletToken === 'valid-token') {
            user = { isSubscribed: true, walletAddress: '0x1234...abcd' };
        }
        
        return handler(req, user);
    }
};
