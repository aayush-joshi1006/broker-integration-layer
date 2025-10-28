export interface Trade {
  id?: string; // optional unique id
  userId: string;
  broker: string;
  symbol: string;
  side: "buy" | "sell";
  quantity: number;
  price: number; // executed price (use one field for simplicity)
  fees?: number;
  timestamp: string; // ISO string
  raw?: any; // original payload (for debugging)
}
