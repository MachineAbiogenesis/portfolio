import React from 'react';
import Header from './Header';
import { DottedSurface } from '@/components/ui/dotted-surface';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen text-primary selection:bg-gray-800 relative overflow-x-hidden">
            {/* Dotted Surface Background */}
            <DottedSurface />

            <Header />
            <main className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;


