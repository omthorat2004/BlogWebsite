import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
const CommonLoading = () => {
  const width = window.outerWidth
  return (
    <div>
      <BarLoader width={900} height={5} color='primary'/>
    </div>
  );
}

export default CommonLoading;
