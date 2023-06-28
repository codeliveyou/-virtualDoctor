import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Page9(props) {

    const {value, setValue} = props
    
    return (
        <Box>
        <label> Has the patient received any treatments or interventions related to the poisoning? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v9_1}
                onChange={(e) => setValue({...value, v9_1: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v9_1 === "yes" && 
            (<>
                <label> What treatments? </label> <br/>
                <TextField id="9-2" label="Write here..." variant="outlined" value = {value?.v9_2} onChange={(e) => setValue({...value, v9_2: e.target.value})}/> <br/>
            </>)
        }

        <label> Is the patient currently receiving any supportive care (oxygen therapy, IV fluids, etc.)?  </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v9_3}
                onChange={(e) => setValue({...value, v9_3: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v9_3 === "yes" && 
            (<>
                <label> What supportive care? </label> <br/>
                <TextField id="9-4" label="Write here..." variant="outlined" value = {value?.v9_4} onChange={(e) => setValue({...value, v9_4: e.target.value})}/> <br/>
            </>)
        }


        <label> Is the patient being treated with any antidotes or specific therapies for the poisoning? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v9_5}
                onChange={(e) => setValue({...value, v9_5: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v9_5 === "yes" && 
            (<>
                <label> What antidote and how much antidote? </label> <br/>
                <TextField id="9-6" label="antidote" variant="outlined" value = {value?.v9_6} onChange={(e) => setValue({...value, v9_6: e.target.value})}/>
                <TextField id="9-7" label="how much / mg" variant="outlined" value = {value?.v9_7} onChange={(e) => setValue({...value, v9_7: e.target.value})}/> <br/>
            </>)
        }
        

        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
            <label >
                {value?.v9_1 === "yes" ? `Patient received ${value?.v9_2} treatment.` : "Patient did not receive any treatments or interventions related to the poisoning."} <br/>
                {value?.v9_3 === "yes" ? `Patient received ${value?.v9_4} supportive care.` : "Patient did not receive any supportive care related to the poisoning."} <br/>
                {value?.v9_5 === "yes" ? `Patient received ${value?.v9_6} antidote of ${value?.v9_7} mg.` : "Patient did not receive any antidote related to the poisoning."} <br/>
            </label>
            <br/>
        </div>
    </Box>
    );
}
