import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { Sidebar, Header } from '@bluesilodev/timhutcomponents';

import UserSVG from 'assets/icon/UserSVG/UserSVG';
import FiHeartSVG from 'assets/icon/FiHeartSVG/FiHeartSVG';
import FiUserSVG from 'assets/icon/FiUserSVG/FiUserSVG';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      icon: <UserSVG className='w-6 h-6 mx-1' />,
      isActive: true,
      label: (
        <div
          className='font-lato text-sm font-semibold'
          onClick={() => navigate('/')}
        >
          Attendance Data
        </div>
      ),
    },
    {
      icon: <FiUserSVG className='w-6 h-6 mx-1' />,
      isActive: true,
      label: (
        <div
          className='font-lato text-sm font-semibold'
          onClick={() => navigate('/attendance-approval')}
        >
          Attendance Approval
        </div>
      ),
    },
    {
      icon: <FiHeartSVG className='w-6 h-6 mx-1' />,
      isActive: false,
      label: (
        <div
          className='font-lato text-sm font-semibold'
          onClick={() => navigate('/attendance-overtime')}
        >
          <p>Overtime</p>
        </div>
      ),
    },
    {
      icon: <FiHeartSVG className='w-6 h-6 mx-1' />,
      isActive: false,
      label: (
        <div
          className='font-lato text-sm font-semibold'
          onClick={() => navigate('/attendance-setting')}
        >
          Attendance Setting
        </div>
      ),
    },
  ];

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Attendance Data';
      case '/attendance-approval':
        return 'Attendance Approval';
      case '/attendance-overtime':
        return 'Overtime';
      case '/attendance-setting':
        return 'Attendance Setting';
      default:
        return 'Attendance';
    }
  };

  return (
    <>
      <div className='main'>
        <div className='flex h-screen'>
          <Sidebar menuItems={menuItems} width={'w-200px'} />

          <div className='flex-1 flex flex-col overflow-hidden'>
            <div className='flex-shrink-0'>
              <Header title={getTitle()} />
            </div>

            <div className='flex-1 overflow-x-hidden overflow-y-auto p-4'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
