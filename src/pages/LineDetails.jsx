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
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
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

  // Helper function to shuffle and generate unique results for each video
  const generateVideoResults = (baseOperations, videoId, videoName) => {
    if (!baseOperations || baseOperations.length === 0) return [];

    // Create a seed based on video ID for consistent randomization
    const seed = videoId * 1000;

    // Shuffle operations based on video ID
    const shuffled = [...baseOperations].sort((a, b) => {
      const hashA = (a.step.charCodeAt(0) + seed) % 100;
      const hashB = (b.step.charCodeAt(0) + seed) % 100;
      return hashA - hashB;
    });

    // Randomly adjust TMU values (±10-20%) based on video
    const adjusted = shuffled.map((op, i) => {
      const variance = ((seed + i * 7) % 30) - 15; // -15% to +15%
      const adjustedTmu = Math.round(op.tmu * (1 + variance / 100));
      return {
        ...op,
        tmu: adjustedTmu
      };
    });

    // Sometimes add or remove an operation
    const shouldModify = (seed % 3) === 0;
    if (shouldModify && adjusted.length > 2) {
      // Remove one operation randomly
      const removeIndex = seed % adjusted.length;
      adjusted.splice(removeIndex, 1);
    }

    return adjusted;
  };

  // Helper to get data for specific station from line data
  const currentData = useMemo(() => {
    if (!selectedStation || !line) return null;

    const videos = selectedStation.videos?.map(v => ({
      id: v.id,
      name: v.name,
      date: v.uploadDate || '2023-12-01',
      duration: v.duration || '00:00'
    })) || [];

    // Set first video as selected by default if not already set
    if (videos.length > 0 && !selectedVideoId) {
      setSelectedVideoId(videos[0].id);
    }

    // Get base operations from station
    const baseOperations = selectedStation.mostData?.operations || [];

    // Get analysis data for the selected video
    const selectedVideo = selectedStation.videos?.find(v => v.id === selectedVideoId);

    // Generate unique results for this video
    let analysis = [];
    if (selectedVideo?.mostData?.operations) {
      // If video has its own mostData, use it
      analysis = selectedVideo.mostData.operations.map((op, i) => ({
        id: op.method || `OP-${i}`,
        d: op.step || op.description || 'Operation',
        t: op.tmu || 0
      }));
    } else if (baseOperations.length > 0) {
      // Otherwise, generate shuffled results from base operations
      const shuffledOps = generateVideoResults(baseOperations, selectedVideoId || 1, selectedVideo?.name || '');
      analysis = shuffledOps.map((op, i) => ({
        id: op.method || `OP-${i}`,
        d: op.step || op.description || 'Operation',
        t: op.tmu || 0
      }));
    }

    return {
      videos,
      analysis,
      selectedVideo: selectedVideo || videos[0]
    };
  }, [selectedStation, line, selectedVideoId]);

  if (!line) {
    return (
      <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
        <div className="text-slate-800 text-xl font-bold">Line not found</div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 md:px-10 pb-32 max-w-[1400px] mx-auto min-h-screen bg-[#f5f7fa] text-slate-800">
      <div className="flex items-center gap-6 mb-12">
        <button onClick={() => navigate('/home')} className="p-3 bg-white border-2 border-slate-300 text-slate-800 rounded-xl hover:bg-slate-100 hover:border-tata-lightblue transition-all shadow-md">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">{line.name}</h2>
          <p className="text-[10px] font-bold text-tata-blue uppercase tracking-[0.2em] mt-1">Live Manufacturing Sequence</p>
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
            className="w-full py-24 bg-white border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center shadow-sm"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 border-2 border-slate-300 text-tata-blue"
            >
              <LockKeyhole size={30} />
            </motion.div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide">Awaiting Node Selection</h3>
            <p className="text-slate-600 text-xs mt-2 font-medium">Select a station from the snake diagram to authorize telemetry</p>
          </motion.div>
        ) : (
          <motion.div
            key="data"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* LEFT SIDE: Video Feed & Upload */}
            <div className="bg-white border-2 border-slate-300 rounded-3xl overflow-hidden shadow-lg">
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="video/*"
                className="hidden"
              />

              <div className="p-8 border-b-2 border-slate-200 flex justify-between items-center bg-slate-50">
                <h4 className="font-black text-slate-900 flex items-center gap-3 uppercase text-sm">
                  <Video size={18} className="text-tata-blue" />
                  Station Video Feed
                </h4>
                <button onClick={handleUploadClick} className="px-4 py-2 bg-tata-blue text-white font-bold rounded-lg flex items-center gap-2 hover:bg-tata-darkblue transition-all active:scale-95 text-xs">
                  <Upload size={16} />
                  <span>Upload</span>
                </button>
              </div>

              <div className="p-8">
                {/* Conditional rendering based on video availability */}
                {currentData?.videos.length > 0 ? (
                  <>
                    {/* Video Player */}
                    <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center mb-6 relative group border-2 border-slate-300 overflow-hidden shadow-md">
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-slate-800/90 text-[10px] font-bold text-white rounded-lg border border-slate-600">
                        STATION_{selectedStation.number}_CAM_01
                      </div>
                      {currentData.selectedVideo && (
                        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-tata-blue/90 text-[10px] font-bold text-white rounded-lg">
                          {currentData.selectedVideo.name}
                        </div>
                      )}
                      <PlayCircle className="text-tata-lightblue opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={60} />
                    </div>

                    {/* Video List with Review Buttons */}
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-black text-slate-600 uppercase tracking-wide mb-3">Uploaded Videos</h5>
                      {currentData.videos.map(v => (
                        <div
                          key={v.id}
                          className={`p-4 rounded-xl flex justify-between items-center border-2 transition-all ${selectedVideoId === v.id
                            ? 'bg-tata-blue/10 border-tata-blue'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-tata-lightblue'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedVideoId === v.id ? 'bg-tata-blue text-white' : 'bg-tata-blue/10 text-tata-blue'
                              }`}>
                              <PlayCircle size={16} />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-900 block">{v.name}</span>
                              <span className="text-[10px] text-slate-600">{v.duration}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              if (selectedVideoId !== v.id) {
                                setIsProcessing(true);
                                setTimeout(() => {
                                  setSelectedVideoId(v.id);
                                  setTimeout(() => setIsProcessing(false), 400);
                                }, 300);
                              }
                            }}
                            disabled={isProcessing}
                            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${selectedVideoId === v.id
                              ? 'bg-tata-blue text-white'
                              : 'bg-slate-200 text-slate-700 hover:bg-tata-blue hover:text-white disabled:opacity-50'
                              }`}
                          >
                            {selectedVideoId === v.id ? 'Reviewing' : 'Review'}
                          </button>
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
            <div className="bg-white border-2 border-slate-300 rounded-3xl overflow-hidden shadow-lg relative">
              {/* Processing Overlay */}
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-tata-blue/20 border-t-tata-blue rounded-full mb-4"
                  />
                  <p className="text-sm font-bold text-tata-blue uppercase tracking-wide">Processing Analysis...</p>
                  <p className="text-xs text-slate-600 mt-2">Generating MOST results</p>
                </motion.div>
              )}

              <div className="p-8 border-b-2 border-slate-200 flex justify-between items-center bg-slate-50">
                <h4 className="font-black text-slate-900 flex items-center gap-3 uppercase text-sm">
                  <Workflow size={18} className="text-tata-blue" />
                  MOST Cycle Results
                </h4>
                <button onClick={handleDownload} className="p-2.5 bg-slate-100 text-tata-blue border-2 border-slate-300 rounded-xl hover:bg-tata-blue hover:text-white transition-all">
                  <Download size={16} />
                </button>
              </div>

              {/* Conditional rendering based on video availability */}
              {currentData?.videos.length > 0 ? (
                <>
                  <motion.div
                    key={selectedVideoId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-x-auto"
                  >
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-50 border-b-2 border-slate-200 text-[10px] text-slate-700 font-black uppercase tracking-wide">
                          <th className="px-8 py-4">Sequence ID</th>
                          <th className="px-8 py-4">Description</th>
                          <th className="px-8 py-4 text-right">TMU</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {currentData?.analysis.length > 0 ? currentData.analysis.map((row, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="hover:bg-slate-50 transition-colors"
                          >
                            <td className="px-8 py-5 font-mono text-xs text-tata-blue font-bold">{row.id}</td>
                            <td className="px-8 py-5 text-[11px] text-slate-700 font-semibold">{row.d}</td>
                            <td className="px-8 py-5 text-right font-black text-slate-900">{row.t}</td>
                          </motion.tr>
                        )) : (
                          <tr>
                            <td colSpan="3" className="text-center text-xs text-slate-500 py-8 font-medium">
                              No analysis data available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </motion.div>

                  <div className="p-8 mt-auto border-t-2 border-slate-200 bg-slate-50 flex justify-between items-center">
                    <div>
                      <p className="text-[9px] font-black text-slate-600 uppercase tracking-wide">Station Cycle Total</p>
                      <motion.p
                        key={`total-${selectedVideoId}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="text-3xl font-black text-slate-900"
                      >
                        {currentData?.analysis.reduce((acc, curr) => acc + curr.t, 0) || 0}
                        <span className="text-xs text-tata-blue ml-1 font-bold">TMU</span>
                      </motion.p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-slate-600 uppercase tracking-wide">Performance</p>
                      <p className="text-3xl font-black text-green-600">92%</p>
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
