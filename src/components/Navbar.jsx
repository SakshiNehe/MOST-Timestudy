import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useApp();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="w-12 h-12 bg-tata-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">TML</span>
          </div>
          <span className="text-white font-bold text-lg hidden md:block">DIGITAL LAB</span>
        </motion.div>

        {/* Center: Title */}
        <motion.div
          className="flex-1 text-center px-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-xl md:text-2xl font-bold text-tata-darkblue">
            MOST Analysis
          </h1>
          <p className="text-sm text-industrial-600 mt-1">Time Study Analysis Platform</p>
        </motion.div>

        {/* Right: User Profile & Logout */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-industrial-800">{user?.name}</p>
            <p className="text-xs text-industrial-600">{user?.employeeId}</p>
          </div>
          <div className="w-10 h-10 bg-tata-lightblue rounded-full flex items-center justify-center text-white font-semibold">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary text-sm px-4 py-2"
          >
            Logout
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
