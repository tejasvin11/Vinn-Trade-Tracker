import { Search, Bell, Wallet as WalletIcon } from 'lucide-react';

interface TopBarProps {
  totalBalance: number;
}

export default function TopBar({ totalBalance }: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#1E2329] border-b border-[#2B3139] px-6 py-3 flex justify-between items-center shadow-none">
      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
          <input
            type="text"
            placeholder="Search markets..."
            className="bg-[#15121b] border-none text-sm rounded-lg pl-10 pr-4 py-1.5 w-64 focus:ring-1 focus:ring-primary-container text-on-surface outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Total Equity</span>
          <span className="text-white font-bold text-sm tracking-tight font-mono">
            ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        
        <div className="flex items-center gap-2 border-l border-[#2B3139] pl-6">
          <button className="p-2 text-on-surface-variant hover:bg-[#2B3139] hover:text-white rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-[#2B3139] hover:text-white rounded-lg transition-colors">
            <WalletIcon className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-xs ml-2">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
