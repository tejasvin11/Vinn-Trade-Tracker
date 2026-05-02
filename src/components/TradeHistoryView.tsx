import { Search, Filter, Calendar, Download, ChevronLeft, ChevronRight, Edit2, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import { Trade } from '../types';
import { cn } from '../lib/utils';

interface TradeHistoryProps {
  trades: Trade[];
}

export default function TradeHistory({ trades }: TradeHistoryProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Trade History</h1>
        <div className="flex items-center gap-2 text-on-surface-variant text-sm">
          <span>Portfolio</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary-container font-medium">Trades</span>
        </div>
      </div>

      <div className="bg-[#1E2329] border border-[#2B3139] rounded-xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-[#2B3139] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
              <input
                type="text"
                placeholder="Filter by asset or tag..."
                className="bg-[#15121b] border border-[#2B3139] rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface w-full md:w-72 focus:border-primary-container outline-none transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#2B3139] rounded-lg text-sm font-medium text-on-surface-variant hover:bg-[#2B3139] hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#15121b] border border-[#2B3139] rounded-lg text-sm font-medium text-on-surface hover:bg-[#2B3139] transition-colors">
              <Calendar className="w-4 h-4" />
              Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-primary-container text-primary-container rounded-lg text-sm font-bold hover:bg-primary-container/10 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#221e27] border-b border-[#2B3139]">
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Date / Time</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Asset / Pair</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Entry Price</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Exit Price</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Lot Size</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Fee</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Profit / Loss</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2B3139]">
              {trades.map((trade) => (
                <tr key={trade.id} className="hover:bg-[#2B3139]/50 transition-colors group relative">
                  <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-white font-semibold text-sm">{trade.date}</span>
                      <span className="text-on-surface-variant text-[11px]">{trade.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8247E5]/20 to-[#8247E5]/40 flex items-center justify-center font-bold text-[10px] text-white">
                        {trade.asset}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm tracking-tight">{trade.pair}</span>
                        <span className={cn("text-[11px] font-bold", trade.type === 'LONG' ? "text-secondary" : "text-error")}>
                          {trade.type}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-mono text-sm text-on-surface">${trade.entryPrice.toLocaleString()}</td>
                  <td className="px-6 py-5 text-right font-mono text-sm text-on-surface">${trade.exitPrice.toLocaleString()}</td>
                  <td className="px-6 py-5 text-right font-mono text-sm text-on-surface">{trade.lotSize.toLocaleString()} {trade.asset}</td>
                  <td className="px-6 py-5 text-right font-mono text-sm text-on-surface-variant">${trade.fee.toLocaleString()}</td>
                  <td className="px-6 py-5 text-right">
                    <span className={cn(
                      "px-3 py-1.5 rounded-full font-bold text-xs inline-flex items-center gap-1",
                      trade.profit > 0 ? "bg-secondary/10 text-secondary" : "bg-error/10 text-error"
                    )}>
                      {trade.profit > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {trade.profit > 0 ? '+' : ''}${Math.abs(trade.profit).toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-1 text-on-surface-variant hover:text-white transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-on-surface-variant hover:text-error transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-[#2B3139] flex items-center justify-between">
          <span className="text-sm text-on-surface-variant font-medium">Showing 1 to {trades.length} of 1,248 trades</span>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-[#2B3139] rounded-lg text-on-surface-variant hover:bg-[#2B3139] transition-colors disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-container text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#2B3139] transition-colors font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#2B3139] transition-colors font-medium">3</button>
              <span className="px-2 text-on-surface-variant">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#2B3139] transition-colors font-medium text-xs">312</button>
            </div>
            <button className="p-2 border border-[#2B3139] rounded-lg text-on-surface-variant hover:bg-[#2B3139] transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
