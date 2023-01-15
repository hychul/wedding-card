import imgMain from "main/resource/image/main.jpeg";

function MainContainer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        gap: "15px",
        padding: "15px 0px",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "white",
          fontSize: "1.2rem",
          textAlign: "center",
          color: "black",
        }}
      >
        조형철 & 채유진
      </div>
      <img
        style={{
          width: "100vw",
          height: "150vw",
          objectFit: "contain",
        }}
        src={imgMain}
      ></img>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: "white",
          fontSize: "0.9rem",
          textAlign: "center",
          color: "black",
        }}
      >
        2023년 3월 18일 토요일 PM 03시 웨딩 시그니처
      </div>
    </div>
  );
}

export default MainContainer;
