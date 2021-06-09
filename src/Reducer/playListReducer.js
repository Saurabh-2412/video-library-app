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
                    (playlistVideo) => playlistVideo !== action.payload)
                : [...playlistItem.videos, action.payload],
            };
          }
          return playlistItem;
        }), 
      };

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playList: state.playList.map((playlistItem) => {
          if (playlistItem.id === action.playlistId) {
            return {
              ...playlistItem,
              videos: playlistItem.videos.filter(
                (playlistVideo) => playlistVideo !== action.payload)
            };
          }
          return playlistItem;
        }), 
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playList: state.playList.filter((playlistitem) => playlistitem.id === action.playlistId)
      };

    default:
      return state;
  }
};