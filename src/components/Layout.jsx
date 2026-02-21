import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../hooks/useTheme';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
