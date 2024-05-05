import { MarkerF, OverlayView } from '@react-google-maps/api';
import React, { useState } from 'react';
import MarkerPropertyDetails from './MarkerPropertyDetails';

function MapMapper({ listing }) {
  const [selectedProperty, setSelectedProperty] = useState();
  return (
    <div>
      <MarkerF
        position={listing.coordinates}
        onClick={() => setSelectedProperty(listing)}
        icon={{
          url: '/mapPin.png',
          scaledSize: {
            width: 60,
            height: 60,
          },
        }}
      >
        {selectedProperty && (
          <OverlayView
            position={selectedProperty.coordinates}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div>
              <MarkerPropertyDetails
                closeOverlay={() => setSelectedProperty(null)}
                item={selectedProperty}
              />
            </div>
          </OverlayView>
        )}
      </MarkerF>
    </div>
  );
}

export default MapMapper;
