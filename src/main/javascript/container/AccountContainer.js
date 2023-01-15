import Accordion from "main/javascript/component/Accordion";

function AccountContainer() {
  const columnStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0px 20px",
    textAlign: "start",
  };
  const copyButtonStyle = {
    borderWidth: "0px",
    borderStyle: "solid",
    borderRadius: "10px",
    padding: "0px 15px",
    backgroundColor: "#dddddd",
    fontWeight: "bold",
    color: "white",
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("복사되었습니다.");
  };

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
            width: "100%",
            textAlign: "center",
            color: "#fab9c3",
            fontSize: "1.5rem",
            fontFamily: "sungsil",
          }}
        >
          마음을 전하는 곳
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "0px 20px",
          }}
        >
          <Accordion summary={"신랑측 계좌번호"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={columnStyle}>
                <div>
                  하나은행 190-811164-75-107
                  <br />
                  조재하
                </div>
                <button
                  style={copyButtonStyle}
                  onClick={() => copyText("하나은행 190-811164-75-107 조재하")}
                >
                  복사
                </button>
              </div>
              <div style={columnStyle}>
                <div>
                  농협은행 688-01-008368
                  <br />
                  김경순
                </div>
                <button
                  style={copyButtonStyle}
                  onClick={() => copyText("농협은행 688-01-008368 김경순")}
                >
                  복사
                </button>
              </div>
              <div style={columnStyle}>
                <div>
                  하나은행 190-910310-11-207
                  <br />
                  조형철
                </div>
                <button
                  style={copyButtonStyle}
                  onClick={() => copyText("하나은행 190-910310-11-207 조형철")}
                >
                  복사
                </button>
              </div>
            </div>
          </Accordion>
          <Accordion summary={"신부측 계좌번호"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={columnStyle}>
                <div>
                  신협 132-126-928015
                  <br />
                  채철식
                </div>
                <button
                  style={copyButtonStyle}
                  onClick={() => copyText("신협 132-126-928015 채철식")}
                >
                  복사
                </button>
              </div>
              <div style={columnStyle}>
                <div>
                  기업은행 955-001558-01-010
                  <br />
                  조윤희
                </div>
                <button
                  style={copyButtonStyle}
                  onClick={() => copyText("기업은행 955-001558-01-010 조윤희")}
                >
                  복사
                </button>
              </div>
              <div style={columnStyle}>
                <div>
                  신한은행 110-546-785172
                  <br />
                  채유진
                </div>
                <button
                  style={copyButtonStyle}
                  onClick={() => copyText("신한은행 110-546-785172 채유진")}
                >
                  복사
                </button>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AccountContainer;
