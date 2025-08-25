export function getAgentSuggestion(ticket) {
  return {
    suggestion: `Reply to ticket: ${ticket.subject}`,
    confidence: 0.9
  };
}
