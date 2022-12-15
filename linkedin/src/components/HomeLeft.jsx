import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { Button } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
export default function HomeLeft() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
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
        <div>
          <div id="nameText" className="mt-4 ml-3">
            <h6 className="font-weight-bolder text-center">
              {user.name} {user.surname}
            </h6>
            <p className="text-smaller text-center">{user.title}</p>
          </div>
          <div>
            <div className="d-flex justify-content-between text-smaller">
              <p className="ml-2 text-muted">Connections</p>
              <p className="mr-2">37</p>
            </div>
            <div className="d-flex justify-content-between text-smaller">
              <p className="ml-2 text-muted">Who's viewed your profile</p>
              <p className="mr-2">30</p>
            </div>
            <div>
              <Button className="btn btn-secondary w-100 transparent text-dark border text-left">
                <FaBookmark size={15} /> My items
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="firstTop"
        style={{ backgroundColor: "white", borderRadius: "5px" }}
        className="mt-3"
      >
        <div className="pt-2 pl-2 pr-2 mb-0">
          <p>
            <a href="#">Groups</a>
          </p>
          <div className="d-flex justify-content-between">
            <p>
              <a href="#">Events</a>
            </p>
            <p>
              <AiOutlinePlus />
            </p>
          </div>
          <p>
            <a href="#">Followed Hashtags</a>
          </p>
        </div>
        <Button className="btn btn-secondary w-100 transparent text-dark border">
          Discover more
        </Button>
      </div>
    </>
  );
}
