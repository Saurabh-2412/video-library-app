import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useVideoContext } from "../../Contexter/videoContext";
import { useLikedVideoContext } from "../../Contexter/likedVideosContext";
import { Toaster } from "../Utils/Toaster";

export function RecentlyWatched() {
  const { history, dispatchgeneral } = useVideoContext();
  const { likeList, text, dispatchlike } = useLikedVideoContext();

  //console.log("videos in list history", videosInList);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        "https://VideoLibraryData.saurabhsharma11.repl.co/v1/recentlyPlayedVideos"
      );
      dispatchgeneral({ type: "LOADING_HISTORY", payload: data.foundRecentlyPlayedVideos });
    })();
  },[dispatchgeneral]);

  async function Remove(itemId) {
    const { data } = await axios.delete(
      `https://VideoLibraryData.saurabhsharma11.repl.co/v1/recentlyPlayedVideos/${itemId}`
    );
    //console.log(data.video);
    dispatchgeneral({ type: "REMOVE_FROM_HISTORY", payload: data.video });
    Toaster("Removed from history");
  }

  return (
    <div>
      <h1>RecentlyWatched</h1>
      <ul style={{ padding: "0px" }}>
        {history.map(function (item) {
          return (
            <li key={item.videoId}
              style={{listStyleType: "none",display: "inline-block"}}>
              <div className="card-row">
                <div className="card">
                  <NavLink to={`/videoplayer/${item.videoId}`} className="link">
                    <img
                      src={`https://img.youtube.com/vi/${item.videoImageId}/mqdefault.jpg`}
                      alt=""
                    />
                  </NavLink>
                  <div className="" style={{backgroundColor:"#41464b"}}>
                    <h3 style={{margin:"0",color:"orange"}} className="">Poet Name : {item.poetName}</h3>
                    <span style={{fontWeight:"600",color:"orange"}}>#Topic : {item.topic}</span><br/><br/>
                    <button style={{marginBottom:"15px"}} className="" onClick={() => Remove(item.videoId)}>Remove</button><br/>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
