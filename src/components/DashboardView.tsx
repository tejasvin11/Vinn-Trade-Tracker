import { TrendingUp, Rocket, Timer, Landmark } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { PortfolioStats } from '../types';
import { CHART_DATA } from '../mockData';
import { cn } from '../lib/utils';

interface DashboardProps {
  stats: PortfolioStats;
}

export default function Dashboard({ stats }: DashboardProps) {
  const recentTrades = [
    { asset: 'BTC', pair: 'BTC / USDT', type: 'Buy', time: '2 mins ago', profit: 420.50, color: 'text-secondary', leverage: '10x' },
    { asset: 'ETH', pair: 'ETH / USDT', type: 'Sell', time: '15 mins ago', profit: -125.00, color: 'text-error', leverage: '5x' },
    { asset: 'SOL', pair: 'SOL / USDT', type: 'Buy', time: '1 hour ago', profit: 89.12, color: 'text-secondary', leverage: 'Spot' },
    { asset: 'DOT', pair: 'DOT / USDT', type: 'Buy', time: '3 hours ago', profit: 12.44, color: 'text-secondary', leverage: 'Spot' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp className="w-12 h-12 text-secondary" />
          </div>
          <p className="text-on-surface-variant text-[12px] font-bold uppercase tracking-wider mb-2">Total Profit / Loss</p>
          <h3 className="text-secondary font-bold text-3xl">
            +${stats.totalPnL.toLocaleString()}
          </h3>
          <div className="flex items-center mt-4 space-x-2">
            <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded font-bold">+18.4%</span>
            <span className="text-on-surface-variant text-[12px]">vs last month</span>
          </div>
        </div>

        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-6">
          <p className="text-on-surface-variant text-[12px] font-bold uppercase tracking-wider mb-2">Current Balance</p>
          <h3 className="text-white font-bold text-3xl">
            ${stats.totalBalance.toLocaleString()}
          </h3>
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full border border-[#1E2329] bg-orange-500 flex items-center justify-center text-[8px] font-bold">₿</div>
              <div className="w-5 h-5 rounded-full border border-[#1E2329] bg-blue-500 flex items-center justify-center text-[8px] font-bold">Ξ</div>
            </div>
            <span className="text-on-surface-variant text-[12px]">4 assets active</span>
          </div>
        </div>

        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-6">
          <p className="text-on-surface-variant text-[12px] font-bold uppercase tracking-wider mb-2">Win Rate (%)</p>
          <h3 className="text-white font-bold text-3xl">{stats.winRate}%</h3>
          <div className="w-full bg-[#15121b] h-1.5 rounded-full mt-6 overflow-hidden">
            <div className="bg-primary-container h-full rounded-full transition-all duration-1000" style={{ width: `${stats.winRate}%` }}></div>
          </div>
        </div>

        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-6">
          <p className="text-on-surface-variant text-[12px] font-bold uppercase tracking-wider mb-2">Total Trades</p>
          <h3 className="text-white font-bold text-3xl">{stats.totalTrades.toLocaleString()}</h3>
          <div className="flex items-center mt-4 space-x-2">
            <span className="text-on-surface-variant text-[12px]">Avg. 4.2 trades / day</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-[#1E2329] border border-[#2B3139] rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-white font-bold text-xl">Profit/Loss Over Time</h2>
              <p className="text-on-surface-variant text-sm">Performance tracking across current fiscal period</p>
            </div>
            <div className="flex bg-[#15121b] rounded-lg p-1">
              <button className="px-3 py-1 text-xs font-bold text-white bg-[#2B3139] rounded-md">1D</button>
              <button className="px-3 py-1 text-xs font-bold text-on-surface-variant hover:text-white transition-colors">1W</button>
              <button className="px-3 py-1 text-xs font-bold text-on-surface-variant hover:text-white transition-colors">1M</button>
              <button className="px-3 py-1 text-xs font-bold text-on-surface-variant hover:text-white transition-colors">ALL</button>
            </div>
          </div>
          
          <div className="flex-1 h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8247E5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8247E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2B3139" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#848E9C', fontSize: 10 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E2329', border: '1px solid #2B3139', borderRadius: '8px' }}
                  itemStyle={{ color: '#8247E5', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8247E5" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-[#1E2329] border border-[#2B3139] rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-bold text-xl">Recent Trades</h2>
            <button className="text-primary-container text-xs font-bold hover:underline transition-all">View All</button>
          </div>
          
          <div className="flex-1 space-y-4">
            {recentTrades.map((trade, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg bg-[#15121b] border-l-2 border-primary-container group hover:bg-[#2B3139] transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded bg-[#2B3139] flex items-center justify-center text-white font-bold text-xs">
                    {trade.asset}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{trade.pair}</p>
                    <p className="text-[10px] text-on-surface-variant">{trade.type} • {trade.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn("text-sm font-bold", trade.profit > 0 ? "text-secondary" : "text-error")}>
                    {trade.profit > 0 ? '+' : ''}${Math.abs(trade.profit).toLocaleString()}
                  </p>
                  <p className="text-[10px] text-on-surface-variant">Leverage {trade.leverage}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 relative h-24 rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1611974714151-fed94fa1031c?q=80&w=1470&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              alt="Background context"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2329] to-transparent opacity-60"></div>
            <p className="absolute bottom-2 left-2 text-white text-[10px] font-bold uppercase tracking-widest">Global Volatility Index: Low</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-6 flex items-center space-x-6">
          <div className="p-3 bg-primary-container/10 rounded-full">
            <Landmark className="w-6 h-6 text-primary-container" />
          </div>
          <div>
            <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Risk Score</p>
            <div className="flex items-center space-x-2">
              <h4 className="text-white font-bold text-lg">Low ({stats.riskScore})</h4>
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            </div>
          </div>
        </div>

        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-6 flex items-center space-x-6">
          <div className="p-3 bg-primary-container/10 rounded-full">
            <Timer className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Avg. Hold Time</p>
            <h4 className="text-white font-bold text-lg">{stats.avgHoldTime}</h4>
          </div>
        </div>

        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-6 flex items-center space-x-6">
          <div className="p-3 bg-secondary/10 rounded-full">
            <Rocket className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Sharpe Ratio</p>
            <h4 className="text-white font-bold text-lg">{stats.sharpeRatio}</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
