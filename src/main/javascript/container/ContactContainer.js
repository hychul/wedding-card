import { useState } from "react";
import call from "main/resource/call.svg";
import sms from "main/resource/sms.svg";
import ContactModal from "main/javascript/component/ContactModal";

function ContactContainer() {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
      <button
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "15px",
          borderColor: "#fab9c3",
          padding: "10px",
          width: "18rem",
          height: "calc(25px + 20px)",
          fontSize: "1.1rem",
          color: "#fab9c3",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          setOpenContactModal(!openContactModal);
        }}
      >
        혼주에게 연락하기
      </button>
      {openContactModal && (
        <ContactModal
          onClose={() => setOpenContactModal(!openContactModal)}
        ></ContactModal>
      )}
    </div>
  );
}

export default ContactContainer;
