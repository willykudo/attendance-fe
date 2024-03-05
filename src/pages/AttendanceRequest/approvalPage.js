import {
  Button,
  Accordion,
  InputDate,
  InputTime,
  TextArea,
  InputText,
} from '@bluesilodev/timhutcomponents';

const ApprovalPage = () => {
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
                <div className='col-span-1'>
                  <InputText
                    label={'Status'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'Late'}
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
            </div>
          </div>
        </Accordion>
      </div>

      {/* Punch In */}
      <div className='mt-8'>
        <Accordion title={'Punch In'}>
          <div className='p-4 flex'>
            <div className='w-full'>
              <div className='grid grid-cols-2 gap-6 '>
                <div className='col-span-1'>
                  <InputDate
                    label={'Actual Punch In Date'}
                    classname={' h-[58px]'}
                    placeholder={'Punch In'}
                  />
                </div>
                <div className='col-span-1 mr-6'>
                  <InputTime label={'Actual Punch Out Time'} required={false} />
                </div>
                <div className='col-span-1'>
                  <InputDate
                    label={'Request Punch In Date'}
                    classname={' h-[58px]'}
                    placeholder={'Punch In'}
                  />
                </div>
                <div className='col-span-1 mr-6'>
                  <InputTime
                    label={'Request Punch Out Date'}
                    required={false}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <InputText
                    label={'GPS Tracking'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'On Duty'}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <TextArea required={false} label={'Description'} />
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[300px] bg-amber-400 mr-10'></div>
          </div>
        </Accordion>
      </div>

      {/* Punch Out */}
      <div className='mt-8'>
        <Accordion title={'Punch out'}>
          <div className='p-4 flex'>
            <div className='w-full'>
              <div className='grid grid-cols-2 gap-6 '>
                <div className='col-span-1'>
                  <InputDate
                    label={'Punch Out Date'}
                    classname={' h-[58px]'}
                    placeholder={'Punch In'}
                  />
                </div>
                <div className='col-span-1 mr-6'>
                  <InputTime label={'Punch Out Time'} required={false} />
                </div>

                <div className='col-span-2 mr-6'>
                  <InputText
                    label={'GPS Tracking'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'On Duty'}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <TextArea label={'Description'} required={false} />
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[300px] bg-amber-400 mr-10'></div>
          </div>
        </Accordion>
      </div>

      {/* Break*/}
      <div className='mt-8'>
        <Accordion title={'Break #1'}>
          <div className='p-4 flex'>
            <div className='w-full'>
              <div className='grid grid-cols-2 gap-6 '>
                <div className='col-span-1'>
                  <InputDate
                    label={'Break Date'}
                    classname={' h-[58px]'}
                    placeholder={'Punch In'}
                    value={'24-08-2023'}
                  />
                </div>
                <div className='col-span-1 mr-6'>
                  <InputTime label={'Break Time'} required={false} />
                </div>

                <div className='col-span-2 mr-6'>
                  <InputText
                    label={'GPS Tracking'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'On Duty'}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <TextArea label={'Description'} required={false} />
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[300px] bg-amber-400 mr-10'></div>
          </div>
        </Accordion>
      </div>

      {/* Resume*/}
      <div className='mt-8 mb-8'>
        <Accordion title={'Resume #1'}>
          <div className='p-4 flex'>
            <div className='w-full'>
              <div className='grid grid-cols-2 gap-6 '>
                <div className='col-span-1'>
                  <InputDate
                    label={'Resume Date'}
                    classname={' h-[58px]'}
                    placeholder={'Punch In'}
                  />
                </div>
                <div className='col-span-1 mr-6'>
                  <InputTime label={'Resume Time'} required={false} />
                </div>

                <div className='col-span-2 mr-6'>
                  <InputText
                    label={'GPS Tracking'}
                    classname={'h-[58px]'}
                    disable={true}
                    value={'On Duty'}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <TextArea label={'Description'} required={false} />
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[300px] bg-amber-400 mr-10'></div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default ApprovalPage;
