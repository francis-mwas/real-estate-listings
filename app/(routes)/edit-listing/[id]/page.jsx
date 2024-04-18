'use client';
import React, { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Formik } from 'formik';
import { Button } from '@/components/ui/button';
import { useParams, usePathname } from 'next/navigation';

function EditListing() {
  const params = usePathname();
  useEffect(() => {
    console.log(params.split('/')[2]);
  }, []);
  return (
    <div className="px-10 md:px-36 my-10">
      <h2 className="font-bold text-2xl">
        Capture more additional details about the listing
      </h2>
      <Formik
        initialValues={{
          type: '',
          propertyType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="p-8 rounded-lg shadow-md flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg text-slate-500">Sell or Rent</h2>
                    <RadioGroup
                      defaultValue="Sell"
                      onValueChange={(val) => (values.type = val)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Sell" id="Sell" />
                        <Label htmlFor="Sell">sell</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Rent" id="Rent" />
                        <Label htmlFor="Rent">Rent</Label>
                      </div>
                    </RadioGroup>
                    <div></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-lg text-slate-500">Property type</h2>
                    <Select
                      onValueChange={(val) => (values.propertyType = val)}
                      name="propertyType"
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Single Family House">
                          Single Family House
                        </SelectItem>
                        <SelectItem value="Town House">Town House</SelectItem>
                        <SelectItem value="Condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Bedroom</h2>
                    <Input
                      placeholder="Ex.2"
                      name="bedroom"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Bathroom</h2>
                    <Input
                      placeholder="Ex.2"
                      name="bathroom"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Built in</h2>
                    <Input
                      placeholder="Ex.1900 sq.ft"
                      name="buitin"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Parking</h2>
                    <Input
                      placeholder="Ex.2"
                      name="parking"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Lot Size(Sq.Ft)</h2>
                    <Input
                      placeholder=""
                      name="lotSize"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Area(Sq.Ft)</h2>
                    <Input
                      placeholder="Ex.1900"
                      name="area"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Selling Price(Ksh)</h2>
                    <Input
                      placeholder="400000"
                      name="sellingprice"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">HOA(Per Month)(Ksh)</h2>
                    <Input
                      placeholder="100"
                      name="hoa"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-10">
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-gray-500">Description</h2>
                    <Textarea
                      id="description"
                      name="description"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex gap-7 justify-end">
                  <Button
                    variant="outline"
                    className="text-primary border-primary"
                  >
                    Save
                  </Button>
                  <Button className="">Save & Publish</Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default EditListing;
