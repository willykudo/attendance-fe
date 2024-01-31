// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import AttendanceData from 'pages/AttendanceData';
import AttendanceSetting from 'pages/AttendanceSetting';
import AttendanceOvertime from 'pages/AttendanceOvertime';
import AttendanceApproval from 'pages/AttendanceApproval';
import Layout from 'layout/index';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AttendanceData />} />
          <Route path='attendance-approval' element={<AttendanceApproval />} />
          <Route path='attendance-overtime' element={<AttendanceOvertime />} />
          <Route path='attendance-setting' element={<AttendanceSetting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
