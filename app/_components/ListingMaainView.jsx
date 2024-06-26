'use client';
import React, { useEffect, useState } from 'react';
import Listings from './Listings';
import supabase from '@/utils/supabase';
import { toast } from 'sonner';
import GoogleMapSection from './GoogleMapSection';

function ListingMainView({ type }) {
  const [listings, setListings] = useState([]);
  const [searchByAddress, setSearchByAddress] = useState([]);
  const [bedCount, setBedCount] = useState(0);
  const [bathCount, setBathCount] = useState(0);
  const [parkingCount, setParkingCount] = useState(0);
  const [homeType, setHomeType] = useState();
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    getListings();
  }, []);
  const handleSearchClick = async (e) => {
    const passedAddress =
      searchByAddress?.value?.structured_formatting?.main_text;
    let query = await supabase
      .from('listings')
      .select('*, listingImages(listing_id, url)')
      .eq('active', true)
      .eq('type', type)
      .gte('bathroom', bathCount)
      .gte('bedRoom', bedCount)
      .gte('parking', parkingCount)
      .like('address', '%' + passedAddress + '%')
      .order('id', {
        ascending: false,
      });
    const { data: listings, error } = await query;

    if (homeType) {
      query = query.ew('propertyType', homeType);
    }

    if (listings) {
      setListings(listings);
    }
  };

  const getListings = async () => {
    let { data: listings, error } = await supabase
      .from('listings')
      .select('*, listingImages(listing_id, url)')
      .eq('active', true)
      .eq('type', type)
      .order('id', {
        ascending: false,
      });
    if (listings) {
      console.log(listings);
      setListings(listings);
    }
    if (error) {
      toast('Server error!');
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Listings
          listings={listings}
          handleSearchClick={handleSearchClick}
          searchByAddress={(address) => setSearchByAddress(address)}
          setBathCount={setBathCount}
          setBedCount={setBedCount}
          setparkingCount={setParkingCount}
          setHomeType={setHomeType}
          setCoordinates={setCoordinates}
        />
      </div>
      <div className="fixed right-10 h-full md:w-[350px] lg:w-[450px] xl:w-[650px] 2xl:w-[850px]">
        <GoogleMapSection coordinates={coordinates} listings={listings} />
      </div>
    </div>
  );
}

export default ListingMainView;
