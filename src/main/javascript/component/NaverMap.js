import React, { useEffect } from "react";

function NaverMap({ latLng }) {
  const { naver } = window;

  useEffect(() => {
    const position = new naver.maps.LatLng(latLng.latitude, latLng.longitude);

    const map = new naver.maps.Map("map", {
      center: position,
      zoomControl: true,
    });

    new naver.maps.Marker({
      position: position,
      map,
    });
  }, [
    naver.maps.LatLng,
    naver.maps.Map,
    naver.maps.Marker,
    latLng.latitude,
    latLng.longitude,
  ]);

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
