import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
export default function HomeLeft() {
  const user = useSelector((state) => state.user.user);
  return (
    <div
      id="firstTop"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
      className="mt-3"
    >
      <div class="image-container">
        <img
          src="https://ultrawidewallpapers.com/wp-content/uploads/2016/08/shaded-forest-3440x1440.jpg"
          className="w-100 rounded"
          id="wide-ratio"
          alt="forest"
          style={{ borderBottom: "solid" }}
        />
      </div>
      <div>
        <a href="/">
          <img
            style={{
              position: "absolute",
              left: "7rem",
              top: "2rem",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "solid white 3px",
              objectFit: "cover",
            }}
            src={user.image}
            alt="..."
            id="userImg"
          />
        </a>
      </div>
      <div id="nameText" className="mt-4 ml-3">
        <h6>
          {user.name} {user.surname}
        </h6>
        <p>{user.title}</p>
      </div>
      <div id="stats" className="pb-3 ml-3 mt-5">
        <p>Profile view</p>
        <p>33</p>
      </div>
    </div>
  );
}
