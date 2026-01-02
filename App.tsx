import React, { useState } from 'react';
import { AppView } from './types';
import { Dashboard } from './views/Dashboard';
import { Summarizer } from './views/Summarizer';
import { GpaCalculator } from './views/GpaCalculator';
import { Checklist } from './views/Checklist';
import { FileConverter } from './views/FileConverter';
import { AudioTranscriber } from './views/AudioTranscriber';
import { VideoTranscriber } from './views/VideoTranscriber';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard onNavigate={setCurrentView} />;
      case AppView.CONVERTER:
        return <FileConverter onBack={() => setCurrentView(AppView.DASHBOARD)} />;
      case AppView.SUMMARIZER:
        return <Summarizer onBack={() => setCurrentView(AppView.DASHBOARD)} />;
      case AppView.GPA_CALCULATOR:
        return <GpaCalculator onBack={() => setCurrentView(AppView.DASHBOARD)} />;
      case AppView.CHECKLIST:
        return <Checklist onBack={() => setCurrentView(AppView.DASHBOARD)} />;
      case AppView.AUDIO_TRANSCRIBER:
        return <AudioTranscriber onBack={() => setCurrentView(AppView.DASHBOARD)} />;
      case AppView.VIDEO_TRANSCRIBER:
        return <VideoTranscriber onBack={() => setCurrentView(AppView.DASHBOARD)} />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top decorative bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 fixed top-0 left-0 z-50"></div>
      
      <main className="container mx-auto px-4 pt-6 pb-10">
        <div className="transition-opacity duration-300 ease-in-out">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;