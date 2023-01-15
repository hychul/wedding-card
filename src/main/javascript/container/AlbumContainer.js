import useCarousel from "main/javascript/hook/useCarousel";
import img01 from "main/resource/d_01.JPG";
import img02 from "main/resource/d_02.JPG";
import img03 from "main/resource/d_03.JPG";
import img04 from "main/resource/d_04.JPG";
import img05 from "main/resource/d_05.JPG";
import img06 from "main/resource/d_06.JPG";
import img07 from "main/resource/d_07.JPG";
import img08 from "main/resource/d_08.JPG";
import img09 from "main/resource/d_09.JPG";
import img10 from "main/resource/d_10.JPG";
import img11 from "main/resource/d_11.JPG";
import img12 from "main/resource/d_12.JPG";
import img13 from "main/resource/d_13.JPG";
import img14 from "main/resource/d_14.JPG";
import img15 from "main/resource/d_15.JPG";
import img16 from "main/resource/d_16.JPG";
import img17 from "main/resource/d_17.JPG";
import img18 from "main/resource/d_18.JPG";
import img19 from "main/resource/d_19.JPG";
import img20 from "main/resource/d_20.JPG";
import img21 from "main/resource/d_21.JPG";
import img22 from "main/resource/d_22.JPG";
import img23 from "main/resource/d_23.JPG";
import img24 from "main/resource/d_24.JPG";
import img25 from "main/resource/d_25.JPG";
import img26 from "main/resource/d_26.JPG";
import img27 from "main/resource/d_27.JPG";
import img28 from "main/resource/d_28.JPG";
import img29 from "main/resource/d_29.JPG";
import img30 from "main/resource/d_30.JPG";
import img31 from "main/resource/d_31.JPG";
import img32 from "main/resource/d_32.JPG";
import img33 from "main/resource/d_33.JPG";
import img34 from "main/resource/n_01.JPG";
import img35 from "main/resource/n_02.JPG";
import img36 from "main/resource/n_03.JPG";
import img37 from "main/resource/n_04.JPG";
import img38 from "main/resource/n_05.JPG";
import img39 from "main/resource/n_06.JPG";
import img40 from "main/resource/n_07.JPG";
import img41 from "main/resource/n_08.JPG";
import img42 from "main/resource/n_09.JPG";
import img43 from "main/resource/n_10.JPG";
import img44 from "main/resource/n_11.JPG";
import img45 from "main/resource/n_12.JPG";
import img46 from "main/resource/n_13.JPG";
import img47 from "main/resource/n_14.JPG";
import img48 from "main/resource/n_15.JPG";
import img49 from "main/resource/n_16.JPG";

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
