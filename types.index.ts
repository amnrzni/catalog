/** 
 * Type Definitions for Design Catalog
 * Location: types/index.ts
 */

/** Base component props shared across all design styles */
export interface BaseComponentProps {
  /** Design style to apply */
  style?: 'glassmorphism' | 'neumorphism' | 'material' | 'minimalism';
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  /** Component size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Active state */
  active?: boolean;
  /** Enable animations */
  animate?: boolean;
  /** Animation speed */
  animationSpeed?: 'slow' | 'normal' | 'fast';
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** ARIA described by for accessibility */
  ariaDescribedBy?: string;
  /** Additional CSS classes */
  className?: string;
  /** Child elements */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}

/** Button specific props */
export interface ButtonProps extends BaseComponentProps {
  /** Button HTML type */
  type?: 'button' | 'submit' | 'reset';
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
}

/** Card specific props */
export interface CardProps extends BaseComponentProps {
  /** Card title */
  title?: string;
  /** Card description or subtitle */
  description?: string;
  /** Icon for the card */
  icon?: React.ReactNode;
  /** Image URL for the card */
  image?: string;
  /** Value to display (for stat cards) */
  value?: string | number;
  /** Trend indicator (e.g., "+12.5%") */
  trend?: string;
  /** Trend direction for styling */
  trendDirection?: 'up' | 'down' | 'neutral';
}

/** Input specific props */
export interface InputProps extends Omit<BaseComponentProps, 'variant'> {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url';
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Input name attribute */
  name?: string;
  /** Error message to display */
  error?: string;
  /** Success message to display */
  success?: string;
  /** Label text */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Maximum length */
  maxLength?: number;
  /** Autocomplete attribute */
  autoComplete?: string;
}

/** Textarea specific props */
export interface TextareaProps extends Omit<InputProps, 'type'> {
  /** Number of rows */
  rows?: number;
  /** Whether the textarea is resizable */
  resizable?: boolean;
}

/** Toggle/Switch props */
export interface ToggleProps extends Omit<BaseComponentProps, 'variant'> {
  /** Whether the toggle is checked */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Label for the toggle */
  label?: string;
  /** Name attribute */
  name?: string;
}

/** Slider props */
export interface SliderProps extends Omit<BaseComponentProps, 'variant'> {
  /** Current value */
  value?: number;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Label for the slider */
  label?: string;
  /** Whether to show the value */
  showValue?: boolean;
}

/** Tab item */
export interface TabItem {
  /** Unique identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Tab content */
  content: React.ReactNode;
  /** Icon for the tab */
  icon?: React.ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
}

/** Tabs props */
export interface TabsProps extends BaseComponentProps {
  /** Array of tab items */
  tabs: TabItem[];
  /** Default active tab ID */
  defaultTab?: string;
  /** Controlled active tab ID */
  activeTab?: string;
  /** Change handler */
  onChange?: (tabId: string) => void;
}

/** Navbar props */
export interface NavbarProps extends BaseComponentProps {
  /** Logo element */
  logo?: React.ReactNode;
  /** Navigation items */
  navItems?: NavItem[];
  /** Whether navbar is sticky */
  sticky?: boolean;
  /** Whether to show search */
  showSearch?: boolean;
  /** User avatar URL */
  userAvatar?: string;
  /** User name */
  userName?: string;
}

/** Navigation item */
export interface NavItem {
  /** Item label */
  label: string;
  /** Link href */
  href: string;
  /** Icon */
  icon?: React.ReactNode;
  /** Whether item is active */
  active?: boolean;
}

/** Theme context type */
export interface ThemeContextType {
  /** Current design style */
  currentStyle: 'glassmorphism' | 'neumorphism' | 'material' | 'minimalism';
  /** Set design style */
  setStyle: (style: ThemeContextType['currentStyle']) => void;
}

/** Animation context type */
export interface AnimationContextType {
  /** Whether animations are enabled */
  animationEnabled: boolean;
  /** Toggle animations on/off */
  toggleAnimation: () => void;
  /** Current animation speed */
  animationSpeed: 'slow' | 'normal' | 'fast';
  /** Set animation speed */
  setAnimationSpeed: (speed: AnimationContextType['animationSpeed']) => void;
}

/** ComponentShowcase props */
export interface ComponentShowcaseProps {
  /** Component title */
  title: string;
  /** Component description */
  description: string;
  /** Component to showcase */
  component: React.ReactNode;
  /** Available variants */
  variants?: string[];
  /** Available states */
  states?: string[];
  /** Documentation content */
  documentation?: React.ReactNode;
  /** Code snippet */
  codeSnippet?: string;
}
