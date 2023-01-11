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
          }}
        >
          <div>신랑측 계좌번호</div>
          <div>신부측 계좌번호</div>
        </div>
      </div>
    </div>
  );
}

export default AccountContainer;
