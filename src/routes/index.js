// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import AttendanceData from 'pages/AttendanceData';
import AttendanceSetting from 'pages/AttendanceSetting';
import Layout from 'layout/index';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AttendanceData />} />
          <Route path='attendance-approval' element={<Home />} />
          <Route path='attendance-overtime' element={<Home />} />
          <Route path='attendance-setting' element={<AttendanceSetting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
