import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'react-date-range';
import { dateFormat } from '../utils/common';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const InputDate = ({
  label,
  name,
  value,
  disable,
  required,
  onChange,
  error,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const [calendar, setCalendar] = useState('');

  const handleSelect = (date) => {
    const formattedDate = dateFormat(date);
    setCalendar(formattedDate);
    setActive(!active);
    value = calendar;
    onChange && onChange(formattedDate); // Call the onChange prop
  };

  const isDisabled = () => {
    if (disable) {
      return 'disabled';
    } else {
      return '';
    }
  };

  return (
    <div className='flex flex-col relative w-full '>
      <div
        className={`input-container w-full h-[60px] ${isDisabled()}`}
        id={name}
      >
        <div className='flex flex-row justify-between'>
          <div>
            <label className='input-label flex gap-1'>
              {label} <p style={{ color: 'red' }}>{required ? '*' : ''}</p>
            </label>
            <input
              className='mx-[4px] outline-none cursor-pointer'
              value={disable ? value : calendar}
              readOnly
              disabled={isDisabled()}
              {...props}
            />
          </div>
          <button
            className='p-2 '
            onClick={() => setActive(!active)}
            disabled={isDisabled()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
              />
            </svg>
          </button>
        </div>

        {active && (
          <div className='absolute top-[55px] z-50 right-[1px] border rounded-md bg-white'>
            <Calendar
              date={!calendar ? new Date() : value}
              onChange={handleSelect}
            />
          </div>
        )}
      </div>
      {error && <div className='text-red-500'>{error}</div>}
    </div>
  );
};

InputDate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disable: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.node,
};

InputDate.defaultProps = {
  label: '',
  name: '',
  value: '',
  disable: false,
  required: false,
  onChange: () => {},
  error: null,
};

export default InputDate;
