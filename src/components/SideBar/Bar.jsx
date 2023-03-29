import React, { useState } from "react";
import DropDownBtn from "../DropDownBtn/DropDownBtn";
import SideBar from "./SideBar";
import "./SideBar.css";

export default function Bar() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <header>
        <div>
          <DropDownBtn />
          <button
            className="button-bar"
            type="button"
            onClick={() => {
              setSideBarOpen(!sidebarOpen);
            }}
          >
            <i className="fa fa-bars" />
          </button>
        </div>
      </header>
      {sidebarOpen ? (
        <>
          <SideBar active={sidebarOpen} />
          <button
            className="float"
            type="button"
            onClick={() => {
              setSideBarOpen(!sidebarOpen);
            }}
          >
            X
          </button>
        </>
      ) : (
        <div />
      )}
    </>
  );
}
