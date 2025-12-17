import React from 'react';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-primary selection:bg-gray-800 relative overflow-x-hidden">
            {/* Global Wave-form Gradient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Top wave - purple */}
                <div className="absolute -top-20 -left-40 w-[1200px] h-[350px] bg-purple-600/10 blur-[100px] rounded-[100%] rotate-[-15deg]" />

                {/* Upper-middle wave - violet */}
                <div className="absolute top-[20%] -right-40 w-[1000px] h-[300px] bg-violet-500/8 blur-[110px] rounded-[100%] rotate-[10deg]" />

                {/* Center wave - pink accent */}
                <div className="absolute top-[45%] -left-20 w-[900px] h-[250px] bg-pink-500/5 blur-[90px] rounded-[100%] rotate-[15deg]" />

                {/* Lower-middle wave - indigo */}
                <div className="absolute top-[65%] -right-60 w-[1100px] h-[320px] bg-indigo-600/8 blur-[120px] rounded-[100%] rotate-[-8deg]" />

                {/* Bottom wave - purple */}
                <div className="absolute bottom-0 left-1/4 w-[1400px] h-[300px] bg-purple-500/10 blur-[130px] rounded-[100%] rotate-[-5deg]" />
            </div>

            <Header />
            <main className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;


