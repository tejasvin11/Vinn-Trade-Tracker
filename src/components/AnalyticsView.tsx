import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as ReTooltip, CartesianGrid } from 'recharts';
import { Calendar, ChevronRight, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { MONTHLY_DATA } from '../mockData';
import { cn } from '../lib/utils';

export default function AnalyticsView() {
  const pieData = [
    { name: 'Profit', value: 68.4, color: '#3fe397' },
    { name: 'Loss', value: 31.6, color: '#ffb4ab' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & Performance</h1>
          <p className="text-on-surface-variant">Deep insights into your institutional trading strategies.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#1E2329] border border-[#2B3139] rounded-lg flex items-center p-1">
            <button className="px-4 py-1.5 text-xs font-bold text-primary-container bg-[#2B3139] rounded-md">Last 30 Days</button>
            <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant hover:text-white transition-colors">Last 90 Days</button>
            <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant hover:text-white transition-colors">All Time</button>
          </div>
          <button className="bg-[#1E2329] border border-[#2B3139] px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-[#2B3139] transition-colors">
            <Calendar className="w-4 h-4 text-on-surface-variant" />
            <span className="text-white">Custom Range</span>
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#1E2329] border border-[#2B3139] rounded-xl p-8 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="relative w-64 h-64 flex-shrink-0 animate-in spin-in-1 duration-1000">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Win Rate</span>
              <span className="text-white text-5xl font-black">68.4%</span>
            </div>
          </div>

          <div className="flex-1 space-y-6 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#15121b] p-4 rounded-xl border border-[#2B3139]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">Total Profit</span>
                </div>
                <div className="text-secondary font-bold text-2xl">+$12,482.90</div>
              </div>
              <div className="bg-[#15121b] p-4 rounded-xl border border-[#2B3139]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-error"></div>
                  <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">Total Loss</span>
                </div>
                <div className="text-error font-bold text-2xl">-$4,210.15</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant font-medium">Profit Factor</span>
                <span className="text-white font-bold">2.96</span>
              </div>
              <div className="w-full bg-[#2B3139] h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary-container h-full rounded-full" style={{ width: '74%' }}></div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant font-medium">Sharpe Ratio</span>
                <span className="text-white font-bold">1.82</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Performance Alpha</h3>
            <p className="text-on-surface-variant text-sm">Risk-adjusted returns relative to the benchmark SPY index over current period.</p>
          </div>
          
          <div className="h-32 flex items-end justify-between gap-1 mt-8">
            {[40, 60, 45, 80, 55, 90, 100].map((val, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-full rounded-t-sm transition-all duration-700",
                  i === 6 ? "bg-primary-container" : "bg-primary-container/20 group-hover:bg-primary-container/30"
                )}
                style={{ height: `${val}%` }}
              ></div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-[#2B3139]">
            <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Alpha Score</span>
            <span className="text-secondary font-bold text-2xl font-mono">+14.2%</span>
          </div>
        </div>
      </section>

      <section className="bg-[#1E2329] border border-[#2B3139] rounded-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h3 className="text-white font-bold text-xl">Monthly PnL Realization</h3>
            <span className="text-on-surface-variant text-sm">Realized gains and losses per fiscal month</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Profit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-error"></span>
              <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Loss</span>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MONTHLY_DATA} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2B3139" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#848E9C', fontSize: 10, fontWeight: 700 }}
              />
              <YAxis hide />
              <ReTooltip 
                contentStyle={{ backgroundColor: '#1E2329', border: '1px solid #2B3139', borderRadius: '8px' }}
                itemStyle={{ fontWeight: 'bold' }}
              />
              <Bar dataKey="profit" fill="#3fe397" radius={[2, 2, 0, 0]} />
              <Bar dataKey="loss" fill="#ffb4ab" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Crypto', icon: TrendingUp, return: 42.5, utilization: 65, color: 'text-primary-container', bg: 'bg-primary-container/10' },
          { label: 'Forex', icon: DollarSign, return: 18.2, utilization: 22, color: 'text-secondary', bg: 'bg-secondary/10' },
          { label: 'Stocks', icon: Activity, return: -2.4, utilization: 13, color: 'text-error', bg: 'bg-error/10' },
        ].map((asset, i) => {
          const Icon = asset.icon;
          return (
            <div key={i} className="bg-[#1E2329] border border-[#2B3139] rounded-xl overflow-hidden group hover:border-primary-container transition-all">
              <div className={cn("h-32 p-6 flex flex-col justify-between relative overflow-hidden", asset.bg)}>
                <Icon className="absolute -right-4 -bottom-4 w-32 h-32 opacity-5 scale-110 group-hover:scale-125 transition-transform" />
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1E2329] border border-[#2B3139] rounded-lg">
                    <Icon className={cn("w-5 h-5", asset.color)} />
                  </div>
                  <span className="font-bold text-white uppercase tracking-wider text-sm">{asset.label}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-on-surface-variant text-xs">Total Return</span>
                  <span className={cn("font-bold text-xl", asset.return > 0 ? "text-secondary" : "text-error")}>
                    {asset.return > 0 ? '+' : ''}{asset.return}%
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase">
                    <span>Utilization</span>
                    <span>{asset.utilization}%</span>
                  </div>
                  <div className="w-full bg-[#2B3139] h-1 rounded-full">
                    <div className={cn("h-full transition-all duration-1000", asset.color.replace('text-', 'bg-'))} style={{ width: `${asset.utilization}%` }}></div>
                  </div>
                </div>
                <div className="pt-4 flex justify-between gap-4 border-t border-[#2B3139]">
                  <div className="text-center flex-1">
                    <div className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Trades</div>
                    <div className="font-bold text-white">124</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Avg Win</div>
                    <div className="font-bold text-white">$412</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
