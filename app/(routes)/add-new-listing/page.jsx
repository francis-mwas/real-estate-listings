'use client';

import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import supabase from '@/utils/supabase';
import { useUser } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

function AddNewListing() {
  const [selectedAddress, setSelectedAddress] = useState();
  const [coordinates, setCoordinates] = useState(false);
  const { user } = useUser();
  const [loader, setLoader] = useState();
  const router = useRouter();
  const saveAddressData = async () => {
    setLoader(true);
    console.log(selectedAddress, coordinates);

    const { data, error } = await supabase
      .from('listings')
      .insert([
        {
          address: selectedAddress.label,
          coordinates: coordinates,
          createdBy: user?.primaryEmailAddress.emailAddress,
        },
      ])
      .select();
    if (data) {
      setLoader(false);
      toast('Address data saved successfully!');
      router.replace('/edit-listing/' + `${data[0].id}`);
    }
    if (error) {
      console.log('The error occured: ', error);
      toast('An error occurred: ', error);
    }
  };
  return (
    <div className="mt-10 md:mx-56 lg:mx-80">
      <div className="p-10 flex flex-col gap-5 items-center justify-center">
        <h2 className="font-bold text-2">Add New Listing</h2>
        <div className="p-10 rounded-lg border shadow-md flex flex-col gap-5  w-full">
          <h2 className="text-gray-500">
            Enter Address which you want to list
          </h2>
          <GoogleAddressSearch
            selectedAddress={(value) => setSelectedAddress(value)}
            setCoordinates={(value) => setCoordinates(value)}
          />
          <Button
            disabled={!selectedAddress || !coordinates || loader}
            onClick={saveAddressData}
          >
            {loader ? <Loader className="animate-spin" /> : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddNewListing;
