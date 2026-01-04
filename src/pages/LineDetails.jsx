import { useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, LockKeyhole, Video, PlayCircle, Workflow, Download, Upload } from 'lucide-react';
import AnimatedLine from '../components/AnimatedLine';
import { useApp } from '../context/AppContext';

const LineDetails = () => {
  const { lineId } = useParams();
  const navigate = useNavigate();
  const { lines } = useApp();
  const [selectedStation, setSelectedStation] = useState(null);
  const fileInputRef = useRef(null);

  const line = lines.find(l => l.id === parseInt(lineId));

  // Handle file upload
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // TODO: Implement video upload logic here
      // This would typically upload to a server or process the file
      alert(`Video selected: ${file.name}\nUpload functionality will be implemented here.`);
    }
  };

  // Handle download of MOST analysis results
  const handleDownload = () => {
    if (!currentData?.analysis || currentData.analysis.length === 0) {
      alert('No analysis data available to download');
      return;
    }

    // Create CSV content
    const headers = ['Sequence ID', 'Description', 'TMU'];
    const rows = currentData.analysis.map(row => [row.id, row.d, row.t]);
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MOST_Analysis_Station_${selectedStation.number}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Helper to get data for specific station from line data
  const currentData = useMemo(() => {
    if (!selectedStation || !line) return null;

    return {
      videos: selectedStation.videos?.map(v => ({
        id: v.id,
        name: v.name,
        date: v.uploadDate || '2023-12-01',
        duration: v.duration || '00:00'
      })) || [],
      analysis: selectedStation.mostData?.operations?.map((op, i) => ({
        id: op.method || `OP-${i}`,
        d: op.step || op.description || 'Operation',
        t: op.tmu || 0
      })) || []
    };
  }, [selectedStation, line]);

  if (!line) {
    return (
      <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center">
        <div className="text-white text-xl">Line not found</div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 md:px-10 pb-32 max-w-[1400px] mx-auto min-h-screen bg-[#0a0a12] text-slate-300">
      <div className="flex items-center gap-6 mb-12">
        <button onClick={() => navigate('/home')} className="p-3 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase">{line.name}</h2>
          <p className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] mt-1">Live Manufacturing Sequence</p>
        </div>
      </div>

      <AnimatedLine
        line={line}
        selectedStation={selectedStation}
        onStationClick={setSelectedStation}
      />

      <AnimatePresence mode="wait">
        {!selectedStation ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="w-full py-24 bg-[#151525]/20 border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 text-purple-500/40"
            >
              <LockKeyhole size={30} />
            </motion.div>
            <h3 className="text-xl font-black text-white uppercase tracking-widest">Awaiting Node Selection</h3>
            <p className="text-purple-400/40 text-xs mt-2">Select a station from the snake diagram to authorize telemetry</p>
          </motion.div>
        ) : (
          <motion.div
            key="data"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* LEFT SIDE: Video Feed & Upload */}
            <div className="bg-[#151525]/60 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-md">
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="video/*"
                className="hidden"
              />

              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h4 className="font-black text-white flex items-center gap-3 uppercase text-sm">
                  <Video size={18} className="text-purple-500" />
                  Live Station Feed
                </h4>
                <div className="px-4 py-1.5 bg-green-500/10 text-green-500 text-[10px] font-black rounded-full border border-green-500/20">
                  CONNECTED
                </div>
              </div>

              <div className="p-8">
                {/* Conditional rendering based on video availability */}
                {currentData?.videos.length > 0 ? (
                  <>
                    {/* Video Player */}
                    <div className="aspect-video bg-black rounded-[2rem] flex items-center justify-center mb-6 relative group border border-white/5 overflow-hidden">
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 text-[10px] font-bold text-white rounded-lg border border-white/10">
                        STATION_{selectedStation.number}_CAM_01
                      </div>
                      <PlayCircle className="text-purple-500 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={60} />
                    </div>

                    {/* Upload Button */}
                    <button onClick={handleUploadClick} className="w-full mb-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all active:scale-95">
                      <Upload size={20} />
                      <span className="uppercase tracking-widest text-xs">Upload New Video</span>
                    </button>

                    {/* Video List */}
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-black text-purple-400/60 uppercase tracking-widest mb-3">Uploaded Videos</h5>
                      {currentData.videos.map(v => (
                        <div key={v.id} className="p-4 bg-white/5 rounded-2xl flex justify-between items-center border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                              <PlayCircle size={16} className="text-purple-400" />
                            </div>
                            <span className="text-xs font-bold text-white">{v.name}</span>
                          </div>
                          <span className="text-[10px] text-purple-400 font-bold">{v.duration}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  /* No videos - Show waiting state */
                  <div className="flex flex-col items-center justify-center py-16">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 border-2 border-purple-500/20"
                    >
                      <Video size={36} className="text-purple-500/40" />
                    </motion.div>
                    <h5 className="text-lg font-black text-white uppercase tracking-wider mb-2">Waiting to Upload Video</h5>
                    <p className="text-xs text-purple-400/60 mb-8">No video has been uploaded for this station yet</p>

                    {/* Upload Button */}
                    <button onClick={handleUploadClick} className="py-4 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all active:scale-95">
                      <Upload size={20} />
                      <span className="uppercase tracking-widest text-xs">Upload Video</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE: MOST Analysis Results */}
            <div className="bg-[#151525]/60 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-md">
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h4 className="font-black text-white flex items-center gap-3 uppercase text-sm">
                  <Workflow size={18} className="text-purple-500" />
                  MOST Cycle Results
                </h4>
                <button onClick={handleDownload} className="p-2.5 bg-white/5 text-purple-400 rounded-xl hover:text-white transition-all">
                  <Download size={16} />
                </button>
              </div>

              {/* Conditional rendering based on video availability */}
              {currentData?.videos.length > 0 ? (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-white/5 border-b border-white/5 text-[10px] text-purple-400/60 font-black uppercase tracking-widest">
                          <th className="px-8 py-4">Sequence ID</th>
                          <th className="px-8 py-4">Description</th>
                          <th className="px-8 py-4 text-right">TMU</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {currentData?.analysis.length > 0 ? currentData.analysis.map((row, i) => (
                          <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="px-8 py-5 font-mono text-xs text-purple-400 font-bold">{row.id}</td>
                            <td className="px-8 py-5 text-[11px] text-white/60 font-bold">{row.d}</td>
                            <td className="px-8 py-5 text-right font-black text-white">{row.t}</td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan="3" className="text-center text-xs text-white/40 py-8">
                              No analysis data available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-8 mt-auto border-t border-white/5 bg-black/20 flex justify-between items-center">
                    <div>
                      <p className="text-[9px] font-black text-purple-400/40 uppercase tracking-widest">Station Cycle Total</p>
                      <p className="text-3xl font-black text-white">
                        {currentData?.analysis.reduce((acc, curr) => acc + curr.t, 0) || 0}
                        <span className="text-xs text-purple-500 ml-1">TMU</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-purple-400/40 uppercase tracking-widest">Performance</p>
                      <p className="text-3xl font-black text-green-400">92%</p>
                    </div>
                  </div>
                </>
              ) : (
                /* No videos - Show waiting state for results */
                <div className="flex flex-col items-center justify-center py-24">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 border-2 border-dashed border-purple-500/20"
                  >
                    <Workflow size={36} className="text-purple-500/40" />
                  </motion.div>
                  <h5 className="text-lg font-black text-white uppercase tracking-wider mb-2">No Output Available</h5>
                  <p className="text-xs text-purple-400/60 text-center max-w-xs">
                    Upload a video to generate MOST analysis results for this station
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LineDetails;
