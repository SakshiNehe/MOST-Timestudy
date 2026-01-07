import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Shield, LogOut, Cpu, Trash2, ChevronRight, BarChart3 } from 'lucide-react';
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
    <div className="min-h-screen bg-[#f5f7fa] text-slate-800 font-sans selection:bg-tata-lightblue selection:text-white">
      <nav className="fixed top-0 inset-x-0 h-20 bg-white/95 backdrop-blur-xl border-b-2 border-slate-200 z-50 px-8 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-tata-blue rounded-xl flex items-center justify-center text-white font-black">T</div>
          <span className="font-black text-slate-900 tracking-tight text-xl uppercase">TML <span className="text-tata-blue ml-1">Digital Lab</span></span>
        </div>
        <div className="flex-1 text-center px-8">
          <h1 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">
            MOST - Maynard Operation Sequence Technique Analysis
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] font-black text-slate-900 uppercase">{user?.name || "Admin Engineer"}</p>
            <p className="text-[9px] text-tata-blue font-bold">System Admin</p>
          </div>
          <button onClick={logout} className="p-2.5 bg-slate-100 text-tata-blue hover:text-red-600 rounded-xl border-2 border-slate-300 transition-all hover:border-red-400"><LogOut size={18} /></button>
        </div>
      </nav>

      <div className="pt-28 px-8 pb-40 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2 text-tata-blue"><Shield size={16} /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Control Center</span></div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase">Production Lines</h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                className="pl-12 pr-6 py-4 bg-white border-2 border-slate-300 rounded-xl w-full sm:w-80 outline-none focus:border-tata-lightblue text-slate-800 transition-all shadow-sm"
                placeholder="Identify Unit..." value={search} onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-300 text-tata-blue font-bold rounded-xl hover:bg-slate-50 hover:border-tata-lightblue transition-all active:scale-95 shadow-sm"
            >
              <BarChart3 size={20} />
              <span className="uppercase tracking-wide text-xs">Dashboard</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-8 py-4 bg-tata-blue text-white font-bold rounded-xl shadow-lg hover:bg-tata-darkblue hover:shadow-xl transition-all active:scale-95"
            >
              <Plus size={20} />
              <span className="uppercase tracking-wide text-xs">Initialize Unit</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {lines.filter(l => l.name.toLowerCase().includes(search.toLowerCase())).map(line => (
              <motion.div
                layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }} key={line.id}
                className="bg-white border-2 border-slate-300 rounded-3xl p-10 cursor-pointer group relative overflow-hidden shadow-lg hover:shadow-xl hover:border-tata-lightblue transition-all"
                onClick={() => navigate(`/line/${line.id}`)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-tata-blue/10 rounded-2xl flex items-center justify-center text-tata-blue group-hover:bg-tata-blue group-hover:text-white transition-all"><Cpu size={28} /></div>
                  <button
                    onClick={(e) => handleRemoveLine(line.id, e)}
                    className="p-3 text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{line.name}</h3>
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wide mb-8 h-10 line-clamp-2 leading-relaxed">{line.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200">
                    <p className="text-[8px] font-black text-slate-600 uppercase mb-1">Stations</p>
                    <p className="text-lg font-black text-slate-900">{line.stationCount}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200">
                    <p className="text-[8px] font-black text-slate-600 uppercase mb-1">Processed</p>
                    {/* Mapping videosProcessed from context to match snippet look */}
                    <p className="text-lg font-black text-tata-blue">{line.videosProcessed}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border-2 border-slate-200 group-hover:bg-tata-blue group-hover:border-tata-blue transition-all">
                  <span className="text-[10px] font-black text-slate-900 group-hover:text-white uppercase tracking-wide">Enter Dashboard</span>
                  <ChevronRight size={18} className="text-slate-900 group-hover:text-white" />
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

      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/95 backdrop-blur-2xl py-4 px-10 rounded-full text-[9px] text-slate-600 font-bold uppercase tracking-[0.3em] flex justify-between items-center z-50 border-2 border-slate-300 shadow-lg">
        <span>© 2026 TATA MOTORS</span>
        <span className="text-tata-blue font-black">Secure Industrial MOST Protocol</span>
      </footer>
    </div>
  );
};

export default Home;
