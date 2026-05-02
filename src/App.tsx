/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardView from './components/DashboardView';
import TradeHistoryView from './components/TradeHistoryView';
import AnalyticsView from './components/AnalyticsView';
import NewTradeModal from './components/NewTradeModal';
import { MOCK_TRADES, MOCK_STATS } from './mockData';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView stats={MOCK_STATS} />;
      case 'trades':
        return <TradeHistoryView trades={MOCK_TRADES} />;
      case 'analytics':
        return <AnalyticsView />;
      default:
        return <DashboardView stats={MOCK_STATS} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface-dim flex">
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView} 
        onNewTrade={() => setIsModalOpen(true)}
      />
      
      <div className="flex-1 lg:ml-64 flex flex-col">
        <TopBar totalBalance={MOCK_STATS.totalBalance} />
        
        <main className="p-8 max-w-7xl mx-auto w-full">
          {renderView()}
        </main>
      </div>

      <NewTradeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* Mobile Nav Placeholder */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1E2329] border-t border-[#2B3139] flex justify-around items-center py-3 z-50">
        <button 
          onClick={() => setActiveView('dashboard')}
          className={`flex flex-col items-center gap-1 ${activeView === 'dashboard' ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px]">Home</span>
        </button>
        <button 
          onClick={() => setActiveView('trades')}
          className={`flex flex-col items-center gap-1 ${activeView === 'trades' ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px]">Trades</span>
        </button>
        <div 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-container p-3 rounded-full -mt-8 shadow-lg active:scale-95 transition-transform"
        >
          <span className="text-white">+</span>
        </div>
        <button 
          onClick={() => setActiveView('analytics')}
          className={`flex flex-col items-center gap-1 ${activeView === 'analytics' ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px]">Stats</span>
        </button>
        <button 
          onClick={() => setActiveView('settings')}
          className={`flex flex-col items-center gap-1 ${activeView === 'settings' ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <span className="text-[10px]">Settings</span>
        </button>
      </nav>
    </div>
  );
}
