import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Shield, LogOut, Cpu, Trash2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AddLineModal from '../components/AddLineModal';
import { useApp } from '../context/AppContext';

const Home = () => {
  const { user, lines, addLine, deleteLine, logout } = useApp();
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddLine = (data) => {
    // Assuming addLine from context handles the logic
    addLine(data);
  };

  const handleRemoveLine = (id, e) => {
    e.stopPropagation();
    deleteLine(id);
  }

  return (
    <div className="min-h-screen bg-[#0a0a12] text-slate-300 font-sans selection:bg-purple-500 selection:text-white">
      <nav className="fixed top-0 inset-x-0 h-20 bg-[#0a0a12]/80 backdrop-blur-xl border-b border-white/5 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-black">T</div>
          <span className="font-black text-white tracking-tighter text-xl uppercase">TML <span className="text-purple-500 ml-1">Digital Lab</span></span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] font-black text-white uppercase">{user?.name || "Admin Engineer"}</p>
            <p className="text-[9px] text-purple-400 font-bold opacity-60">System Admin</p>
          </div>
          <button onClick={logout} className="p-2.5 bg-white/5 text-purple-400 hover:text-red-500 rounded-xl border border-white/5 transition-all"><LogOut size={18} /></button>
        </div>
      </nav>

      <div className="pt-28 px-8 pb-40 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2 text-purple-500"><Shield size={16} /><span className="text-[10px] font-black uppercase tracking-[0.4em]">Control Center</span></div>
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Production Lines</h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/40" size={18} />
              <input
                className="pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl w-full sm:w-80 outline-none focus:border-purple-500 text-white transition-all"
                placeholder="Identify Unit..." value={search} onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-black rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:bg-purple-500 transition-all active:scale-95"
            >
              <Plus size={20} />
              <span className="uppercase tracking-widest text-xs">Initialize Unit</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {lines.filter(l => l.name.toLowerCase().includes(search.toLowerCase())).map(line => (
              <motion.div
                layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }} key={line.id}
                className="bg-[#151525]/80 border border-white/10 rounded-[3rem] p-10 cursor-pointer group relative overflow-hidden"
                onClick={() => navigate(`/line/${line.id}`)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all"><Cpu size={28} /></div>
                  <button
                    onClick={(e) => handleRemoveLine(line.id, e)}
                    className="p-3 text-purple-400/20 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{line.name}</h3>
                <p className="text-[10px] text-purple-400/60 font-black uppercase tracking-widest mb-8 h-10 line-clamp-2 leading-relaxed">{line.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[8px] font-black text-purple-400/40 uppercase mb-1">Stations</p>
                    <p className="text-lg font-black text-white">{line.stationCount}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[8px] font-black text-purple-400/40 uppercase mb-1">Processed</p>
                    {/* Mapping videosProcessed from context to match snippet look */}
                    <p className="text-lg font-black text-purple-400">{line.videosProcessed}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:bg-purple-600 transition-all">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Enter Dashboard</span>
                  <ChevronRight size={18} className="text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <AddLineModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddLine}
          />
        )}
      </AnimatePresence>

      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-[#151525]/90 backdrop-blur-2xl py-4 px-10 rounded-full text-[9px] text-purple-400/40 font-black uppercase tracking-[0.5em] flex justify-between items-center z-50 border border-white/5">
        <span>© 2026 TATA MOTORS</span>
        <span className="text-purple-500">Secure Industrial MOST Protocol</span>
      </footer>
    </div>
  );
};

export default Home;
