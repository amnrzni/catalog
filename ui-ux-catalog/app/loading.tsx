export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-transparent border-t-primary-light rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
          </div>
        </div>
        
        {/* Loading text */}
        <p className="text-text-secondary text-lg animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
