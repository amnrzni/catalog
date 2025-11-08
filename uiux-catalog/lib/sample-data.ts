/**
 * Sample Data for Aurora Analytics Dashboard
 * Used across all theme demonstrations
 */

export interface Metric {
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface ActivityItem {
  type: 'success' | 'primary' | 'secondary' | 'warning' | 'danger';
  title: string;
  description?: string;
  time: string;
  icon?: string;
}

export const metrics: Metric[] = [
  {
    label: 'Revenue',
    value: '$124,580',
    delta: '+12.3%',
    trend: 'up',
  },
  {
    label: 'Users',
    value: '8,549',
    delta: '+5.2%',
    trend: 'up',
  },
  {
    label: 'Growth',
    value: '+23.5%',
    delta: '+2.1%',
    trend: 'up',
  },
  {
    label: 'Conversion',
    value: '3.24%',
    delta: '-0.8%',
    trend: 'down',
  },
];

export const activity: ActivityItem[] = [
  {
    type: 'success',
    title: 'Payment received',
    description: 'Invoice #3492 has been paid',
    time: '2 mins ago',
    icon: '💰',
  },
  {
    type: 'primary',
    title: 'New user registered',
    description: 'john.doe@example.com joined',
    time: '5 mins ago',
    icon: '👤',
  },
  {
    type: 'secondary',
    title: 'Report generated',
    description: 'Monthly analytics report is ready',
    time: '12 mins ago',
    icon: '📊',
  },
  {
    type: 'warning',
    title: 'System updated',
    description: 'Version 2.3.0 deployed successfully',
    time: '25 mins ago',
    icon: '🔄',
  },
  {
    type: 'danger',
    title: 'Failed login attempt',
    description: 'Suspicious activity detected',
    time: '1 hour ago',
    icon: '⚠️',
  },
];

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'select' | 'textarea' | 'toggle' | 'slider';
  placeholder?: string;
  options?: string[];
  defaultValue?: string | boolean | number;
}

export const settingsFields: FormField[] = [
  {
    id: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    defaultValue: 'aurora_user',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your.email@example.com',
    defaultValue: 'aurora@example.com',
  },
  {
    id: 'notifications',
    label: 'Enable Notifications',
    type: 'toggle',
    defaultValue: true,
  },
  {
    id: 'volume',
    label: 'Volume',
    type: 'slider',
    defaultValue: 70,
  },
  {
    id: 'theme',
    label: 'Preferred Theme',
    type: 'select',
    options: ['Glassmorphism', 'Material Design', 'Minimalism', 'Neumorphism'],
    defaultValue: 'Glassmorphism',
  },
  {
    id: 'bio',
    label: 'Bio',
    type: 'textarea',
    placeholder: 'Tell us about yourself...',
    defaultValue: 'Design enthusiast exploring modern UI/UX patterns.',
  },
];

export interface ChartDataPoint {
  label: string;
  value: number;
}

export const chartData: ChartDataPoint[] = [
  { label: 'Jan', value: 4200 },
  { label: 'Feb', value: 5100 },
  { label: 'Mar', value: 4800 },
  { label: 'Apr', value: 6200 },
  { label: 'May', value: 5900 },
  { label: 'Jun', value: 7100 },
  { label: 'Jul', value: 6800 },
  { label: 'Aug', value: 8200 },
  { label: 'Sep', value: 7900 },
  { label: 'Oct', value: 9100 },
  { label: 'Nov', value: 8700 },
  { label: 'Dec', value: 10500 },
];
