import React, { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';

const App = () => {
    const [currentPage, setCurrentPage] = React.useState('home');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1); // Remove #
            if (hash === '/about-us') {
                setCurrentPage('about');
            } else {
                setCurrentPage('home');
            }
        };

        // Check initial hash
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <>
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'about' && <AboutUsPage />}
        </>
    );
};

export default App;
