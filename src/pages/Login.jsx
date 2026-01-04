import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const Login = () => {
  const { login } = useApp();

  return (
    <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#151525]/80 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 shadow-2xl w-full max-w-md relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-white font-black text-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)]">T</div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter">TML Digital Lab</h1>
          <p className="text-purple-400/60 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Industrial Portal</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); login({ email: 'admin@tata.com', password: 'password' }); }}>
          <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 text-white transition-all" placeholder="Employee ID" required />
          <input type="password" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 text-white transition-all" placeholder="Password" required />
          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl mt-4 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all">Authorize Entry</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
