import {
  InputSelect,
  SearchBox,
  Button,
  DataTable,
  ColorTag,
} from '@bluesilodev/timhutcomponents';

const AttendanceApproval = () => {
  const dataTable = [
    {
      employee_name: 'John Doe',
      job_position: 'IT',
      request_date: '25 August 2023',
      shift: 'Morning Shift',
      punch_in: {
        time: '08:00',
        date: '25 August 2023',
      },
      punch_out: {
        time: '17:00',
        date: '25 August 2023',
      },
      total_hour: '10 Hours',
      ot_duration: '-',
      status: 'On Time',
      approval: 'Approved',
    },
    {
      employee_name: 'John Doe',
      job_position: 'IT',
      request_date: '27 September 2023',
      shift: 'Night Shift',
      punch_in: {
        time: '20:00',
        date: '25 August 2023',
      },
      punch_out: {
        time: '05:00',
        date: '26 August 2023',
      },
      total_hour: '9 Hours',
      ot_duration: '-',
      status: 'Late',
      approval: 'Rejected',
    },
  ];

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
    <div className='main pl-6 pr-6 mt-10'>
      <div className='flex items-center'>
        <div className='input-select w-[300px] '>
          <InputSelect title={'Time Range'} options={dataTimeRange} />
        </div>
        <div className='pl-4 input-select w-[200px]'>
          <InputSelect title={'Locations'} options={dataLocation} />
        </div>
        <div className='pl-4 input-select w-[200px]'>
          <InputSelect title={'Departments'} options={dataDepartment} />
        </div>
        <div className='pl-4 input-select  w-[200px]'>
          <InputSelect title={'Approval'} options={dataApproval} />
        </div>
        <div className='ml-auto flex'>
          <div>
            <SearchBox onChange={() => {}} />
          </div>
          <div className='my-auto ml-4'>
            <Button label={'Request Attendance'} />
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
              id: 'shift',
              accessorFn: (row) => row.shift,
              header: () => <span>Shift</span>,
              enableSorting: true,
            },
            {
              id: 'punch_in',
              accessorFn: (row) => `${row.punch_in.time} ${row.punch_in.date}`,
              header: () => <span>Punch In</span>,
              enableSorting: true,
            },
            {
              id: 'punch_out',
              accessorFn: (row) =>
                `${row.punch_out.time} ${row.punch_out.date}`,
              header: () => <span>Punch Out</span>,
              enableSorting: true,
            },
            {
              id: 'ot_duration',
              accessorFn: (row) => row.ot_duration,
              header: () => <span>Overtime Duration</span>,
              enableSorting: true,
            },
            {
              id: 'total_hour',
              accessorFn: (row) => row.total_hour,
              header: () => <span>Total Hours</span>,
              enableSorting: true,
            },
            {
              id: 'status',
              accessorFn: (row) => row.status,
              header: () => <span>Status</span>,
              enableSorting: false,
            },
            {
              id: 'approval',
              header: () => <span>Approval</span>,
              enableSorting: false,
              cell: (row) => <ColorTag label={row.approval} color={'green'} />,
            },
          ]}
          data={dataTable}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default AttendanceApproval;
