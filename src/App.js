import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import VideoList from './components/VideoList';
import './components/Style.css';

function App() {

  const [selectedVideo, setSelectedVideo] = useState('');
  const [videoList, setVideoList] = useState(null);

  return (
    <div className="App">
      <Header setVideoList={setVideoList}></Header>
      <VideoList videoList={videoList} setSelectedVideo={setSelectedVideo}></VideoList>
      <footer>
        <p>Code by José Luis de la Hoz</p>
      </footer>
    </div>
  );
}

export default App;
