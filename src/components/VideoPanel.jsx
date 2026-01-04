import { motion } from 'framer-motion';
import { useState } from 'react';

const VideoPanel = ({ station, onUpload }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      const newVideo = {
        name: `video_${Date.now()}.mp4`,
        uploadDate: new Date().toISOString().split('T')[0],
        duration: '3:45'
      };
      onUpload && onUpload(newVideo);
      setIsUploading(false);
    }, 1500);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-tata-darkblue">
            {station?.number} - {station?.name}
          </h3>
          <p className="text-sm text-industrial-600 mt-1">
            {station?.videos?.length || 0} video(s) uploaded
          </p>
        </div>
        <motion.button
          className="btn-primary text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : '+ Upload Video'}
        </motion.button>
      </div>

      {/* Video Grid */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
        {station?.videos && station.videos.length > 0 ? (
          station.videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-industrial-50 rounded-lg p-4 border border-industrial-200 hover:border-tata-blue transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Video Icon */}
                  <div className="w-16 h-16 bg-tata-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  {/* Video Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-industrial-800 truncate">
                      {video.name}
                    </p>
                    <div className="flex gap-4 mt-1 text-xs text-industrial-600">
                      <span>📅 {video.uploadDate}</span>
                      <span>⏱️ {video.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 ml-4">
                  <motion.button
                    className="px-3 py-1.5 bg-tata-blue text-white text-xs rounded-lg hover:bg-tata-darkblue transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Play
                  </motion.button>
                  <motion.button
                    className="px-3 py-1.5 bg-industrial-200 text-industrial-700 text-xs rounded-lg hover:bg-industrial-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-industrial-600 font-medium">No videos uploaded yet</p>
            <p className="text-sm text-industrial-500 mt-2">
              Click "Upload Video" to add operation videos
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VideoPanel;
