import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  modals: [] as string[],
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _append: (state, action: PayloadAction<string>) => {
      if (!state.modals.includes(action.payload)) {
        state.modals.push(action.payload);
      }
    },
    _destroy: (state) => {
      state.modals.pop();
    },
    _destroyAll: (state) => {
      state.modals = [];
    },
  },
});

export const { _append, _destroy, _destroyAll } = modal.actions;
export default modal.reducer;
