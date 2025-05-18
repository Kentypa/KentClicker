import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../types/user-data";

const initialState: UserData = {
  username: "",
  avatarUrl: "",
  achievements: [],
  email: "",
  userStats: {
    id: 0,
    totalClickCoins: 0,
    totalClicks: 0,
    coinsPerClick: 0,
    passiveCoinsIncome: 0,
  },
  isAuthenticated: null,
  authLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeByData: (_, action: PayloadAction<UserData>) => {
      const avatarUrl = action.payload.avatarUrl
        ? `http://localhost:3000/${action.payload.avatarUrl}`
        : "";

      return {
        ...action.payload,
        avatarUrl,
        isAuthenticated: action.payload.email !== "",
        authLoading: false,
      };
    },
    changeIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    changeIsAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.authLoading = action.payload;
    },
  },
});

export const { changeByData, changeIsAuthenticated, changeIsAuthLoading } =
  userSlice.actions;

export default userSlice.reducer;
