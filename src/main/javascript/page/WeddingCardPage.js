import MainContainer from "main/javascript/container/MainContainer";
import InvitationContainer from "main/javascript/container/InvitationContainer";
import ContactContainer from "main/javascript/container/ContactContainer";
import CalanderContainer from "main/javascript/container/CalanderContainer";
import AlbumContainer from "main/javascript/container/AlbumContainer";
import MapContainer from "main/javascript/container/MapContainer";
import useScrollFadeIn from "../hook/useScrollFadeIn";

function WeddingCardPage() {
  //   const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
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
    </div>
  );
}

export default WeddingCardPage;
