import React from 'react';

const Navbar = () => {
const [isOpen, setIsOpen] = React.useState(false);

return (
    <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">Logo</span>
                </div>

                {/* Title */}
                <div className="flex-1 text-center">
                    <h1 className="text-xl font-semibold text-gray-300">{""}</h1>
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8">
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative text-gray-400 font-medium transition-colors duration-300 hover:text-blue-600 group"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
);
};

export default Navbar;