import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
                    <div className="max-w-md w-full glass rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-red-100 flex items-center justify-center">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                        </div>

                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            Oops! Something went wrong
                        </h1>

                        <p className="text-gray-600 mb-6">
                            The application encountered an unexpected error. Don't worry, your data is safe.
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-6 text-left">
                                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 mb-2">
                                    Error Details (Development Mode)
                                </summary>
                                <div className="bg-gray-100 p-4 rounded-lg text-xs overflow-auto max-h-40">
                                    <p className="font-mono text-red-600 mb-2">
                                        {this.state.error.toString()}
                                    </p>
                                    <pre className="text-gray-600 whitespace-pre-wrap">
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </div>
                            </details>
                        )}

                        <button
                            onClick={this.handleReset}
                            className="btn-primary px-6 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-all"
                        >
                            <RefreshCw className="w-5 h-5" />
                            Reload Application
                        </button>

                        <p className="mt-4 text-xs text-gray-500">
                            If the problem persists, please clear your browser cache
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
