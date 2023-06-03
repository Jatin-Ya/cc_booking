import styles from './Request.module.css';

const Request = (props) => {
  return (
    <div className={styles.bookings}>
              <div className={styles.bookingsHeading}>
                {props.title}
              </div>
              <div className={styles.bookingsDetails}>Date : {props.date}</div>
              <div className={styles.bookingsDetails}>
                Time : {props.time}
              </div>
              <div className={styles.bookingsDetails}>Status : {props.status}</div>
              <div className={styles.bookingsDescription}>
                {'Discription : '}
                {
                  props.description
                }
              </div>
            </div>
  );
}

export default Request;