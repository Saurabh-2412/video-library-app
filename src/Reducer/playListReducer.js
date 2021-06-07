import uuid from "react-uuid";
export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PLAYLIST_MODAL":
      return {
        ...state,
        showPlaylistModal: {
          ...state.showPlaylistModal,
          status: state.showPlaylistModal.status === false ? true : false,
          videoData: action.payload === undefined ? "" : action.payload,
        }
      };
    
    case "DISPLAY_INPUT_BOX":
      return {
        ...state,
        inputPlaylistBox: state.inputPlaylistBox === false ? true : false,
      };

    case "SAVE_PLAYLIST_ID":
      return { };

    case "CREATE_PLAY_LIST":
      console.log(action.payload); 
      return {
        ...state,
        playList: [ ...state.playList, {id:action.payload.id, name:action.payload.name, videos:[]} ]
      };

    case "SAVE_TO_PLAYLIST":
      return {
        ...state,
        playList: state.playList.map((playlistItem) => {
          if (playlistItem.id === action.playlistId) {
            return {
              ...playlistItem,
              videos: playlistItem.videos.find(
                (playlistVideo) => playlistVideo === action.payload.videoId)
                ? playlistItem.videos.filter(
                    (playlistVideo) => playlistVideo !== action.payload.videoId)
                : [...playlistItem.videos, action.payload.videoId],
            };
          }
          return playlistItem;
        }), 
      };

    case "REMOVE_FROM_PLAYLIST":
      return {  };
      
    case "DELETE_PLAYLIST":
      return {
        /* ...state,
        playList: state.playList.filter((playlistitem) => playList !== playlistitem) */
      };

    default:
      return state;
  }
};