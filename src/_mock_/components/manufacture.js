import React, { useState } from 'react';

function Manufactures() {
  const [page, setPage] = useState(0);
  const numPages = 0;

  return (
      <div className="mainPage">
        <section className="cardCarrier" />
        <div className="pageButtons">
          <h4>
            {page + 1}
            {' '}
            of
            {' '}
            {numPages}
          </h4>
          <div className='btn'>
          <button
            className="previous"
            type="button"
            onClick={() => {
              page <= 0 ? setPage(numOfpages) : setPage(page - 1);
            }}
          >
            &lt;
          </button>
          <button
            className="next"
            type="button"
            onClick={() => {
              page >= numOfpages ? setPage(0) : setPage(page + 1);
            }}
          >
            &gt;
          </button>
          </div>
        </div>
      </div>
  );
}

export default Manufactures;
