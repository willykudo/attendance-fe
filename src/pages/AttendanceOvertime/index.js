import { useState } from 'react';

import {
  InputSelect,
  SearchBox,
  Button,
  DataTable,
  InputDate,
  InputTime,
  TextArea,
  ColorTag,
} from '@bluesilodev/timhutcomponents';

import ModalDialog from '../AttendanceData/ModalDialog';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AttendanceOvertime = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    handleCloseModal();
  };
  const dataTimeRange = [
    'Today',
    'Past Week',
    'Last Month',
    'This Month',
    'Custom Date',
  ];

  const dataEmployee = ['John Doe', 'Harley'];
  const dataLocation = ['Cafe Halim', 'Kedai Kebab', 'Kedai Kopi'];

  const dataDepartment = ['All Department', 'Cafe Halim', 'Kedai Kebab'];
  const dataApproval = ['All Approval', 'Approved', 'Rejected'];

  const dataTable = [
    {
      employee_name: 'John Doe',
      employee_id: 'Cafe Halim',
      job_position: 'Cook',
      shift: 'Morning Shift',
      request_date: '25 August 2023',
      overtime_date: '26 August 2023',
      ot_duration: '3 Hours 30 Minutes',
      status: 'Approved',
    },
    {
      employee_name: 'Harley',
      employee_id: 'Cafe Halim',
      job_position: 'Cook',
      shift: 'Night Shift',
      request_date: '25 August 2023',
      overtime_date: '26 August 2023',
      ot_duration: '3 Hours 30 Minutes',
      status: 'Approved',
    },
    {
      employee_name: 'James Bond',
      employee_id: 'Cafe Halim',
      job_position: 'Cook',
      shift: 'Night Shift',
      request_date: '25 July 2023',
      overtime_date: '26 July 2023',
      ot_duration: '1 Hours 30 Minutes',
      status: 'Pending',
    },
  ];

  const label = <span className='text-gray-500 text-xs'>notes</span>;
  return (
    <>
      {location.pathname === '/attendance-overtime' && (
        <div className='main pl-6 pr-6  mt-10'>
          {isModalOpen && (
            <ModalDialog
              title='Request Overtime'
              onClose={handleCloseModal}
              onSubmit={handleModalSubmit}
              className={'w-3/4'}
            >
              <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Locations'}
                    options={dataLocation}
                    classname={'h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Departments'}
                    options={['Operations']}
                    classname={'h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Job Positions'}
                    options={['Cook']}
                    classname={'h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Employee Name'}
                    options={dataEmployee}
                    classname={'h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputSelect
                    title={'Shift'}
                    options={['Morning Shift', 'Night Shift']}
                    classname={'h-[58px]'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputDate label={'Punch In Date'} />
                </div>
                <div className='col-span-1'>
                  <InputTime label={'Punch In Time'} />
                </div>
                <div className='col-span-1'>
                  <InputTime label={'Punch Out Time'} />
                </div>
                <div className='col-span-1'>
                  <InputTime label={'Duration Of Overtime'} />
                </div>
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
                  className={'flex-grow '}
                />
              </div>
            </ModalDialog>
          )}
          <div className='flex items-center'>
            <div className='input-select w-[300px]'>
              <InputSelect
                name={'time_range'}
                title={'Time Range'}
                options={dataTimeRange}
                classname={'h-[58px]'}
                required={false}
              />
            </div>
            <div className='pl-4 input-select w-[200px]'>
              <InputSelect
                name={'select_location'}
                title={'Locations'}
                options={dataLocation}
                required={false}
                classname={'h-[58px]'}
              />
            </div>
            <div className='pl-4 input-select w-[200px]'>
              <InputSelect
                name={'select_department'}
                title={'Departments'}
                options={dataDepartment}
                required={false}
                classname={'h-[58px]'}
              />
            </div>
            <div className='pl-4 input-select w-[200px]'>
              <InputSelect
                name={'select_approval'}
                title={'Approval'}
                options={dataApproval}
                required={false}
                classname={'h-[58px]'}
              />
            </div>
            <div className='ml-auto flex'>
              <div>
                <SearchBox
                  onChange={() => {}}
                  className={'h-[58px] w-[250px]'}
                />
              </div>
              <div className='my-auto ml-4'>
                <Button
                  label={'Request Overtime'}
                  width={'200'}
                  onClick={handleOpenModal}
                  className={'w-[220px] h-[58px]'}
                />
              </div>
            </div>
          </div>
          <div className=' mt-5'>
            <DataTable
              title='Attendance Data'
              columns={[
                {
                  id: 'employee_name',
                  accessorFn: (row) => row.employee_name,
                  header: () => <span>Employee</span>,
                  enableSorting: true,
                },
                {
                  id: 'job_position',
                  accessorFn: (row) => row.job_position,
                  header: () => <span>Job Position</span>,
                  enableSorting: true,
                },
                {
                  id: 'request_date',
                  accessorFn: (row) => row.request_date,
                  header: () => <span>Request Date</span>,
                  enableSorting: true,
                },
                {
                  id: 'overtime_date',
                  accessorFn: (row) => row.overtime_date,
                  header: () => <span>Overtime Date</span>,
                  enableSorting: true,
                },
                {
                  id: 'shift',
                  accessorFn: (row) => row.shift,
                  header: () => <span>Shift</span>,
                  enableSorting: true,
                },
                {
                  id: 'ot_duration',
                  accessorFn: (row) => row.ot_duration,
                  header: () => <span>Overtime Duration</span>,
                  enableSorting: true,
                },
                {
                  id: 'status',
                  accessorFn: (row) => row.status,
                  header: () => <span>Status</span>,
                  enableSorting: true,
                  cell: (status) => {
                    const approvalStatus = status.getValue();

                    if (approvalStatus === 'Approved') {
                      return (
                        <>
                          <div
                            className=' font-semibold'
                            style={{ color: 'white' }}
                          >
                            <ColorTag label={approvalStatus} color='green' />
                          </div>
                        </>
                      );
                    }
                    if (approvalStatus === 'Rejected') {
                      return (
                        <>
                          <div
                            className='font-semibold'
                            style={{ color: 'white' }}
                          >
                            <ColorTag label={approvalStatus} color='red' />
                          </div>
                        </>
                      );
                    }
                    if (approvalStatus === 'Pending') {
                      return (
                        <>
                          <div
                            className=' font-semibold text-white cursor-pointer'
                            onClick={() =>
                              navigate('/attendance-overtime/overtime-approval')
                            }
                          >
                            <ColorTag label={approvalStatus} color='gray' />
                          </div>
                        </>
                      );
                    }
                  },
                },
              ]}
              data={dataTable}
              pagination={true}
            />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default AttendanceOvertime;
