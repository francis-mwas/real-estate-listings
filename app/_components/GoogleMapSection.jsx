import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapMapper from './MapMapper';

const containerStyle = {
  width: '100%',
  height: '80vh',
  borderRadius: 10,
};
const center = {
  lat: -3.745,
  lng: -38.523,
};
function GoogleMapSection({ coordinates, listings }) {
  // console.log('The coordinates: ', coordinates);

  const [center, setCenter] = useState({
    lat: -1.2545334,
    lng: 36.8879148,
  });
  const [map, setMap] = React.useState(null);

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY,
  // });

  useEffect(() => {
    coordinates && setCenter(coordinates);
  }, [coordinates]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {listings?.map((listing, index) => (
          <MapMapper key={index} listing={listing} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default GoogleMapSection;
