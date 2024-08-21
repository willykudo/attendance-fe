import { useParams } from 'react-router-dom';
import { convertDateTimeToArray } from 'utils/common';
import { useSelector } from 'react-redux';
import { selectAttendanceRequestByUId } from 'store/slices/attendanceRequestSlice';

import {
  Button,
  Accordion,
  InputDate,
  InputTime,
  TextArea,
  InputText,
} from '@bluesilodev/timhutcomponents';


const ApprovalPage = () => {

  const { uId } = useParams();

  const employeeDetails = useSelector((state) => selectAttendanceRequestByUId(uId)(state));

  console.log(employeeDetails)

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

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
            color={'red'}
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
                    label={'Punch In Date'}
                    classname={' h-[58px]'}
                    required={false}
                    value={formatDate(employeeDetails.punchIn)}
                    disable={true}
                  />
                </div>
                <div className='col-span-1 mr-6'>
                  <InputTime
                    label={'Punch in Time'}
                    required={false}
                    value={convertDateTimeToArray(employeeDetails.punchIn)}
                    disable={true}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <InputText
                    label={'GPS Tracking'}
                    classname={'h-[58px]'}
                    disable={true}
                    required={false}
                    placeholder={employeeDetails.punchInGps}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <InputText
                    classname={'h-[58px]'}
                    label={'Description'}
                    placeholder={employeeDetails.punchInDesc}
                    disable={true}
                    required={false}
                  />
                </div>
              </div>
            </div>

            <div className='bg-gray-200 p-4 w-[400px] mr-10 rounded-md'>
              <p className='text-xs font-bold'>Attachment</p>
              <div className='mt-4'>
                <img
                  src={employeeDetails.punchInImage}
                  alt='Attachment'
                  className='w-full h-auto rounded-lg'
                />
              </div>
            </div>
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
                    required={false}
                    disable={true}
                    value={formatDate(employeeDetails.punchOut)}
                  />
                </div>
                <div className='col-span-1 mr-6'>
                  <InputTime
                    label={'Punch Out Time'}
                    required={false}
                    disable={true}
                    value={convertDateTimeToArray(employeeDetails.punchOut)}
                  />
                </div>

                <div className='col-span-2 mr-6'>
                  <InputText
                    label={'GPS Tracking'}
                    classname={'h-[58px]'}
                    disable={true}
                    required={false}
                    placeholder={employeeDetails.punchOutGps}
                  />
                </div>
                <div className='col-span-2 mr-6'>
                  <InputText
                    classname={'h-[58px]'}
                    label={'Description'}
                    placeholder={employeeDetails.punchOutDesc}
                    disable={true}
                    required={false}
                  />
                </div>
              </div>
            </div>
            <div className='bg-gray-200 p-4 w-[400px] mr-10 rounded-md'>
              <p className='text-xs font-bold'>Attachment</p>
              <div className='mt-4'>
                <img
                  src={employeeDetails.punchOutImage}
                  alt='Attachment'
                  className='w-full h-auto rounded-lg'
                />
              </div>
            </div>
          </div>
        </Accordion>
      </div>

      {/* Break
      {employeeDetails.breaks.map((breakItem, index) => (
        <div className='mt-8'>
          <Accordion title={`Break #${index + 1}`} key={breakItem._id}>
            <div className='p-4 flex'>
              <div className='w-full'>
                <div className='grid grid-cols-2 gap-6 '>
                  <div className='col-span-1'>
                    <InputDate
                      label={'Break Date'}
                      classname={' h-[58px]'}
                      required={false}
                      value={formatDate(breakItem.breakTime)}
                      disable={true}
                    />
                  </div>
                  <div className='col-span-1 mr-6'>
                    <InputTime
                      label={'Break Time'}
                      required={false}
                      value={convertDateTimeToArray(breakItem.breakTime)}
                      disable={true}
                    />
                  </div>

                  <div className='col-span-2 mr-6'>
                    <InputText
                      label={'GPS Tracking'}
                      classname={'h-[58px]'}
                      disable={true}
                      placeholder={breakItem.breakGps}
                      required={false}
                    />
                  </div>
                  <div className='col-span-2 mr-6 h-[100px]'>
                    <InputText
                      label={'Description'}
                      classname={'h-[100px]'}
                      disable={true}
                      placeholder={breakItem.breakDesc}
                      required={false}
                    />
                  </div>
                </div>
              </div>
              <div className='bg-gray-200 p-4 w-[400px] mr-10 rounded-md'>
                <p className='text-xs font-bold'>Attachment</p>
                <div className='mt-4'>
                  <img
                    src={breakItem.breakImage}
                    alt='Attachment'
                    className='w-full h-auto rounded-lg'
                  />
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      ))} */}

      {/* Resume
      {employeeDetails.breaks.map((breakItem, index) => (
        <div className='mt-8 mb-8'>
          <Accordion title={`Resume #${index + 1}`} key={breakItem._id}>
            <div className='p-4 flex'>
              <div className='w-full'>
                <div className='grid grid-cols-2 gap-6 '>
                  <div className='col-span-1'>
                    <InputDate
                      label={'Resume Date'}
                      classname={' h-[58px]'}
                      value={formatDate(breakItem.returnFromBreak)}
                      disable={true}
                      required={false}
                    />
                  </div>
                  <div className='col-span-1 mr-6'>
                    <InputTime
                      label={'Resume Time'}
                      value={convertDateTimeToArray(
                        breakItem.returnFromBreak
                      )}
                      required={false}
                      disable={true}
                    />
                  </div>

                  <div className='col-span-2 mr-6'>
                    <InputText
                      label={'GPS Tracking'}
                      classname={'h-[58px]'}
                      disable={true}
                      placeholder={breakItem.returnGps}
                      required={false}
                    />
                  </div>
                  <div className='col-span-2 mr-6'>
                    <InputText
                      label={'Description'}
                      classname={'h-[58px]'}
                      disable={true}
                      placeholder={breakItem.returnDesc}
                      required={false}
                    />
                  </div>
                </div>
              </div>
              <div className='bg-gray-200 p-4 w-[400px] mr-10 rounded-md'>
                <p className='text-xs font-bold'>Attachment</p>
                <div className='mt-4'>
                  <img
                    src={breakItem.returnImage}
                    alt='Attachment'
                    className='w-full h-auto rounded-lg'
                  />
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      ))} */}
    </div>
  );
};

export default ApprovalPage;
