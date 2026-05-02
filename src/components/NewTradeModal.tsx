import { X, Calendar, Search, LogIn, LogOut, PieChart, Info, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NewTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTradeModal({ isOpen, onClose }: NewTradeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#1E2329] border border-[#2B3139] rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="px-8 py-6 border-b border-[#2B3139] flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Add New Trade</h2>
                <p className="text-on-surface-variant text-xs mt-1 uppercase tracking-widest font-bold">Institutional Grade Execution</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-on-surface-variant hover:text-white hover:bg-[#2B3139] rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Date & Time</label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
                    <input 
                      className="w-full bg-[#15121b] border border-[#2B3139] focus:border-primary-container text-white pl-10 pr-4 py-3 rounded-xl font-mono transition-all outline-none" 
                      placeholder="2023-11-24 14:30" 
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Asset / Pair</label>
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
                    <input 
                      className="w-full bg-[#15121b] border border-[#2B3139] focus:border-primary-container text-white pl-10 pr-4 py-3 rounded-xl font-mono transition-all outline-none" 
                      placeholder="BTC/USDT" 
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Entry Price</label>
                  <div className="relative group">
                    <LogIn className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
                    <input 
                      className="w-full bg-[#15121b] border border-[#2B3139] focus:border-primary-container text-white pl-10 pr-4 py-3 rounded-xl font-mono transition-all outline-none" 
                      placeholder="42,150.00" 
                      type="number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Exit Price</label>
                  <div className="relative group">
                    <LogOut className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
                    <input 
                      className="w-full bg-[#15121b] border border-[#2B3139] focus:border-primary-container text-white pl-10 pr-4 py-3 rounded-xl font-mono transition-all outline-none" 
                      placeholder="42,900.50" 
                      type="number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Lot Size / Quantity</label>
                  <div className="relative group">
                    <PieChart className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
                    <input 
                      className="w-full bg-[#15121b] border border-[#2B3139] focus:border-primary-container text-white pl-10 pr-4 py-3 rounded-xl font-mono transition-all outline-none" 
                      placeholder="0.50" 
                      type="number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Transaction Fee</label>
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center font-bold text-[10px] text-on-surface-variant group-focus-within:text-primary-container">$</div>
                    <input 
                      className="w-full bg-[#15121b] border border-[#2B3139] focus:border-primary-container text-white pl-10 pr-12 py-3 rounded-xl font-mono transition-all outline-none" 
                      placeholder="12.50" 
                      type="number"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[10px] font-bold">USD</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2B3139] rounded-xl p-4 grid grid-cols-3 gap-4 border border-primary-container/20">
                <div className="text-center">
                  <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Gross Profit</p>
                  <p className="text-secondary font-bold text-lg font-mono">+$375.25</p>
                </div>
                <div className="text-center border-x border-[#1E2329]">
                  <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Net ROI</p>
                  <p className="text-secondary font-bold text-lg font-mono">+1.78%</p>
                </div>
                <div className="text-center">
                  <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Risk/Reward</p>
                  <p className="text-white font-bold text-lg font-mono">1:3.2</p>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={onClose}
                  className="w-full bg-primary-container hover:bg-primary-container/90 active:scale-[0.99] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-container/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Trade
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-on-surface-variant text-xs">
                  <Info className="w-3 h-3" />
                  <p>By submitting, this trade will be synced with your global portfolio analytics.</p>
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
