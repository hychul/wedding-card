import useCarousel from "main/javascript/hook/useCarousel";

function AlbumContainer() {
  const { ref, prev, next } = useCarousel();

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
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          width: "100vw",
          height: "100vw",
          overflow: "hidden",
          backgroundColor: "greenyellow",
        }}
      >
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "row",
            overflow: "visible",
            width: "400vw",
            height: "100vw",
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "100vw",
              backgroundColor: "pink",
            }}
          >
            0
          </div>
          <div
            style={{
              width: "100vw",
              height: "100vw",
              backgroundColor: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "100vw",
              height: "100vw",
              backgroundColor: "green",
            }}
          >
            2
          </div>
          <div
            style={{
              width: "100vw",
              height: "100vw",
              backgroundColor: "blue",
            }}
          >
            3
          </div>
        </div>
      </div>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      {/* <button onClick={}>prev</button> */}
      {/* Heart and comment */}
      {/* Description */}
    </div>
  );
}

export default AlbumContainer;
