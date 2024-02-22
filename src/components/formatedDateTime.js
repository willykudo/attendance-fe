const DateDisplay = ({ dateStr }) => {
  if (!dateStr) {
    return <div>-</div>;
  }

  const date = new Date(dateStr);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-GB', options);
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div>
      <div className='text-sm'>{formattedTime}</div>
      <div className='opacity-50'>{formattedDate}</div>
    </div>
  );
};

export default DateDisplay;
