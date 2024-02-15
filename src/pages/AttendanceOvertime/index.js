import { useState } from 'react';

import {
  InputSelect,
  SearchBox,
  Button,
  DataTable,
  InputDate,
  InputTime,
  TextArea,
} from '@bluesilodev/timhutcomponents';

import ModalDialog from '../AttendanceData/ModalDialog';

const AttendanceOvertime = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      status: 'Rejected',
    },
  ];

  const label = <span className='text-gray-500 text-xs'>notes</span>;
  return (
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
              <InputSelect title={'Locations'} options={dataLocation} />
            </div>
            <div className='col-span-1'>
              <InputSelect title={'Departments'} options={['Operations']} />
            </div>
            <div className='col-span-1'>
              <InputSelect title={'Job Positions'} options={['Cook']} />
            </div>
            <div className='col-span-1'>
              <InputSelect title={'Employee Name'} options={dataEmployee} />
            </div>
            <div className='col-span-1'>
              <InputSelect
                title={'Shift'}
                options={['Morning Shift', 'Night Shift']}
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
              className={'flex-grow'}
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
            required={false}
          />
        </div>
        <div className='pl-4 input-select w-[200px]'>
          <InputSelect
            name={'select_location'}
            title={'Locations'}
            options={dataLocation}
            required={false}
            width={'180px'}
          />
        </div>
        <div className='pl-4 input-select w-[200px]'>
          <InputSelect
            name={'select_department'}
            title={'Departments'}
            options={dataDepartment}
            required={false}
            width={'180px'}
          />
        </div>
        <div className='pl-4 input-select w-[200px]'>
          <InputSelect
            name={'select_approval'}
            title={'Approval'}
            options={dataApproval}
            required={false}
            width={'180px'}
          />
        </div>
        <div className='ml-auto flex'>
          <div>
            <SearchBox onChange={() => {}} />
          </div>
          <div className='my-auto ml-4'>
            <Button
              label={'Request Overtime'}
              width={'200'}
              onClick={handleOpenModal}
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
            },
          ]}
          data={dataTable}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default AttendanceOvertime;
