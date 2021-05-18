import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useLikedVideoContext } from "../../Contexter/likedVideosContext";
import { useWatchListContext } from "../../Contexter/watchListContext";

import data from "../../Data/Data";

export const VideoPlayer = () => {
  const { id } = useParams();
  //console.log("this is ", id);
  const [suggestedId, setSuggestedId] = useState(id);
  const { likeList, text, dispatchlike } = useLikedVideoContext();
  const { watchList, dispatchwatchlist } = useWatchListContext();

  const VideoData = data.find((videItem) => videItem.videoId === suggestedId);
  //console.log(VideoData);

  function LikedVideos(item) {
    //console.log("likedVideos", item);
    // if (likedVideosInList.some((video) => video.videoId === item.videoId)) {
    //   setLikedVideoInList([...likedVideosInList]);
    // } else {
    //   setLikedVideoInList([...likedVideosInList, item]);
    // }

    if (likeList.some((video) => video.videoId === item.videoId)) {
      dispatchlike({ type: "REMOVE_FROM_LIKED", payload: item.videoId });
    } else {
      dispatchlike({ type: "ADD_TO_LIKED", payload: item });
    }
    //note : manage a state for button to enable and disable it
  }

  function WatchLaterVideos(item) {
    //console.log("watch later", item);
    if (watchList.some((video) => video.videoId === item.videoId)) {
      dispatchwatchlist({
        type: "REMOVE_FROM_WATCHLIST",
        payload: item.videoId
      });
    } else {
      dispatchwatchlist({
        type: "ADD_TO_WATCHLIST",
        payload: item
      });
    }
    //note : manage a state for button to enable and disable it
  }

  return (
    <>
      <div className="videoPlayer">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          controls
          playing={true}
          url={`https://www.youtube.com/watch?${suggestedId}`}
        />
      </div>
      <div className="videoPlayerText">
        <h2>#poetName : {VideoData.poetName}</h2>
        <h4>#topic : {VideoData.topic}</h4>
        <h4>
          <button onClick={() => LikedVideos(VideoData)}>
            {/* {dispatchlike.text} */}
            {text}
          </button>
          <button onClick={() => WatchLaterVideos(VideoData)}>
            WatchLater
          </button>
        </h4>
      </div>
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
                <span style={{ color: "orange" }}>#topic : {item.topic}</span>
                <br />
                <br />
                <img
                  src={`https://img.youtube.com/vi/${item.videoImageId}/mqdefault.jpg`}
                  alt=""
                  onClick={() => setSuggestedId(item.videoId)}
                />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
