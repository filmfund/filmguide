/**
 * Global ambient types for the app
 * Place project-wide declarations and module augmentations here.
 *
 * Notes:
 * - Keep this file free of top-level `export`/`import` to remain an ambient (global) declaration file.
 * - Ensure `tsconfig.json` includes this path so the compiler picks it up.
 */

import { string } from 'zod';

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_CONTRACT_ADDRESS: string;
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: string;
    NEXT_PUBLIC_CHAIN_ID: string;
    NEXT_PUBLIC_SEPOLIA_RPC_URL: string;
    AGENT_SECURITY_KEY: string;
  }
}

// Common user shape used across the app (adjust as needed)
interface User {
  isSubscribed: boolean;
  walletAddress?: string;
}

// Augment Next.js API request with a `user` property for middleware/auth
declare global {
  interface MyNextApiRequest extends import('next').NextApiRequest {
    user?: User;
  }
}

// Express-style augmentation (useful if you use express-like handlers)
declare namespace Express {
  interface Request {
    user?: User;
  }
}

// Static asset module declarations (useful for importing images/SVGs in TS)
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.module.css';
declare module '*.module.scss';

// Keep file purely ambient (no top-level export)

/* Usage examples:

// In an API route
export default function handler(req: MyNextApiRequest, res: NextApiResponse) {
  // req.user is typed
}

// Access env
const base = process.env.NEXT_PUBLIC_API_BASE;
*/
