import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus } from 'lucide-react';

const AddLineModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({ name: '', stationCount: 8, description: '' });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-white border-2 border-slate-300 w-full max-w-lg rounded-3xl p-10 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8">
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
        </div>
        <div className="mb-8">
          <div className="w-12 h-12 bg-tata-blue/10 rounded-xl flex items-center justify-center text-tata-blue mb-4"><Plus size={24} /></div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Initialize Line</h2>
          <p className="text-slate-600 text-xs font-bold uppercase tracking-wide mt-1">Configure New Production Environment</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onAdd(formData); onClose(); }}>
          <div>
            <label className="text-[10px] font-black text-slate-700 uppercase tracking-wide block mb-2">Line Identifier</label>
            <input
              required
              className="w-full bg-white border-2 border-slate-300 rounded-xl px-6 py-4 outline-none focus:border-tata-lightblue text-slate-900 transition-all"
              placeholder="e.g. Safari Chassis Assembly"
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-slate-700 uppercase tracking-wide block mb-2">Stations</label>
              <input
                type="number" required min="1" max="520"
                className="w-full bg-white border-2 border-slate-300 rounded-xl px-6 py-4 outline-none focus:border-tata-lightblue text-slate-900 transition-all"
                placeholder="8"
                onChange={e => setFormData({ ...formData, stationCount: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-700 uppercase tracking-wide block mb-2">Protocol</label>
              <div className="w-full bg-slate-100 border-2 border-slate-300 rounded-xl px-6 py-4 text-slate-600 text-xs font-black">MOST v2.0</div>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-black text-slate-700 uppercase tracking-wide block mb-2">Description</label>
            <textarea
              className="w-full bg-white border-2 border-slate-300 rounded-xl px-6 py-4 outline-none focus:border-tata-lightblue text-slate-900 transition-all resize-none h-24"
              placeholder="Primary operations and assembly scope..."
              onChange={e => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <button className="w-full py-5 bg-tata-blue text-white font-bold rounded-xl shadow-lg hover:bg-tata-darkblue hover:shadow-xl transition-all uppercase tracking-wide text-xs">
            Deploy Production Instance
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddLineModal;
