export default function ComponentLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Skeleton UI matching component detail page layout */}
        <div className="animate-pulse">
          {/* Back button skeleton */}
          <div className="h-10 bg-background-secondary/50 rounded-xl w-32 mb-8" />
          
          {/* Title skeleton */}
          <div className="h-12 bg-background-secondary/50 rounded-2xl w-64 mb-4" />
          
          {/* Description skeleton */}
          <div className="space-y-3 mb-8">
            <div className="h-6 bg-background-secondary/50 rounded-xl w-full" />
            <div className="h-6 bg-background-secondary/50 rounded-xl w-3/4" />
          </div>
          
          {/* Tags skeleton */}
          <div className="flex gap-3 mb-12">
            <div className="h-8 bg-background-secondary/50 rounded-full w-24" />
            <div className="h-8 bg-background-secondary/50 rounded-full w-28" />
            <div className="h-8 bg-background-secondary/50 rounded-full w-20" />
          </div>
          
          {/* Preview card skeleton */}
          <div className="glass rounded-3xl p-8 mb-12">
            <div className="h-64 bg-background-tertiary/50 rounded-2xl mb-6" />
            <div className="flex gap-4">
              <div className="h-10 bg-background-secondary/50 rounded-xl flex-1" />
              <div className="h-10 bg-background-secondary/50 rounded-xl flex-1" />
            </div>
          </div>
          
          {/* Code blocks skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-96 bg-background-secondary/50 rounded-2xl" />
            <div className="h-96 bg-background-secondary/50 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
