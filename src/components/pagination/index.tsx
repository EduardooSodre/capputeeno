import React, { useState } from 'react';
import styles from './styles.module.css';

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <div className={styles.pagination}>
      <ul>
        {[1, 2, 3, 4, 5].map((page) => (
          <li key={page}>
            <a
              href="#"
              className={selectedPage === page ? styles.active : ''}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a href="#" onClick={() => handlePageClick(selectedPage > 1 ? selectedPage - 1 : 1)}>
            <img src="/assets/set-left.svg" alt="Página anterior" />
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handlePageClick(selectedPage < 5 ? selectedPage + 1 : 5)}>
            <img src="/assets/set-right.svg" alt="Próxima página" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
