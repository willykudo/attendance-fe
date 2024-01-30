import {
  InputSelect,
  SearchBox,
  Button,
  WidgetCard,
} from '@bluesilodev/timhutcomponents';

const AttendanceData = () => {
  const dataTimeRange = [
    { value: 'Today', label: 'Today' },
    { value: 'Past Week', label: 'Past Week' },
    { value: 'Last Month', label: 'Last Month' },
    { value: 'This Month', label: 'This Month' },
    { value: 'Custom Date', label: 'Custom Date' },
  ];

  const dataLocation = [
    { value: 'Cafe Halim', label: 'Cafe Halim' },
    { value: 'Cafe Halim', label: 'Cafe Halim' },
    { value: 'Cafe Halim', label: 'Cafe Halim' },
  ];

  const dataDepartment = [{ value: 'All Department', label: 'All Department' }];

  return (
    <div className='main pl-6 pr-10 mt-10'>
      <div className='flex items-center'>
        <div className='input-select'>
          <InputSelect
            name={'time_range'}
            label={'Time Range'}
            options={dataTimeRange}
            required={false}
          />
        </div>
        <div className='pl-4 input-select'>
          <InputSelect
            name={'select_location'}
            label={'Locations'}
            options={dataLocation}
            required={false}
          />
        </div>
        <div className='pl-4 input-select'>
          <InputSelect
            name={'select_department'}
            label={'Departments'}
            options={dataDepartment}
            required={false}
          />
        </div>
        <div className='ml-auto flex'>
          <div>
            <SearchBox onChange={() => {}} />
          </div>
          <div className='my-auto ml-4'>
            <Button label={'Request Attendance'} width={'200'} />
          </div>
        </div>
      </div>
      <div className='flex mt-5 space-x-4'>
        <WidgetCard height='130px' onClick={() => {}} radius='lg' width='230px'>
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

        <WidgetCard height='130px' onClick={() => {}} radius='lg' width='230px'>
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

        <WidgetCard height='130px' onClick={() => {}} radius='lg' width='230px'>
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

        <WidgetCard height='130px' onClick={() => {}} radius='lg' width='230px'>
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
        <WidgetCard height='130px' onClick={() => {}} radius='lg' width='230px'>
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
        <WidgetCard height='130px' onClick={() => {}} radius='lg' width='230px'>
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
  );
};

export default AttendanceData;
