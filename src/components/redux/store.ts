import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const INITIAL_STATE = {
};

const actionsSlice = createSlice({
  name: 'actions',
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: builder =>
    builder

});

export const actions = {
  ...actionsSlice.actions,
};
const { reducer } = actionsSlice;
export const store = configureStore({ reducer });
export type ActionsDispatch = typeof store.dispatch;

export function useActionsDispatch(): ActionsDispatch {
  return useDispatch<ActionsDispatch>();
}
