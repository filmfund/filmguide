

export function withRateLimit(handler: (req: Request, user: any) => Promise<Response>) {
    const RATE_LIMIT = 100;
    const WINDOW_SIZE_IN_HOURS = 1;
    const WINDOW_SIZE_IN_MILLISECONDS = WINDOW_SIZE_IN_HOURS * 60 * 60 * 1000;
    
    const ipRequestLogs: Map<string, number[]> = new Map();
    return async (req: Request, user: any) => {
        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        const currentTime = Date.now();
        
        if (!ipRequestLogs.has(ip)) {
            ipRequestLogs.set(ip, []);
        }
        
        const requestTimes = ipRequestLogs.get(ip)!;
        
        // Remove timestamps older than the window size
        while (requestTimes.length > 0 && requestTimes[0] <= currentTime - WINDOW_SIZE_IN_MILLISECONDS) {
            requestTimes.shift();
        }
        
        if (requestTimes.length >= RATE_LIMIT) {
            return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
                status: 429,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        
        // Log the current request time
        requestTimes.push(currentTime);
        
        return handler(req, user);
    };
}
