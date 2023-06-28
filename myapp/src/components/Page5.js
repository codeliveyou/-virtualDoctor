import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function Page5(props) {

    const {value, setValue} = props
    
    return (
        <Box>
        <label> What is systolic blood pressure? </label> <br/>
        <TextField id="5-1" label="Write here..." variant="outlined" value = {value?.v5_1} onChange={(e) => setValue({...value, v5_1: e.target.value})}/> <br/>
        <label> What is diastolic blood pressure? </label> <br/>
        <TextField id="5-2" label="Write here..." variant="outlined" value = {value?.v5_2} onChange={(e) => setValue({...value, v5_2: e.target.value})}/> <br/>
        <label> What is the pulse rate? </label> <br/>
        <TextField id="5-3" label="Write here..." variant="outlined" value = {value?.v5_3} onChange={(e) => setValue({...value, v5_3: e.target.value})}/> <br/>
        <label> What is the respiratory rate? </label> <br/>
        <TextField id="5-4" label="Write here..." variant="outlined" value = {value?.v5_4} onChange={(e) => setValue({...value, v5_4: e.target.value})}/> <br/>
        <label> What is the temperature in centigrade? </label> <br/>
        <TextField id="5-5" label="Write here..." variant="outlined" value = {value?.v5_5} onChange={(e) => setValue({...value, v5_5: e.target.value})}/> <br/>
        
        <br/>
        <div style={{backgroundColor:"lightgray", minWidth:"600px", borderRadius:"5px", padding: '10px 20px'}}>
            <label >
                Patients’ blood pressure is {value?.v5_1}mmHg/{value?.v5_2}mmHg.<br/>
                Patient’s pulse rate is {value?.v5_3} beats per minute.<br/>
                patient’s respiratory rate is {value?.v5_4} breaths per minute.<br/>
                Patient’s temperature is {value?.v5_5}°C.
            </label>
            <br/>
        </div>
    </Box>
    );
}
