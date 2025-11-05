'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application error:', error);
    
    // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Error Icon */}
        <div className="text-8xl mb-6 animate-pulse">⚠️</div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Something Went Wrong
        </h1>
        <p className="text-xl text-text-secondary mb-4">
          We're sorry, but something unexpected happened.
        </p>
        
        {/* Error Details (dev mode only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-text-tertiary hover:text-text-primary mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="bg-background-tertiary p-4 rounded-xl overflow-auto text-sm text-text-tertiary">
              {error.message}
            </pre>
          </details>
        )}

        {/* Error ID */}
        {error.digest && (
          <p className="text-sm text-text-tertiary mt-4 mb-8">
            Error ID: <code className="bg-background-tertiary px-2 py-1 rounded">{error.digest}</code>
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button variant="primary" size="large" onClick={reset}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </Button>
          <Button 
            variant="secondary" 
            size="large"
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
