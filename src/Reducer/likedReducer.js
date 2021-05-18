export const likeReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_LIKED":
        return {
          ...state,
          likeList: [...state.likeList, action.payload],
          text: "Dislike"
        };
      case "REMOVE_FROM_LIKED":
        return {
          ...state,
          likeList: state.likeList.filter(
            (item) => item.videoId !== action.payload
          ),
          text: "Like"
        };
    }
  };
  