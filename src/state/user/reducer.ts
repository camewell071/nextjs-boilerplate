import { createSlice } from '@reduxjs/toolkit';
import { ConnectionType } from '@/web3/connection';

export interface UserState {
  selectedWallet?: ConnectionType;
}
export const initialState: UserState = {
  selectedWallet: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSelectedWallet(state, { payload: { wallet } }) {
      state.selectedWallet = wallet;
    },
    resetUser(state) {
      state.selectedWallet = undefined;
    },
  },
});

export const { updateSelectedWallet, resetUser } = userSlice.actions;
export default userSlice.reducer;
