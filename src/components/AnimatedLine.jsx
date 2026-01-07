import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLine = ({ line, selectedStation, onStationClick }) => {
  const stations = useMemo(() => line?.stations || [], [line]);
  const columns = 4;
  const stationCount = stations.length;

  return (
    <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 md:p-12 relative overflow-hidden w-full max-w-5xl mx-auto mb-12 shadow-lg">

      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.03),transparent_70%)]" />

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
                <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-[55%] h-[2px] bg-slate-200 hidden md:block overflow-hidden z-0">
                  <motion.div
                    animate={{ left: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-tata-lightblue to-transparent shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  />
                </div>
              )}

              {/* 2. Fixed Snake Curve (Connecting end of row back to start of next row) */}
              {showSnakeCurve && (
                <div className="absolute top-1/2 left-1/2 w-[350%] h-[112px] pointer-events-none hidden md:block z-0">
                  <svg className="w-full h-full overflow-visible">
                    {/* The path moves from current node (far right), 
                        curves 180 degrees, and shoots back to the far left node.
                      */}
                    <path
                      d="M 50 0 C 130 0, 130 112, 50 112 L -750 112"
                      fill="transparent"
                      stroke="rgba(148,163,184,0.3)"
                      strokeWidth="2"
                    />
                    <motion.path
                      d="M 50 0 C 130 0, 130 112, 50 112 L -750 112"
                      fill="transparent"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="60 1000"
                      animate={{ strokeDashoffset: [-1000, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                      className="drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"
                    />
                  </svg>
                </div>
              )}

              {/* Station Node */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onStationClick(station)}
                className={`relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-2xl flex flex-col items-center justify-center border-3 transition-all duration-500
                    ${isSelected
                    ? 'bg-tata-blue border-tata-lightblue text-white shadow-[0_0_30px_rgba(30,58,138,0.3)]'
                    : 'bg-white border-slate-300 text-slate-400 hover:border-tata-lightblue hover:text-tata-blue'
                  }`}
              >
                {/* Floating Green Cursor Point */}
                <AnimatePresence mode='popLayout'>
                  {isSelected && (
                    <motion.div
                      layoutId="green-cursor"
                      className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full z-30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                      <div className="absolute inset-[-4px] rounded-full bg-emerald-500/30 blur-[2px]"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <span className="text-[7px] font-bold uppercase opacity-40 tracking-[0.2em]">Node</span>
                <span className="text-base font-black leading-none mt-1">STATION</span>
                <span className="text-3xl font-black">{station.number ? station.number.replace('S', '') : stationNum}</span>

                {/* Inner selection glow */}
                {isSelected && (
                  <motion.div
                    layoutId="inner-glow"
                    className="absolute inset-0 rounded-2xl bg-tata-lightblue/10 blur-md pointer-events-none"
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
