import { useWatchListContext } from "../../Contexter/watchListContext";
import { NavLink } from "react-router-dom";

export function WatchLater() {
  const { watchList, dispatchwatchlist } = useWatchListContext();
  //console.log("watch list listner", watchList);

  function Remove(itemId) {
    //console.log(itemId);
    // const LikedVideosRemover = watchLaterList.filter(
    //   (video) => video.videoId !== itemId
    // );
    // setWatchLaterList(LikedVideosRemover);
    dispatchwatchlist({
      type: "REMOVE_FROM_WATCHLIST",
      payload: itemId
    });
  }

  return (
    <>
      <h1>WatchLater Listner</h1>
      <ul style={{ padding: "0px" }}>
        {watchList.map(function (item) {
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
          );
        })}
      </ul>
    </>
  );
}
