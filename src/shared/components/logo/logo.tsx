import React from "react";
import { Link } from "react-router-dom";

import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <svg
        width="30"
        height="27"
        viewBox="0 0 30 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.75 1H13.8333L1 22.3415H4.79167L6.54167 19.2927L16.75 1Z"
          fill="#2C36F2"
        />
        <path
          d="M2.75 26H27.25L16.75 7.09756L15 10.1463L20.25 19.2927L22 22.3415H4.79167H1L2.75 26Z"
          fill="#2C36F2"
        />
        <path
          d="M22 22.3415L20.25 19.2927H9.75H6.54167L4.79167 22.3415H22Z"
          fill="#2C36F2"
        />
        <path
          d="M27.25 26L29 22.3415L16.75 1L6.54167 19.2927H9.75L15 10.1463L16.75 7.09756L27.25 26Z"
          fill="#2C36F2"
        />
        <path d="M15 10.1463L9.75 19.2927H20.25L15 10.1463Z" fill="#2C36F2" />
        <path
          d="M27.25 26H2.75L1 22.3415M27.25 26L29 22.3415L16.75 1M27.25 26L16.75 7.09756L15 10.1463M16.75 1H13.8333L1 22.3415M16.75 1L6.54167 19.2927M1 22.3415H4.79167M15 10.1463L9.75 19.2927M15 10.1463L20.25 19.2927M9.75 19.2927H20.25M9.75 19.2927H6.54167M20.25 19.2927L22 22.3415H4.79167M6.54167 19.2927L4.79167 22.3415"
          stroke="#F6F7FF"
        />
      </svg>
      <svg
        width="112"
        height="16"
        viewBox="0 0 112 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.1 15H10.08V3.24H6.58C6.5 3.85333 6.41333 4.52 6.32 5.24C6.24 5.96 6.14667 6.69333 6.04 7.44C5.94667 8.17333 5.84667 8.87333 5.74 9.54C5.63333 10.1933 5.52667 10.7733 5.42 11.28C5.24667 12.1067 5.01333 12.8133 4.72 13.4C4.44 13.9867 4.04667 14.4333 3.54 14.74C3.04667 15.0467 2.4 15.2 1.6 15.2C1.08 15.2 0.6 15.1267 0.16 14.98V12.5C0.333333 12.5533 0.5 12.6 0.66 12.64C0.833333 12.68 1.02 12.7 1.22 12.7C1.60667 12.7 1.9 12.5 2.1 12.1C2.31333 11.6867 2.52667 10.92 2.74 9.8C2.82 9.37333 2.93333 8.70667 3.08 7.8C3.22667 6.89333 3.38667 5.83333 3.56 4.62C3.74667 3.39333 3.92 2.09333 4.08 0.719999H13.1V15ZM16.7023 0.719999H19.4223V7.62C19.4223 7.95333 19.4157 8.32667 19.4023 8.74C19.389 9.15333 19.3757 9.56 19.3623 9.96C19.349 10.3467 19.3357 10.6867 19.3223 10.98C19.309 11.26 19.2957 11.4533 19.2823 11.56H19.3423L25.9423 0.719999H29.5623V15H26.8623V8.14C26.8623 7.78 26.869 7.38667 26.8823 6.96C26.8957 6.52 26.909 6.1 26.9223 5.7C26.949 5.3 26.969 4.95333 26.9823 4.66C27.009 4.35333 27.029 4.15333 27.0423 4.06H26.9623L20.3423 15H16.7023V0.719999ZM42.1872 0.719999V3.22H36.1872V15H33.1672V0.719999H42.1872ZM51.7119 15L50.6719 11.6H45.4719L44.4319 15H41.1719L46.2119 0.66H49.9119L54.9719 15H51.7119ZM49.9519 9.06L48.9119 5.74C48.8452 5.51333 48.7585 5.22667 48.6519 4.88C48.5452 4.53333 48.4385 4.18 48.3319 3.82C48.2252 3.46 48.1385 3.14667 48.0719 2.88C48.0052 3.14667 47.9119 3.48 47.7919 3.88C47.6852 4.26667 47.5785 4.64 47.4719 5C47.3785 5.34667 47.3052 5.59333 47.2519 5.74L46.2319 9.06H49.9519ZM62.5031 15V0.719999H71.5231V3.22H65.5231V6.2H66.7231C68.0698 6.2 69.1698 6.38667 70.0231 6.76C70.8898 7.13333 71.5298 7.64667 71.9431 8.3C72.3565 8.95333 72.5631 9.7 72.5631 10.54C72.5631 11.9533 72.0898 13.0533 71.1431 13.84C70.2098 14.6133 68.7165 15 66.6631 15H62.5031ZM65.5231 12.52H66.5431C67.4631 12.52 68.1831 12.3733 68.7031 12.08C69.2365 11.7867 69.5031 11.2733 69.5031 10.54C69.5031 9.78 69.2165 9.28 68.6431 9.04C68.0698 8.8 67.2898 8.68 66.3031 8.68H65.5231V12.52ZM79.497 3.86C80.9637 3.86 82.0837 4.18 82.857 4.82C83.6437 5.44667 84.037 6.41333 84.037 7.72V15H81.957L81.377 13.52H81.297C80.8304 14.1067 80.337 14.5333 79.817 14.8C79.297 15.0667 78.5837 15.2 77.677 15.2C76.7037 15.2 75.897 14.92 75.257 14.36C74.617 13.7867 74.297 12.9133 74.297 11.74C74.297 10.58 74.7037 9.72667 75.517 9.18C76.3304 8.62 77.5504 8.31333 79.177 8.26L81.077 8.2V7.72C81.077 7.14667 80.9237 6.72667 80.617 6.46C80.3237 6.19333 79.9104 6.06 79.377 6.06C78.8437 6.06 78.3237 6.14 77.817 6.3C77.3104 6.44667 76.8037 6.63333 76.297 6.86L75.317 4.84C75.9037 4.53333 76.5504 4.29333 77.257 4.12C77.977 3.94667 78.7237 3.86 79.497 3.86ZM81.077 9.94L79.917 9.98C78.957 10.0067 78.2904 10.18 77.917 10.5C77.5437 10.82 77.357 11.24 77.357 11.76C77.357 12.2133 77.4904 12.54 77.757 12.74C78.0237 12.9267 78.3704 13.02 78.797 13.02C79.437 13.02 79.977 12.8333 80.417 12.46C80.857 12.0733 81.077 11.5333 81.077 10.84V9.94ZM90.0673 4.08V8.28H94.2273V4.08H97.2073V15H94.2273V10.5H90.0673V15H87.0873V4.08H90.0673ZM107.49 4.08H110.77L106.45 9.32L111.15 15H107.77L103.31 9.46V15H100.33V4.08H103.31V9.38L107.49 4.08Z"
          fill="#1F1E25"
        />
      </svg>
    </Link>
  );
};