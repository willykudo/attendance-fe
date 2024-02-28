import React from 'react';
import { Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom';

import { Sidebar, Header } from '@bluesilodev/timhutcomponents';

import UserSVG from 'assets/icon/UserSVG/UserSVG';
import FiHeartSVG from 'assets/icon/FiHeartSVG/FiHeartSVG';

import Profile from '../../src/assets/images/profile.jpeg';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const allMenu = [
    {
      label: (
        <NavLink
          to={'/attendance-data'}
          className={`${
            location.pathname.startsWith('/attendance-data') &&
            'bg-orange-500 text-white'
          } flex gap-1 rounded-md p-3 w-full items-center hover:scale-x-105 hover:cursor-pointer transition-all duration-300`}
        >
          <UserSVG
            color={`${
              location.pathname.startsWith('/attendance-data')
                ? 'white'
                : 'black'
            }`}
          />
          <h1>Attendance Data</h1>
        </NavLink>
      ),
    },
    {
      label: (
        <NavLink
          to={'/attendance-approval'}
          className={`${
            location.pathname.startsWith('/attendance-approval') &&
            'bg-orange-500 text-white'
          } flex gap-1 rounded-md p-3 w-full items-center hover:scale-x-105 hover:cursor-pointer transition-all duration-300`}
          isActive={(match, location) => {
            return location.pathname.startsWith(match.url);
          }}
        >
          <FiHeartSVG
            color={`${
              location.pathname === '/attendance-approval' ||
              location.pathname === '/attendance-approval/approval'
                ? 'white'
                : 'black'
            }`}
          />
          <h1>Attendance Approval</h1>
        </NavLink>
      ),
    },
    {
      label: (
        <NavLink
          to={'/attendance-overtime'}
          className={`${
            location.pathname.startsWith('/attendance-overtime') &&
            'bg-orange-500 text-white'
          } flex gap-1 rounded-md p-3 w-full items-center hover:scale-x-105 hover:cursor-pointer transition-all duration-300`}
          isActive={(match, location) => {
            return location.pathname.startsWith(match.url);
          }}
        >
          <FiHeartSVG
            color={`${
              location.pathname === '/attendance-overtime' ||
              location.pathname === '/attendance-overtime/overtime-approval'
                ? 'white'
                : 'black'
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
      case '/attendance-data':
        return (
          <div
            className='items-center justify-center text-3xl
            '
          >
            Attendance Data
          </div>
        );
      case '/attendance-approval':
        return (
          <div
            className='items-center justify-center text-3xl
            '
          >
            Attendance Approval
          </div>
        );
      case '/attendance-approval/approval':
        return (
          <div className='flex'>
            <div
              className='flex items-center justify-center cursor-pointer'
              onClick={() => navigate(-1)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                />
              </svg>
            </div>
            <div
              className='ml-2 flex items-center justify-center text-3xl
            '
            >
              Attendance Details
            </div>
          </div>
        );
      case '/attendance-overtime':
        return (
          <div
            className='items-center justify-center text-3xl
            '
          >
            Overtime
          </div>
        );
      case '/attendance-overtime/overtime-approval':
        return (
          <div className='flex'>
            <div
              className='flex items-center justify-center cursor-pointer'
              onClick={() => navigate(-1)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                />
              </svg>
            </div>
            <div
              className='ml-2 flex items-center justify-center text-3xl
            '
            >
              Overtime Details
            </div>
          </div>
        );
      case '/attendance-setting':
        return (
          <div
            className='items-center justify-center text-3xl
            '
          >
            Attendance Setting
          </div>
        );
      default:
        return (
          <div
            className='items-center justify-center text-3xl
            '
          >
            Attendance
          </div>
        );
    }
  };

  return (
    <div className='w-full flex'>
      <div className='w-[300px] fixed h-full overflow-y-auto'>
        <Sidebar menuItems={allMenu} />
      </div>

      <div className='flex flex-col w-full ml-[300px]'>
        <div className='px-6'>
          <Header
            title={getTitle()}
            userData={{
              name: 'Dan Lim',
              role: 'HR Admin',
              language: 'English',
              switchRole: 'User',
              image: (
                <img
                  src={Profile}
                  alt='ProfileUser'
                  className='w-6 h-6 my-auto ml-4 rounded-full'
                />
              ),
            }}
          />
        </div>

        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
