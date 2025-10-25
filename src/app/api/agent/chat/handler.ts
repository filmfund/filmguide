export function agentChatHandler(
    parsedBody: { user_id: string; text: string } | { message: string }
): Promise<{ reply: string }> {
    // Placeholder implementation of the agent chat handler
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ reply: `Echo: ${parsedBody.message}` });
        }, 100); // Simulate some processing delay
    });
}
