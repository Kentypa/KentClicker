import { FC } from 'react';
import { UserOffer } from '../../types/user-offer';
import { UserOfferItem } from '../ui/UserOfferItem';

type OffersListProps = {
  offers: UserOffer[];
};

export const OffersList: FC<OffersListProps> = ({ offers }) => {
  return (
    <ul className='grid grid-cols-3 gap-6'>
      {offers.map((offer, index) => (
        <UserOfferItem
          offer={offer}
          key={index + offer.userName}
        />
      ))}
    </ul>
  );
};
