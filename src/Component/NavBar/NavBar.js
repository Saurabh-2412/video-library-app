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
            <NavLink
              activeStyle={{ fontColor: "red", fontWeight: "bold" }}
              style={{ textDecoration: "none" }}
              to="/"
              onClick={toggleNav}
            >
              VideoList
            </NavLink>{" "}
            <NavLink
              activeStyle={{ fontColor: "red", fontWeight: "bold" }}
              style={{ textDecoration: "none" }}
              to="/recentlywatched"
              onClick={toggleNav}
            >
              RecentlyWatched
            </NavLink>{" "}
            <NavLink
              activeStyle={{ fontColor: "red", fontWeight: "bold" }}
              style={{ textDecoration: "none" }}
              to="/likedvideos"
              onClick={toggleNav}
            >
              LikedVideos
            </NavLink>{" "}
            <NavLink
              activeStyle={{ fontColor: "red", fontWeight: "bold" }}
              style={{ textDecoration: "none" }}
              to="/watchlater"
              onClick={toggleNav}
            >
              WatchLater
            </NavLink>
          </div>
        </div>
        <nav className="navigation">
          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={toggleNav}
          >
            &#9776;
          </span>
        </nav>
      </nav>
    </div>
  );
}
