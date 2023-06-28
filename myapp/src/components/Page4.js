import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Page4(props) {

    const {value, setValue} = props
    
    return (
        <Box>
        <label> Does  the patient has any previous disease? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v4_1}
                onChange={(e) => setValue({...value, v4_1: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v4_1 === "yes" && 
            (<>
                <label> What is the previous disease? </label> <br/>
                <TextField id="4-2" label="Write here..." variant="outlined" value = {value?.v4_2} onChange={(e) => setValue({...value, v4_2: e.target.value})}/> <br/>
    
                <label> How long does patient have this disease? </label> <br/>
                <TextField id="4-3" label="Write here..." variant="outlined" value = {value?.v4_3} onChange={(e) => setValue({...value, v4_3: e.target.value})}/> <br/>
                
                <label> What medication does the patient take? </label> <br/>
                <TextField id="4-4" label="Write here..." variant="outlined" value = {value?.v4_4} onChange={(e) => setValue({...value, v4_4: e.target.value})}/> <br/>
            </>)
        }
        

        <label> Has the patient had any previous mental disorder? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v4_5}
                onChange={(e) => setValue({...value, v4_5: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v4_5 === "yes" && 
            (<>
                <label> what is the mental disorder? </label> <br/>
                <TextField id="4-6" label="Write here..." variant="outlined" value = {value?.v4_6} onChange={(e) => setValue({...value, v4_6: e.target.value})}/> <br/>
                <label> does patient is taking any psychiatric drugs?  </label> <br/>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value?.v4_7}
                        onChange={(e) => setValue({...value, v4_7: e.target.value})}
                        >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl> <br/>
            </>)
        }


        {
            value?.v4_5 === "yes" && value?.v4_7 === "yes" && 
            (<>
                <label> If patient receive psychiatric drug ,what is it? </label> <br/>
                <TextField id="4-8" label="Write here..." variant="outlined" value = {value?.v4_8} onChange={(e) => setValue({...value, v4_8: e.target.value})}/> <br/>
            </>)
        }

        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
            <label >
                {value?.v4_1 === "yes" ? `Patient has ${value?.v4_2}. Patient has previous disease for ${value?.v4_3} years. Patient is taking ${value?.v4_4} for this disease.` : "Patient does not have any previous disease."} <br/>
                {value?.v4_5 === "yes" ? `Patient has previous mental disease ${value?.v4_6}. ${value?.v4_7 === "yes" ? `Patient is is taking ${value?.v4_8} for that.` : "Patient is not taking psychiatric drug for that."}` : "Patient does not have any mental disorder."}
            </label>
            <br/>
        </div>
    </Box>
    );
}
