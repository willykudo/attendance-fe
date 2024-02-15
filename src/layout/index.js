import React from 'react';
import { Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom';

import { Sidebar, Header } from '@bluesilodev/timhutcomponents';

import UserSVG from 'assets/icon/UserSVG/UserSVG';
import FiHeartSVG from 'assets/icon/FiHeartSVG/FiHeartSVG';

const Layout = () => {
  const location = useLocation();

  const allMenu = [
    {
      label: (
        <NavLink
          to={'/'}
          className={`${
            location.pathname === '/' && 'bg-orange-500 text-white'
          } flex gap-1 rounded-md p-3 w-full items-center hover:scale-x-105 hover:cursor-pointer transition-all duration-300`}
        >
          <UserSVG color={`${location.pathname === '/' ? 'white' : 'black'}`} />
          <h1>Attendance Data</h1>
        </NavLink>
      ),
    },
    {
      label: (
        <NavLink
          to={'/attendance-approval'}
          className={`${
            location.pathname === '/attendance-approval' &&
            'bg-orange-500 text-white'
          } flex gap-1 rounded-md p-3 w-full items-center hover:scale-x-105 hover:cursor-pointer transition-all duration-300`}
        >
          <FiHeartSVG
            color={`${
              location.pathname === '/attendance-approval' ? 'white' : 'black'
            }`}
          />
          <h1>Attendance Overtime</h1>
        </NavLink>
      ),
    },
    {
      label: (
        <NavLink
          to={'/attendance-overtime'}
          className={`${
            location.pathname === '/attendance-overtime' &&
            'bg-orange-500 text-white'
          } flex gap-1 rounded-md p-3 w-full items-center hover:scale-x-105 hover:cursor-pointer transition-all duration-300`}
        >
          <FiHeartSVG
            color={`${
              location.pathname === '/attendance-overtime' ? 'white' : 'black'
            }`}
          />
          <h1>Attendance Overtime</h1>
        </NavLink>
      ),
    },
    {
      label: (
        <NavLink
          to={'/attendance-setting'}
          className={`${
            location.pathname === '/attendance-setting' &&
            'bg-orange-500 text-white'
          } flex gap-1 rounded-md p-3 w-full items-center hover:scale-x-105 hover:cursor-pointer transition-all duration-300`}
        >
          <FiHeartSVG
            color={`${
              location.pathname === '/attendance-setting' ? 'white' : 'black'
            }`}
          />
          <h1>Attendance Setting</h1>
        </NavLink>
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
    <div className='w-full flex justify-center items-center '>
      <div className='flex w-full'>
        <div className='w-[300px] '>
          <Sidebar menuItems={allMenu} />
        </div>

        <div className='flex flex-col w-full'>
          <div className='px-6'>
            <Header
              title={getTitle()}
              userData={{
                name: 'Dan Lim',
                role: 'HR Admin',
                language: 'English',
                switchRole: 'User',
              }}
            />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
