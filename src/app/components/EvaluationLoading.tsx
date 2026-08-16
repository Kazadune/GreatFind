export function EvaluationLoading() {
  return (
    <div className="min-h-screen bg-background dark flex items-center justify-center">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <button className="text-foreground hover:text-primary transition-colors">
            ← Home
          </button>
          <h2 className="font-semibold text-foreground">Evaluation</h2>
          <div className="w-16" />
        </div>
      </div>

      {/* Loading Content */}
      <div className="text-center px-4">
        {/* Spinner */}
        <div className="mb-8 inline-block">
          <div className="w-20 h-20 relative">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
          </div>
        </div>

        {/* Text */}
        <h3 className="text-2xl font-bold text-foreground mb-3">Evaluating deal...</h3>
        <p className="text-muted-foreground">Fetching comps and calculating profit</p>
      </div>
    </div>
  );
}
