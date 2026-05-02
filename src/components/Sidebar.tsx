import { LayoutDashboard, TrendingUp, BarChart3, Settings, Plus, HelpCircle, LogOut, Wallet } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onNewTrade: () => void;
}

export default function Sidebar({ activeView, onViewChange, onNewTrade }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'trades', label: 'Trades', icon: TrendingUp },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-50 bg-[#1E2329] border-r border-[#2B3139] flex flex-col py-6">
      <div className="px-6 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-primary-container rounded-lg flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-black text-white tracking-tighter">TradeSync Pro</h1>
        </div>
        <div>
          <p className="text-primary-container font-medium text-[13px] uppercase tracking-widest">Portfolio</p>
          <p className="text-on-surface-variant text-[11px]">Institutional Grade</p>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center px-4 py-3 space-x-3 transition-all rounded-xl group",
                isActive 
                  ? "bg-[#2B3139] text-white border-l-2 border-primary-container" 
                  : "text-on-surface-variant hover:bg-[#2B3139] hover:text-white"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-primary-container" : "text-on-surface-variant")} />
              <span className="font-medium text-[13px]">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-3 mt-auto space-y-1">
        <button 
          onClick={onNewTrade}
          className="w-full bg-primary-container text-white rounded-xl py-3 font-bold text-sm mb-6 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Trade
        </button>
        
        <button className="w-full flex items-center px-4 py-3 space-x-3 text-on-surface-variant hover:text-white transition-colors rounded-xl">
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium text-[13px]">Support</span>
        </button>
        <button className="w-full flex items-center px-4 py-3 space-x-3 text-on-surface-variant hover:text-white transition-colors rounded-xl">
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-[13px]">Logout</span>
        </button>
      </div>
    </aside>
  );
}
