'use client';

import React from 'react';
import clsx from 'clsx';

export type TabId = 'overview' | 'code' | 'accessibility' | 'use-cases';

interface Tab {
  id: TabId;
  label: string;
  icon?: string;
}

interface ComponentTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function ComponentTabs({ activeTab, onTabChange }: ComponentTabsProps) {
  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: 'eye' },
    { id: 'code', label: 'Code', icon: 'code' },
    { id: 'accessibility', label: 'Accessibility', icon: 'accessibility' },
    { id: 'use-cases', label: 'Use Cases', icon: 'lightbulb' },
  ];

  return (
    <div className="border-b border-white/10 mb-8">
      <div className="flex gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={clsx(
              'flex items-center gap-2 px-6 py-3 font-medium transition-all',
              'border-b-2 whitespace-nowrap',
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-text-tertiary hover:text-text-secondary hover:border-text-quaternary'
            )}
          >
            {tab.icon && <i className={`lucide-${tab.icon} text-lg`} />}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
