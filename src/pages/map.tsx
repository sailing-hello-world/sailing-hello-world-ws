import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { Map } from "mapbox-gl";
import FullFixed from "../ui/FullFixed";

const MapPage = () => {
  const mapEl = useRef(null);
  useEffect(() => {
    const map = new Map({
      style: "mapbox://styles/hawkaa/cjwx4p7mf0zdp1cnteg40e5gx",
      container: mapEl.current!
    });
    return () => map.remove();
  });
  return (
    <Layout>
      <FullFixed>
        <div style={{ height: "100%" }} ref={mapEl} />
      </FullFixed>
    </Layout>
  );
};
export default MapPage;
