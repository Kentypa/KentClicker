import { userSelector } from "../stores/selectors/userSelector";
import { useAppSelector } from "./redux";
import undefinedIcon from "../assets/icons/undefined.svg";
import { FeatureItem } from "../types/feature-item";

export const useHomeFeatures = () => {
  const {
    userStats: { totalClickCoins },
    userCharacteristics: { coinsPerClick, passiveCoinsIncome },
  } = useAppSelector(userSelector);

  return [
    {
      description: "Total ClickCoins",
      img: undefinedIcon,
      name: totalClickCoins,
    },
    {
      description: "Coins per Click",
      img: undefinedIcon,
      name: coinsPerClick,
    },
    {
      description: "Passive Income",
      img: undefinedIcon,
      name: passiveCoinsIncome,
    },
  ] as FeatureItem[];
};
