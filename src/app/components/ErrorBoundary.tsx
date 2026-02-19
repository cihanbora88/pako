import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details for debugging
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error Info:', errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
          <div className="max-w-md text-center">
            <div className="mb-6 text-6xl">⚠️</div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              Oops! Something went wrong
            </h1>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
              We encountered an unexpected error. Our team has been notified.
            </p>
            {this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  Error Details
                </summary>
                <pre className="mt-2 overflow-auto rounded bg-gray-100 dark:bg-gray-800 p-3 text-xs text-gray-700 dark:text-gray-300">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <div className="flex gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 rounded-lg bg-[var(--color-secondary)] px-4 py-3 font-medium text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-95"
              >
                Try Again
              </button>
              <button
                onClick={() => {
                  window.location.href = '/';
                }}
                className="flex-1 rounded-lg border-2 border-[var(--color-primary)] px-4 py-3 font-medium text-[var(--color-primary)] dark:border-[var(--color-secondary)] dark:text-[var(--color-secondary)] transition-all hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
