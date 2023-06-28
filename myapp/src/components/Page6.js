import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';




export default function Page6(props) {

    const {value, setValue} = props
    
    return (
        <Box>
        <label> ECG is normal? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v6_1}
                onChange={(e) => setValue({...value, v6_1: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v6_1 === "no" && 
            (<>
                <label> Does the patient have QT prolongation in ECG? </label> <br/>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value?.v6_2}
                        onChange={(e) => setValue({...value, v6_2: e.target.value})}
                        >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl> <br/>
    
                <label> Does the patient have QRS widening in ECG? </label> <br/>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value?.v6_3}
                        onChange={(e) => setValue({...value, v6_3: e.target.value})}
                        >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl> <br/>

                <label> Does the patient have any arrhythmia in ECG? </label> <br/>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value?.v6_4}
                        onChange={(e) => setValue({...value, v6_4: e.target.value})}
                        >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl> <br/>
            </>)
        }

        <label> Does patient have CK-MB elevation? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v6_5}
                onChange={(e) => setValue({...value, v6_5:e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        
        <label> Does patient have Chest pain? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v6_6}
                onChange={(e) => setValue({...value, v6_6:e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        
        <label> Does the patient have heart conduction disturbance such as Heart block? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v6_7}
                onChange={(e) => setValue({...value, v6_7:e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        
        <label> Does the patient have PR prolongation in ECG? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v6_8}
                onChange={(e) => setValue({...value, v6_8:e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        <label> Does the patient have any arrhythmia in ECG? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v6_9}
                onChange={(e) => setValue({...value, v6_9:e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        
        {
            value?.v6_9 === "yes" && (
                <>
                    <label> What arrhythmia the patient have in ECG? </label> <br/>
                    <FormControl style = {{width : "223px"}}>
                    <InputLabel id="demo-simple-select-label">Select here ...</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="6-10"
                        value={value?.v6_10}
                        label="Select here ..."
                        onChange={(e) => setValue({...value, v6_10: e.target.value})}
                        >
                        <MenuItem value={'atrial fibrillation/alutter'}>Atrial fibrillation/Flutter</MenuItem>
                        <MenuItem value={'ventricular tachycardia'}>Ventricular tachycardia</MenuItem>
                        <MenuItem value={'ventricular Fibrillation'}>Ventricular Fibrillation</MenuItem>
                        <MenuItem value={'torsade de pointes'}>Torsade de pointes</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                    </Select>
                </FormControl> <br/>
                </>
            )
        }

        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
            <label >
                {value?.v6_1 === "yes" ? "Patients’s ECG is normal." : `Patient has ${value.v6_2 === "yes" ? "QT prolongation" : ""}${value.v6_3 === "yes" ? `${value.v6_2 === "yes" ? "/" : ""}QRS widening` : ""}${value.v6_4 === "yes" ? `${value?.v6_2 === "yes" || value?.v6_3 === "yes" ? "/" : ""}arrhythmia` : ""}.`} <br/>
                Patient {value?.v6_5 === "yes" ? "have" : "have not"} CK-MB elevation. <br/>
                Patient {value?.v6_6 === "yes" ? "have" : "have not"} Chest pain. <br/>
                Patient {value?.v6_7 === "yes" ? "have" : "have not"} heart conduction disturbance such as Heart block. <br/>
                Patient {value?.v6_8 === "yes" ? "have" : "have not"} PR prolongation in ECG. <br/>
                {value?.v6_9 === "yes" ? `Patient have ${value?.v6_10} arrhythmia in ECG.` : "Patient have not any arrhythmia ECG."}<br/>
            </label>
            <br/>
        </div>
    </Box>
    );
}
