import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  Accordion,
  InputNumber,
  RadioButton,
  CheckBox,
} from '@bluesilodev/timhutcomponents';

const CustomInputNumber = styled.div`
  div {
    max-width: 600px !important;
  }
`;

const AttendanceSetting = () => {
  const [settings, setSettings] = useState([]);
  const [overtimeMultipler, setOvertimeMultipler] = useState([]);

  const handleAddOvertimeRounding = () => {
    const newSetting = (
      <div key={settings.length} className='flex items-center'>
        <div className='pl-2 py-2 pr-2'>
          <InputNumber
            label='From (Minutes)'
            name={`overtime_rounding_from-${settings.length}`}
            unit='Min'
            value={0}
          />
        </div>
        <div className='flex flex-col item-center mx-2 '>
          <button className='border-2 border-slate-500 rounded-[50%] p-2 my-2 hover:bg-gray-200'>
            <div className='w-6 h-6'> P </div>
          </button>
        </div>
        <div className='pl-2 py-2 pr-2'>
          <InputNumber
            label='To (Minutes)'
            name={`overtime_rounding_to-${settings.length}`}
            unit='Min'
            value={0}
          />
        </div>
        <div className='flex flex-col item-center mx-2 '>
          <button className='border-2 border-slate-500 rounded-[50%] p-2 my-2 hover:bg-gray-200'>
            <div className='w-6 h-6'> = </div>
          </button>
        </div>
        <div className='pl-2 py-2 pr-2'>
          <InputNumber
            label='Equal (Minutes)'
            name={`overtime_rounding_equal-${settings.length}`}
            unit='Min'
            value={0}
          />
        </div>
      </div>
    );

    setSettings([...settings, newSetting]);
  };

  const handleAddOvertimeMultipler = () => {
    const newSetting = (
      <div key={overtimeMultipler.length} className='flex items-center'>
        <div className='pl-2 py-2 pr-2'>
          <InputNumber
            label='From (Hours)'
            name={`overtime_multipler_from-${overtimeMultipler.length}`}
            unit='Hour'
            value={0}
          />
        </div>
        <div className='flex flex-col item-center mx-2 '>
          <button className='border-2 border-slate-500 rounded-[50%] p-2 my-2 hover:bg-gray-200'>
            <div className='w-6 h-6'> P </div>
          </button>
        </div>
        <div className='pl-2 py-2 pr-2'>
          <InputNumber
            label='To (Hours)'
            name={`overtime_multipler_to-${overtimeMultipler.length}`}
            unit='Hour'
            value={0}
          />
        </div>
        <div className='flex flex-col item-center mx-2 '>
          <button className='border-2 border-slate-500 rounded-[50%] p-2 my-2 hover:bg-gray-200'>
            <div className='w-6 h-6'> = </div>
          </button>
        </div>
        <div className='pl-2 py-2 pr-2'>
          <InputNumber
            label='Multiply'
            name={`overtime_multipler_multiply-${overtimeMultipler.length}`}
            unit={''}
            pluralize={false}
            value={0}
          />
        </div>
      </div>
    );

    setOvertimeMultipler([...overtimeMultipler, newSetting]);
  };

  const handleDelete = (id) => {
    const updatedSettings = settings.filter((setting) => setting.key !== id);
    setSettings(updatedSettings);
  };

  const handleDeleteMultipler = (id) => {
    const updatedMultipler = overtimeMultipler.filter(
      (item) => item.key !== id
    );
    setOvertimeMultipler(updatedMultipler);
  };
  return (
    <div className='main w-full pl-6 pr-6 mt-10'>
      <div className='flex justify-end'>
        <div className='button-save'>
          <Button label={'Save'} width={'200'} />
        </div>
      </div>
      <div className='mt-5 attendance'>
        <Accordion title='Attendance'>
          <div className='flex'>
            <div className='pr-2 py-2 pl-2'>
              <CustomInputNumber>
                <InputNumber
                  width='full'
                  label='Early Punch In Allowance'
                  name='early_punch_in_allowance'
                  onChange={() => {}}
                  unit='Minute'
                  value={0}
                />
              </CustomInputNumber>
            </div>
            <div className=' pl-2 py-2'>
              <InputNumber
                label='Punch Out In Allowance'
                name='punch_out_in_allowance'
                onChange={() => {}}
                unit='Minute'
                value={0}
              />
            </div>
          </div>

          <div className='flex'>
            <div className='pr-2 pl-2'>
              <InputNumber
                label='Punch In Dispensation'
                name='punch_in_dispensation'
                onChange={() => {}}
                unit='Minute'
                value={0}
              />
            </div>
            <div className='pl-2'>
              <InputNumber
                label='Punch Out Dispensation'
                name='Punch_out_dispensation'
                onChange={() => {}}
                unit='Minute'
                value={0}
              />
            </div>
          </div>
        </Accordion>
      </div>
      <div className='mt-5 overtime'>
        <Accordion title='Overtime'>
          <div className='flex items-center'>
            <div className='pr-2 py-2 w-3/12 '>
              <RadioButton
                name='radio_button'
                options={[
                  {
                    id: 'option1',
                    label: 'Daily Work Time After',
                  },
                ]}
              />
            </div>
            <div className=' pl-2 py-2 pr-2'>
              <InputNumber
                label='Daily Work Time After'
                name='daily_work_time_after'
                unit='Hour'
                value={0}
              />
            </div>
            <span className='pl-6'>Per Day</span>
          </div>
          <div className='flex items-center'>
            <div className='pr-2 py-2 w-3/12'>
              <RadioButton
                name='radio_button'
                options={[
                  {
                    id: 'option1',
                    label: 'Weekly Work Time After',
                  },
                ]}
              />
            </div>
            <div className=' pl-2 py-2 pr-2'>
              <InputNumber
                label='Weekly Work Time After'
                name='weekly_work_time_after'
                unit='Hour'
                value={0}
              />
            </div>
            <span className='pl-6'>Per Week</span>
          </div>
        </Accordion>
      </div>

      <div className='mt-5 overtime-settings'>
        <Accordion title='Overtime Rounding Settings'>
          <div className='pr-2 pl-2 font-semibold mt-2'>
            <p className='text-sm'>Balance Generated</p>
          </div>

          {settings.map((setting) => (
            <React.Fragment key={setting.key}>
              <div className='flex'>
                {setting}
                <div className='flex items-center'>
                  <div className='pl-2 py-1'>
                    <button
                      className='border-2 border-slate-500 rounded-[50%] p-2 my-2 hover:bg-gray-200'
                      onClick={() => handleDelete(setting.key)}
                    >
                      <div className='w-6 h-6'> T </div>
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}

          <div className='flex items-center '>
            <div className=' pl-2 py-1'>
              <Button
                width={905}
                label={'Add Overtime Round Settings'}
                onClick={handleAddOvertimeRounding}
              />
            </div>
          </div>
        </Accordion>
      </div>

      <div className='mt-5 overtime-multipler'>
        <Accordion title='Overtime Multipler'>
          <div className='pr-2 pl-2 font-semibold mt-2'>
            <p className='text-sm'>Balance Generated</p>
          </div>

          {overtimeMultipler.map((item, index, array) => (
            <React.Fragment key={item.key}>
              <div className='flex'>
                {item}
                <div className='flex items-center'>
                  <div className='pl-2 py-1 flex items-center'>
                    {index === array.length - 1 && (
                      <div>
                        <CheckBox
                          name='radio_button'
                          onChange={() => {}}
                          options={[
                            {
                              id: 'option1',
                              label: 'Set To Max',
                            },
                          ]}
                        />
                      </div>
                    )}
                    <button
                      className='border-2 border-slate-500 rounded-[50%] p-2 my-2 hover:bg-gray-200'
                      onClick={() => handleDeleteMultipler(item.key)}
                    >
                      <div className='w-6 h-6'> T </div>
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}

          <div className='flex items-center '>
            <div className=' pl-2 py-1'>
              <Button
                width={905}
                label={'Add Overtime Multipler '}
                onClick={handleAddOvertimeMultipler}
              />
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default AttendanceSetting;
