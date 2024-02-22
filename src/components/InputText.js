import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({
  label,
  className,
  disable,
  required,
  name,
  type,
  error,
  children,
  ...props
}) => {
  const getIcon = () => <div>{label}</div>;

  return (
    <div>
      <div
        className={` ${className} border-[1px] border-black rounded-md px-2 py-2 `}
      >
        <div>{getIcon()}</div>

        <div className='flex flex-col w-full'>
          <div className=' flex gap-1 w-full'>
            <label htmlFor={name}>{name} </label>
            <p className='text-red-500'>{required ? '*' : ''}</p>
          </div>
          <input
            className='outline-none w-full h-full'
            type={type}
            disabled={disable}
            {...props}
          />
        </div>
      </div>

      <div>{error}</div>
      {children}
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node,
  name: PropTypes.string,
  disable: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.node,
};

export default InputText;
