import styles from './styles.module.css';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#"><img src="assets/set-left.svg" alt=""/></a></li>
        <li><a href="#"><img src="assets/set-right.svg" alt="" /></a></li>
      </ul>
    </div>
  );
};

export default Pagination;
