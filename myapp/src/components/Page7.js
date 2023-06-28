import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Page7(props) {

    const {value, setValue} = props
    
    return (
        <Box>
        <label> Does the patient have any known allergies? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v7_1}
                onChange={(e) => setValue({...value, v7_1: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v7_1 === "yes" && 
            (<>
                <label> What allergies does the patient have? </label> <br/>
                <TextField id="7-2" label="Write here..." variant="outlined" value = {value?.v7_2} onChange={(e) => setValue({...value, v7_2: e.target.value})}/> <br/>
            </>)
        }

        <label> Does the patient smoke or use any tobacco products? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v7_3}
                onChange={(e) => setValue({...value, v7_3: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        <label> Does the patient consume alcohol? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v7_4}
                onChange={(e) => setValue({...value, v7_4: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v7_4 === "yes" && 
            (<>
                <label> how often and how much? </label> <br/>
                <TextField id="7-5" label="Liters" variant="outlined" value = {value?.v7_5} onChange={(e) => setValue({...value, v7_5: e.target.value})}/>
                <TextField id="7-6" label="Times a week" variant="outlined" value = {value?.v7_6} onChange={(e) => setValue({...value, v7_6: e.target.value})}/> <br/>
            </>)
        }

        <label> Does the patient use any recreational drugs? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v7_7}
                onChange={(e) => setValue({...value, v7_7: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        
        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
            <label >
                {value?.v7_1 === "yes" ? `The Patient is ${value?.v7_2} allergies.` : "The patient has not known allergies."}<br/>
                The patient {value?.v7_3 === "no" ? "does not " : ""}smokes or uses tobacco products.<br/>
                {value?.v7_4 === "yes" ? `The patient drinks ${value?.v7_5} liters of alcohol ${value?.v7_6} times a week.` : "The patient does not drink alcohol."}<br/>
                The patient {value.v7_7 === "yes" ? "" : "does not "}use recreational drgus.
            </label>
            <br/>
        </div>
    </Box>
    );
}
