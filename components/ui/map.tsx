'use client';
import React, { useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

function Map({
  lat,
  lng,
  width = '100%',
  height = '400px',
}: {
  lat: number;
  lng: number;
  width?: string;
  height?: string;
}) {
  const center = useMemo(() => ({ lat, lng }), []);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    // <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
    //   {/* Child components, such as markers, info windows, etc. */}
    //   <></>
    // </GoogleMap>
    <div className="not-prose">
      <GoogleMap
        zoom={19}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width, height, margin: 'auto' }}
      >
        <Marker
          position={{
            lat,
            lng,
          }}
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Map);
