import react from "react";
import { NavLink } from "react-router-dom";
import { useVideoContext } from "../../Contexter/videoContext";
import { useLikedVideoContext } from "../../Contexter/likedVideosContext";

export function RecentlyWatched() {
  const { history, dispatchgeneral } = useVideoContext();
  const { likedVideosInList, setLikedVideoInList } = useLikedVideoContext();

  //console.log("videos in list history", videosInList);

  function Remove(itemId) {
    //console.log(itemId);
    dispatchgeneral({ type: "REMOVE_FROM_HISTORY", payload: itemId });
  }

  function LikedVideos(item) {
    //console.log("likedVideos", item);
    if (likedVideosInList.some((video) => video.videoId === item.videoId)) {
      setLikedVideoInList([...likedVideosInList]);
    } else {
      setLikedVideoInList([...likedVideosInList, item]);
    }
  }

  return (
    <>
      <h1>RecentlyWatched</h1>
      <ul style={{ padding: "0px" }}>
        {history.map(function (item) {
          return (
            <li
              key={item.videoId}
              style={{
                listStyleType: "none",
                display: "inline-block",
                padding: "12px",
                border: "1px solid black"
                // margin: "15px"
              }}
            >
              <span>Topic : {item.topic}</span>
              <button
                onClick={() => Remove(item.videoId)}
                style={{ float: "right" }}
              >
                Remove
              </button>
              <br />
              <span>Poet Name : {item.poetName}</span>
              <br />
              <br />
              <NavLink to={`/videoplayer/${item.videoId}`} className="link">
                <img
                  src={`https://img.youtube.com/vi/${item.videoImageId}/mqdefault.jpg`}
                  alt=""
                />
              </NavLink>
              <br />
              <span style={{ float: "left" }}>⌚{item.videoLength}</span>
              <button
                style={{
                  float: "right",
                  background: "gray",
                  padding: "5px",
                  border: "2px solid black",
                  borderRadius: "5px",
                  marginRight: "3px"
                }}
                onClick={() => LikedVideos(item)}
              >
                Like
              </button>
              <button
                style={{
                  float: "right",
                  background: "gray",
                  padding: "5px",
                  border: "2px solid black",
                  borderRadius: "5px",
                  marginRight: "3px"
                }}
              >
                WatchLater
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
