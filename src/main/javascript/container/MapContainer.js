import NaverMap from "main/javascript/component/NaverMap.js";

function MapContainer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "pink",
            fontSize: "1.25rem",
          }}
        >
          오시는 길
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontSize: "1.25rem",
            }}
          >
            웨딩 시그니처 2F
          </div>
          <div>서울시 마포구 양화로 87 (서교동 378-7)</div>
          <div>02-335-5400</div>
        </div>
      </div>
      <NaverMap />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "0px 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "0px 30px",
          }}
        >
          <div style={{ fontWeight: "bold" }}>지하철</div>
          <div>2호선, 6호선 합정역 하자 - 2번 추구 도보 4분</div>
          <div>홍대입구, 공항철도, 경의선 1번출구 도보 11분</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "0px 30px",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            버스 - 합정역 / 우리은행서교동지정 / 서교동교회 하차
          </div>
          <table></table>
          <div>파랑(일반/건선) 271A, 921, 602, 603, 604, 761</div>
          <div>초록(지선) 마포08, 마포09, 마포15, 마포16</div>
          <div>5712, 5714, 6712, 6716, 7612, 7734, 7739</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "0px 30px",
          }}
        >
          <div style={{ fontWeight: "bold" }}>제1주차장</div>
          <div style={{ fontWeight: "bold" }}>제2주차장</div>
          <div style={{ fontWeight: "bold" }}>제3주차장</div>
        </div>
      </div>
    </div>
  );
}

export default MapContainer;
