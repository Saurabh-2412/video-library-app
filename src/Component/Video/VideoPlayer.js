import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "../../App.css";
import { useVideoContext } from "../../Contexter/videoContext";
import { useLikedVideoContext } from "../../Contexter/likedVideosContext";
import { useWatchListContext } from "../../Contexter/watchListContext";
import { usePlaylist } from "../../Contexter/playListContext";
import { Toaster } from "../Utils/Toaster"
import { PlaylistModal } from "../PlayList/PlaylistModal"

import data from "../../Data/Data";

export const VideoPlayer = () => {
  const { id } = useParams();
  //console.log("this is ", id);
  const [suggestedId, setSuggestedId] = useState(id);
  const { history, dispatchgeneral } = useVideoContext();
  const { likeList, text, dispatchlike } = useLikedVideoContext();
  const [ likeText, setLikeText ] = useState("Like");
  const { watchList, dispatchwatchlist } = useWatchListContext();
  const {dispatchplaylist} = usePlaylist();

  const VideoData = data.find((videItem) => videItem.videoId === suggestedId);
  //console.log(VideoData);

  function historyHandler(item){
    setSuggestedId(item.videoId)
    dispatchgeneral({ type: "ADD_TO_HISTORY", payload: item })
  }

  function LikedVideos(item) {
    if (likeList.some((video) => video.videoId === item.videoId)) {
      dispatchlike({ type: "REMOVE_FROM_LIKED", payload: item.videoId });
      dispatchgeneral({ type: "ADD_TO_HISTORY", payload: item });
      Toaster("Removed from liked videos");
    } else {
      dispatchlike({ type: "ADD_TO_LIKED", payload: item });
      dispatchgeneral({ type: "ADD_TO_HISTORY", payload: item });
      Toaster("Added from liked videos");
    }
    if (likeList.some((video) => video.videoId !== item.videoId)) {
      setLikeText("Dislike");
    } else {
      setLikeText("Liked");
    }
  }

  function WatchLaterVideos(item) {
    //console.log("watch later", item);
    if (watchList.some((video) => video.videoId === item.videoId)) {
      dispatchwatchlist({ type: "REMOVE_FROM_WATCHLIST", payload: item.videoId});
      dispatchgeneral({ type: "ADD_TO_HISTORY", payload: item });
      Toaster("Removed from watchlist");
    } else {
      dispatchwatchlist({ type: "ADD_TO_WATCHLIST", payload: item});
      dispatchgeneral({ type: "ADD_TO_HISTORY", payload: item }); 
      Toaster("Added to watch list");
    }
    //note : manage a state for button to enable and disable it
  }

  return (
    <div>
      <div className="videoPlayer">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          controls
          playing={false}
          url={`https://www.youtube.com/watch?${suggestedId}`}
        />
      </div>

      <div className="videoPlayerText">
        <h2>#poetName : {VideoData.poetName}</h2>
        <h4>#topic : {VideoData.topic}</h4>
        <button onClick={() => LikedVideos(VideoData)}>{likeText}</button>
        <button onClick={() => WatchLaterVideos(VideoData)}>WatchLater</button>
        <button onClick={() => dispatchplaylist({type: "SHOW_PLAYLIST_MODAL"})}>Playlist</button>
      </div>

      <PlaylistModal VideoData={VideoData}/>

      {/* Suggested List */}
      <div className="scrollmenu">
        <ul style={{ padding: "0px" }}>
          <h1 style={{ fontFamily: "italic", color: "orange" }}>
            #suggestedList
          </h1>
          {data.map(function (item) {
            return (
              <li key={item.videoId}>
                <br />
                <h3>#poetName : {item.poetName}</h3>
                <span style={{ color: "orange" }}>#topic : {item.topic}</span><br />
                <img
                  src={`https://img.youtube.com/vi/${item.videoImageId}/mqdefault.jpg`}
                  alt=""
                  onClick={() => historyHandler(item)}
                />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
