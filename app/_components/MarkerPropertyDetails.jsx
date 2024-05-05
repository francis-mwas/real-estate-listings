import { Button } from '@/components/ui/button';
import { Bath, BedDouble, MapPin, Ruler, Search, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function MarkerPropertyDetails({ item, closeOverlay }) {
  return (
    <div className=" cursor-pointer rounded-lg w-[180px]">
      <X onClick={() => closeOverlay()} className="bg-primary rounded-lg" />
      <Image
        src={item.listingImages[0].url}
        width={800}
        height={150}
        alt={item.propertyType}
        className="rounded-lg object-cover w-[180px] h-[120px]"
      />
      <div className="flex mt-2 flex-col gap-2 p-2 bg-white">
        <h2 className="font-bold text-xl">KES {item.sellingPrice}</h2>
        <h2 className="flex gap-2 text-sm text-gray-400">
          <MapPin className="h-4 w-4" /> {item.address}
        </h2>
        <div className="flex gap-2 mt-2 justify-between">
          <h2 className="flex w-full gap-2 text-sm bg-slate-200 rounded-md p-2 text-gray-500 justify-center items-center">
            <BedDouble className="w-4 h-4" />
            {item?.bedRoom}
          </h2>
          <h2 className="flex  w-full  gap-2 text-sm bg-slate-200 rounded-md p-2 text-gray-500 justify-center items-center">
            <Bath className="w-4 h-4" />
            {item?.bathroom}
          </h2>
        </div>
        <Button size="sm">View Details</Button>
      </div>
    </div>
  );
}

export default MarkerPropertyDetails;
