import React from "react";
import PropTypes from "prop-types";

const FiUserSVG = ({ color, ...otherProps }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3049_128834)">
        <path
          d="M15.3333 14.5002V13.1669C15.3329 12.5761 15.1362 12.0021 14.7742 11.5351C14.4122 11.0682 13.9054 10.7346 13.3333 10.5869"
          fill={color}
        />
        <path
          d="M15.3333 14.5002V13.1669C15.3329 12.5761 15.1362 12.0021 14.7742 11.5351C14.4122 11.0682 13.9054 10.7346 13.3333 10.5869"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3334 14.5V13.1667C11.3334 12.4594 11.0524 11.7811 10.5523 11.281C10.0522 10.781 9.37393 10.5 8.66669 10.5H3.33335C2.62611 10.5 1.94783 10.781 1.44774 11.281C0.947639 11.7811 0.666687 12.4594 0.666687 13.1667V14.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6667 2.58691C11.2403 2.73378 11.7487 3.06738 12.1118 3.53512C12.4748 4.00286 12.6719 4.57813 12.6719 5.17025C12.6719 5.76236 12.4748 6.33763 12.1118 6.80537C11.7487 7.27311 11.2403 7.60671 10.6667 7.75358"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.99998 7.83333C7.47274 7.83333 8.66665 6.63943 8.66665 5.16667C8.66665 3.69391 7.47274 2.5 5.99998 2.5C4.52722 2.5 3.33331 3.69391 3.33331 5.16667C3.33331 6.63943 4.52722 7.83333 5.99998 7.83333Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3049_128834">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

FiUserSVG.propTypes = {
  color: PropTypes.string,
};

FiUserSVG.defaultProps = {
  color: "#111111",
};

export default FiUserSVG;
