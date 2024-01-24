import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";



const initialState = {
  userData : []
};

const userSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    addData: (state, action)=>{
      state.userData = [...state.userData,action.payload]
    },
   
    removeData: (state, action)=>{
      const newUserData = state.userData.filter(item=>item?.id !== action.payload)
      state.userData = newUserData
    }
   
  },
 
});

export const {  addData, removeData } = userSlice.actions;
export default userSlice.reducer;
