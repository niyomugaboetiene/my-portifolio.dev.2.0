import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Etiene Niyomugabo. All rights reserved.
                </p>
                <p className="text-sm mt-2 sm:mt-0 text-cyan-400 font-semibold">
                    Built with ❤️ using React & Tailwind css with other stuff.
                </p>
            </div>
        </footer>
    )
}

export default Footer;