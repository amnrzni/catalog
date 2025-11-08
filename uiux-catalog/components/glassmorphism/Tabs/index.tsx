/**
 * Glassmorphism Tabs Component
 * Location: components/glassmorphism/Tabs/index.tsx
 * 
 * Tab navigation with animated sliding indicator.
 * Supports icons, disabled tabs, and keyboard navigation.
 */

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabsProps } from '@/types';
import { cn } from '@/lib/utils/cn';
import { useAnimation } from '@/contexts/AnimationContext';

export function Tabs({
  tabs,
  defaultTab,
  activeTab: controlledActiveTab,
  onChange,
  className,
  style: _style, // Destructure but don't use - prevents conflict with motion elements
  variant: _variant, // Not used in Tabs
  animate: _animate, // Not used in Tabs
  animationSpeed: _animationSpeed, // Not used in Tabs
  active: _active, // Not used in Tabs
  loading: _loading, // Not used in Tabs
  disabled: _disabled, // Not used in Tabs (tabs have their own disabled prop)
  onClick: _onClick, // Not used in Tabs
  ariaLabel: _ariaLabel, // Not used in Tabs
  ariaDescribedBy: _ariaDescribedBy, // Not used in Tabs
  size: _size, // Not used in Tabs
  ...props
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    controlledActiveTab || defaultTab || tabs[0]?.id
  );
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const { animationEnabled } = useAnimation();

  // Update indicator position when active tab changes
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      setIndicatorStyle({
        width: activeTabElement.offsetWidth,
        left: activeTabElement.offsetLeft,
      });
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const enabledTabs = tabs.filter(tab => !tab.disabled);
    const currentIndex = enabledTabs.findIndex(tab => tab.id === activeTab);

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % enabledTabs.length;
      handleTabClick(enabledTabs[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex =
        (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
      handleTabClick(enabledTabs[prevIndex].id);
    }
  };

  const currentActiveTab =
    controlledActiveTab !== undefined ? controlledActiveTab : activeTab;
  const activeTabContent = tabs.find(tab => tab.id === currentActiveTab)
    ?.content;

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Tab List */}
      <div
        className="glass-strong relative inline-flex w-full rounded-lg p-1"
        role="tablist"
      >
        {/* Animated Indicator */}
        <motion.div
          className="absolute h-[calc(100%-8px)] rounded-md bg-gradient-to-r from-accent-primary to-accent-secondary shadow-lg"
          animate={{
            width: indicatorStyle.width,
            left: indicatorStyle.left,
          }}
          transition={{
            type: animationEnabled ? 'spring' : 'tween',
            stiffness: 300,
            damping: 30,
            duration: animationEnabled ? undefined : 0.01,
          }}
        />

        {/* Tab Buttons */}
        {tabs.map((tab) => {
          const isActive = tab.id === currentActiveTab;
          const isDisabled = tab.disabled;

          return (
            <button
              key={tab.id}
              ref={el => {
                tabRefs.current[tab.id] = el;
              }}
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => !isDisabled && handleTabClick(tab.id)}
              onKeyDown={handleKeyDown}
              className={cn(
                'relative z-10 flex flex-1 items-center justify-center gap-2 px-4 py-2',
                'rounded-md text-sm font-medium transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-black',
                isActive ? 'text-white' : 'text-text-secondary hover:text-text-primary',
                isDisabled && 'cursor-not-allowed opacity-50'
              )}
              tabIndex={isActive ? 0 : -1}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-6" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentActiveTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: animationEnabled ? 0.2 : 0.01 }}
          >
            {activeTabContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
