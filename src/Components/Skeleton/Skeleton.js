import styles from './Skeleton.module.css'

const Skeleton = ({loaderStyles}) => {
  return (
    <div className={styles.skeleton} style={loaderStyles}>
      <div className={styles['skeleton-right']} style={loaderStyles}>
        <div className={styles.square} style={loaderStyles}></div>
      </div>
    </div>
  );
};

export default Skeleton