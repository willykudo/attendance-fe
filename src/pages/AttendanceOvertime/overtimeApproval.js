import {
  Button,
  Accordion,
  InputSelect,
  InputDate,
  InputTime,
  TextArea,
  InputText,
} from '@bluesilodev/timhutcomponents';

const OvertimeApproval = () => {
  return (
    <div className='main pl-6 pr-6 mt-10'>
      <div className='flex justify-between'>
        <div className='text-xs flex items-center font-bold'>
          <p>Requested On 24 August 2023, 13:03</p>
        </div>
        <div className='flex items-end'>
          <Button
            label={'Reject'}
            className={'w-[220px] h-[50px] mr-4'}
            style='solid'
          />
          <Button
            label={'Approve'}
            className={'w-[220px] h-[50px] '}
            style='solid'
          />
        </div>
      </div>
      {/* Employee Detail */}
      <div className='mt-8'>
        <Accordion title={'Employee Details'}>
          <div className='p-4 flex'>
            <div className='w-[200px] h-[200px] bg-amber-400 mr-5'></div>
            <div className='w-full'>
              <div className='grid grid-cols-3 gap-6 '>
                <div className='col-span-1'>
                  <InputText
                    label={'Shift'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'Office Working Hour'}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-6 mt-5'>
                <div className='col-span-1'>
                  <InputText
                    label={'First Name'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'Halim'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputText
                    label={'Halim'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'Lim'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputText
                    label={'Employee ID'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'P001'}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-6 mt-5'>
                <div className='col-span-1'>
                  <InputText
                    label={'Location'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'Cafe Halim'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputText
                    label={'Department'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'Operations'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputText
                    label={'Job Position'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'Supervisor'}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-6 mt-5'>
                <div className='col-span-1'>
                  <InputDate
                    label={'Date'}
                    classname={' h-[58px]'}
                    placeholder={'Punch In'}
                  />
                </div>
                <div className='col-span-1'>
                  <InputTime label={'Punch In Time'} required={false} />
                </div>
                <div className='col-span-1'>
                  <InputTime label={'Punch Out Time'} required={false} />
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>

      {/* Overtime */}
      <div className='mt-8'>
        <Accordion title={'Overtime'}>
          <div className='p-4 flex'>
            <div className='w-full'>
              <div className='grid grid-cols-3 gap-6 '>
                <div className='col-span-1'>
                  <InputText
                    label={'Compensation Type'}
                    classname={'h-[58px]'}
                    value={'Paid Overtime'}
                    disable={true}
                  />
                </div>
                <div className='col-span-1'>
                  <InputText
                    label={'Overtime Duration'}
                    classname={'h-[58px]'}
                    value={'1 Hours '}
                    disable={true}
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-6 mt-5'>
                <div className='col-span-2 h-[200px]'>
                  <TextArea label={'Description'} required={false} />
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default OvertimeApproval;
