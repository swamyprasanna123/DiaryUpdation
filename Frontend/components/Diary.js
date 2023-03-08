import axios from 'axios';
import  React , {useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, ClickAwayListener, Paper, paperClasses } from '@mui/material';
import Dis from './Get';
import Delete from './Delete';
import { useNavigate } from 'react-router-dom';

export default function Diary() {
    const [daynum, setDaynum] = useState("");
    const [day, setDay] = useState("");
    const [notes, setNotes] = useState("");
    const navigate=useNavigate();

    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8081/diary/add",
        {
        
        day:day,
        notes:notes
        });
          alert("Successfully");
          setDaynum("");
          setDay("");
          setNotes("");
          navigate("/get")
          
          }
    catch(err)
        {
          alert(" Failed");
        }
   }

  return (
    <Container>
        <Paper elevation={3} style={paperClasses}>
                <h1 style={{color:"black"}}> <u>UPDATE YOUR DAY</u></h1>
            <Box component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            
            <TextField id="standard-basic" label="Day" variant="standard" fullWidth
            value={day}
            onChange={(e)=>setDay(e.target.value)}
            />
            <TextField id="standard-basic" label="Notes" variant="standard" fullWidth
             value={notes}
             onChange={(e)=>setNotes(e.target.value)}/>
            <Button variant='contained' color='secondary' onClick={save}>
                Submit
            </Button>
            </Box>
            
        </Paper>
        
    </Container>
  );
}
