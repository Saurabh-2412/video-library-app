import React,{ useState } from "react";
import { usePlaylist } from "../../Contexter/playListContext";
import "../../App.css";
import { useParams } from "react-router";
import uuid from "react-uuid";

export const PlaylistModal = ({ VideoData }) => {
  const [text, setText] = useState("");
  const {
    playList,
    playlistId,
    inputPlaylistBox,
    showPlaylistModal,
    dispatchplaylist,
  } = usePlaylist();
  
  const playlistVideo = useParams();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleOnclick();
    }
  };

  const playlist = {
    id:uuid(),
    name: text,
    videos: []
  }

  const handleOnclick = () => {
    dispatchplaylist({ type: "DISPLAY_INPUT_BOX" });
    text !== "" && dispatchplaylist({ type: "CREATE_PLAY_LIST", payload: playlist });
    setText("");
  };

  const handlePlaylistCheckbox = (e,item) => {
    console.log("this is targeted id",item.id);
    let listId = e.target.id;
    console.log("listID",listId)
    if (e.target.checked === true) {
      dispatchplaylist({type: "SAVE_TO_PLAYLIST",payload: VideoData,playlistId:item.id });
    } else {
      dispatchplaylist({type: "SAVE_TO_PLAYLIST", payload: VideoData,playlistId:item.id});
    }
  };

  /* const itemChecked = (checkedId) => {
    console.log("this is item checked id", checkedId);
    return playList
      .filter((item) => item.id === checkedId)[0]
      .videos.some((item) => {
        //return item.id === showPlaylistModal.videoData.id ? true : false;
        return item.id === checkedId ? true : false;
      });
  }; */

  return (
      <div className={`modal ${showPlaylistModal.status === false ? "modal-hide" : "modal-show"}`}>
          <div className="modal--window">
              <h1 className="modal--title">Playlist
                  <span className="modal--icon"
                      onClick={() => dispatchplaylist({ type: "SHOW_PLAYLIST_MODAL" })}>
                      <ion-icon name="close"></ion-icon>
                  </span>
              </h1>
              <div className="modal--content">
                  {inputPlaylistBox && (
                      <div className="modal--input">
                          <input
                              type="text"
                              placeholder="Enter Playlist Name"
                              className="modal--input-box"
                              onChange={(event) => setText(event.target.value)}
                              onKeyPress={(event) => handleKeyPress(event)}
                          />
                          <button
                              className="btn btn-outline-secondary"
                              onClick={handleOnclick}>
                              Create
                          </button>
                      </div>
                  )}
                  {playList.map((item) => {
                      return (
                        <div key={item.id} className="playlist-names">
                            <input
                            type="checkbox"
                            name="playlist-item"
                            className="playlist-checkbox"
                            id={item.id}
                            onChange={(e) => handlePlaylistCheckbox(e,item)}
                            />
                            <label htmlFor={item.id}>{item.name}</label>
                        </div>
                      );
                  })}
              </div>

              <div className="modal--buttons">
                  <button className="btn btn-secondary"
                      onClick={() => dispatchplaylist({ type: "DISPLAY_INPUT_BOX" })}>
                      New
                  </button>
              </div>
          </div>
      </div>
  );
};