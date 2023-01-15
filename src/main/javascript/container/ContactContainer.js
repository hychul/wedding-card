import call from "main/resource/call.svg";
import sms from "main/resource/sms.svg";

function ContactContainer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "50px 0px",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.3rem",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "1.1rem" }}>조재하</div>
        <div>·</div>
        <div style={{ fontSize: "1.1rem" }}>김경순</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "0.75rem",
            textAlign: "center",
            padding: "0em 0.5rem",
          }}
        >
          <div>장남</div>
        </div>
        <div style={{ fontSize: "1.1rem" }}>조형철</div>
        <div style={{ padding: "0em 0.5rem" }}>···</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a href="tel:010-2775-7106">
            <img
              style={{ width: "0.8rem", height: "0.8rem" }}
              src={call}
              alt="전화"
            />
          </a>
          <a href="sms:010-2775-7106">
            <img
              style={{ width: "0.8rem", height: "0.8rem" }}
              src={sms}
              alt="문자"
            />
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.3rem",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "1.1rem" }}>채철식</div>
        <div>·</div>
        <div style={{ fontSize: "1.1rem" }}>조윤희</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "0.75rem",
            textAlign: "center",
            padding: "0em 0.5rem",
          }}
        >
          <div>장녀</div>
        </div>
        <div style={{ fontSize: "1.1rem" }}>채유진</div>
        <div style={{ padding: "0em 0.5rem" }}>···</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a href="tel:010-5422-1081">
            <img
              style={{ width: "0.8rem", height: "0.8rem" }}
              src={call}
              alt="전화"
            />
          </a>
          <a href="sms:010-5422-1081">
            <img
              style={{ width: "0.8rem", height: "0.8rem" }}
              src={sms}
              alt="문자"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
