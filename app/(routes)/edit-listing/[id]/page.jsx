'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function EditListing() {
  return (
    <div className="px-10 md:px-36 my-10">
      <h2 className="font-bold text-2xl">
        Capture more additional details about the listing
      </h2>
      <div className="p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <h2>Sell or Rent</h2>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default EditListing;
