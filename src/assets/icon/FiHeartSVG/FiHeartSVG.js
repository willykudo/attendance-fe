import React from 'react';
import PropTypes from 'prop-types';

const FiHeartSVG = ({ color, ...otherProps }) => {
    return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8933 3.57357C13.5528 3.23291 13.1485 2.96267 12.7036 2.7783C12.2586 2.59392 11.7817 2.49902 11.3 2.49902C10.8183 2.49902 10.3414 2.59392 9.89643 2.77830C9.45146 2.96267 9.04717 3.23291 8.70667 3.57357L8 4.28024L7.29333 3.57357C6.60554 2.88578 5.67269 2.49938 4.7 2.49938C3.72731 2.49938 2.79446 2.88578 2.10666 3.57357C1.41887 4.26137 1.03247 5.19422 1.03247 6.16691C1.03247 7.13960 1.41887 8.07245 2.10666 8.76024L2.81333 9.46691L8 14.6536L13.1867 9.46691L13.8933 8.76024C14.234 8.41974 14.5042 8.01545 14.6886 7.57048C14.8730 7.12550 14.9679 6.64857 14.9679 6.16691C14.9679 5.68525 14.8730 5.20831 14.6886 4.76334C14.5042 4.31836 14.234 3.91408 13.8933 3.57357V3.57357Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

FiHeartSVG.propTypes = {
    color: PropTypes.string,
};

FiHeartSVG.defaultProps = {
    color: "#111111",
};

export default FiHeartSVG;
