import React from "react";

type SunProps = {
  width: number;
  height: number;
};

const Sun = ({ width, height }: SunProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1279 1279"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0,-639)">
      <rect x="0" y="0" width="60" height="10" />

      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1279"
        height="1279"
      >
        <circle cx="639.5" cy="639.5" r="639.5" fill="#FCCC5F" />
      </mask>
      <g mask="url(#mask0)">
        <rect y="639.5" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="663.351" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="687.202" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="711.053" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="734.903" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="758.754" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="782.605" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="806.456" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="830.307" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="854.157" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="878.008" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="901.859" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="925.71" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="949.561" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="973.412" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="997.262" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1021.11" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1044.96" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1068.81" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1092.67" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1116.52" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1140.37" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1164.22" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1188.07" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1211.92" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1235.77" width="1279" height="11.9254" fill="#FCCC5F" />
        <rect y="1259.62" width="1279" height="11.9254" fill="#FCCC5F" />
      </g>
    </g>
  </svg>
);

export default Sun;
