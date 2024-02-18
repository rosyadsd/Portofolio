import React from 'react';
import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';

export default function Loading() {
  return (
    <div className="bg-gray-100 dark:bg-gray-600 w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <BarLoader
          color="#a6eef5"
          css={css`
            display: block;
            margin-bottom: 20px;
          `}
        />
        <p className="text-gray-600 dark:text-gray-400 text-lg">Loading...</p>
      </div>
    </div>
  );
}
