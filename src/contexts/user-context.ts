import React from 'react';
import { UserData } from '../types/user-data.ts';

export const UserContext = React.createContext<UserData>({
  achievements: [],
  iconBig: '',
  iconSmall: '',
  name: '',
  totalClicks: {
    img: '',
    name: '',
    description: '',
  },
  totalCoins: {
    img: '',
    name: '',
    description: '',
  },
  passiveIncome: {
    img: '',
    name: '',
    description: '',
  },
  upgradesList: [],
});
