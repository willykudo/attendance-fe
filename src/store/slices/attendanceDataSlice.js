import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendanceData } from 'services/fetchAttendanceData';

const attendanceDataSlice = createSlice({
  name: 'attendanceData',
  initialState: {
    data: null,
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

export const useAttendanceData = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useQuery('attendanceData', () =>
    fetchAttendanceData(token)
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

  // Add an effect to re-fetch data on component mount (page reload)
  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data: initialData, error, isLoading };
};

export default attendanceDataSlice.reducer;
