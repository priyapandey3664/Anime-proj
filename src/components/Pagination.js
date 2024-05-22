import React from 'react';

const Pagination = ({ page, totalPages, handleBack, handleNext }) => {
  return (
    <div className='pagination'>
      <button onClick={handleBack} disabled={page === 1}>
        Back
      </button>
      <button onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
