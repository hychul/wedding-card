import NaverMap from "main/javascript/component/NaverMap";

function MapContainer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        padding: "50px 0px",
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
            color: "#fab9c3",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NaverMap
          latLng={{
            latitude: 37.55256011074744,
            longitude: 126.91732906074228,
          }}
        />
        <a
          href="https://map.naver.com/v5/search/%EC%9B%A8%EB%94%A9%20%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98/place/1542904899?c=14127905.7250301,4516411.5387226,15,0,0,0,dh&placePath=%3Fentry%253Dbmp"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            border: "0px",
            backgroundColor: "#fab9c3",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "1.1rem",
            }}
          >
            지도를 자세히 보려면 여기를 눌러주세요
          </div>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "90%",
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
              width: "90%",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              버스 - 합정역 / 우리은행 서교동지점 / 서교동교회 하차
            </div>
            <table></table>
            <div>파랑(간선) 271A, 921, 602, 603, 604, 761</div>
            <div>초록(지선) 마포08, 마포09, 마포15, 마포16</div>
            <div style={{ marginLeft: "4.5em" }}>
              5712, 5714, 6712, 6716, 7612, 7734, 7739
            </div>
            <div>빨강(광역) 1000, 1100, 1101, 1200, 1300, 1301, 1302,</div>
            <div style={{ marginLeft: "4.5em" }}>1601, 3100</div>
            <div style={{ marginLeft: "4.5em" }}>
              삼화고속 (인천 → 서울) 합정 전철역
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "90%",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.25rem" }}
            >
              <div style={{ fontWeight: "bold" }}>제1주차장</div>
              <div>본건물</div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.25rem" }}
            >
              <div style={{ fontWeight: "bold" }}>제2주차장</div>
              <div>H스퀘어</div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.25rem" }}
            >
              <div style={{ fontWeight: "bold" }}>제3주차장</div>
              <div>서교빌딩 주차장</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapContainer;
