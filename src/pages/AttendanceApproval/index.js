import {
  InputSelect,
  SearchBox,
  Button,
  WidgetCard,
} from '@bluesilodev/timhutcomponents';

const AttendanceApproval = () => {
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
  const dataApproval = [{ value: 'All Approval', label: 'All Approval' }];
  return (
    <div className='main pl-6 pr-10 mt-10'>
      <div className='flex items-center'>
        <div className='input-select'>
          <InputSelect
            name={'time_range'}
            label={'Time Range'}
            options={dataTimeRange}
            required={false}
            width={'250px'}
          />
        </div>
        <div className='pl-4 input-select'>
          <InputSelect
            name={'select_location'}
            label={'Locations'}
            options={dataLocation}
            required={false}
            width={'180px'}
          />
        </div>
        <div className='pl-4 input-select'>
          <InputSelect
            name={'select_department'}
            label={'Departments'}
            options={dataDepartment}
            required={false}
            width={'180px'}
          />
        </div>
        <div className='pl-4 input-select'>
          <InputSelect
            name={'select_approval'}
            label={'Appoval'}
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
            <Button label={'Request Attendance'} width={'200'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceApproval;
