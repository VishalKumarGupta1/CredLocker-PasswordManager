import { createSlice } from "@reduxjs/toolkit";
import passwordData from "./Data";

const Userslice = createSlice({
  name: "users",
  initialState: passwordData,
  reducers: {
    adduser: (state, action) => {
      state.push(action.payload);
    },
    updateuser: (state, action) => {
      const { id, site, username, password } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.site = site;
        uu.username = username;
        uu.password = password;
      }
    },
    deleteuser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find(users => users.id == id);
      if (uu) {
        return state.filter(f => f.id !== id);
      }
    },
  },
});
export const { adduser, updateuser, deleteuser } = Userslice.actions;
export default Userslice.reducer;
