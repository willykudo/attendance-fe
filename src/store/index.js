import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import attendanceSettingReducer from './slices/attendanceSettingSlice';
import attendanceDataSlice from './slices/attendanceDataSlice';
import attendanceRequestSlice from './slices/attendanceRequestSlice';
import authReducer from './slices/authSlice';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  attendanceSetting: attendanceSettingReducer,
  auth: authReducer,
  attendanceData: attendanceDataSlice,
  attendanceRequest: attendanceRequestSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
