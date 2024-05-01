import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Bath, Bed, BedDouble, CarFront, Home } from 'lucide-react';

function FilterSection({
  setBedCount,
  setBathCount,
  setparkingCount,
  setHomeType,
}) {
  return (
    <div className="px-3 py-4 grid grid-cols-2 md:flex gap-2">
      <Select onValueChange={setBedCount}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Beds" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2">
            <h2 className="flex gap-2">
              <BedDouble className="h-5 w-5 text-primary" /> 2+
            </h2>
          </SelectItem>
          <SelectItem value="3">
            <h2 className="flex gap-2">
              <BedDouble className="h-5 w-5 text-primary" /> 3+
            </h2>
          </SelectItem>
          <SelectItem value="4">
            <h2 className="flex gap-2">
              <BedDouble className="h-5 w-5 text-primary" /> 4+
            </h2>
          </SelectItem>
          <SelectItem value="5">
            <h2 className="flex gap-2">
              <BedDouble className="h-5 w-5 text-primary" /> 5+
            </h2>
          </SelectItem>
          <SelectItem value="6">
            <h2 className="flex gap-2">
              <BedDouble className="h-5 w-5 text-primary" /> 6+
            </h2>
          </SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={setBathCount}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Baths" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2">
            <h2 className="flex gap-2">
              <Bath className="h-5 w-5 text-primary" /> 2+
            </h2>
          </SelectItem>
          <SelectItem value="3">
            <h2 className="flex gap-2">
              <Bath className="h-5 w-5 text-primary" /> 3+
            </h2>
          </SelectItem>
          <SelectItem value="4">
            <h2 className="flex gap-2">
              <Bath className="h-5 w-5 text-primary" /> 4+
            </h2>
          </SelectItem>
          <SelectItem value="5">
            <h2 className="flex gap-2">
              <Bath className="h-5 w-5 text-primary" /> 5+
            </h2>
          </SelectItem>
          <SelectItem value="6">
            <h2 className="flex gap-2">
              <Bath className="h-5 w-5 text-primary" /> 6+
            </h2>
          </SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={setparkingCount}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Parking" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">
            <h2 className="flex gap-2">
              <CarFront className="h-5 w-5 text-primary" /> 1+
            </h2>
          </SelectItem>
          <SelectItem value="2">
            <h2 className="flex gap-2">
              <CarFront className="h-5 w-5 text-primary" /> 2+
            </h2>
          </SelectItem>
          <SelectItem value="3">
            <h2 className="flex gap-2">
              <CarFront className="h-5 w-5 text-primary" /> 3+
            </h2>
          </SelectItem>
          <SelectItem value="4">
            <h2 className="flex gap-2">
              <CarFront className="h-5 w-5 text-primary" /> 4+
            </h2>
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) =>
          value == 'All' ? setHomeType(null) : setHomeType(value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Home type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Town House">
            <h2 className="flex gap-2">
              <Home className="h-5 w-5 text-primary" />
              Town House
            </h2>
          </SelectItem>
          <SelectItem value="Single Family Home">
            <h2 className="flex gap-2">
              <Home className="h-5 w-5 text-primary" />
              Single Family Home
            </h2>
          </SelectItem>
          <SelectItem value="Condo">
            <h2 className="flex gap-2">
              <Home className="h-5 w-5 text-primary" />
              Condo
            </h2>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default FilterSection;
