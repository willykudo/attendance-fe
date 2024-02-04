import React from "react";
import PropTypes from "prop-types";

const AscDescSVG = ({ color, className, ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color}
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    </svg>
  );
};

AscDescSVG.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

AscDescSVG.defaultProps = {
  color: "#ffffff",
  className: "",
};

export default AscDescSVG;
