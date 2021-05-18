export const generalReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_HISTORY":
        //console.log(action.payload);
        if (
          state.history.some((item) => item.id === action.payload.id) === false
        ) {
          return {
            ...state,
            history: [...state.history, action.payload]
          };
        }
  
      case "REMOVE_FROM_HISTORY":
        return {
          ...state,
          history: state.history.filter((item) => item.videoId !== action.payload)
        };
    }
  };
  