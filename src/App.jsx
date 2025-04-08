import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

const INITIAL_CENTER = [24.9411, 60.1727];
const INITIAL_ZOOM = 11.12;

function App() {
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2VsbG5vdGUiLCJhIjoiY205ODZuODJqMGV4eDJsc2VwZ3hraHAzaSJ9.Ei8toDcIcpyPbVlu6BLkvw";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
    });

    mapRef.current.on("move", () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();
      const map = mapRef.current;
      // update state
      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    new mapboxgl.Marker({ color: "black", rotation: 0 })
      .setLngLat([24.9645, 60.2104])
      .addTo(mapRef.current);

    const bus = new mapboxgl.Marker({ color: "green", rotation: 0 })
      .setLngLat([24.9353, 60.2017])
      .addTo(mapRef.current);

    mapRef.current.addControl(new mapboxgl.FullscreenControl());

    return () => {
      mapRef.current.remove();
    };
  }, []);

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  };
  const handleButtonClicktoBus = () => {
    mapRef.current.flyTo({
      center: [24.9353, 60.2017],
      zoom: 16.12,
    });
  };

  return (
    <>
      <h1 class="font-effect-anaglyph" className="header">
        LomaVibes
      </h1>
      <div className="sidebar">
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} |
        Zoom: {zoom.toFixed(2)}
      </div>

      <button className="reset-button" onClick={handleButtonClick}>
        Reset
      </button>
      <button className="college-button" onClick={handleButtonClicktoBus}>
        Business College Helsinki
      </button>

      <div id="map-container" ref={mapContainerRef} />
    </>
  );
}

export default App;
