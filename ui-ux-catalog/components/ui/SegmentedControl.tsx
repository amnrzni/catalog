"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface Tab {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

interface SegmentedControlProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

export default function SegmentedControl({ tabs, defaultTab, onChange }: SegmentedControlProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  const updateIndicator = React.useCallback(() => {
    const activeButton = tabRefs.current.get(activeTab);
    const container = containerRef.current;
    
    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = index > 0 ? index - 1 : tabs.length - 1;
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = index < tabs.length - 1 ? index + 1 : 0;
    } else {
      return;
    }

    const newTab = tabs[newIndex];
    handleTabChange(newTab.id);
    tabRefs.current.get(newTab.id)?.focus();
  };

  return (
    <div>
      {/* Tabs */}
      <div
        ref={containerRef}
        role="tablist"
        style={{
          display: "inline-flex",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-full)",
          padding: "4px",
          position: "relative",
        }}
      >
        {/* Active indicator */}
        <div
          style={{
            position: "absolute",
            top: "4px",
            bottom: "4px",
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            background: "var(--accent)",
            borderRadius: "var(--radius-full)",
            transition: "left 0.2s var(--ease-out), width 0.2s var(--ease-out)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        {/* Tab buttons */}
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab;
          
          return (
            <button
              key={tab.id}
              ref={(el) => {
                if (el) {
                  tabRefs.current.set(tab.id, el);
                } else {
                  tabRefs.current.delete(tab.id);
                }
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                position: "relative",
                zIndex: 1,
                padding: "8px 16px",
                border: "none",
                background: "transparent",
                color: isActive ? "var(--bg)" : "var(--text)",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                borderRadius: "var(--radius-full)",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <div style={{ marginTop: "var(--space-4)" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== activeTab}
            style={{
              display: tab.id === activeTab ? "block" : "none",
            }}
          >
            {tab.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        [data-motion="reduced"] div {
          transition: none !important;
        }
      `}</style>
    </div>
  );
}
