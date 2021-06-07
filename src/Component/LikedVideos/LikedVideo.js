import React from "react";
import { NavLink } from "react-router-dom";
import { Toaster } from "../Utils/Toaster";

import { useLikedVideoContext } from "../../Contexter/likedVideosContext";

export function LikedVideo() {
  const { likeList, dispatchlike } = useLikedVideoContext();
  //console.log("videos liked", likedVideosInList);

  function Remove(itemId) {
    //console.log(itemId);
    // const LikedVideosRemover = likedVideosInList.filter(
    //   (video) => video.videoId !== itemId
    // );
    // setLikedVideoInList(LikedVideosRemover);
    dispatchlike({ type: "REMOVE_FROM_LIKED", payload: itemId });
    Toaster("Removed from liked videos");
  }

  return (
    <div>
      <h1>Liked Videos List</h1>
      <ul style={{ padding: "0px" }}>
        {likeList.map((item) => (
          <li key={item.videoId} style={{ listStyleType: "none",display: "inline-block"}}>
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
        ))}
      </ul>
    </div>
  );
}
