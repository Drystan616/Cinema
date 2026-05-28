import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="page-btn" disabled>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="page-btn active">1</button>
      <button className="page-btn">2</button>
      <button className="page-btn">3</button>
      <button className="page-btn">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;