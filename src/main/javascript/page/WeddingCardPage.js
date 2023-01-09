import MainContainer from "main/javascript/container/MainContainer";
import InvitationContainer from "main/javascript/container/InvitationContainer";
import ContactContainer from "main/javascript/container/ContactContainer";
import CalanderContainer from "main/javascript/container/CalanderContainer";
import AlbumContainer from "main/javascript/container/AlbumContainer";
import MapContainer from "main/javascript/container/MapContainer";
import AccountContainer from "main/javascript/container/AccountContainer";
import useScrollFadeIn from "main/javascript/hook/useScrollFadeIn";

function WeddingCardPage() {
  //   const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        fontSize: "14px",
      }}
    >
      <MainContainer />
      <div {...useScrollFadeIn()}>
        <InvitationContainer />
      </div>
      <div {...useScrollFadeIn()}>
        <ContactContainer />
      </div>
      <div {...useScrollFadeIn()}>
        <CalanderContainer />
      </div>
      <div {...useScrollFadeIn()}>
        <AlbumContainer />
      </div>
      <div {...useScrollFadeIn()}>
        <MapContainer />
      </div>
      <div {...useScrollFadeIn()}>
        <AccountContainer />
      </div>
    </div>
  );
}

export default WeddingCardPage;
