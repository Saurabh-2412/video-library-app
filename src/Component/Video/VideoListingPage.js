import React from "react-dom";
import data from "../../Data/Data";
import { NavLink } from "react-router-dom";
import { useVideoContext } from "../../Contexter/videoContext";
import { useLikedVideoContext } from "../../Contexter/likedVideosContext";
import { useWatchListContext } from "../../Contexter/watchListContext";

export function VideoListingPage() {
  const { dispatchgeneral } = useVideoContext();
  const { likeList, text, dispatchlike } = useLikedVideoContext();
  const { watchList, dispatchwatchlist } = useWatchListContext();

  function RecentlyWatchedVideos(item) {
    //console.log("history", item);
    dispatchgeneral({ type: "ADD_TO_HISTORY", payload: item });
  }

  function LikedVideos(item) {
    //console.log("likedVideos", item);
    // if (likedVideosInList.some((video) => video.videoId === item.videoId)) {
    //   setLikedVideoInList([...likedVideosInList]);
    // } else {
    //   setLikedVideoInList([...likedVideosInList, item]);
    // }
    if (likeList.some((item) => item.id === item.videoId)) {
      dispatchlike({ type: "REMOVE_FROM_LIKED", payload: item.videoId });
    } else {
      dispatchlike({ type: "ADD_TO_LIKED", payload: item });
    }
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
      {/* <h1 style={{ background: "#41464B", color: "orange", margin: "0px" }}>
        /VideoListingPage
      </h1> */}
      <ul className="videoListingUL">
        {data.map(function (item) {
          return (
            <li key={item.videoId}>
              <NavLink to={`/videoplayer/${item.videoId}`} className="link">
                <img
                  src={`https://img.youtube.com/vi/${item.videoImageId}/mqdefault.jpg`}
                  alt=""
                  style={{ width: "21rem" }}
                  onClick={() => RecentlyWatchedVideos(item)}
                />
              </NavLink>
              <h3>#Poet Name : {item.poetName}</h3>
              <span>Topic : {item.topic}</span>
              <br />
              <br />
              <span style={{ float: "left", marginLeft: "8px" }}>
                ⌚{item.videoLength}
              </span>
              <button>
                <ion-icon name="heart" style={{color:"orange"}}></ion-icon>{item.likes}
              </button>
              <button>
                <ion-icon name="eye" style={{color:"orange"}}></ion-icon>{item.views}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
