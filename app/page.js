import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ListingMainView from './_components/ListingMaainView';

export default function Home() {
  return (
    <div className="px-10 p-10">
      <ListingMainView type="Sell" />
    </div>
  );
}
