import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'services/authApi';
import { loginSuccess } from 'store/slices/authSlice';
import { useAttendanceData } from 'store/slices/attendanceDataSlice';

import {
  InputSelect,
  SearchBox,
  Button,
  WidgetCard,
  DataTable,
  TextArea,
} from '@bluesilodev/timhutcomponents';

import ModalDialog from './ModalDialog';

const AttendanceData = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, isLoading } = useAttendanceData();

  console.log(data.attendances);

  useEffect(() => {
    const email = 'user2@gmail.com';
    const password = '123456';

    const performLogin = async () => {
      try {
        const token = await login(email, password);

        dispatch(loginSuccess(token));
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    performLogin();
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    handleCloseModal();
  };

  const dummyData = [
    {
      punchIn: 'some day',
      punchOut: 'some day',
    },
    {
      punchIn: 'some day',
      punchOut: 'some day',
    },
  ];

  console.log('dummy data', dummyData);

  const dataTimeRange = [
    'Today',
    'Past Week',
    'Last Month',
    'This Month',
    'Custom Date',
  ];

  const dataLocation = ['Cafe Halim', 'Kedai Kebab', 'Kedai Kopi'];

  const dataDepartment = ['All Department', 'Cafe Halim', 'Kedai Kebab'];

  const label = <span className='text-gray-500 text-xs'>notes</span>;

  return (
    <div className='main w-full mt-10 px-6'>
      {isModalOpen && (
        <ModalDialog
          title='Request Attendance Changes'
          onClose={handleCloseModal}
          onSubmit={handleModalSubmit}
          className={'w-3/4'}
        >
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-1'>
              <InputSelect title={'Locations'} options={dataLocation} />
            </div>
            <div className='col-span-1'>
              <InputSelect title={'Departments'} options={['Operations']} />
            </div>
            <div className='col-span-1'>
              <InputSelect title={'Job Positions'} options={['Cook']} />
            </div>
            <div className='col-span-1 row-span-2'>
              <InputSelect title={'Employee Name'} options={['Operations']} />
            </div>
            <div className='col-span-1'>
              <InputSelect
                title={'Shift'}
                options={['Morning Shift', 'Night Shift']}
              />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-1'>
              <InputSelect
                title={'Punch In Date'}
                options={['24 August 2023', '25 August 2023']}
              />
            </div>
            <div className='col-span-1'>
              <InputSelect
                title={'Punch In Time'}
                options={['07:00', '08:00']}
              />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6 mt-6'>
            <div className='col-span-1'>
              <InputSelect
                title={'Punch Out Date'}
                options={['24 August 2023', '25 August 2023']}
              />
            </div>
            <div className='col-span-1'>
              <InputSelect
                title={'Punch Out Time'}
                options={['07:00', '08:00']}
              />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6 mt-6'>
            <div className='col-span-3 row-span-2'>
              <TextArea label={label} />
            </div>
          </div>
          <div className='flex justify-between mt-6'>
            <Button
              label={'Submit'}
              onClick={handleCloseModal}
              className={'flex-grow mr-2'}
            />
            <Button
              label={'Cancel'}
              onClick={handleCloseModal}
              className={'flex-grow'}
            />
          </div>
        </ModalDialog>
      )}
      <div className='flex items-center'>
        <div className='input-select w-[300px] '>
          <InputSelect title={'Time Range'} options={dataTimeRange} />
        </div>
        <div className='pl-4 input-select w-[250px]'>
          <InputSelect title={'Locations'} options={dataLocation} />
        </div>
        <div className='pl-4 input-select w-[250px]'>
          <InputSelect title={'Departments'} options={dataDepartment} />
        </div>
        <div className='ml-auto flex'>
          <div>
            <SearchBox onChange={() => {}} />
          </div>

          <div className='my-auto ml-4 '>
            <Button label={'Request Attendance'} onClick={handleOpenModal} />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-6 gap-10 mt-10'>
        <div className=' flex items-center justify-center'>
          <WidgetCard
            height='130px'
            onClick={() => {}}
            radius='lg'
            width='230px'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <svg
                  class='w-6 h-6'
                  fill='none'
                  stroke='orange'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div>
                <p className='input-label'>Employee On Time</p>
                <p className='text-lg font-semibold'>2 Employees</p>
              </div>
            </div>
          </WidgetCard>
        </div>
        <div className=' flex items-center justify-center'>
          <WidgetCard
            height='130px'
            onClick={() => {}}
            radius='lg'
            width='230px'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <svg
                  class='w-6 h-6'
                  fill='none'
                  stroke='orange'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div>
                <p className='input-label'>Employee late</p>
                <p className='text-lg font-semibold'>1 Employees</p>
              </div>
            </div>
          </WidgetCard>
        </div>
        <div className=' flex items-center justify-center'>
          <WidgetCard
            height='130px'
            onClick={() => {}}
            radius='lg'
            width='230px'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <svg
                  class='w-6 h-6'
                  fill='none'
                  stroke='orange'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div>
                <p className='input-label'>Employee Absence</p>
                <p className='text-lg font-semibold'>3 Employees</p>
              </div>
            </div>
          </WidgetCard>
        </div>
        <div className=' flex items-center justify-center'>
          <WidgetCard
            height='130px'
            onClick={() => {}}
            radius='lg'
            width='230px'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <svg
                  class='w-6 h-6'
                  fill='none'
                  stroke='orange'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div>
                <p className='input-label'>No Punch In/Out</p>
                <p className='text-lg font-semibold'>2 Employees</p>
              </div>
            </div>
          </WidgetCard>
        </div>
        <div className=' flex items-center justify-center'>
          <WidgetCard
            height='130px'
            onClick={() => {}}
            radius='lg'
            width='230px'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <svg
                  class='w-6 h-6'
                  fill='none'
                  stroke='orange'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div>
                <p className='input-label'>Employee On Leave</p>
                <p className='text-lg font-semibold'>2 Employees</p>
              </div>
            </div>
          </WidgetCard>
        </div>
        <div className=' flex items-center justify-center'>
          <WidgetCard
            height='130px'
            onClick={() => {}}
            radius='lg'
            width='230px'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <svg
                  class='w-6 h-6'
                  fill='none'
                  stroke='orange'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div>
                <p className='input-label'>Employee Overtime</p>
                <p className='text-lg font-semibold'>5 Employees</p>
              </div>
            </div>
          </WidgetCard>
        </div>
      </div>
      <div className=' mt-5'>
        {data.attendances.length > 0 && (
          <DataTable
            title='Attendance Data'
            columns={[
              {
                id: 'employeeID',
                accessorFn: (row) => row.employeeID,
                header: () => <span>Employee</span>,
                enableSorting: true,
              },
              {
                id: 'uId',
                accessorFn: (row) => row.uId,
                header: () => <span>Employee ID</span>,
                enableSorting: true,
              },
              {
                id: 'department',
                accessorFn: (row) => row.department,
                header: () => <span>Job Position</span>,
                enableSorting: true,
              },
              {
                id: 'scheduleID',
                accessorFn: (row) => row.scheduleID,
                header: () => <span>Shift</span>,
                enableSorting: true,
              },
              {
                id: 'punchIn',
                accessorFn: (row) => `${row.punchIn} `,
                header: () => <span>Punch In</span>,
                enableSorting: true,
              },
              {
                id: 'punchOut',
                accessorFn: (row) => `${row.punchOut} `,
                header: () => <span>Punch Out</span>,
                enableSorting: true,
              },
              {
                id: 'organizationID',
                accessorFn: (row) => row.organizationID,
                header: () => <span>Total Hours</span>,
                enableSorting: true,
              },
              {
                id: 'status',
                accessorFn: (row) => row.status,
                header: () => <span>Status</span>,
                enableSorting: false,
              },
            ]}
            data={data.attendances}
            pagination={true}
          />
        )}
      </div>
    </div>
  );
};

export default AttendanceData;
