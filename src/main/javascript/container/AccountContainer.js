import Accordion from "../component/Accordion";

function AccountContainer() {
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
            color: "pink",
            fontSize: "1.25rem",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "0px 20px",
                  textAlign: "start",
                }}
              >
                <div>
                  하나은행 190-811164-75-107
                  <br />
                  조재하
                </div>
                <div></div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "0px 20px",
                  textAlign: "start",
                }}
              >
                <div>
                  농협은행 688-01-008368
                  <br />
                  김경순
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "0px 20px",
                  textAlign: "start",
                }}
              >
                <div>
                  하나은행 190-910310-11-207
                  <br />
                  조형철
                </div>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "0px 20px",
                  textAlign: "start",
                }}
              >
                <div>
                  신협 132-126-928015
                  <br />
                  채철식
                </div>
                <div></div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "0px 20px",
                  textAlign: "start",
                }}
              >
                <div>
                  XX은행 XXXXXXXX
                  <br />
                  조윤희
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "0px 20px",
                  textAlign: "start",
                }}
              >
                <div>
                  신한은행 110-546-785172
                  <br />
                  채유진
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AccountContainer;
