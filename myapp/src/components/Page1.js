import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Page1(props) {
    
    const {value, setValue} = props


    return (
    <Box>
        <label> What is the patient's Age? </label> <br/>
        <TextField id="1-1" label="Write here..." variant="outlined" value = {value?.age} onChange={(e) => setValue({...value, age: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?._age}
                label="Select a unit"
                onChange={(e) => setValue({...value, _age: e.target.value})}
                >
                <MenuItem value={'years'}>years</MenuItem>
                <MenuItem value={'months'}>months</MenuItem>
            </Select>
        </FormControl>
        <br/>

        <label> What is the patient's Gender? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.gender}
                onChange={(e) => setValue({...value, gender: e.target.value})}
                >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="unknown Gender" control={<Radio />} label="Unknown Gender" />
                <FormControlLabel value="pregnant" control={<Radio />} label="Pregnant" />
                
            </RadioGroup>
        </FormControl> <br/>

        <label> What is the patient's occupation? </label> <br/>
        <TextField id="1-3" label="Write here..." variant="outlined" value = {value?.occupation} onChange={(e) => setValue({...value, occupation: e.target.value})}/> <br/>

        <label> What is height? </label> <br/>
        <TextField id="1-4" label="Write here..." variant="outlined" value = {value?.height} onChange={(e) => setValue({...value, height: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u1_2}
                label="Select a unit"
                onChange={(e) => setValue({...value, u1_2: e.target.value})}
                >
                <MenuItem value={'cm'}>cm</MenuItem>
                <MenuItem value={'m'}>m</MenuItem>
                <MenuItem value={'inches'}>inches</MenuItem>
            </Select>
        </FormControl><br/>

        <label> What is race? </label> <br/>
        <FormControl style = {{width : "322px"}}>
            <InputLabel id="demo-simple-select-label">Select a race</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.race}
                label="Select a race"
                onChange={(e) => setValue({...value, race: e.target.value})}
                >
                <MenuItem value={'White'}>White</MenuItem>
                <MenuItem value={'Black'}>Black</MenuItem>
                <MenuItem value={'American Indian'}>American Indian</MenuItem>
                <MenuItem value={'Asian'}>Asian</MenuItem>
                <MenuItem value={'Pacific Islander'}>Pacific Islander</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
                <MenuItem value={'Hispanic/Latino'}>Hispanic/Latino</MenuItem>
                <MenuItem value={'Multiracial'}>Multiracial</MenuItem>
            </Select>
        </FormControl><br/>

        <label> What is weight? </label> <br/>
        <TextField id="1-5" label="Write here..." variant="outlined" value = {value?.weight} onChange={(e) => setValue({...value, weight: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u1_1}
                label="Select a unit"
                onChange={(e) => setValue({...value, u1_1: e.target.value})}
                >
                <MenuItem value={'kg'}>kg</MenuItem>
                <MenuItem value={'lb'}>lb</MenuItem>
            </Select>
        </FormControl><br/>

        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
        <label> 
            A {value?.age} {value?._age} old {value?.race} {value?.race} {value?.gender} {value?.occupation} measuring {value?.height}{value?.u1_2} in height weighing {value?.weight} {value?.u1_1}, and BMI of {value?.u1_1 === 'kg' && (value?.u1_2 === 'm' || value?.u1_2 === 'cm' ) ? value?.weight / (value?.u1_2 === 'cm' ? value?.height / 100 : value?.height) / (value?.u1_2 === 'cm' ? value?.height / 100 : value?.height) : (value?.u1_1 === 'lb' && value?.u1_2 === 'in' ? 703 * value?.weight / (value?.height * value?.height) : "")} arrived at the ER.</label> <br/>
        </div>
    </Box>
    );
}