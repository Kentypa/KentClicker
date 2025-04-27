import UndefinedIcon from '../../assets/icons/undefined.svg';
import UserSmallIcon from '../../assets/icons/user-light.svg';
import UserBigIcon from '../../assets/icons/user-dark.svg';
import { UserData } from '../../types/user-data';

export const user: UserData = {
  name: 'Tony Stark',
  iconBig: UserBigIcon,
  iconSmall: UserSmallIcon,
  achievements: [
    {
      img: UndefinedIcon,
      name: 'First Strike',
      description: 'Earn your first 1000 ClickCoins',
    },
    {
      img: UndefinedIcon,
      name: 'Click Master',
      description: 'Reach 1000 Coins per Click',
    },
    {
      img: UndefinedIcon,
      name: 'Lightning Fingers',
      description: 'Perform 1000 clicks',
    },
    {
      img: UndefinedIcon,
      name: 'Golden Tap',
      description: 'Achieve 100 Golden Clicks',
    },
    {
      img: UndefinedIcon,
      name: 'Click Frenzy',
      description: 'Generate 10,000 ClickCoins',
    },
    {
      img: UndefinedIcon,
      name: 'Steady Stream',
      description: 'Earn 20 ClickCoin per second',
    },
    {
      img: UndefinedIcon,
      name: 'Passive Prodigy',
      description: 'Reach 10 000 Passive Income',
    },
    {
      img: UndefinedIcon,
      name: 'Endless Flow',
      description: 'Maintain passive income for 24 hours and more',
    },
  ],
  totalCoins: {
    name: 19247,
    img: UndefinedIcon,
    description: 'Total ClickCoins',
  },
  totalClicks: {
    name: 374273475,
    img: UndefinedIcon,
    description: 'Total Clicks',
  },
  passiveIncome: {
    name: '1 /sec',
    img: UndefinedIcon,
    description: 'Passive Income',
  },
  upgradesList: [
    {
      img: UndefinedIcon,
      name: 'Click Accelerator',
      description: 'speed of earning x10',
      price: 40000,
    },
    {
      img: UndefinedIcon,
      name: 'Coin Multiplier',
      description: 'ClickCoins per click x10',
      price: 40000,
    },
    {
      img: UndefinedIcon,
      name: 'Power Tap',
      description: 'ClickCoins per click x2',
      price: 10000,
    },
    {
      img: UndefinedIcon,
      name: 'Golden Touch',
      description: 'Random bonus on click',
      price: 40000,
    },
    {
      img: UndefinedIcon,
      name: 'Coin Stream',
      description: 'passive income x10',
      price: 40000,
    },
    {
      img: UndefinedIcon,
      name: 'Mining Drone',
      description: 'automated click for 1 min',
      price: 100000,
    },
    {
      img: UndefinedIcon,
      name: 'Extra Hands',
      description: 'ClickCoins per click x40',
      price: 200000,
    },
    {
      img: UndefinedIcon,
      name: 'Gnome Party',
      description: 'gnomes clicks 24 hours',
      price: 1000000,
    },
  ],
};
