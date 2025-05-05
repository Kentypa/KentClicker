import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../types/user-data";

const initialState: UserData = {
  name: "",
  iconBig: "",
  iconSmall: "",
  achievements: [],
  totalCoins: {
    img: "",
    name: "",
    description: "",
  },
  totalClicks: {
    img: "",
    name: "",
    description: "",
  },
  passiveIncome: {
    img: "",
    name: "",
    description: "",
  },
  upgradesList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeByData: (state, action: PayloadAction<UserData>) => {
      state = action.payload;
    },
  },
});

export const { changeByData } = userSlice.actions;

export default userSlice.reducer;
