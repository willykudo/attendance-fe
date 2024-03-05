import {
  InputSelect,
  SearchBox,
  InputText,
  Button,
  DataTable,
  ModalDialog,
  TextArea,
  InputTime,
} from '@bluesilodev/timhutcomponents';

import ColorTag from '../../components/ColorTag';
import InputDate from '../../components/InputDate';
// import InputTime from '../../components/InputTime';

import React, { useState, useEffect } from 'react';
import { useAttendanceRequest } from 'store/slices/attendanceRequestSlice';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAttendanceData } from 'store/slices/attendanceDataSlice';
import { convertDateTimeToArray } from 'utils/common';
import { useFormik } from 'formik';

const AttendanceApproval = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scheduleIDs, setScheduleIDs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [attID, setAttID] = useState('');

  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);

  const [queryParamsRequest, setQueryParamsRequest] = useState({});
  const [queryParamsData, setQueryParamsData] = useState({});

  const [punchInTime, setPunchInTime] = useState([0, 0]);
  const [punchOutTime, setPunchOutTime] = useState([0, 0]);
  const [filledFields, setFilledFields] = useState({
    scheduleID: false,
    punchIn: false,
    punchOut: false,
  });

  const userData = useSelector((state) => state.auth.user);
  const { data } = useAttendanceRequest(queryParamsRequest);
  const { data: attendanceData } = useAttendanceData(queryParamsData);

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      scheduleID: scheduleIDs,
      punchIn: punchInTime,
      punchOut: punchOutTime,
    },
    validateOnBlur: true,
    onSubmit,
  });

  const attendanceHandleChange = (field, value) => {
    setQueryParamsData((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));

    setFilledFields((prevFields) => ({
      ...prevFields,
      [field]: Boolean(value),
    }));
  };

  useEffect(() => {
    const { scheduleID, punchIn, punchOut } = filledFields;
    const hasAttendanceData =
      attendanceData && attendanceData.data && attendanceData.data.length > 0;

    if (scheduleID && punchIn && punchOut && hasAttendanceData) {
      const firstAttendanceData = attendanceData.data[0];
      if (firstAttendanceData.punchIn && firstAttendanceData.punchOut) {
        setPunchInTime(convertDateTimeToArray(firstAttendanceData.punchIn));
        setPunchOutTime(convertDateTimeToArray(firstAttendanceData.punchOut));
        setAttID(firstAttendanceData.uId);
      } else {
        setPunchInTime([0, 0]);
        setPunchOutTime([0, 0]);
        setAttID(null);
      }
    } else {
      setPunchInTime([0, 0]);
      setPunchOutTime([0, 0]);
      setAttID(null);
    }
  }, [filledFields, attendanceData]);

  const extractUniqueValues = (data, key) => [
    ...new Set(
      data.map((obj) => key.split('.').reduce((acc, prop) => acc[prop], obj))
    ),
  ];

  useEffect(() => {
    if (attendanceData && attendanceData.data) {
      setLocations(extractUniqueValues(attendanceData.data, 'location'));
      setDepartments(extractUniqueValues(attendanceData.data, 'department'));
      setRoles(
        extractUniqueValues(attendanceData.data, 'employeeInfo.jobLevel')
      );
    }
  }, [attendanceData]);

  useEffect(() => {
    if (attendanceData && attendanceData.data && !scheduleIDs.length) {
      setScheduleIDs(extractUniqueValues(attendanceData.data, 'scheduleID'));
    }
  }, [attendanceData, scheduleIDs]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    handleCloseModal();
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate;
  };

  let dataLength;
  if (data && data.data) {
    dataLength = data.data.length;
  } else {
    dataLength = 0;
  }

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

  const label = <span className='text-gray-500 text-xs'>notes</span>;

  return (
    <>
      {location.pathname === '/attendance-approval' && (
        <div className='main w-full mt-10 px-6'>
          {isModalOpen && (
            <form onSubmit={formik.handleSubmit}>
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
                      options={locations}
                      classname={' h-[58px]'}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputSelect
                      title={'Departments'}
                      options={departments}
                      classname={' h-[58px]'}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputSelect
                      title={'Job Positions'}
                      options={roles}
                      classname={' h-[58px]'}
                    />
                  </div>
                  <div className='col-span-1 row-span-2'>
                    <InputText
                      label={'Employee Name'}
                      disable={true}
                      value={userData.firstName + ' ' + userData.lastName}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputSelect
                      title={'Shift'}
                      options={scheduleIDs}
                      classname={' h-[58px]'}
                      name={'scheduleID'}
                      value={formik.values.scheduleID}
                      onChange={(event) => {
                        formik.handleChange(event);
                        attendanceHandleChange(
                          'scheduleID',
                          event.target.value
                        );
                      }}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                  <div className='col-span-1'>
                    <InputDate
                      label={'Punch In Date'}
                      name={'punchIn'}
                      onChange={(event) => {
                        attendanceHandleChange('punchIn', event);
                      }}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputTime
                      key={punchInTime.toString()}
                      label={'Punch In Time'}
                      name='punchIn'
                      id='punchIn'
                      type='date'
                      value={formik.values.punchIn}
                      onChange={(event) => {
                        formik.handleChange(event);
                      }}
                    />
                    <p>{punchInTime}</p>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-6 mt-6'>
                  <div className='col-span-1'>
                    <InputDate
                      label={'Punch Out Date'}
                      name={'punhcOut'}
                      onChange={(event) => {
                        attendanceHandleChange('punchOut', event);
                      }}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputTime
                      label={'Punch Out Time'}
                      key={punchOutTime.toString()}
                      value={punchOutTime}
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
                    type='submit'
                    className={'flex-grow mr-2'}
                  />
                  <Button
                    label={'Cancel'}
                    onClick={handleCloseModal}
                    className={'flex-grow'}
                  />
                </div>
              </ModalDialog>
            </form>
          )}
          <div className='flex items-center'>
            <div className='input-select w-[300px] h-[58px]'>
              <InputSelect title={'Time Range'} options={dataTimeRange} />
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
                  onClick={handleOpenModal}
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
                      return `${row.employeeInfo.firstName} ${row.employeeInfo.lastName}`;
                    },
                    header: () => <span>Employee</span>,
                    enableSorting: true,
                  },
                  {
                    id: 'jobPosition',
                    accessorFn: (row) => row.employeeInfo.role,
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
