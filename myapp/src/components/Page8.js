import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Page8(props) {

    const {value, setValue} = props
    
    return (
        <Box>
        <label> Calcium level: </label> <br/>
        <TextField id="8-1" label="Write here..." variant="outlined" value = {value?.v8_1} onChange={(e) => setValue({...value, v8_1: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_1}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_1: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl> <br/>

        <label> APAP level: </label> <br/>
        <TextField id="8-18" label="Write here..." variant="outlined" value = {value?.v8_18} onChange={(e) => setValue({...value, v8_18: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_18}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_18: e.target.value})}
                >
                <MenuItem value={'mcg/mL'}>mcg/mL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl> <br/>

        <label> ASA level: </label> <br/>
        <TextField id="8-19" label="Write here..." variant="outlined" value = {value?.v8_19} onChange={(e) => setValue({...value, v8_19: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_19}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_19: e.target.value})}
                >
                <MenuItem value={'mg/dL'}>ng/dL</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'mcg/ml'}>mcg/ml</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl> <br/>


        <label> ETOH level: </label> <br/>
        <TextField id="8-18" label="Write here..." variant="outlined" value = {value?.v8_20} onChange={(e) => setValue({...value, v8_20: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_20}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_20: e.target.value})}
                >
                <MenuItem value={'mg/dL'}>ng/dL</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'mcg/ml'}>mcg/ml</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl> <br/>


        <label> Iron level: </label> <br/>
        <TextField id="8-20" label="Write here..." variant="outlined" value = {value?.v8_21} onChange={(e) => setValue({...value, v8_21: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_21}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_21: e.target.value})}
                >
                <MenuItem value={'mcg/mL'}>mcg/mL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl> <br/>



        <label> (Blood AST): </label> <br/>
        <TextField id="8-2" label="Write here..." variant="outlined" value = {value?.v8_2} onChange={(e) => setValue({...value, v8_2: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_2}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_2: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl> <br/>

        <label> Blood ALT: </label> <br/>
        <TextField id="8-3" label="Write here..." variant="outlined" value = {value?.v8_3} onChange={(e) => setValue({...value, v8_3: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_3}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_3: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood INR: </label> <br/>
        <TextField id="8-4" label="Write here..." variant="outlined" value = {value?.v8_4} onChange={(e) => setValue({...value, v8_4: e.target.value})}/> <br/>

        <label> Blood PT: </label> <br/>
        <TextField id="8-5" label="Write here..." variant="outlined" value = {value?.v8_5} onChange={(e) => setValue({...value, v8_5: e.target.value})}/> <br/>

        <label> Blood PTT: </label> <br/>
        <TextField id="8-6" label="Write here..." variant="outlined" value = {value?.v8_6} onChange={(e) => setValue({...value, v8_6: e.target.value})}/> <br/>

        <label> Lactate level: </label> <br/>
        <TextField id="8-7" label="Write here..." variant="outlined" value = {value?.v8_7} onChange={(e) => setValue({...value, v8_7: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_7}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_7: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood osmolality: </label> <br/>
        <TextField id="8-8" label="Write here..." variant="outlined" value = {value?.v8_8} onChange={(e) => setValue({...value, v8_8: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_8}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_8: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood glucose: </label> <br/>
        <TextField id="8-9" label="Write here..." variant="outlined" value = {value?.v8_9} onChange={(e) => setValue({...value, v8_9: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_9}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_9: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood Sodium: </label> <br/>
        <TextField id="8-10" label="Write here..." variant="outlined" value = {value?.v8_10} onChange={(e) => setValue({...value, v8_10: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_10}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_10: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood Potassium: </label> <br/>
        <TextField id="8-11" label="Write here..." variant="outlined" value = {value?.v8_11} onChange={(e) => setValue({...value, v8_11: e.target.value})}/> 
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_11}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_11: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood Sodium bicarbonate: </label> <br/>
        <TextField id="8-12" label="Write here..." variant="outlined" value = {value?.v8_12} onChange={(e) => setValue({...value, v8_12: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_12}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_12: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood Ph: </label> <br/>
        <TextField id="8-13" label="Write here..." variant="outlined" value = {value?.v8_13} onChange={(e) => setValue({...value, v8_13: e.target.value})}/><br/>

        <label> Blood creatinine: </label> <br/>
        <TextField id="8-14" label="Write here..." variant="outlined" value = {value?.v8_14} onChange={(e) => setValue({...value, v8_14: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_14}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_14: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>

        <label> Blood BUN: </label> <br/>
        <TextField id="8-15" label="Write here..." variant="outlined" value = {value?.v8_15} onChange={(e) => setValue({...value, v8_15: e.target.value})}/>
        <FormControl style = {{width : "100px"}}>
            <InputLabel id="demo-simple-select-label">Select a unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value?.u8_15}
                label="Select a unit"
                onChange={(e) => setValue({...value, u8_15: e.target.value})}
                >
                <MenuItem value={'mol/L'}>mol/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μmol/L'}>μmol/L</MenuItem>
                <MenuItem value={'mg/dL'}>mg/dL</MenuItem>
                <MenuItem value={'cells/μL'}>cells/μL</MenuItem>
                <MenuItem value={'U/L'}>U/L</MenuItem>
                <MenuItem value={'IU/L'}>IU/L</MenuItem>
                <MenuItem value={'kU/L'}>kU/L</MenuItem>
                <MenuItem value={'mEq/L'}>mEq/L</MenuItem>
                <MenuItem value={'mmol/L'}>mmol/L</MenuItem>
                <MenuItem value={'μg/dL'}>μg/dL</MenuItem>
                <MenuItem value={'ng/dL'}>ng/dL</MenuItem>
                <MenuItem value={'pg/mL'}>pg/mL</MenuItem>
                <MenuItem value={'mOsm/kg'}>mOsm/kg</MenuItem>
            </Select>
        </FormControl><br/>
        
        <label> Has a toxicology screening been performed? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v8_16}
                onChange={(e) => setValue({...value, v8_16: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {
            value?.v8_16 === "yes" && 
            (<>
                <label> If so, what were the results? </label> <br/>
                <TextField id="8-17" label="Write here..." variant="outlined" value = {value?.v8_17} onChange={(e) => setValue({...value, v8_17: e.target.value})}/> <br/>
            </>)
        }
        
        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
            <label >
                Calcium level = {value?.v8_1} {value?.u8_1}<br/>
                APAP level = {value?.v8_18} {value?.u8_18}<br/>
                ASA level = {value?.v8_19} {value?.u8_19}<br/>
                ETOH level = {value?.v8_20} {value?.u8_20}<br/>
                Iron level = {value?.v8_21} {value?.u8_21}<br/>
                Blood AST =  {value?.v8_2} {value?.u8_2}<br/>
                Blood ALT = {value?.v8_3} {value?.u8_3}<br/>
                Blood INR = {value?.v8_4}<br/>
                Blood PT = {value?.v8_5}s<br/>
                Blood PTT = {value?.v8_6}s<br/>
                Lactate level = {value?.v8_7} {value?.u8_7}<br/>
                Blood osmolality = {value?.v8_8} {value?.u8_8}<br/>
                Blood glucose = {value?.v8_9} {value?.u8_9}<br/>
                Blood Sodium = {value?.v8_10} {value?.u8_10}<br/>
                Blood Potassium = {value?.v8_11} {value?.u8_11}<br/>
                Blood Sodium bicarbonate = {value?.v8_12} {value?.u8_12}<br/>
                Blood Ph = {value?.v8_13} pH<br/>
                Blood creatinine = {value?.v8_14} {value?.u8_14}<br/>
                Blood BUN = {value?.v8_15} {value?.u8_15}<br/>
                
                {value?.v8_16 === "no" ? "Toxicology screening has not been performed" : `Toxicology screening has been performed and showed ${value?.v8_17}.`}

            </label>
            <br/>
        </div>
    </Box>
    );
}
