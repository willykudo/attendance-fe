import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'services/authApi';
import { loginSuccess } from 'store/slices/authSlice';
import { useAttendanceData } from 'store/slices/attendanceDataSlice';
import ColorTag from 'components/ColorTag';

import {
  InputSelect,
  SearchBox,
  Button,
  WidgetCard,
  DataTable,
  TextArea,
} from '@bluesilodev/timhutcomponents';

import ModalDialog from './ModalDialog';
import DateDisplay from 'components/formatedDateTime';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AttendanceData = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryParams, setQueryParams] = useState({});
  const role = useSelector((state) => state.auth?.user?.role);

  const { data, error, isLoading } = useAttendanceData(queryParams);

  let dataLength;

  if (data && data.data) {
    dataLength = data.data.length;
  } else {
    dataLength = 0;
  }

  // Calculated Total Hours
  const calculateTotalHours = (punchIn, punchOut) => {
    if (!punchOut) {
      return '0 Hours 0 minutes';
    }

    const punchInTime = new Date(punchIn);
    const punchOutTime = new Date(punchOut);

    const timeDifference = punchOutTime - punchInTime;

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `${hours} Hours ${minutes} minutes`;
  };

  //Handle Query Input
  const handleInputChange = (field, value) => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  };

  const filterDataByRole = (params, role) => {
    if (role === 'admin' || role === 'supervisor' || role === 'employee') {
      return { ...params, role: role };
    } else {
      console.error('Role tidak valid');
      return params;
    }
  };

  useEffect(() => {
    setQueryParams(filterDataByRole({ role })); // Initialize query params based on role
  }, [role]);

  useEffect(() => {
    // const email = 'dion@gmail.com'; //employee
    // const email = 'tony@gmail.com'; //supervisor 
    const email = 'willy@gmail.com'; //admin
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

  const [summary, setSummary] = useState({
    ontime: 0,
    late: 0,
    absence: 0,
    onleave: 0,
    nopunchinout: 0,
    overtime: 0
  });

  useEffect(() => {
    if (data && data.data) {
      const newSummary = data.data.reduce((acc, record) => {
        const status = record.status.toLowerCase().replace(/\s/g, ''); // Normalisasi teks status

        acc[status]++; // Langsung tambahkan jumlah status ke accumulator

        return acc;
      }, { ontime: 0, late: 0, absence: 0, onleave: 0, nopunchinout: 0, overtime: 0 });

      setSummary(newSummary);
    }
  }, [data]);

  const handleClick = (dataType) => {
    let newQueryParams = { ...queryParams };


    switch (dataType) {
      case 'ontime':
        newQueryParams.status = 'OnTime';
        break;
      case 'late':
        newQueryParams.status = 'Late';
        break;
      case 'nopunchinout':
        newQueryParams.status = 'NoPunchInOut';
        break;
      default:
        break;
    }
    console.log(newQueryParams.status);
    setQueryParams(newQueryParams);
  };


  const dataTimeRange = [
    'Today',
    'Past Week',
    'Last Month',
    'This Month',
    'Custom Date',
  ];

  const dataLocation = ['Cafe Halim #2', 'Cafe Willy'];

  const dataDepartment = ['QA', 'IT'];

  const label = <span className='text-gray-500 text-xs'>notes</span>;

  return (
    <>
      {location.pathname === '/attendance-data' && (
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
                  <InputSelect
                    title={'Locations'}
                    options={dataLocation}
                    classname={' h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Departments'}
                    options={['Operations']}
                    classname={' h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Job Positions'}
                    options={['Cook']}
                    classname={' h-[58px]'}
                  />
                </div>
                <div className='col-span-1 row-span-2'>
                  <InputSelect
                    title={'Employee Name'}
                    options={['Operations']}
                    classname={' h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Shift'}
                    options={['Morning Shift', 'Night Shift']}
                    classname={' h-[58px]'}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Punch In Date'}
                    options={['24 August 2023', '25 August 2023']}
                    classname={'h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Punch In Time'}
                    options={['07:00', '08:00']}
                    classname={' h-[58px]'}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-6 mt-6'>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Punch Out Date'}
                    options={['24 August 2023', '25 August 2023']}
                    classname={' h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Punch Out Time'}
                    options={['07:00', '08:00']}
                    classname={' h-[58px]'}
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
              <InputSelect
                title={'Time Range'}
                options={dataTimeRange}
                classname={' h-[58px]'}
              // onChange={(event) =>
              //   handleTimeRangeChange(event.target.value)
              // }
              />
            </div>
            <div className='pl-4 input-select w-[250px]'>
              <InputSelect
                title={'Locations'}
                options={dataLocation}
                classname={' h-[58px]'}
                onChange={(event) =>
                  handleInputChange('location', event.target.value)
                }
              />
            </div>
            <div className='pl-4 input-select w-[250px]'>
              <InputSelect
                title={'Departments'}
                options={dataDepartment}
                classname={'h-[58px]'}
                onChange={(event) =>
                  handleInputChange('department', event.target.value)
                }
              />
            </div>
            <div className='ml-auto flex'>
              <div>
                <SearchBox
                  onChange={() => { }}
                  className={'h-[58px] w-[250px]'}
                />
              </div>

              <div className='my-auto ml-4 '>
                {role === 'admin' ? (
                  <Button
                    label={'Export'}
                    onClick={() => { }}
                    className={'w-[220px] h-[58px]'}
                  />
                ) : (
                  <>
                    <Button
                      label={'Request Attendance'}
                      onClick={handleOpenModal}
                      className={'w-[220px] h-[58px]'}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-6 gap-10 mt-10'>
            <div className=' flex items-center justify-center'>
              <WidgetCard
                height='130px'
                onClick={() => handleClick('ontime')}
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
                  <div className='text-center'>
                    <p class='input-label'>
                      {role === 'user' ? 'On Time Records' : 'Employee On Time'}
                    </p>
                    <p className='text-lg font-semibold'>{summary.ontime} Employee</p>
                  </div>
                </div>
              </WidgetCard>
            </div>
            <div className=' flex items-center justify-center'>
              <WidgetCard
                height='130px'
                onClick={() => handleClick('late')}
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
                  <div className='text-center'>
                    <p className='input-label'>
                      {role === 'user' ? 'Late Records' : 'Employee Late'}
                    </p>
                    <p className='text-lg font-semibold'>
                      {summary.late} Employee
                    </p>
                  </div>
                </div>
              </WidgetCard>
            </div>
            <div className=' flex items-center justify-center'>
              <WidgetCard
                height='130px'
                onClick={() => { }}
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
                  <div className='text-center'>
                    <p className='input-label'>
                      {role === 'user' ? 'Absence Records' : 'Employee Absence'}
                    </p>
                    <p className='text-lg font-semibold'>
                      {summary.absence} Employee
                    </p>
                  </div>
                </div>
              </WidgetCard>
            </div>
            <div className=' flex items-center justify-center'>
              <WidgetCard
                height='130px'
                onClick={() => handleClick('nopunchinout')}
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
                  <div className='text-center'>
                    <p className='input-label'>
                      {role === 'user'
                        ? 'No Punch In/Out Records'
                        : 'No Punch In/Out'}
                    </p>
                    <p className='text-lg font-semibold'>
                      {summary.nopunchinout} Employee
                    </p>
                  </div>
                </div>
              </WidgetCard>
            </div>
            <div className=' flex items-center justify-center'>
              <WidgetCard
                height='130px'
                onClick={() => { }}
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
                  <div className='text-center'>
                    <p className='input-label'>
                      {role === 'user' ? 'Leave Records' : 'Employee On Leave'}
                    </p>
                    <p className='text-lg font-semibold'>
                      {summary.onleave} Employee
                    </p>
                  </div>
                </div>
              </WidgetCard>
            </div>
            <div className=' flex items-center justify-center'>
              <WidgetCard
                height='130px'
                onClick={() => { }}
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
                  <div className='text-center'>
                    <p className='input-label'>
                      {role === 'user'
                        ? 'Overtime Records'
                        : 'Employee Overtime'}
                    </p>
                    <p className='text-lg font-semibold'>
                      {summary.overtime} Employee
                    </p>
                  </div>
                </div>
              </WidgetCard>
            </div>
          </div>
          <div className=' mt-5'>
            {dataLength > 0 && (
              <DataTable
                title='Attendance Data'
                columns={[
                  {
                    id: 'employeeInfo',
                    accessorFn: (row) => {
                      return `${row.employeeInfo.firstName} ${row.employeeInfo.lastName}`;
                    },
                    header: () => <span>Employee</span>,
                    enableSorting: true,
                  },
                  {
                    id: 'employeeID',
                    accessorFn: (row) => row.employeeID,
                    header: () => <span>Employee ID</span>,
                    enableSorting: true,
                  },
                  {
                    id: 'jobPosition',
                    accessorFn: (row) => row.employeeInfo.role,
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
                    accessorFn: (row) => row.punchIn,
                    header: () => <span>Punch In</span>,
                    cell: (date) => {
                      const dateStr = date.getValue();

                      return <DateDisplay dateStr={dateStr} />;
                    },
                    enableSorting: true,
                  },
                  {
                    id: 'punchOut',
                    accessorFn: (row) => row.punchOut,
                    header: () => <span>Punch Out</span>,
                    cell: (date) => {
                      const dateStr = date.getValue();

                      return <DateDisplay dateStr={dateStr} />;
                    },
                    enableSorting: true,
                  },
                  {
                    id: 'totalHours',
                    accessorFn: (row) =>
                      calculateTotalHours(row.punchIn, row.punchOut),
                    header: () => <span>Total Hours</span>,
                    enableSorting: true,
                  },
                  {
                    id: 'status',
                    accessorFn: (row) => ({
                      uId: row.uId,
                      status: row.status,
                    }),
                    header: () => <span>Status</span>,
                    enableSorting: false,
                    cell: (status) => {
                      const { uId, status: recordStatus } = status.getValue();

                      const handleClick = () => {
                        navigate(`/attendance-data/${uId}`);
                      };

                      let color = '';
                      if (recordStatus === 'OnTime') {
                        color = 'green';
                      } else if (recordStatus === 'Late') {
                        color = 'red';
                      } else if (recordStatus === 'NoPunchInOut') {
                        color = 'blue'
                      }

                      return (
                        <>
                          <div
                            className='flex justify-center items-center cursor-pointer'
                            onClick={handleClick}
                          >
                            <ColorTag
                              label={recordStatus}
                              color={color}
                              width={'150px'}
                              height={'30px'}
                            />
                          </div>
                        </>
                      );
                    },
                  },
                ]}
                data={data.data}
                pagination={true}
              />
            )}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default AttendanceData;
