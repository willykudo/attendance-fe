import React from 'react';
import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ModalDialog = ({
  className,
  title,
  children,
  onClose,
  onSubmit,
  ...props
}) => {
  return (
    <div
      className={`w-full fixed z-[10] inset-0 flex items-center justify-center bg-opacity-50 bg-transparent `}
    >
      <div
        className={`${className} bg-white shadow-md rounded-lg flex flex-col`}
        onSubmit={onSubmit}
        role='dialog'
      >
        <div className='flex justify-between items-center mt-[5px] mb-[20px] w-full px-4 pt-3 sticky left-0 top-0 '>
          <label className='font-bold text-2xl'>{title || 'Hello Title'}</label>
          <button onClick={onClose} {...props}>
            <XMarkIcon className='w-5 h-5 flex justify center duration-500 transition-all' />
          </button>
        </div>

        <div className='w-full p-4 overflow-auto max-h-[500px]'>{children}</div>
      </div>
    </div>
  );
};

ModalDialog.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

ModalDialog.defaultProps = {
  className: 'w-[500px]',
  title: '',
  open: true,
  onClose: () => {},
  onSubmit: () => {},
};

export default ModalDialog;
