import { useState, useRef, useEffect } from "react";

const TOTAL_SLIDES = 3;

function AlbumContainer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "50px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          verticalAlign: "middle",
          width: "100vw",
          height: "15vw",
          borderTop: "solid 1px #FBFBFB",
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px 10px",
            width: "calc(100% - 20px)",
          }}
        >
          <div>유진n형철</div>
          <div>···</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vw",
          overflow: "hidden",
          backgroundColor: "greenyellow",
        }}
      >
        Viewport
      </div>
      {/* Heart and comment */}
      {/* Description */}
    </div>
  );
}

export default AlbumContainer;
