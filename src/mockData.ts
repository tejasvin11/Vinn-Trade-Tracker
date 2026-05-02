import { Trade, PortfolioStats } from './types';

export const MOCK_TRADES: Trade[] = [
  {
    id: '1',
    date: 'Oct 24, 2023',
    time: '14:32:05',
    asset: 'BTC',
    pair: 'BTC/USDT',
    type: 'LONG',
    entryPrice: 26450.00,
    exitPrice: 27820.50,
    lotSize: 0.50,
    fee: 12.40,
    profit: 685.25,
    status: 'CLOSED'
  },
  {
    id: '2',
    date: 'Oct 23, 2023',
    time: '09:15:22',
    asset: 'ETH',
    pair: 'ETH/USDT',
    type: 'SHORT',
    entryPrice: 1642.10,
    exitPrice: 1658.40,
    lotSize: 12.00,
    fee: 8.95,
    profit: -195.60,
    status: 'CLOSED'
  },
  {
    id: '3',
    date: 'Oct 21, 2023',
    time: '18:44:10',
    asset: 'SOL',
    pair: 'SOL/USDT',
    type: 'LONG',
    entryPrice: 24.15,
    exitPrice: 31.80,
    lotSize: 250.00,
    fee: 4.20,
    profit: 1912.50,
    status: 'CLOSED'
  },
  {
    id: '4',
    date: 'Oct 20, 2023',
    time: '11:20:55',
    asset: 'XRP',
    pair: 'XRP/USDT',
    type: 'LONG',
    entryPrice: 0.4820,
    exitPrice: 0.4855,
    lotSize: 5000.0,
    fee: 2.10,
    profit: 17.50,
    status: 'CLOSED'
  }
];

export const MOCK_STATS: PortfolioStats = {
  totalBalance: 42500.24,
  winRate: 68.4,
  avgProfit: 242.18,
  totalPnL: 12482.10,
  mtdPnL: 5842.10,
  mtdProfitChange: 12,
  totalTrades: 1248,
  riskScore: 0.24,
  avgHoldTime: '4.2 Days',
  sharpeRatio: 2.81
};

export const CHART_DATA = [
  { time: '00:00', value: 28000 },
  { time: '04:00', value: 26000 },
  { time: '08:00', value: 31000 },
  { time: '12:00', value: 20000 },
  { time: '16:00', value: 35000 },
  { time: '20:00', value: 42000 },
  { time: '23:59', value: 38240 },
];

export const MONTHLY_DATA = [
  { month: 'JAN', profit: 4200, loss: -1200 },
  { month: 'FEB', profit: 6800, loss: -2100 },
  { month: 'MAR', profit: 1200, loss: -1900 },
  { month: 'APR', profit: 9100, loss: -3400 },
  { month: 'MAY', profit: 5500, loss: -4100 },
  { month: 'JUN', profit: 800, loss: -1200 },
  { month: 'JUL', profit: 10400, loss: -1500 },
];
