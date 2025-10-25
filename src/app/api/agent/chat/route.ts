// Submit request to agent chat endpoint
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { agentChatHandler } from './handler';
import { withSubscriptionOrNah } from '@/lib/middleware/withSubscriptionOrNah';
import { withRateLimit } from '@/lib/middleware/withRateLimit';

// Define the schema for request validation
const ChatRequestSchema = z.object({
  user_id: z.uuid(),
  text: z.string().min(1),
  security_key: z.string().min(1),
});

const UserChatRequestSchema = z.object({
  message: z.string().min(1),
})

// POST /api/agent/chat
export const POST = withSubscriptionOrNah(
  withRateLimit(async (req, user) => {
    try {
      // Parse and validate the request body
      const body = await req.json();
      const parsedBody = UserChatRequestSchema.parse(body);
      
      // Call the agent chat handler
      const response = await agentChatHandler(parsedBody, user);
        
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Invalid request', details: error.issues },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
    })
);
