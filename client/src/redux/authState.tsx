import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    _id: "user-001",
    email: "philip",
    userRole: "free",
    isEmailVerified: false,
    isBlocked: false,
    isAuthRegistered: false,
  },
  reducers: {
    login: (
      state: AuthContent,
      action: { payload: { _id: string; email: string } }
    ) => {
      const { _id, email } = action.payload;

      const authStateData = { isAuthRegistered: true, email, _id };

      localStorage.setItem("taptaptask-auth", JSON.stringify(authStateData));

      return { ...state, ...authStateData };
    },
    signup: (
      state: AuthContent,
      action: { payload: { _id: string; email: string } }
    ) => {
      const { _id, email } = action.payload;

      const authStateData = { isAuthRegistered: true, email, _id };

      localStorage.setItem("taptaptask-auth", JSON.stringify(authStateData));

      return { ...state, isAuthRegistered: true, email, _id };
    },
    logout: (state: AuthContent) => {
      return {
        _id: "",
        email: "",
        userRole: "free",
        isEmailVerified: false,
        isBlocked: false,
        isAuthRegistered: false,
      };
    },
    verifyAuthState: (state: AuthContent) => {
      return {
        ...state,
        isAuthRegistered: true,
      };
    },
  },
});

export const { signup, login, logout, verifyAuthState } = authSlice.actions;

export default authSlice.reducer;

interface AuthContent {
  _id: string;
  email: string;
  userRole: string;
  isEmailVerified: boolean;
  isBlocked: boolean;
  // isAuthRegistered is frontend only
  isAuthRegistered: boolean;
}

export interface AuthStateType {
  auth: AuthContent;
}
