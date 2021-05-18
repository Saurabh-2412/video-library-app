import react from "react";
import { useLikedVideoContext } from "../../Contexter/likedVideosContext";
import { NavLink } from "react-router-dom";

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
  }

  return (
    <>
      <h1>Liked Videos List</h1>

      <ul style={{ padding: "0px" }}>
        {likeList.map((item) => (
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
            <br />
            <h3 style={{ fontSize: "1rem", margin: "0px" }}>
              Poet Name : {item.poetName}
            </h3>
            <span>#Topic : {item.topic}</span>
            <br />
            <button
              onClick={() => Remove(item.videoId)}
              style={{ float: "right" }}
            >
              Remove
            </button>
            <br />
            <br />
            <NavLink to={`/videoplayer/${item.videoId}`} className="link">
              <img
                src={`https://img.youtube.com/vi/${item.videoImageId}/mqdefault.jpg`}
                alt=""
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
