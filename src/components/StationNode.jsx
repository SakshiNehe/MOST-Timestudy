import { motion } from 'framer-motion';

const StationNode = ({ station, isActive, onClick, index }) => {
  return (
    <motion.div
      className={`relative cursor-pointer group`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.15,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(station)}
    >
      {/* Station Circle */}
      <motion.div
        className={`
          w-20 h-20 rounded-full flex items-center justify-center
          font-bold text-xl shadow-lg border-4 transition-all duration-300
          ${isActive
            ? 'bg-tata-blue text-white border-tata-blue shadow-2xl'
            : 'bg-white text-tata-blue border-tata-blue hover:border-tata-lightblue hover:shadow-xl'
          }
        `}
        animate={isActive ? {
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            '0 20px 25px -5px rgba(30, 58, 138, 0.3)',
            '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          ]
        } : {}}
        transition={{
          duration: 0.6,
          repeat: isActive ? Infinity : 0,
          repeatDelay: 1
        }}
      >
        {station.number}
      </motion.div>

      {/* Hover Glow Effect */}
      {!isActive && (
        <div className="absolute inset-0 rounded-full bg-tata-lightblue opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      )}

      {/* Active Indicator Ring */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-tata-lightblue"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.3, 1.3],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        />
      )}
    </motion.div>
  );
};

export default StationNode;
