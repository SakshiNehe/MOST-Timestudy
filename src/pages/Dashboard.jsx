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
    <div className="min-h-screen bg-[#0a0a12] text-slate-300">
      {/* Header */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-[#0a0a12]/80 backdrop-blur-xl border-b border-white/5 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/home')}
            className="p-2.5 bg-white/5 text-purple-400 hover:text-white rounded-xl border border-white/5 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-black">T</div>
          <span className="font-black text-white tracking-tighter text-xl uppercase">TML <span className="text-purple-500 ml-1">Digital Lab</span></span>
        </div>
        <div className="flex-1 text-center px-8">
          <h1 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">
            Analytics Dashboard
          </h1>
        </div>
        <div className="w-10"></div>
      </nav>

      <div className="pt-28 px-8 pb-20 max-w-[1600px] mx-auto">
        {/* Page Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2 text-purple-500">
            <BarChart3 size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Production Analytics</span>
          </div>
          <h2 className="text-5xl font-black text-white tracking-tighter uppercase mb-2">Performance Overview</h2>
          <p className="text-purple-400/60 text-sm">Real-time insights into MOST analysis operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#151525]/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Cpu size={24} className="text-purple-500" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-purple-400/60 uppercase tracking-widest">Total Lines</p>
                <p className="text-4xl font-black text-white">{totalLines}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
              <TrendingUp size={14} />
              <span>All systems operational</span>
            </div>
          </motion.div>

          {/* Total Stations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#151525]/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                <Activity size={24} className="text-indigo-500" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-purple-400/60 uppercase tracking-widest">Total Stations</p>
                <p className="text-4xl font-black text-white">{totalStations}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
              <Clock size={14} />
              <span>Avg {avgStations} per line</span>
            </div>
          </motion.div>

          {/* Videos Uploaded */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#151525]/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Video size={24} className="text-blue-500" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-purple-400/60 uppercase tracking-widest">Videos Uploaded</p>
                <p className="text-4xl font-black text-white">{totalVideos}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
              <CheckCircle size={14} />
              <span>{totalProcessed} processed</span>
            </div>
          </motion.div>

          {/* Processing Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#151525]/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp size={24} className="text-green-500" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-purple-400/60 uppercase tracking-widest">Success Rate</p>
                <p className="text-4xl font-black text-white">{processingRate}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
              <CheckCircle size={14} />
              <span>Excellent performance</span>
            </div>
          </motion.div>
        </div>

        {/* Top Performing Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#151525]/60 border border-white/10 rounded-[3rem] p-10 backdrop-blur-md mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Top Performing Lines</h3>
              <p className="text-xs text-purple-400/60 font-bold uppercase tracking-widest">Ranked by videos processed</p>
            </div>
            <div className="px-4 py-2 bg-purple-500/10 text-purple-400 text-xs font-black rounded-full border border-purple-500/20">
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
                className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  {/* Rank */}
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-black text-purple-400">#{index + 1}</span>
                  </div>

                  {/* Line Info */}
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-white mb-1">{line.name}</h4>
                    <p className="text-xs text-purple-400/60 font-bold">{line.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-purple-400/40 uppercase mb-1">Stations</p>
                      <p className="text-xl font-black text-white">{line.stationCount}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black text-purple-400/40 uppercase mb-1">Uploaded</p>
                      <p className="text-xl font-black text-blue-400">{line.videosUploaded}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black text-purple-400/40 uppercase mb-1">Processed</p>
                      <p className="text-xl font-black text-green-400">{line.videosProcessed}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-32">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black text-purple-400/40 uppercase">Rate</span>
                      <span className="text-xs font-black text-white">
                        {line.videosUploaded > 0 ? ((line.videosProcessed / line.videosUploaded) * 100).toFixed(0) : 0}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all"
                        style={{
                          width: `${line.videosUploaded > 0 ? (line.videosProcessed / line.videosUploaded) * 100 : 0}%`
                        }}
                      />
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
          className="bg-[#151525]/60 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-md"
        >
          <div className="p-10 border-b border-white/5 bg-white/5">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">All Production Lines</h3>
            <p className="text-xs text-purple-400/60 font-bold uppercase tracking-widest">Complete system overview</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 text-[10px] text-purple-400/60 font-black uppercase tracking-widest">
                  <th className="px-8 py-4 text-left">Line Name</th>
                  <th className="px-8 py-4 text-left">Description</th>
                  <th className="px-8 py-4 text-center">Stations</th>
                  <th className="px-8 py-4 text-center">Uploaded</th>
                  <th className="px-8 py-4 text-center">Processed</th>
                  <th className="px-8 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {lines.map((line, index) => (
                  <motion.tr
                    key={line.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    onClick={() => navigate(`/line/${line.id}`)}
                    className="hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <td className="px-8 py-5 font-black text-white">{line.name}</td>
                    <td className="px-8 py-5 text-xs text-purple-400/60 font-bold max-w-xs truncate">{line.description}</td>
                    <td className="px-8 py-5 text-center font-black text-white">{line.stationCount}</td>
                    <td className="px-8 py-5 text-center font-black text-blue-400">{line.videosUploaded}</td>
                    <td className="px-8 py-5 text-center font-black text-green-400">{line.videosProcessed}</td>
                    <td className="px-8 py-5 text-center">
                      {line.videosProcessed === line.videosUploaded && line.videosUploaded > 0 ? (
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black rounded-full border border-green-500/20">
                          COMPLETE
                        </span>
                      ) : line.videosProcessed > 0 ? (
                        <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-black rounded-full border border-yellow-500/20">
                          IN PROGRESS
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-[10px] font-black rounded-full border border-purple-500/20">
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
