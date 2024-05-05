import { Bath, BedDouble, MapPin, Ruler, Search } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import GoogleAddressSearch from './GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import FilterSection from './FilterSection';

function Listings({
  listings,
  handleSearchClick,
  searchByAddress,
  setBathCount,
  setBedCount,
  setparkingCount,
  setHomeType,
  setCoordinates,
}) {
  const [address, setAddress] = useState();
  return (
    <div>
      <div className="p-5 flex gap-5">
        <GoogleAddressSearch
          selectedAddress={(address) => {
            searchByAddress(address);
            setAddress(address);
          }}
          setCoordinates={setCoordinates}
        />

        <Button onClick={handleSearchClick} className="flex gap-2">
          {' '}
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
      <div>
        <FilterSection
          setBathCount={setBathCount}
          setBedCount={setBedCount}
          setparkingCount={setparkingCount}
          setHomeType={setHomeType}
        />
      </div>

      {address && (
        <div className="px-3 my-5">
          <h2 className="text-xl">
            {' '}
            Found <span className="font-bold"> {listings?.length}</span> result
            in <span className="text-primary font-bold"> {address?.label}</span>
          </h2>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listings.length > 0
          ? listings?.map((item, index) => (
              <div
                className="p-3 hover:border hover:border-primary cursor-pointer rounded-lg"
                key={index}
              >
                <Image
                  src={item.listingImages[0].url}
                  width={800}
                  height={150}
                  alt={index}
                  className="rounded-lg object-cover h-[170px]"
                />
                <div className="flex mt-2 flex-col gap-2">
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
                    <h2 className="flex  w-full  gap-2 text-sm bg-slate-200 rounded-md p-2 text-gray-500 justify-center items-center">
                      <Ruler className="w-4 h-4" />
                      {item?.area}
                    </h2>
                  </div>
                </div>
              </div>
            ))
          : [1, 2, 3, 3, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="h-[230px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default Listings;
