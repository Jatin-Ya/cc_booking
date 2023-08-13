import { Input, TextField } from '@mui/material';
import TopBar from '../components/TopBar';
import styles from './NewRequest.module.css';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import axios from 'axios';
import { baseURL } from '../config';

// import {DatePicker} from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const NewRequest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const onCreateHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    console.log(date);
    console.log(startTime);
    console.log(endTime);
  }

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
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.rightContainer}>
            {/* <TextField
              id='outlined-search'
              label='Date'
              type='search'
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
              onChange={(e) => setDate(e.target.value)}
            /> */}
            <ReactDatePicker placeholderText='Date' selected={date} onChange={(date) => setDate(date)} dateFormat="dd:mm:yyyy"></ReactDatePicker>
            {/* <div className={styles.inputContainer}> */}
            <ReactDatePicker
            placeholderText='Start Time'
            
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            ></ReactDatePicker>

            <ReactDatePicker
            placeholderText='End Time'
            
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            ></ReactDatePicker>

            {/* </div> */}
            {/* <DatePicker></DatePicker> */}
            {/* <TextField
              id='outlined-search'
              label='Start Time'
              type='search'
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
              onChange={(e) => setStartTime(e.target.value)}
            /> */}
            {/* <TextField
              id='outlined-search'
              label='End Time'
              type='search'
              sx={{
                width: '90%',
                backgroundColor: '#D9D9D9',
                borderRadius: '5px',
              }}
              onChange={(e) => setEndTime(e.target.value)}
            /> */}
          </div>
        </div>
        <div className={styles.buttonContainer} onClick={onCreateHandler}>
          <h2 className={styles.buttonText}>Create</h2>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
