import {
  InputSelect,
  SearchBox,
  Button,
  DataTable,
} from '@bluesilodev/timhutcomponents';

import ColorTag from '../../components/ColorTag';

import React, { useState } from 'react';
import { useAttendanceRequest } from 'store/slices/attendanceRequestSlice';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AttendanceApproval = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [queryParams, setQueryParams] = useState({});
  const role = useSelector((state) => state.auth.user.role);
  const { data, error, isLoading } = useAttendanceRequest(queryParams);

  console.log(data);

  let dataLength;
  if (data && data.data) {
    dataLength = data.data.length;
  } else {
    dataLength = 0;
  }

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    // Ensure inputDate is a valid date
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate;
  };

  const dataTimeRange = [
    'Today',
    'Past Week',
    'Last Month',
    'This Month',
    'Custom Date',
  ];

  const dataLocation = ['Cafe Halim', 'Kedai Kebab', 'Kedai Kopi'];
  const dataDepartment = ['All Department', 'Cafe Halim', 'Kedai Kebab'];
  const dataApproval = ['All Approval', 'Approved', 'Rejected'];

  return (
    <>
      {location.pathname === '/attendance-approval' && (
        <div className='main pl-6 pr-6 mt-10'>
          <div className='flex items-center'>
            <div className='input-select w-[300px] h-[58px]'>
              <InputSelect
                title={'Time Range'}
                options={dataTimeRange}
                className={''}
              />
            </div>
            <div className='pl-4 input-select w-[200px] h-[58px]'>
              <InputSelect title={'Locations'} options={dataLocation} />
            </div>
            <div className='pl-4 input-select w-[200px] h-[58px]'>
              <InputSelect title={'Departments'} options={dataDepartment} />
            </div>
            <div className='pl-4 input-select w-[200px] h-[58px]'>
              <InputSelect title={'Approval'} options={dataApproval} />
            </div>
            <div className='ml-auto flex'>
              <div>
                <SearchBox
                  onChange={() => {}}
                  className={'h-[58px] w-[250px]'}
                />
              </div>
              <div className=' ml-4'>
                <Button
                  label={'Request Attendance'}
                  className={'w-[220px] h-[2px]'}
                />
              </div>
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
                      return `${row.employeeInfo.data.firstName} ${row.employeeInfo.data.lastName}`;
                    },
                    header: () => <span>Employee</span>,
                    enableSorting: true,
                  },
                  {
                    id: 'jobPosition',
                    accessorFn: (row) => row.employeeInfo.data.role,
                    header: () => <span>Job Position</span>,
                    enableSorting: true,
                  },
                  {
                    id: 'request_date',
                    accessorFn: (row) => row.createdAt,
                    header: () => <span>Request Date</span>,
                    enableSorting: true,
                    cell: (date) => {
                      const dateStr = date.getValue();

                      return <div> {formatDate(dateStr)}</div>;
                    },
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

                      return <div> {formatDate(dateStr)}</div>;
                    },
                    enableSorting: true,
                  },
                  {
                    id: 'punchOut',
                    accessorFn: (row) => row.punchOut,
                    header: () => <span>Punch Out</span>,
                    cell: (date) => {
                      const dateStr = date.getValue();

                      return <div> {formatDate(dateStr)}</div>;
                    },
                    enableSorting: true,
                  },
                  {
                    id: 'ot_duration',
                    accessorFn: (row) => row.ot_duration,
                    header: () => <span>Overtime Duration</span>,
                    enableSorting: true,
                    cell: (date) => {
                      return <div className='ml-10  '>-</div>;
                    },
                  },
                  {
                    id: 'total_hour',
                    accessorFn: (row) => row.total_hour,
                    header: () => <span>Total Hours</span>,
                    enableSorting: true,
                    cell: (date) => {
                      return <div className='ml-10  '>-</div>;
                    },
                  },
                  {
                    id: 'status',
                    accessorFn: (row) => row.approvalStatus,
                    header: () => <span>Status</span>,
                    enableSorting: false,
                    cell: (status) => {
                      const approvalStatus = status.getValue();

                      if (approvalStatus.isHr.status === 'Pending') {
                        return (
                          <>
                            <div
                              className='font-semibold'
                              style={{ color: 'black' }}
                            >
                              <ColorTag
                                label='Pending'
                                color='gray'
                                width={'150px'}
                                height={'30px'}
                              />
                            </div>
                          </>
                        );
                      }
                      if (
                        approvalStatus.isHr.status &&
                        approvalStatus.isManager.status === 'Approved'
                      ) {
                        return (
                          <>
                            <div
                              className='font-semibold'
                              style={{ color: 'black' }}
                            >
                              <ColorTag label='Approved' color='green' />
                            </div>
                          </>
                        );
                      }
                    },
                  },

                  {
                    id: 'approval_by_supervisor',
                    header: () => <span>Approval by Supervisor</span>,
                    accessorFn: (row) => row.approvalStatus,
                    enableSorting: false,
                    cell: (status) => {
                      const value = status.getValue();
                      const approvalStatus = value.isHr.status;

                      if (approvalStatus === 'Pending') {
                        return (
                          <>
                            <div
                              className=' font-semibold'
                              style={{ color: 'black' }}
                            >
                              <ColorTag
                                label='Pending'
                                color='gray'
                                width={'150px'}
                                height={'30px'}
                              />
                            </div>
                          </>
                        );
                      }
                      if (approvalStatus === 'Rejected') {
                        return (
                          <>
                            <div
                              className='font-semibold'
                              style={{ color: 'black' }}
                            >
                              <ColorTag label={approvalStatus} color='red' />
                            </div>
                          </>
                        );
                      }
                      if (approvalStatus === 'Approved') {
                        return (
                          <>
                            <div
                              className=' font-semibold text-white cursor-pointer'
                              onClick={() =>
                                navigate('/attendance-approval/approval')
                              }
                            >
                              <ColorTag label={approvalStatus} color='green' />
                            </div>
                          </>
                        );
                      }
                    },
                  },
                  {
                    id: 'approval_by_admin',
                    header: () => <span>Approval by HR Admin</span>,
                    accessorFn: (row) => row.approvalStatus,

                    enableSorting: false,
                    cell: (status) => {
                      const value = status.getValue();
                      const approvalStatus = value.isManager.status;

                      if (approvalStatus === 'Pending') {
                        return (
                          <>
                            <div
                              className=' font-semibold'
                              style={{ color: 'black' }}
                            >
                              <ColorTag
                                label='Pending'
                                color='gray'
                                width={'150px'}
                                height={'30px'}
                              />
                            </div>
                          </>
                        );
                      }
                      if (approvalStatus === 'Rejected') {
                        return (
                          <>
                            <div
                              className='font-semibold'
                              style={{ color: 'black' }}
                            >
                              <ColorTag label={approvalStatus} color='red' />
                            </div>
                          </>
                        );
                      }
                      if (approvalStatus === 'Approved') {
                        return (
                          <>
                            <div
                              className=' font-semibold text-white cursor-pointer'
                              onClick={() =>
                                navigate('/attendance-approval/approval')
                              }
                            >
                              <ColorTag label={approvalStatus} color='green' />
                            </div>
                          </>
                        );
                      }
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

export default AttendanceApproval;
