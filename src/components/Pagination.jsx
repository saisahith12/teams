import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <button 
        className={`px-4 py-2 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
      <button 
        className={`px-4 py-2 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
