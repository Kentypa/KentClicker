import { userSelector } from "../stores/selectors/userSelector";
import { useAppSelector } from "./redux";
import undefinedIcon from "../assets/icons/undefined.svg";
import { FeatureItem } from "../types/feature-item";

export const useProfileFeatures = () => {
  const {
    userStats: { totalClickCoins, totalClicks },
  } = useAppSelector(userSelector);

  return [
    {
      description: "Total ClickCoins",
      img: undefinedIcon,
      name: totalClickCoins,
    },
    {
      description: "Total Clicks",
      img: undefinedIcon,
      name: totalClicks,
    },
  ] as FeatureItem[];
};
