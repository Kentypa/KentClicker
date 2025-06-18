import { FC } from "react";
import { OffersFiltering } from "../OffersFiltering";
import { OffersList } from "../OffersList";
import { UserOffer } from "@custom-types/user-offer";

type OffersContentProps = {
  offers: UserOffer[];
};

export const OffersContent: FC<OffersContentProps> = ({ offers }) => {
  return (
    <div className="flex flex-col">
      <OffersFiltering className="mb-8" />
      <OffersList offers={offers} />
    </div>
  );
};
