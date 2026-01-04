import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLine = ({ line, selectedStation, onStationClick }) => {
  const stations = useMemo(() => line?.stations || [], [line]);
  const columns = 4;
  const stationCount = stations.length;

  return (
    <div className="bg-[#151525]/40 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden w-full max-w-5xl mx-auto mb-12">

      {/* Background Pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)]" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-28 gap-x-8 max-w-4xl mx-auto relative">
        {stations.map((station, idx) => {
          const stationNum = idx + 1; // Visual number
          const isRowEnd = (idx + 1) % columns === 0;
          const isLastStation = idx === stationCount - 1;

          // Connection Logic
          const showHorizontal = !isRowEnd && !isLastStation;
          const showSnakeCurve = isRowEnd && !isLastStation;

          const isSelected = selectedStation?.id === station.id;

          return (
            <div key={station.id} className="relative flex justify-center items-center">

              {/* 1. Horizontal Connectors (Straight Sequence) */}
              {showHorizontal && (
                <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-[55%] h-[1px] bg-white/5 hidden md:block overflow-hidden z-0">
                  <motion.div
                    animate={{ left: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                  />
                </div>
              )}

              {/* 2. Fixed Snake Curve (Connecting end of row back to start of next row) */}
              {showSnakeCurve && (
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[112px] pointer-events-none hidden md:block z-0">
                  <svg className="w-full h-full overflow-visible">
                    {/* The path moves from current node (far right), 
                        curves 180 degrees, and shoots back to the far left.
                      */}
                    <path
                      d="M 50 0 C 130 0, 130 112, 50 112 L -635 112"
                      fill="transparent"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                    <motion.path
                      d="M 50 0 C 130 0, 130 112, 50 112 L -635 112"
                      fill="transparent"
                      stroke="#c084fc"
                      strokeWidth="1.5"
                      strokeDasharray="60 1000"
                      animate={{ strokeDashoffset: [-1000, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                      className="drop-shadow-[0_0_6px_rgba(168,85,247,1)]"
                    />
                  </svg>
                </div>
              )}

              {/* Station Node */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onStationClick(station)}
                className={`relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-[2.2rem] flex flex-col items-center justify-center border-2 transition-all duration-500
                    ${isSelected
                    ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_40px_rgba(147,51,234,0.4)]'
                    : 'bg-[#0a0a12]/80 border-white/5 text-purple-400/20 hover:border-purple-500/40'
                  }`}
              >
                {/* Floating Green Cursor Point */}
                <AnimatePresence mode='popLayout'>
                  {isSelected && (
                    <motion.div
                      layoutId="green-cursor"
                      className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full z-30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                      <div className="absolute inset-[-4px] rounded-full bg-emerald-400/30 blur-[2px]"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <span className="text-[7px] font-bold uppercase opacity-30 tracking-[0.2em]">Node</span>
                <span className="text-base font-black leading-none mt-1">STATION</span>
                <span className="text-3xl font-black">{station.number ? station.number.replace('S', '') : stationNum}</span>

                {/* Inner selection glow */}
                {isSelected && (
                  <motion.div
                    layoutId="inner-glow"
                    className="absolute inset-0 rounded-[2rem] bg-purple-400/5 blur-md pointer-events-none"
                  />
                )}
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedLine;
