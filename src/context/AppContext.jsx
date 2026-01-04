import { createContext, useContext, useState } from 'react';
import { mockLines, mockUser } from '../data/mockData';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [lines, setLines] = useState(mockLines);
  const [selectedLine, setSelectedLine] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);

  const login = (credentials) => {
    // Mock login - in real app, this would validate against backend
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setSelectedLine(null);
    setSelectedStation(null);
  };

  const addLine = (lineData) => {
    const newLine = {
      id: lines.length + 1,
      ...lineData,
      videosUploaded: 0,
      videosProcessed: 0,
      stations: Array.from({ length: lineData.stationCount }, (_, i) => ({
        id: Date.now() + i,
        number: `S${i + 1}`,
        name: `Station ${i + 1}`,
        videos: [],
        mostData: null
      }))
    };
    setLines([...lines, newLine]);
    return newLine;
  };

  const deleteLine = (lineId) => {
    setLines(lines.filter(line => line.id !== lineId));
    if (selectedLine?.id === lineId) {
      setSelectedLine(null);
      setSelectedStation(null);
    }
  };

  const selectLine = (lineId) => {
    const line = lines.find(l => l.id === lineId);
    setSelectedLine(line);
    setSelectedStation(line?.stations[0] || null);
  };

  const selectStation = (stationId) => {
    if (selectedLine) {
      const station = selectedLine.stations.find(s => s.id === stationId);
      setSelectedStation(station);
    }
  };

  const addVideoToStation = (lineId, stationId, videoData) => {
    setLines(lines.map(line => {
      if (line.id === lineId) {
        return {
          ...line,
          videosUploaded: line.videosUploaded + 1,
          stations: line.stations.map(station => {
            if (station.id === stationId) {
              return {
                ...station,
                videos: [...station.videos, { id: Date.now(), ...videoData }]
              };
            }
            return station;
          })
        };
      }
      return line;
    }));
  };

  const value = {
    isAuthenticated,
    user,
    lines,
    selectedLine,
    selectedStation,
    login,
    logout,
    addLine,
    deleteLine,
    selectLine,
    selectStation,
    addVideoToStation
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
