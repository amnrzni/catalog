export interface PatternMetadata {
  id: string;
  name: string;
  description: string;
  category: string;
  complexity: 'Basic' | 'Intermediate' | 'Advanced';
  components: string[];
  steps: string[];
  useCases: string[];
  accessibility: {
    wcag: string[];
    keyboardSupport: string[];
    screenReader: string[];
  };
}

export const patternsData: PatternMetadata[] = [
  {
    id: 'auth',
    name: 'Auth',
    description: 'Complete authentication flow including sign in/up, magic link, 2FA, and password reset with secure best practices.',
    category: 'User Management',
    complexity: 'Intermediate',
    components: ['Input', 'Button', 'Card', 'Modal', 'Toast'],
    steps: [
      'User enters credentials',
      'Validate input on client',
      'Submit to authentication endpoint',
      'Handle success/error states',
      'Redirect or show 2FA challenge',
      'Complete authentication flow',
    ],
    useCases: ['User login', 'Account creation', 'Password recovery', 'Multi-factor authentication'],
    accessibility: {
      wcag: ['Form labels', 'Error announcements', 'Focus management', 'Keyboard navigation'],
      keyboardSupport: ['Tab through fields', 'Enter to submit', 'ESC to cancel'],
      screenReader: ['Form labels', 'Error messages', 'Success confirmations', 'Loading states'],
    },
  },
  {
    id: 'onboarding',
    name: 'Onboarding',
    description: 'Progressive disclosure onboarding flow with checklist, coach marks, and step-by-step guidance.',
    category: 'User Experience',
    complexity: 'Intermediate',
    components: ['Card', 'Button', 'Badge', 'Progress Bar', 'Modal'],
    steps: [
      'Show welcome screen',
      'Present checklist of tasks',
      'Guide user through each step',
      'Show coach marks for key features',
      'Track completion progress',
      'Celebrate completion',
    ],
    useCases: ['New user introduction', 'Feature tours', 'Setup wizards', 'Product walkthroughs'],
    accessibility: {
      wcag: ['Clear instructions', 'Skip option', 'Progress indication', 'Pause/resume capability'],
      keyboardSupport: ['Navigate steps', 'Skip tour', 'Close overlays'],
      screenReader: ['Step announcements', 'Progress updates', 'Completion feedback'],
    },
  },
  {
    id: 'settings',
    name: 'Settings',
    description: 'Tabbed layout for account & billing, API keys, preferences with live updates and validation.',
    category: 'User Management',
    complexity: 'Basic',
    components: ['Tabs', 'Input', 'Button', 'Card', 'Toggle', 'Select'],
    steps: [
      'Display tabbed navigation',
      'Load current settings',
      'Allow inline editing',
      'Validate changes',
      'Save with confirmation',
      'Handle errors gracefully',
    ],
    useCases: ['User preferences', 'Account management', 'API configuration', 'Billing settings'],
    accessibility: {
      wcag: ['Tab navigation', 'Form labeling', 'Error handling', 'Success feedback'],
      keyboardSupport: ['Arrow keys for tabs', 'Tab for form navigation', 'Enter to save'],
      screenReader: ['Tab announcements', 'Field labels', 'Change confirmations'],
    },
  },
  {
    id: 'search',
    name: 'Search',
    description: 'Advanced search with facets, sort options, saved views, and URL parameter syncing.',
    category: 'Data Management',
    complexity: 'Advanced',
    components: ['Input', 'Dropdown', 'Badge', 'Button', 'Card', 'Pagination'],
    steps: [
      'Enter search query',
      'Apply filters and facets',
      'Sort results',
      'Display results with highlighting',
      'Persist state in URL',
      'Save search as view',
    ],
    useCases: ['Product search', 'Document filtering', 'User directory', 'Content discovery'],
    accessibility: {
      wcag: ['Search landmarks', 'Result announcements', 'Filter accessibility', 'Clear labeling'],
      keyboardSupport: ['Arrow keys for results', 'Enter to select', 'Tab for filters'],
      screenReader: ['Result count', 'Filter status', 'Sort order', 'Loading states'],
    },
  },
  {
    id: 'table-crud',
    name: 'Table CRUD',
    description: 'Inline editing, optimistic updates, bulk actions, sorting, and filtering in data tables.',
    category: 'Data Management',
    complexity: 'Advanced',
    components: ['Table', 'Input', 'Button', 'Checkbox', 'Dropdown', 'Modal'],
    steps: [
      'Display data in table',
      'Enable inline editing',
      'Implement sorting and filtering',
      'Add row selection',
      'Provide bulk actions',
      'Handle optimistic updates',
    ],
    useCases: ['Data management', 'Admin panels', 'Spreadsheet-like editing', 'Bulk operations'],
    accessibility: {
      wcag: ['Table headers', 'Editable cell focus', 'Action announcements', 'Keyboard shortcuts'],
      keyboardSupport: ['Tab through cells', 'Enter to edit', 'ESC to cancel', 'Ctrl+A select all'],
      screenReader: ['Table structure', 'Cell content', 'Edit mode', 'Action feedback'],
    },
  },
  {
    id: 'content-editor',
    name: 'Content Editor',
    description: 'MDX editor with live preview, file uploads, versioning, and collaborative features.',
    category: 'Content Management',
    complexity: 'Advanced',
    components: ['Editor', 'Toolbar', 'Preview', 'Modal', 'Button', 'Upload'],
    steps: [
      'Initialize editor',
      'Provide toolbar actions',
      'Show live preview',
      'Handle file uploads',
      'Auto-save drafts',
      'Manage versions',
    ],
    useCases: ['Blog posts', 'Documentation', 'Content creation', 'Collaborative writing'],
    accessibility: {
      wcag: ['Toolbar labels', 'Editor focus', 'Keyboard shortcuts', 'Screen reader support'],
      keyboardSupport: ['Ctrl+B bold', 'Ctrl+I italic', 'Tab for toolbar', 'Standard editing keys'],
      screenReader: ['Formatting announcements', 'Character count', 'Save status'],
    },
  },
  {
    id: 'notifications',
    name: 'Notifications',
    description: 'Inbox with toasts, read/unread states, activity feed, and real-time updates.',
    category: 'Communication',
    complexity: 'Intermediate',
    components: ['Toast', 'Badge', 'Card', 'Button', 'Dropdown'],
    steps: [
      'Receive notification',
      'Show toast alert',
      'Add to inbox',
      'Mark as read/unread',
      'Group by type',
      'Clear or dismiss',
    ],
    useCases: ['User alerts', 'System messages', 'Activity tracking', 'Real-time updates'],
    accessibility: {
      wcag: ['ARIA live regions', 'Focus management', 'Clear labeling', 'Dismiss options'],
      keyboardSupport: ['Tab to notifications', 'Enter to view', 'Delete to dismiss'],
      screenReader: ['New notification announcements', 'Count updates', 'Status changes'],
    },
  },
  {
    id: 'payments',
    name: 'Payments',
    description: 'Checkout flow with subscriptions, invoices, payment methods, and secure processing.',
    category: 'E-commerce',
    complexity: 'Advanced',
    components: ['Form', 'Input', 'Button', 'Card', 'Modal', 'Badge'],
    steps: [
      'Display payment form',
      'Validate card details',
      'Process payment securely',
      'Handle success/failure',
      'Generate invoice',
      'Send confirmation',
    ],
    useCases: ['Product checkout', 'Subscription management', 'Invoice generation', 'Payment history'],
    accessibility: {
      wcag: ['Secure inputs', 'Error prevention', 'Clear feedback', 'Auto-complete support'],
      keyboardSupport: ['Tab navigation', 'Enter to submit', 'Auto-advance on valid input'],
      screenReader: ['Field labels', 'Validation errors', 'Success confirmations', 'Security notices'],
    },
  },
  {
    id: 'docs-layout',
    name: 'Docs Layout',
    description: 'Documentation layout with sticky TOC, code switcher, next/prev navigation, and search.',
    category: 'Documentation',
    complexity: 'Intermediate',
    components: ['Navigation', 'TOC', 'CodeBlock', 'Button', 'Search'],
    steps: [
      'Render documentation content',
      'Generate table of contents',
      'Track active section',
      'Provide code language switcher',
      'Enable next/prev navigation',
      'Implement search',
    ],
    useCases: ['API documentation', 'User guides', 'Technical manuals', 'Knowledge base'],
    accessibility: {
      wcag: ['Skip to content', 'Heading hierarchy', 'Keyboard navigation', 'Search accessibility'],
      keyboardSupport: ['Arrow keys for TOC', 'Tab for navigation', '/ for search'],
      screenReader: ['Section headings', 'Code language', 'Navigation structure', 'Search results'],
    },
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'Admin dashboard with KPI cards, charts, filters, and resizable panels.',
    category: 'Data Visualization',
    complexity: 'Advanced',
    components: ['Card', 'Chart', 'Button', 'Dropdown', 'Panel'],
    steps: [
      'Load dashboard data',
      'Display KPI metrics',
      'Render charts',
      'Apply filters',
      'Resize panels',
      'Refresh data',
    ],
    useCases: ['Analytics', 'Admin panels', 'Metrics tracking', 'Business intelligence'],
    accessibility: {
      wcag: ['Data tables for charts', 'Text alternatives', 'Color independence', 'Resize support'],
      keyboardSupport: ['Tab through widgets', 'Arrow keys for charts', 'Enter to interact'],
      screenReader: ['Metric announcements', 'Chart descriptions', 'Filter status', 'Data updates'],
    },
  },
  {
    id: 'file-manager',
    name: 'File Manager',
    description: 'File browser with grid/list views, selection, preview, rename, and folder navigation.',
    category: 'File Management',
    complexity: 'Advanced',
    components: ['Grid', 'List', 'Button', 'Modal', 'Preview', 'Breadcrumbs'],
    steps: [
      'Display files and folders',
      'Toggle grid/list view',
      'Select multiple items',
      'Preview files',
      'Rename or delete',
      'Navigate folders',
    ],
    useCases: ['Document management', 'Media library', 'Cloud storage', 'Asset management'],
    accessibility: {
      wcag: ['File type labels', 'Selection announcements', 'Preview alternatives', 'Keyboard shortcuts'],
      keyboardSupport: ['Arrow keys navigate', 'Space to select', 'Enter to open', 'Delete key'],
      screenReader: ['File names', 'Type and size', 'Selection count', 'Folder structure'],
    },
  },
  {
    id: 'messaging',
    name: 'Messaging',
    description: 'Chat interface with composer, threads, presence indicators, and real-time updates.',
    category: 'Communication',
    complexity: 'Advanced',
    components: ['Chat', 'Input', 'Avatar', 'Badge', 'Card', 'Button'],
    steps: [
      'Load conversation',
      'Display messages',
      'Show presence',
      'Type new message',
      'Send message',
      'Receive updates',
    ],
    useCases: ['Team chat', 'Customer support', 'Direct messaging', 'Group discussions'],
    accessibility: {
      wcag: ['Message list', 'Sender identification', 'Timestamp', 'New message announcements'],
      keyboardSupport: ['Arrow keys for history', 'Enter to send', 'Tab for navigation'],
      screenReader: ['Message content', 'Sender names', 'Timestamps', 'Presence status', 'New messages'],
    },
  },
];

export function getPatternById(id: string): PatternMetadata | undefined {
  return patternsData.find((pattern) => pattern.id === id);
}

export function getAllPatterns(): PatternMetadata[] {
  return patternsData;
}
