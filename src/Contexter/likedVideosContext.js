// import { createContext, useContext, useState, useReducer } from "react";
// import { likeReducer } from "../reducer/likedReducer";

// const likedVideosContext = createContext();

// export const LikedVideosProvider = ({ children }) => {
//   const [likedVideosInList, setLikedVideoInList] = useState([]);
//   return (
//     <likedVideosContext.Provider
//       value={{ likedVideosInList, setLikedVideoInList }}
//     >
//       {children}
//     </likedVideosContext.Provider>
//   );
// };

// export const useLikedVideoContext = () => {
//   return useContext(likedVideosContext);
// };

import { createContext, useContext, useReducer } from "react";
import { likeReducer } from "../Reducer/likedReducer";

const likedVideosContext = createContext();

const initialState = {
  likeList: [],
  text: "Like"
};

export const LikedVideosProvider = ({ children }) => {
  const [state, dispatchlike] = useReducer(likeReducer, initialState);
  return (
    <likedVideosContext.Provider value={{ ...state, dispatchlike }}>
      {children}
    </likedVideosContext.Provider>
  );
};

export const useLikedVideoContext = () => {
  return useContext(likedVideosContext);
};
