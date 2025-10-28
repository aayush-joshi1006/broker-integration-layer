export interface BrokerAdapter {
  fetchTrades(token: string): Promise<any[]>; // raw broker payloads
  refreshToken(oldToken: string): Promise<{ token: string; expiresIn: number }>;
}
