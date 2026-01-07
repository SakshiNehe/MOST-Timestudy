import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BarChart3, TrendingUp, Activity, Clock, CheckCircle, AlertCircle, ArrowLeft, Cpu, Video } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { lines } = useApp();

  // Calculate statistics
  const totalLines = lines.length;
  const totalStations = lines.reduce((sum, line) => sum + line.stationCount, 0);
  const totalVideos = lines.reduce((sum, line) => sum + line.videosUploaded, 0);
  const totalProcessed = lines.reduce((sum, line) => sum + line.videosProcessed, 0);
  const processingRate = totalVideos > 0 ? ((totalProcessed / totalVideos) * 100).toFixed(1) : 0;

  // Get top performing lines
  const topLines = [...lines]
    .sort((a, b) => b.videosProcessed - a.videosProcessed)
    .slice(0, 5);

  // Calculate average stations per line
  const avgStations = (totalStations / totalLines).toFixed(1);

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-800">
      {/* Header */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-white/95 backdrop-blur-xl border-b-2 border-slate-200 z-50 px-8 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/home')}
            className="p-2.5 bg-slate-100 text-tata-blue hover:text-slate-900 rounded-xl border-2 border-slate-300 transition-all hover:border-tata-lightblue"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="w-10 h-10 bg-tata-blue rounded-xl flex items-center justify-center text-white font-black">T</div>
          <span className="font-black text-slate-900 tracking-tight text-xl uppercase">TML <span className="text-tata-blue ml-1">Digital Lab</span></span>
        </div>
        <div className="flex-1 text-center px-8">
          <h1 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">
            Analytics Dashboard
          </h1>
        </div>
        <div className="w-10"></div>
      </nav>

      <div className="pt-28 px-8 pb-20 max-w-[1600px] mx-auto">
        {/* Page Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2 text-tata-blue">
            <BarChart3 size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Production Analytics</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase mb-2">Performance Overview</h2>
          <p className="text-slate-600 text-sm font-medium">Real-time insights into MOST analysis operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Total Lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ delay: 0.1 }}
            className="bg-white border-2 border-slate-300 rounded-2xl p-8 shadow-lg cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className="w-12 h-12 bg-tata-blue/10 rounded-xl flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Cpu size={24} className="text-tata-blue" />
              </motion.div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-wide">Total Lines</p>
                <motion.p
                  className="text-4xl font-black text-slate-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  {totalLines}
                </motion.p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-600 text-xs font-bold">
              <TrendingUp size={14} />
              <span>All systems operational</span>
            </div>
          </motion.div>

          {/* Total Stations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-slate-300 rounded-2xl p-8 shadow-lg cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <Activity size={24} className="text-indigo-600" />
              </motion.div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-wide">Total Stations</p>
                <motion.p
                  className="text-4xl font-black text-slate-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  {totalStations}
                </motion.p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold">
              <Clock size={14} />
              <span>Avg {avgStations} per line</span>
            </div>
          </motion.div>

          {/* Videos Uploaded */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ delay: 0.3 }}
            className="bg-white border-2 border-slate-300 rounded-2xl p-8 shadow-lg cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
              >
                <Video size={24} className="text-blue-600" />
              </motion.div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-wide">Videos Uploaded</p>
                <motion.p
                  className="text-4xl font-black text-slate-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  {totalVideos}
                </motion.p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold">
              <CheckCircle size={14} />
              <span>{totalProcessed} processed</span>
            </div>
          </motion.div>
        </div>


        {/* Top Performing Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white border-2 border-slate-300 rounded-3xl p-10 shadow-lg mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">Top Performing Lines</h3>
              <p className="text-xs text-slate-600 font-bold uppercase tracking-wide">Ranked by videos processed</p>
            </div>
            <div className="px-4 py-2 bg-tata-blue/10 text-tata-blue text-xs font-black rounded-full border-2 border-tata-blue/20">
              TOP {topLines.length}
            </div>
          </div>

          <div className="space-y-4">
            {topLines.map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => navigate(`/line/${line.id}`)}
                className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:bg-slate-100 hover:border-tata-lightblue transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  {/* Rank */}
                  <motion.div
                    className="w-12 h-12 bg-tata-blue/20 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl font-black text-tata-blue">#{index + 1}</span>
                  </motion.div>

                  {/* Line Info */}
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-slate-900 mb-1">{line.name}</h4>
                    <p className="text-xs text-slate-600 font-semibold">{line.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-slate-600 uppercase mb-1">Stations</p>
                      <p className="text-xl font-black text-slate-900">{line.stationCount}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black text-slate-600 uppercase mb-1">Uploaded</p>
                      <p className="text-xl font-black text-blue-600">{line.videosUploaded}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black text-slate-600 uppercase mb-1">Processed</p>
                      <p className="text-xl font-black text-green-600">{line.videosProcessed}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Lines Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white border-2 border-slate-300 rounded-3xl overflow-hidden shadow-lg"
        >
          <div className="p-10 border-b-2 border-slate-200 bg-slate-50">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">All Production Lines</h3>
            <p className="text-xs text-slate-600 font-bold uppercase tracking-wide">Complete system overview</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b-2 border-slate-200 text-[10px] text-slate-700 font-black uppercase tracking-wide">
                  <th className="px-8 py-4 text-left">Line Name</th>
                  <th className="px-8 py-4 text-left">Description</th>
                  <th className="px-8 py-4 text-center">Stations</th>
                  <th className="px-8 py-4 text-center">Uploaded</th>
                  <th className="px-8 py-4 text-center">Processed</th>
                  <th className="px-8 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {lines.map((line, index) => (
                  <motion.tr
                    key={line.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    onClick={() => navigate(`/line/${line.id}`)}
                    className="hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <td className="px-8 py-5 font-black text-slate-900">{line.name}</td>
                    <td className="px-8 py-5 text-xs text-slate-600 font-semibold max-w-xs truncate">{line.description}</td>
                    <td className="px-8 py-5 text-center font-black text-slate-900">{line.stationCount}</td>
                    <td className="px-8 py-5 text-center font-black text-blue-600">{line.videosUploaded}</td>
                    <td className="px-8 py-5 text-center font-black text-green-600">{line.videosProcessed}</td>
                    <td className="px-8 py-5 text-center">
                      {line.videosProcessed === line.videosUploaded && line.videosUploaded > 0 ? (
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black rounded-full border-2 border-green-300">
                          COMPLETE
                        </span>
                      ) : line.videosProcessed > 0 ? (
                        <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-black rounded-full border-2 border-yellow-300">
                          IN PROGRESS
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-tata-blue/10 text-tata-blue text-[10px] font-black rounded-full border-2 border-tata-blue/20">
                          READY
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
