// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceData from 'pages/AttendanceData';
import AttendanceSetting from 'pages/AttendanceSetting';
import AttendanceOvertime from 'pages/AttendanceOvertime';
import AttendanceApproval from 'pages/AttendanceApproval';
import Layout from 'layout/index';
import ApprovalPage from 'pages/AttendanceApproval/approvalPage';
import OvertimeApproval from 'pages/AttendanceOvertime/overtimeApproval';
import EditAttendance from 'pages/AttendanceData/editAttendancePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='attendance-data' element={<AttendanceData />}>
            <Route path=':id' element={<EditAttendance />} />
          </Route>
          <Route path='edit-attendance' element={<EditAttendance />} />
          <Route path='attendance-approval' element={<AttendanceApproval />}>
            <Route path='approval' element={<ApprovalPage />} />
          </Route>
          <Route path='attendance-overtime' element={<AttendanceOvertime />}>
            <Route path='overtime-approval' element={<OvertimeApproval />} />
          </Route>
          <Route path='attendance-setting' element={<AttendanceSetting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
