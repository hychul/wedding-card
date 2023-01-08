function MainContainer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "pink",
        width: "100%",
        height: "500px",
        padding: "50px 20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "1.25rem",
        }}
      >
        <div>조형철</div>
        <div>-</div>
        <div>채유진</div>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        2023년 3월 18일 토요일 PM 03시 웨딩 시그니처
      </div>
    </div>
  );
}

export default MainContainer;
