import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAttendanceData } from 'store/slices/attendanceDataSlice';
import { convertDateTimeToArray } from 'utils/common';
import { useSelector } from 'react-redux';
import { selectRecordByUId } from 'store/slices/attendanceDataSlice';

import {
  Button,
  Accordion,
  InputDate,
  InputTime,
  InputText,
} from '@bluesilodev/timhutcomponents';

const EditAttendance = () => {
  const { uId } = useParams();
  const [buttonLabel, setButtonLabel] = useState('Edit Attendance');
  const [activeInput, setActiveInput] = useState(true);
  const [required, setRequired] = useState(false);
  const employeeDetails = useSelector(selectRecordByUId(uId));

  const handleButtonClick = () => {
    setButtonLabel(
      buttonLabel === 'Edit Attendance' ? 'Request Changes' : 'Edit Attendance'
    );
    setActiveInput(!activeInput);
    setRequired(!required);
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    // Ensure inputDate is a valid date
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  console.log(formatTime('2024-02-28T14:09:32.330Z'));

  return (
    <>
      <div className='main pl-6 pr-6 mt-10'>
        {/* Edit Attendance */}
        <div className='flex'>
          <div className=''>
            <Button
              label={buttonLabel}
              className={'w-[220px] h-[50px]'}
              style='solid'
              onClick={handleButtonClick}
            />
          </div>
        </div>

        {/* Employee Detail */}
        <div className='mt-8'>
          <Accordion title={'Employee Details'}>
            <div className='p-4 flex'>
              <div
                className='mr-5'
                style={{
                  width: '150px',
                  height: '150px',
                  overflow: 'hidden',
                  borderRadius: '50%',
                  position: 'relative',
                }}
              >
                <img
                  src={employeeDetails.employeeInfo.photo}
                  alt='Employee Photo'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    clipPath: 'circle(50% at 50% 50%)',
                  }}
                />
              </div>

              <div className='w-full'>
                <div className='grid grid-cols-3 gap-6 '>
                  <div className='col-span-1'>
                    <InputText
                      label={'Shift'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.scheduleID}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputText
                      label={'Status'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.status}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-6 mt-5'>
                  <div className='col-span-1'>
                    <InputText
                      label={'First Name'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.employeeInfo.firstName}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputText
                      label={'Halim'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.employeeInfo.lastName}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputText
                      label={'Employee ID'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.employeeID}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-6 mt-5'>
                  <div className='col-span-1'>
                    <InputText
                      label={'Location'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.location}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputText
                      label={'Department'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.department}
                    />
                  </div>
                  <div className='col-span-1'>
                    <InputText
                      label={'Job Position'}
                      classname={'h-[58px]'}
                      disable={true}
                      value={employeeDetails.employeeInfo.jobLevel}
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
                      required={required}
                      value={formatDate(employeeDetails.punchIn)}
                      disable={activeInput}
                    />
                  </div>
                  <div className='col-span-1 mr-6'>
                    <InputTime
                      label={'Punch in Time'}
                      required={required}
                      value={convertDateTimeToArray(employeeDetails.punchOut)}
                      disable={activeInput}
                    />
                  </div>
                  <div className='col-span-2 mr-6'>
                    <InputText
                      label={'GPS Tracking'}
                      classname={'h-[58px]'}
                      placeholder={employeeDetails.punchInGps.address}
                      disable={activeInput}
                    />
                  </div>
                  <div className='col-span-2 mr-6'>
                    <InputText
                      classname={'h-[58px]'}
                      label={'Description'}
                      placeholder={employeeDetails.punchInDesc}
                      disable={activeInput}
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
                      placeholder={'Punch In'}
                      required={required}
                      disable={activeInput}
                      value={formatDate(employeeDetails.punchOut)}
                    />
                  </div>
                  <div className='col-span-1 mr-6'>
                    <InputTime
                      label={'Punch Out Time'}
                      required={required}
                      disable={activeInput}
                      value={convertDateTimeToArray(employeeDetails.punchOut)}
                    />
                  </div>

                  <div className='col-span-2 mr-6'>
                    <InputText
                      label={'GPS Tracking'}
                      classname={'h-[58px]'}
                      disable={activeInput}
                      placeholder={employeeDetails.punchOutGps.address}
                    />
                  </div>
                  <div className='col-span-2 mr-6'>
                    <InputText
                      classname={'h-[58px]'}
                      label={'Description'}
                      placeholder={employeeDetails.punchOutDesc}
                      disable={activeInput}
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

        {/* Break*/}
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
                        placeholder={'Punch In'}
                        required={required}
                        value={formatDate(breakItem.breakTime)}
                        disable={activeInput}
                      />
                    </div>
                    <div className='col-span-1 mr-6'>
                      <InputTime
                        label={'Break Time'}
                        required={required}
                        value={convertDateTimeToArray(breakItem.breakTime)}
                        disable={activeInput}
                      />
                    </div>

                    <div className='col-span-2 mr-6'>
                      <InputText
                        label={'GPS Tracking'}
                        classname={'h-[58px]'}
                        disable={activeInput}
                        placeholder={breakItem.breakDesc}
                      />
                    </div>
                    <div className='col-span-2 mr-6 h-[100px]'>
                      <InputText
                        label={'Description'}
                        classname={'h-[100px]'}
                        disable={activeInput}
                        placeholder={breakItem.breakDesc}
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
        ))}

        {/* Resume*/}
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
                        placeholder={'Punch In'}
                        value={formatDate(breakItem.returnFromBreak)}
                        disable={activeInput}
                        required={required}
                      />
                    </div>
                    <div className='col-span-1 mr-6'>
                      <InputTime
                        label={'Resume Time'}
                        value={convertDateTimeToArray(
                          breakItem.returnFromBreak
                        )}
                        required={required}
                        disable={activeInput}
                      />
                    </div>

                    <div className='col-span-2 mr-6'>
                      <InputText
                        label={'GPS Tracking'}
                        classname={'h-[58px]'}
                        disable={activeInput}
                        placeholder={breakItem.returnDesc}
                      />
                    </div>
                    <div className='col-span-2 mr-6'>
                      <InputText
                        label={'Description'}
                        classname={'h-[58px]'}
                        disable={activeInput}
                        placeholder={breakItem.returnDesc}
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
        ))}
      </div>
    </>
  );
};

export default EditAttendance;
