import TopBar from '../components/TopBar';
import Request from '../components/Request';
import styles from './HistoryPage.module.css';

const Requests = [
  {
    title: 'Internship guidence session',
    date: '21/5/2023',
    time: '7:00 PM to 8:00 PM',
    status: 'Accepted',
    description:
      "Discription : \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: 'Internship guidence session',
    date: '22/5/2023',
    time: '7:00 PM to 8:00 PM',
    status: 'Accepted',
    description:
      "Discription : \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  // {
  //   title: 'Internship guidence session',
  //   date: '21/5/2023',
  //   time: '7:00 PM to 8:00 PM',
  //   status: 'Accepted',
  //   description:
  //     "Discription : \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  // },
  // {
  //   title: 'Internship guidence session',
  //   date: '22/5/2023',
  //   time: '7:00 PM to 8:00 PM',
  //   status: 'Accepted',
  //   description:
  //     "Discription : \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  // },
];

const HistoryPage = () => {
  return (
    // <div className={styles.displayCont}>
      <div className={styles.dframe}>
        <TopBar></TopBar>
        <div className={styles.container}>
          <h1 className={styles.heading}>History Page</h1>
          {Requests.map((request) => {
            return (
              <Request
                title={request.title}
                date={request.date}
                time={request.time}
                status={request.status}
                description={request.description}
              ></Request>
            );
          })}
        </div>
      </div>
    // </div>
  );
};

export default HistoryPage;
