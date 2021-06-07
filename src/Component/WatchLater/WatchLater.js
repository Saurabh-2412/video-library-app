import { useWatchListContext } from "../../Contexter/watchListContext";
import { NavLink } from "react-router-dom";
import { Toaster } from "../Utils/Toaster";

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
    Toaster("Removed from watchlist");
  }

  return (
    <div>
      <h1>WatchLater Listner</h1>
      <ul style={{ padding: "0px" }}>
        {watchList.map(function (item) {
          return (
            <li key={item.videoId} style={{listStyleType:"none",display: "inline-block"}}>
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
