import useCarousel from "main/javascript/hook/useCarousel";
import img01 from "main/resource/image/d_01.jpeg";
import img02 from "main/resource/image/d_02.jpeg";
import img03 from "main/resource/image/d_03.jpeg";
import img04 from "main/resource/image/d_04.jpeg";
import img05 from "main/resource/image/d_05.jpeg";
import img06 from "main/resource/image/d_06.jpeg";
import img07 from "main/resource/image/d_07.jpeg";
import img08 from "main/resource/image/d_08.jpeg";
import img09 from "main/resource/image/d_09.jpeg";
import img10 from "main/resource/image/d_10.jpeg";
import img11 from "main/resource/image/d_11.jpeg";
import img12 from "main/resource/image/d_12.jpeg";
import img13 from "main/resource/image/d_13.jpeg";
import img14 from "main/resource/image/d_14.jpeg";
import img15 from "main/resource/image/d_15.jpeg";
import img16 from "main/resource/image/d_16.jpeg";
import img17 from "main/resource/image/d_17.jpeg";
import img18 from "main/resource/image/d_18.jpeg";
import img19 from "main/resource/image/d_19.jpeg";
import img20 from "main/resource/image/d_20.jpeg";
import img21 from "main/resource/image/d_21.jpeg";
import img22 from "main/resource/image/d_22.jpeg";
import img23 from "main/resource/image/d_23.jpeg";
import img24 from "main/resource/image/d_24.jpeg";
import img25 from "main/resource/image/d_25.jpeg";
import img26 from "main/resource/image/d_26.jpeg";
import img27 from "main/resource/image/d_27.jpeg";
import img28 from "main/resource/image/d_28.jpeg";
import img29 from "main/resource/image/d_29.jpeg";
import img30 from "main/resource/image/d_30.jpeg";
import img31 from "main/resource/image/d_31.jpeg";
import img32 from "main/resource/image/d_32.jpeg";
import img33 from "main/resource/image/d_33.jpeg";
import img34 from "main/resource/image/n_01.jpeg";
import img35 from "main/resource/image/n_02.jpeg";
import img36 from "main/resource/image/n_03.jpeg";
import img37 from "main/resource/image/n_04.jpeg";
import img38 from "main/resource/image/n_05.jpeg";
import img39 from "main/resource/image/n_06.jpeg";
import img40 from "main/resource/image/n_07.jpeg";
import img41 from "main/resource/image/n_08.jpeg";
import img42 from "main/resource/image/n_09.jpeg";
import img43 from "main/resource/image/n_10.jpeg";
import img44 from "main/resource/image/n_11.jpeg";
import img45 from "main/resource/image/n_12.jpeg";
import img46 from "main/resource/image/n_13.jpeg";
import img47 from "main/resource/image/n_14.jpeg";
import img48 from "main/resource/image/n_15.jpeg";
import img49 from "main/resource/image/n_16.jpeg";

function AlbumContainer() {
  const { ref, prev, next, current, setCurrent } = useCarousel();

  const imageCount = 49;

  const imageStyle = {
    width: "100vw",
    height: "100vw",
    objectFit: "contain",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "50px 0px",
      }}
    >
      <div
        style={{
          marginBottom: "30px",
          width: "100%",
          textAlign: "center",
          color: "#fab9c3",
          fontSize: "1.5rem",
          fontFamily: "sungsil",
        }}
      >
        앨범
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          width: "100vw",
          height: "100vw",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "center",
            width: "100vw",
            height: "100vw",
            overflow: "hidden",
          }}
        >
          <div
            ref={ref}
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "visible",
              width: `${imageCount}00vw`,
              height: "100vw",
            }}
          >
            <img style={imageStyle} loading="lazy" src={img01}></img>
            <img style={imageStyle} loading="lazy" src={img02}></img>
            <img style={imageStyle} loading="lazy" src={img03}></img>
            <img style={imageStyle} loading="lazy" src={img04}></img>
            <img style={imageStyle} loading="lazy" src={img05}></img>
            <img style={imageStyle} loading="lazy" src={img06}></img>
            <img style={imageStyle} loading="lazy" src={img07}></img>
            <img style={imageStyle} loading="lazy" src={img08}></img>
            <img style={imageStyle} loading="lazy" src={img09}></img>
            <img style={imageStyle} loading="lazy" src={img10}></img>
            <img style={imageStyle} loading="lazy" src={img11}></img>
            <img style={imageStyle} loading="lazy" src={img12}></img>
            <img style={imageStyle} loading="lazy" src={img13}></img>
            <img style={imageStyle} loading="lazy" src={img14}></img>
            <img style={imageStyle} loading="lazy" src={img15}></img>
            <img style={imageStyle} loading="lazy" src={img16}></img>
            <img style={imageStyle} loading="lazy" src={img17}></img>
            <img style={imageStyle} loading="lazy" src={img18}></img>
            <img style={imageStyle} loading="lazy" src={img19}></img>
            <img style={imageStyle} loading="lazy" src={img20}></img>
            <img style={imageStyle} loading="lazy" src={img21}></img>
            <img style={imageStyle} loading="lazy" src={img22}></img>
            <img style={imageStyle} loading="lazy" src={img23}></img>
            <img style={imageStyle} loading="lazy" src={img24}></img>
            <img style={imageStyle} loading="lazy" src={img25}></img>
            <img style={imageStyle} loading="lazy" src={img26}></img>
            <img style={imageStyle} loading="lazy" src={img27}></img>
            <img style={imageStyle} loading="lazy" src={img28}></img>
            <img style={imageStyle} loading="lazy" src={img29}></img>
            <img style={imageStyle} loading="lazy" src={img30}></img>
            <img style={imageStyle} loading="lazy" src={img31}></img>
            <img style={imageStyle} loading="lazy" src={img32}></img>
            <img style={imageStyle} loading="lazy" src={img33}></img>
            <img style={imageStyle} loading="lazy" src={img34}></img>
            <img style={imageStyle} loading="lazy" src={img35}></img>
            <img style={imageStyle} loading="lazy" src={img36}></img>
            <img style={imageStyle} loading="lazy" src={img37}></img>
            <img style={imageStyle} loading="lazy" src={img38}></img>
            <img style={imageStyle} loading="lazy" src={img39}></img>
            <img style={imageStyle} loading="lazy" src={img40}></img>
            <img style={imageStyle} loading="lazy" src={img41}></img>
            <img style={imageStyle} loading="lazy" src={img42}></img>
            <img style={imageStyle} loading="lazy" src={img43}></img>
            <img style={imageStyle} loading="lazy" src={img44}></img>
            <img style={imageStyle} loading="lazy" src={img45}></img>
            <img style={imageStyle} loading="lazy" src={img46}></img>
            <img style={imageStyle} loading="lazy" src={img47}></img>
            <img style={imageStyle} loading="lazy" src={img48}></img>
            <img style={imageStyle} loading="lazy" src={img49}></img>
          </div>
        </div>
        {current > 0 && (
          <button
            style={{
              position: "absolute",
              left: "0",
            }}
            onClick={prev}
          >
            prev
          </button>
        )}
        {current < imageCount && (
          <button
            style={{
              position: "absolute",
              right: "0",
            }}
            onClick={next}
          >
            next
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "30px",
        }}
      >
        {[...Array(imageCount).keys()].map((num) => (
          <div
            style={{
              width: num === current ? "10px" : "7px",
              height: num === current ? "10px" : "7px",
              borderRadius: "15px",
              background: num === current ? "#999" : "#E0E0E0",
              margin: "3px",
              cursor: "pointer",
            }}
            onClick={() => setCurrent(num)}
            id={num}
            key={num}
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumContainer;
