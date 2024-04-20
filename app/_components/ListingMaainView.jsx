'use client';
import React, { useEffect, useState } from 'react';
import Listings from './Listings';
import supabase from '@/utils/supabase';
import { toast } from 'sonner';

function ListingMainView({ type }) {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    let { data: listings, error } = await supabase
      .from('listings')
      .select('*, listingImages(listing_id, url)')
      .eq('active', true)
      .eq('type', type);
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
        <Listings listings={listings} />
      </div>
      <div>Map view area</div>
    </div>
  );
}

export default ListingMainView;
