// Core types for the catalog

export type ComponentComplexity = 'Basic' | 'Intermediate' | 'Advanced';
export type ComponentCategory = 'Button' | 'Input' | 'Card' | 'Navigation' | 'Data Display' | 'Feedback' | 'Layout' | '3D Objects' | 'Form' | 'Modal';
export type ComponentFramework = 'React' | 'Vue' | 'HTML/CSS' | 'Angular';

export interface ComponentMetadata {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  complexity: ComponentComplexity;
  frameworks: ComponentFramework[];
  tags: string[];
  previewImage?: string;
  variants?: string[];
  useCases?: string[];
  accessibility?: {
    wcag: string[];
    keyboardSupport: string[];
    screenReader: string[];
  };
}

export interface DesignToken {
  name: string;
  value: string;
  category: 'color' | 'spacing' | 'typography' | 'shadow' | 'animation';
  cssVariable?: string;
  description?: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  components: string[];
  example?: string;
  bestPractices?: string[];
}
