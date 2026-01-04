import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const LineCard = ({ line, index }) => {
  const navigate = useNavigate();
  const { deleteLine, selectLine } = useApp();

  const handleViewDetails = () => {
    selectLine(line.id);
    navigate(`/line/${line.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete ${line.name}?`)) {
      deleteLine(line.id);
    }
  };

  return (
    <motion.div
      className="card cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={handleViewDetails}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-tata-darkblue mb-2">{line.name}</h3>
          <p className="text-sm text-industrial-600">{line.description}</p>
        </div>
        <div className="w-12 h-12 bg-tata-blue rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">{line.stationCount}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-tata-blue">{line.stationCount}</p>
          <p className="text-xs text-industrial-600 mt-1">Stations</p>
        </div>
        <div className="text-center border-x border-industrial-200">
          <p className="text-3xl font-bold text-industrial-700">{line.videosUploaded}</p>
          <p className="text-xs text-industrial-600 mt-1">Videos Uploaded</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-industrial-700">{line.videosProcessed}</p>
          <p className="text-xs text-industrial-600 mt-1">Videos Processed</p>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <motion.button
          className="btn-primary flex-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewDetails}
        >
          View Details
        </motion.button>
        <motion.button
          className="btn-secondary px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDelete}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LineCard;
