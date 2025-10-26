export function agentChatHandler(
    parsedBody: { user_id: string; text: string },
    user: any
): Promise<{ reply: string }> {
    // Placeholder implementation of the agent chat handler
    return new Promise((resolve) => {
        // setTimeout(() => {
        //     resolve({ reply: `Echo: ${parsedBody.text}` });
        // }, 100); // Simulate some processing delay
        fetch('https://backend-agent.app.filmfundeth.com/chat', {
            method: 'POST',
            body: JSON.stringify({
                user_id: parsedBody.user_id,
                text: parsedBody.text,
                security_key: process.env.AGENT_SECURITY_KEY || '',
            })
        }).then(res => res.json())
        .then(data => {
            resolve({ reply: data.reply });
        });
    });
}
