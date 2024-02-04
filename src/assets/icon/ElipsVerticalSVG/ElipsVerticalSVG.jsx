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
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
};

AscDescSVG.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

AscDescSVG.defaultProps = {
  color: "#111111",
  className: "",
};

export default AscDescSVG;
