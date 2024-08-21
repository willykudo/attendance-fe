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
    updateEmployeeDetails: (state, action) => {
      const { uId, updatedDetails } = action.payload;
      if (state.data.attendances) {
        const recordIndex = state.data.attendances.findIndex(record => record.uId === uId);
        if (recordIndex !== -1) {
          state.data.attendances[recordIndex].employeeDetails = updatedDetails;
        }
      }
    }
  },
});

export const selectAllData = (state) => state.attendanceData.data.data;

export const selectRecordByUId = (uId) => (state) => {
  const allData = selectAllData(state);

  console.log(uId)
  console.log(allData)
  return Array.isArray(allData)
    ? allData.find((record) => record.uId === uId)
    : null;
};

export const useAttendanceData = (queryParams) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  // console.log(token);
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

export const { startLoading, fetchSuccess, fetchError, updateEmployeeDetails } = attendanceDataSlice.actions;

export default attendanceDataSlice.reducer;    