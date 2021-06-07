import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { VideoListingPage } from "./Component/Video/VideoListingPage";
import { VideoPlayer } from "./Component/Video/VideoPlayer";
import { RecentlyWatched } from "./Component/RecentlyWatched/RecentlyWatched";
import { LikedVideo } from "./Component/LikedVideos/LikedVideo";
import { WatchLater } from "./Component/WatchLater/WatchLater";
import { PlayList } from "../src/Component/PlayList/PlayList";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={<VideoListingPage />} />
        <Route path="/videoplayer/:id" element={<VideoPlayer />} />
        <Route path="/recentlywatched" element={<RecentlyWatched />} />
        <Route path="/likedvideos" element={<LikedVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<PlayList/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
