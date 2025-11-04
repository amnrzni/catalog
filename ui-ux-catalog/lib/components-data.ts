import { ComponentMetadata } from './types';

export const componentsData: ComponentMetadata[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A versatile button component with multiple variants, sizes, and states including gradient effects and loading states.',
    category: 'Button',
    complexity: 'Basic',
    frameworks: ['React', 'HTML/CSS'],
    tags: ['interactive', 'form', 'cta', 'gradient'],
    variants: ['primary', 'secondary', 'ghost', 'danger', 'success'],
    useCases: ['Form submission', 'Call-to-action', 'Navigation'],
    accessibility: {
      wcag: ['WCAG 2.1 AA compliant', 'Color contrast ratio > 4.5:1'],
      keyboardSupport: ['Enter/Space to activate', 'Tab navigation'],
      screenReader: ['Accessible name', 'State announcements'],
    },
  },
  {
    id: 'input',
    name: 'Text Input',
    description: 'A sleek input field with glassmorphic styling, focus states, and error handling.',
    category: 'Input',
    complexity: 'Basic',
    frameworks: ['React', 'HTML/CSS'],
    tags: ['form', 'text', 'interactive', 'validation'],
    variants: ['default', 'error', 'disabled', 'with-icon'],
    useCases: ['Form fields', 'Search bars', 'User input'],
    accessibility: {
      wcag: ['WCAG 2.1 AA compliant', 'Proper labeling'],
      keyboardSupport: ['Tab navigation', 'Text input'],
      screenReader: ['Label association', 'Error announcements'],
    },
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Glassmorphic card component with deep shadows and smooth hover effects.',
    category: 'Card',
    complexity: 'Basic',
    frameworks: ['React', 'HTML/CSS'],
    tags: ['container', 'layout', 'glassmorphism'],
    variants: ['default', 'hover', 'interactive', 'with-image'],
    useCases: ['Content grouping', 'Product displays', 'Info panels'],
    accessibility: {
      wcag: ['Semantic HTML', 'Keyboard accessible if interactive'],
      keyboardSupport: ['Tab navigation for interactive cards'],
      screenReader: ['Proper heading hierarchy', 'Content structure'],
    },
  },
  {
    id: 'sphere-3d',
    name: '3D Sphere',
    description: 'CSS-only 3D sphere with gradient and lighting effects, featuring floating animation.',
    category: '3D Objects',
    complexity: 'Intermediate',
    frameworks: ['HTML/CSS', 'React'],
    tags: ['3d', 'decorative', 'gradient', 'animation'],
    variants: ['default', 'glowing', 'rotating'],
    useCases: ['Hero sections', 'Decorative elements', 'Brand identity'],
    accessibility: {
      wcag: ['Decorative - aria-hidden="true"'],
      keyboardSupport: ['Not interactive'],
      screenReader: ['Hidden from screen readers'],
    },
  },
  {
    id: 'badge',
    name: 'Badge',
    description: 'Small status or tag indicator with various color schemes and styles.',
    category: 'Data Display',
    complexity: 'Basic',
    frameworks: ['React', 'HTML/CSS'],
    tags: ['label', 'tag', 'status', 'indicator'],
    variants: ['primary', 'success', 'warning', 'danger', 'info'],
    useCases: ['Status indicators', 'Tags', 'Labels', 'Counts'],
    accessibility: {
      wcag: ['Color contrast compliant', 'Not relying on color alone'],
      keyboardSupport: ['Not interactive unless clickable'],
      screenReader: ['Meaningful text content'],
    },
  },
  {
    id: 'modal',
    name: 'Modal',
    description: 'Glassmorphic modal dialog with smooth animations and focus management.',
    category: 'Modal',
    complexity: 'Intermediate',
    frameworks: ['React'],
    tags: ['overlay', 'dialog', 'popup', 'glassmorphism'],
    variants: ['default', 'small', 'large', 'fullscreen'],
    useCases: ['Confirmations', 'Forms', 'Details', 'Alerts'],
    accessibility: {
      wcag: ['Focus trap', 'ESC to close', 'ARIA dialog role'],
      keyboardSupport: ['Tab trapping', 'ESC key', 'Focus restoration'],
      screenReader: ['Dialog announcements', 'Accessible names'],
    },
  },
  {
    id: 'navigation',
    name: 'Navigation Menu',
    description: 'Responsive navigation with glassmorphic styling and smooth transitions.',
    category: 'Navigation',
    complexity: 'Intermediate',
    frameworks: ['React', 'HTML/CSS'],
    tags: ['menu', 'nav', 'header', 'responsive'],
    variants: ['horizontal', 'vertical', 'sidebar', 'dropdown'],
    useCases: ['Site navigation', 'App menus', 'Mobile menus'],
    accessibility: {
      wcag: ['Keyboard navigation', 'ARIA navigation role'],
      keyboardSupport: ['Arrow keys', 'Tab navigation', 'Enter to activate'],
      screenReader: ['Navigation landmarks', 'Current page indication'],
    },
  },
  {
    id: 'data-chart',
    name: 'Data Chart',
    description: 'Beautiful gradient-filled charts for data visualization with purple-blue gradients.',
    category: 'Data Display',
    complexity: 'Advanced',
    frameworks: ['React'],
    tags: ['chart', 'graph', 'data', 'visualization', 'gradient'],
    variants: ['bar', 'line', 'donut', 'area'],
    useCases: ['Analytics dashboards', 'Reports', 'Statistics'],
    accessibility: {
      wcag: ['Text alternatives', 'Data tables for complex charts'],
      keyboardSupport: ['Navigable data points'],
      screenReader: ['Chart descriptions', 'Data summaries'],
    },
  },
  {
    id: 'loading-spinner',
    name: 'Loading Spinner',
    description: 'Animated loading indicators with gradient effects and smooth rotations.',
    category: 'Feedback',
    complexity: 'Basic',
    frameworks: ['React', 'HTML/CSS'],
    tags: ['loading', 'spinner', 'feedback', 'animation'],
    variants: ['spinner', 'dots', 'bars', 'ring'],
    useCases: ['Loading states', 'Async operations', 'Page transitions'],
    accessibility: {
      wcag: ['ARIA live region', 'Loading announcements'],
      keyboardSupport: ['Not interactive'],
      screenReader: ['Loading status announcements'],
    },
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    description: 'Sleek dropdown menu with glassmorphic styling and smooth animations.',
    category: 'Form',
    complexity: 'Intermediate',
    frameworks: ['React', 'HTML/CSS'],
    tags: ['select', 'menu', 'form', 'interactive'],
    variants: ['single-select', 'multi-select', 'searchable', 'grouped'],
    useCases: ['Form selections', 'Filter menus', 'Action menus'],
    accessibility: {
      wcag: ['Keyboard operable', 'ARIA combobox pattern'],
      keyboardSupport: ['Arrow keys', 'Type to search', 'Enter/Space'],
      screenReader: ['Selected option announcements', 'Options count'],
    },
  },
];

export const getComponentById = (id: string): ComponentMetadata | undefined => {
  return componentsData.find((c) => c.id === id);
};

export const getComponentsByCategory = (category: string): ComponentMetadata[] => {
  return componentsData.filter((c) => c.category === category);
};

export const getComponentsByComplexity = (complexity: string): ComponentMetadata[] => {
  return componentsData.filter((c) => c.complexity === complexity);
};

export const searchComponents = (query: string): ComponentMetadata[] => {
  const lowerQuery = query.toLowerCase();
  return componentsData.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};
