import { motion } from 'framer-motion';

const OutputSheet = ({ station }) => {
  const mostData = station?.mostData;

  if (!mostData) {
    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 h-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-tata-darkblue mb-6">MOST Analysis Output</h3>
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-industrial-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-industrial-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-industrial-600 font-medium">No MOST analysis available</p>
          <p className="text-sm text-industrial-500 mt-2">
            Upload and process videos to generate MOST data
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-tata-darkblue">MOST Analysis Output</h3>
        <motion.button
          className="btn-secondary text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📥 Download Excel
        </motion.button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.div
          className="bg-gradient-to-br from-tata-blue to-tata-darkblue rounded-lg p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-sm opacity-90 mb-1">Total TMU</p>
          <p className="text-3xl font-bold">{mostData.tmu}</p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-industrial-600 to-industrial-800 rounded-lg p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm opacity-90 mb-1">Cycle Time</p>
          <p className="text-3xl font-bold">{mostData.cycleTime}</p>
        </motion.div>
      </div>

      {/* MOST Parameters */}
      <motion.div
        className="bg-industrial-50 rounded-lg p-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="font-semibold text-industrial-800 mb-3">MOST Parameters</h4>
        <div className="grid grid-cols-4 gap-3">
          {Object.entries(mostData.parameters).map(([key, value], index) => (
            <motion.div
              key={key}
              className="bg-white rounded-lg p-3 text-center border border-industrial-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              <p className="text-xs text-industrial-600 mb-1">{key}</p>
              <p className="text-xl font-bold text-tata-blue">{value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Operations Table */}
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="font-semibold text-industrial-800 mb-3">Operation Breakdown</h4>
        <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-tata-darkblue text-white sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">#</th>
                <th className="px-4 py-3 text-left font-semibold">Operation Step</th>
                <th className="px-4 py-3 text-center font-semibold">MOST Method</th>
                <th className="px-4 py-3 text-right font-semibold">TMU</th>
              </tr>
            </thead>
            <tbody>
              {mostData.operations.map((operation, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-industrial-200 hover:bg-industrial-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <td className="px-4 py-3 font-medium text-industrial-600">{index + 1}</td>
                  <td className="px-4 py-3 text-industrial-800">{operation.step}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="bg-tata-blue bg-opacity-10 text-tata-blue px-3 py-1 rounded-full font-mono text-xs">
                      {operation.method}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-tata-blue">
                    {operation.tmu}
                  </td>
                </motion.tr>
              ))}
            </tbody>
            <tfoot className="bg-industrial-100 sticky bottom-0">
              <tr>
                <td colSpan="3" className="px-4 py-3 text-right font-bold text-industrial-800">
                  Total TMU:
                </td>
                <td className="px-4 py-3 text-right font-bold text-tata-blue text-lg">
                  {mostData.tmu}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OutputSheet;
