import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent animate-glow">
            404
          </div>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-primary-light via-primary to-primary-dark" />
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="large">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Button>
          </Link>
          <Link href="/components">
            <Button variant="secondary" size="large">
              Browse Components
            </Button>
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 text-left glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-3">
            Popular Pages
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/components" className="text-primary-light hover:underline flex items-center gap-2">
                <span>→</span>
                <span>Component Library</span>
              </Link>
            </li>
            <li>
              <Link href="/design-tokens" className="text-primary-light hover:underline flex items-center gap-2">
                <span>→</span>
                <span>Design Tokens</span>
              </Link>
            </li>
            <li>
              <Link href="/search" className="text-primary-light hover:underline flex items-center gap-2">
                <span>→</span>
                <span>Search Components</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
