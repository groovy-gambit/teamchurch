'use client';
import React, { useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  return isLoaded ? (
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
