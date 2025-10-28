import { type BrokerAdapter } from "./BrokerAdapter.js";

export type BrokerName = "zerodha" | "alpaca";

export interface AdapterRegistry {
  [key: string]: BrokerAdapter;
}
