import { Input, TextField } from '@mui/material';
import TopBar from '../components/TopBar';
import styles from './NewRequest.module.css';

const NewRequest = () => {
  return (
    <div className={styles.displayCont}>
      <TopBar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Create New Booking</h2>
        <div className={styles.formContainer}>
          <div className={styles.leftContainer}>
            {/* <Input label="Title" variant="outlined" ></Input> */}
            <TextField
              id='outlined-search'
              label='Title'
              type='search'
              // variant='filled'
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
              // InputLabelProps={{
              //   color: 'white'
              // }}
            />
            <TextField
              id='outlined-search'
              label='Description'
              type='search'
              multiline
              rows={4}
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
            />
          </div>
          <div className={styles.rightContainer}>
            <TextField
              id='outlined-search'
              label='Date'
              type='search'
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
            />
            <TextField
              id='outlined-search'
              label='Start Time'
              type='search'
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
            />
            <TextField
              id='outlined-search'
              label='End Time'
              type='search'
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <h2 className={styles.buttonText}>Create</h2>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
