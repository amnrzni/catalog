'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { getComponentById } from '@/lib/components-data';
import { addToCollection, isInCollection } from '@/lib/collection-storage';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import ComponentTabs, { TabId } from '@/components/catalog/ComponentTabs';
import CodeBlock from '@/components/ui/CodeBlock';

export default function ComponentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const component = getComponentById(resolvedParams.slug);
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [inCollection, setInCollection] = useState(false);

  React.useEffect(() => {
    if (component) {
      setInCollection(isInCollection(component.id));

      const handleUpdate = () => {
        setInCollection(isInCollection(component.id));
      };

      window.addEventListener('collectionUpdate', handleUpdate);
      return () => window.removeEventListener('collectionUpdate', handleUpdate);
    }
  }, [component]);

  if (!component) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Component Not Found</h1>
          <p className="text-text-secondary mb-8">
            The component you're looking for doesn't exist.
          </p>
          <Link href="/components">
            <Button variant="primary">Browse Components</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCollection = () => {
    addToCollection(component.id);
  };

  const exampleCode = `import Button from '@/components/ui/Button';

export default function Example() {
  return (
    <Button variant="primary" size="default">
      Click me
    </Button>
  );
}`;

  const cssCode = `.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.button-primary {
  background: linear-gradient(to right, #8b5cf6, #7c3aed);
  color: white;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}`;

  const htmlCode = `<button class="button button-primary">
  Click me
</button>`;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-text-tertiary hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-text-quaternary">/</span>
          <Link href="/components" className="text-text-tertiary hover:text-primary transition-colors">
            Components
          </Link>
          <span className="text-text-quaternary">/</span>
          <span className="text-text-primary">{component.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold text-text-primary">{component.name}</h1>
                <Badge variant="primary">{component.category}</Badge>
                <Badge variant={component.complexity === 'Basic' ? 'success' : component.complexity === 'Intermediate' ? 'warning' : 'danger'}>
                  {component.complexity}
                </Badge>
              </div>
              <p className="text-xl text-text-secondary">{component.description}</p>
            </div>

            <div className="flex gap-3">
              <Button
                variant={inCollection ? 'success' : 'secondary'}
                onClick={handleAddToCollection}
                disabled={inCollection}
              >
                {inCollection ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    In Collection
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add to Collection
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {component.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <ComponentTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Variants Section */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Variants</h2>
                <Card glassmorphism padding="large">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {component.variants?.map((variant) => (
                      <div key={variant} className="space-y-3">
                        <h3 className="text-lg font-semibold text-text-primary capitalize">
                          {variant}
                        </h3>
                        <div className="p-6 rounded-lg bg-background-tertiary flex items-center justify-center">
                          <div className="text-text-tertiary text-center">
                            <p className="text-sm">Preview coming soon</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>

              {/* Properties Section */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Properties</h2>
                <Card glassmorphism padding="none">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-4 text-text-secondary font-semibold">Prop</th>
                          <th className="text-left p-4 text-text-secondary font-semibold">Type</th>
                          <th className="text-left p-4 text-text-secondary font-semibold">Default</th>
                          <th className="text-left p-4 text-text-secondary font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="p-4 text-text-primary font-mono text-sm">variant</td>
                          <td className="p-4 text-text-tertiary font-mono text-sm">string</td>
                          <td className="p-4 text-text-tertiary font-mono text-sm">"primary"</td>
                          <td className="p-4 text-text-tertiary">The visual style variant</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-4 text-text-primary font-mono text-sm">size</td>
                          <td className="p-4 text-text-tertiary font-mono text-sm">string</td>
                          <td className="p-4 text-text-tertiary font-mono text-sm">"default"</td>
                          <td className="p-4 text-text-tertiary">The size of the component</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-text-primary font-mono text-sm">disabled</td>
                          <td className="p-4 text-text-tertiary font-mono text-sm">boolean</td>
                          <td className="p-4 text-text-tertiary font-mono text-sm">false</td>
                          <td className="p-4 text-text-tertiary">Disables the component</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </section>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">React/JSX</h2>
                <CodeBlock code={exampleCode} language="jsx" filename="Example.tsx" />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">CSS</h2>
                <CodeBlock code={cssCode} language="css" filename="styles.css" />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">HTML</h2>
                <CodeBlock code={htmlCode} language="html" filename="index.html" />
              </section>
            </div>
          )}

          {activeTab === 'accessibility' && component.accessibility && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">WCAG Compliance</h2>
                <Card glassmorphism padding="large">
                  <ul className="space-y-3">
                    {component.accessibility.wcag.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Keyboard Support</h2>
                <Card glassmorphism padding="large">
                  <ul className="space-y-3">
                    {component.accessibility.keyboardSupport.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <kbd className="px-2 py-1 bg-background-tertiary rounded text-xs text-text-primary font-mono flex-shrink-0">
                          {item.split(' ')[0]}
                        </kbd>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Screen Reader</h2>
                <Card glassmorphism padding="large">
                  <ul className="space-y-3">
                    {component.accessibility.screenReader.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>
            </div>
          )}

          {activeTab === 'use-cases' && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Common Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {component.useCases?.map((useCase, index) => (
                    <Card key={index} glassmorphism padding="large">
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{useCase}</h3>
                      <p className="text-text-tertiary">
                        This component is ideal for {useCase.toLowerCase()} scenarios in your application.
                      </p>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Best Practices</h2>
                <Card glassmorphism padding="large">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-text-primary">Do:</strong>
                        <span className="text-text-tertiary ml-2">Use appropriate variants for different actions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-text-primary">Do:</strong>
                        <span className="text-text-tertiary ml-2">Provide clear and descriptive labels</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-text-primary">Don't:</strong>
                        <span className="text-text-tertiary ml-2">Overuse primary variants - reserve for key actions</span>
                      </div>
                    </li>
                  </ul>
                </Card>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
