import { createSlice } from "@reduxjs/toolkit";

const attendanceSettingSlice = createSlice({
  name: "attendanceSettingSlice",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setData(state, action) {},
  },
});

export default attendanceSettingSlice.reducer;
