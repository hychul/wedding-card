import React, { useEffect } from "react";

const { naver } = window;

function NaverMap({ latLng }) {
  useEffect(() => {
    const container = document.getElementById("map");

    const position = new naver.maps.LatLng(latLng.angle, latLng.meter);
    const mapOptions = {
      center: position,
      zoom: 17,
      minZoom: 6,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(container, mapOptions);

    const markerOptions = {
      position: position.destinationPoint(90, 15),
      map: map,
      icon: {
        url: "https://navermaps.github.io/maps.js/docs/img/example/ico_pin.jpg",
        //size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
      },
    };

    const marker = new naver.maps.Marker(markerOptions);

    console.log("loading navermap");
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
      }}
    />
  );
}

export default NaverMap;
