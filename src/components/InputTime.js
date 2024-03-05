import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ClockIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const InputTime = ({
  label,
  name,
  value,
  disable,
  width,
  required,
  onChange,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const [hours, setHours] = useState(value[0]);
  const [minutes, setMinutes] = useState(value[1]);

  const checkHours = () => {
    return hours < 10 ? `0${hours}` : hours;
  };

  const checkMinutes = () => {
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  const isDisable = () => {
    return disable ? 'disabled' : '';
  };

  const handleInputChange = () => {
    // Use the `onChange` prop to pass the updated value to the parent component
    if (onChange) {
      onChange([hours, minutes]);
    }
  };

  useEffect(() => {
    // Call the handleInputChange function whenever hours or minutes change
    handleInputChange();
  }, [hours, minutes]);

  return (
    <div className={`min-w-[150px] w-[${width}]`} {...props}>
      <div className={`input-container ${isDisable()}`}>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <label className='input-label flex flex-row'>
              {label} <p className='text-red-700'>{required ? '*' : ''}</p>
            </label>
            <input
              className='outline-none ml-1 w-full cursor-pointer'
              readOnly
              value={`${checkHours()}:${checkMinutes()}`}
              disabled={isDisable()}
              onClick={() => setActive(!active)}
            />
          </div>
          <button
            disabled={isDisable()}
            onClick={(e) => {
              e.stopPropagation();
              setActive(!active);
            }}
          >
            <ClockIcon className='w-7 h-7' />
          </button>
        </div>
      </div>
      {active && (
        <div className='time-container bg-white shadow-lg rounded-lg p-1 absolute z-10'>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <button
                className='w-full'
                onClick={() => {
                  if (hours >= 23) {
                    setHours(0);
                  } else {
                    setHours(hours + 1);
                  }
                }}
              >
                <ChevronUpIcon className='hover:stroke-sky-300 stroke-gray-700 w-14 h-8' />
              </button>
              <h1 className='text-5xl text-gray-700'>{checkHours()}</h1>
              <button
                className='w-full'
                onClick={() => {
                  if (hours <= 0) {
                    setHours(23);
                  } else {
                    setHours(hours - 1);
                  }
                }}
              >
                <ChevronDownIcon className='hover:stroke-sky-300 stroke-gray-700 w-14 h-8' />
              </button>
            </div>
            <div className='text-gray-700 text-5xl mt-7'>:</div>
            <div className='flex flex-col'>
              <button
                className='w-full'
                onClick={() => {
                  if (minutes >= 59) {
                    setMinutes(0);
                  } else {
                    setMinutes(minutes + 1);
                  }
                }}
              >
                <ChevronUpIcon className='hover:stroke-sky-300 stroke-gray-700 w-14 h-8' />
              </button>
              <h1 className='text-5xl text-gray-700'>{checkMinutes()}</h1>
              <button
                className='w-full'
                onClick={() => {
                  if (minutes <= 0) {
                    setMinutes(59);
                  } else {
                    setMinutes(minutes - 1);
                  }
                }}
              >
                <ChevronDownIcon className='hover:stroke-sky-300 stroke-gray-700 w-14 h-8' />
              </button>
            </div>
            <button
              className='text-black text-lg rounded-full hover:text-sky-300 my-10 mx-5'
              onClick={(e) => {
                setActive(!active);
                e.stopPropagation();
                handleInputChange();
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

InputTime.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.array,
  disable: PropTypes.bool,
  required: PropTypes.bool,
  width: PropTypes.string,
  onChange: PropTypes.func,
};

InputTime.defaultProps = {
  label: '',
  name: '',
  value: [0, 0],
  disable: false,
  required: true,
  width: 'full',
  onChange: () => {},
};

export default InputTime;
