import { Card, CardContent } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Dashboard.module.css';
import TopBar from '../components/TopBar';
import Request from '../components/Request';

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
];

const Dashboard = () => {
  const calDate = '21/5/2023';
  return (
    <div className={styles.dframe}>
      {/* <div className={styles.topbar}>
        <div className={styles.name}>CC Booking App</div>
      </div> */}
      <TopBar />
      <div className={styles.scontainer}>
        <div className={styles.lcontainer}>
          <div className={styles.mybookingContainer}>
            <h2 className={styles.calendarHeading}>My Bookings</h2>
            {
              Requests.map((request) => {
                return (<Request title={request.title} date={request.date} time={request.time} status={request.status} description={request.description}></Request>)
              })
            }
            {/* <Request></Request>
            <div className={styles.bookings}>
              <div className={styles.bookingsHeading}>
                Internship guidence session
              </div>
              <div className={styles.bookingsDetails}>Date : 21/5/2023</div>
              <div className={styles.bookingsDetails}>
                Time : 7:00 PM to 8:00 PM
              </div>
              <div className={styles.bookingsDetails}>Status : Accepted</div>
              <div className={styles.bookingsDescription}>
                {'Discription : '}
                {
                  "\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                }
              </div>
            </div> */}
          </div>
          <div className={styles.newbookingContainer}>
            <h2 className={styles.calendarHeading}>Create new Booking</h2>
          </div>
          <div className={styles.newbookingContainer}>
            <h2 className={styles.calendarHeading}>View History</h2>
          </div>
        </div>
        <div className={styles.rcontainer}>
          <div className={styles.calendarHeading}>Bookings Calendar</div>
          <div className={styles.calendar}></div>
          {
            Requests.filter((request) => {return request.date === calDate}).map((request) => {return (<Request title={request.title} date={request.date} time={request.time} status={request.status} description={request.description}></Request>)})
          }
          {/* <div className={styles.bookings}>
            <div className={styles.bookingsHeading}>
              Internship guidence session
            </div>
            <div className={styles.bookingsDetails}>Date : 21/5/2023</div>
            <div className={styles.bookingsDetails}>
              Time : 7:00 PM to 8:00 PM
            </div>
            <div className={styles.bookingsDetails}>Status : Accepted</div>
            <div className={styles.bookingsDescription}>
              {'Discription : '}
              {
                "\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              }
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div style={{display:"flex",flexDirection:"column"}}>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"50px"}}>
      
      <Card sx = {{maxWidth : 275}}>
        <CardContent>
          <h1>Dashboard</h1>
        </CardContent>
      </Card>
      <Card sx = {{maxWidth : 275}}>
        <CardContent>
          <h1>Dashboard</h1>
        </CardContent>
      </Card>
      
    </div>
    <Card sx = {{maxWidth : "50%",left:0,padding:"40px",background:"black"}}>
      <Calendar value={[new Date(2023, 4, 1), new Date(2023, 4, 4),new Date(2023, 4, 5)]} ></Calendar>
   
    </Card>
    </div> */
}
