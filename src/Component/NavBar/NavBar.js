import { NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function NavBar() {
  const [winWidth, setWinWidth] = useState("0%");

  function toggleNav() {
    if (winWidth === "0%") {
      setWinWidth("100%");
    } else {
      setWinWidth("0%");
    }
  }

  return (
    <div>
      <nav>
        <div style={{ width: winWidth }} className="overlay">
          <button className="closebtn" onClick={toggleNav}></button>
          <div className="overlay-content">
            <NavLink to="/" onClick={toggleNav}>VideoList</NavLink>
            <NavLink to="/recentlywatched" onClick={toggleNav}>RecentlyWatched</NavLink>
            <NavLink to="/likedvideos" onClick={toggleNav}>LikedVideos</NavLink>
            <NavLink to="/watchlater" onClick={toggleNav}>WatchLater</NavLink>
            <NavLink to="/playlist" onClick={toggleNav}>PlayList</NavLink>
          </div>
        </div>

        <nav className="navigation">
          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={toggleNav}
          >
            &#9776;
          </span>

          <NavLink to="/">
            <span>
              <ion-icon name="home" style={{fontSize:"2rem"}}></ion-icon>
              <span style={{color:"orange",fontWeight:"bolder",position: "relative",top: "-0.25rem"}}></span>
            </span>
          </NavLink>

          <NavLink to="/recentlywatched">
            <span>
              <ion-icon name="eye" style={{fontSize:"2rem"}}></ion-icon>
              <span style={{color:"orange",fontWeight:"bolder",position: "relative",top: "-0.25rem"}}></span>
            </span>
          </NavLink>

          <NavLink to="/likedvideos">
            <span>
              <ion-icon name="play" style={{fontSize:"2rem"}}></ion-icon>
              <span style={{color:"orange",fontWeight:"bolder",position: "relative",top: "-0.25rem"}}></span>
            </span>
          </NavLink>

          <NavLink to="/watchlater">
            <span>
              <ion-icon name="watch" style={{fontSize:"2rem"}}></ion-icon>
              <span style={{color:"orange",fontWeight:"bolder",position: "relative",top: "-0.25rem"}}></span>
            </span>
          </NavLink>

          {/** for play list */}
          <NavLink to="/playlist">
            <span>
              <ion-icon name="list" style={{fontSize:"2rem"}}></ion-icon>
              <span style={{color:"orange",fontWeight:"bolder",position: "relative",top: "-0.25rem"}}></span>
            </span>
          </NavLink>
        </nav>
      </nav>
    </div>
  );
}
