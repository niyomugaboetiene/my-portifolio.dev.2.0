import React from "react";

function Footer() {
    return (
        <footer className="dark:bg-gray-900 bg-white text-gray-600 dark:text-gray-300 py-6 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                    <p className="text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
                        &copy; {new Date().getFullYear()} Etiene Niyomugabo. All rights reserved.
                    </p>
                    
                    <p className="text-sm sm:text-base text-cyan-500 dark:text-cyan-400 font-semibold text-center sm:text-right order-1 sm:order-2">
                        Built with ❤️ using React & Tailwind CSS
                    </p>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-6">
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            v1.0.0 • Last updated: 31/12/2025 - 18:27 PM
                        </p>
                        
                        <div className="flex items-center justify-center gap-4 sm:gap-6">
                            <a 
                                href="#top" 
                                className="text-xs text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                            >
                                Back to top ↑
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;