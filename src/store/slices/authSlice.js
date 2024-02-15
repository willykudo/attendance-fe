import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload.payLoad;
    },
  },
});

const { reducer, actions } = authSlice;
export const { loginSuccess } = actions;

export default reducer;
