import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAttendanceRequest } from 'services/attendanceRequestService';

const attendanceRequestSlice = createSlice({
  name: 'attendanceRequest',
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

export const useAttendanceRequest = (queryParams) => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const dispatch = useDispatch();

  console.log(queryParams);

  const { data, error, isLoading } = useQuery(
    ['attendanceRequest', queryParams],
    () => fetchAttendanceRequest(token, queryParams),
    {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 10,
    }
  );

  const initialData = data || { attendances: [] };

  useEffect(() => {
    dispatch(attendanceRequestSlice.actions.startLoading());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(attendanceRequestSlice.actions.fetchSuccess(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(attendanceRequestSlice.actions.fetchError(error));
    }
  }, [error, dispatch]);

  return { data: initialData, error, isLoading };
};

export default attendanceRequestSlice.reducer;
