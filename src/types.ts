export type AssetType = 'BTC' | 'ETH' | 'SOL' | 'XRP' | 'DOT' | 'LINK' | 'ADA';

export interface Trade {
  id: string;
  date: string;
  time: string;
  asset: AssetType;
  pair: string;
  type: 'LONG' | 'SHORT';
  entryPrice: number;
  exitPrice: number;
  lotSize: number;
  fee: number;
  profit: number;
  status: 'CLOSED' | 'OPEN';
}

export interface PortfolioStats {
  totalBalance: number;
  winRate: number;
  avgProfit: number;
  totalPnL: number;
  mtdPnL: number;
  mtdProfitChange: number;
  totalTrades: number;
  riskScore: number;
  avgHoldTime: string;
  sharpeRatio: number;
}
