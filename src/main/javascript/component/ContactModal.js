import ModalPortal from "main/javascript/portal/ModalPortal";
import call from "main/resource/call.svg";
import sms from "main/resource/sms.svg";

function ContactModal({ onClose }) {
  const contactStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.3rem",
    width: "100%",
  };
  const iconStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const closeModal = (event) => {
    onClose?.();
  };

  return (
    <ModalPortal>
      <div
        style={{
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
        onClick={closeModal}
      >
        <div
          style={{
            display: "felx",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "18rem",
            borderRadius: "15px",
            backgroundColor: "white",
            color: "black",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px 15px 0px 0px",
              width: "100%",
              height: "3rem",
              backgroundColor: "#fab9c3",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <div>혼주에게 연락하기</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "0px 0px 15px 15px",
              padding: "20px",
              width: "calc(100% - 40px)",
              height: "calc(15rem - 40px)",
              color: "black",
            }}
          >
            <div style={{ fontSize: "0.9rem" }}>신랑 측 혼주</div>
            <div style={contactStyle}>
              <div style={{ fontSize: "1.1rem" }}>조재하</div>
              <div style={iconStyle}>
                <a href="tel:010-9233-9862">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={call}
                    alt="전화"
                  />
                </a>
                <a href="sms:tel:010-9233-9862">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={sms}
                    alt="문자"
                  />
                </a>
              </div>
            </div>
            <div style={contactStyle}>
              <div style={{ fontSize: "1.1rem" }}>김경순</div>
              <div style={iconStyle}>
                <a href="tel:010-5277-6362">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={call}
                    alt="전화"
                  />
                </a>
                <a href="sms:tel:010-5277-6362">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={sms}
                    alt="문자"
                  />
                </a>
              </div>
            </div>
            <div style={{ fontSize: "0.9rem" }}>신부 측 혼주</div>
            <div style={contactStyle}>
              <div style={{ fontSize: "1.1rem" }}>채철식</div>
              <div style={iconStyle}>
                <a href="tel:010-9061-4986">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={call}
                    alt="전화"
                  />
                </a>
                <a href="sms:tel:010-9061-4986">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={sms}
                    alt="문자"
                  />
                </a>
              </div>
            </div>
            <div style={contactStyle}>
              <div style={{ fontSize: "1.1rem" }}>조윤희</div>
              <div style={iconStyle}>
                <a href="tel:010-9425-4986">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={call}
                    alt="전화"
                  />
                </a>
                <a href="sms:tel:010-9425-4986">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={sms}
                    alt="문자"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export default ContactModal;
