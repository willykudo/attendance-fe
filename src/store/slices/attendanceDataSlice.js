import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendanceData } from 'services/fetchAttendanceData';

const attendanceDataSlice = createSlice({
  name: 'attendanceData',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectAllData = (state) => state.attendanceData.data.data;

export const selectRecordByUId = (uId) => (state) => {
  const allData = selectAllData(state);
  return Array.isArray(allData)
    ? allData.find((record) => record.uId === uId)
    : null;
};

export const useAttendanceData = (queryParams) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery(
    ['attendanceData', queryParams], // Pass queryParams as part of the key
    () => fetchAttendanceData(token, queryParams),
    {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 2,
    }
  );

  const initialData = data || { attendances: [] };

  useEffect(() => {
    dispatch(attendanceDataSlice.actions.startLoading());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(attendanceDataSlice.actions.fetchSuccess(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(attendanceDataSlice.actions.fetchError(error));
    }
  }, [error, dispatch]);

  return { data: initialData, error, isLoading };
};

export default attendanceDataSlice.reducer;
