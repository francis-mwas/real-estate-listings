import Image from 'next/image';
import React from 'react';

function Listings({ listings }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {listings?.map((item, index) => (
          <div>
            <Image
              src={item.listingImages[0].url}
              width={800}
              height={150}
              alt={index}
              className="rounded-lg object-cover h-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
