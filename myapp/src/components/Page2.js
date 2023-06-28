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



export default function Page2(props) {
    
    const {value, setValue} = props
    
    return (
    <Box>
        <label> How long after exposure patient arrived to ER? </label> <br/>
        <TextField id="2-1" label="Write here..." variant="outlined" value = {value?.v2_1} onChange={(e) => setValue({...value, v2_1: e.target.value})}/> <br/>

        <label> What is the route of exposure? </label> <br/>
        <FormControl style = {{width : "223px"}}>
            <InputLabel id="demo-simple-select-label">Select here ...</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="2-2"
                value={value?.v2_2}
                label="Select here ..."
                onChange={(e) => setValue({...value, v2_2: e.target.value})}
                >
                <MenuItem value={'ingestion'}>ingestion</MenuItem>
                <MenuItem value={'inhalation'}>inhalation</MenuItem>
                <MenuItem value={'dermal'}>dermal</MenuItem>
                <MenuItem value={'bite'}>bite</MenuItem>
            </Select>
        </FormControl> <br/>

        <label> What were the exposure reason? </label> <br/>
        <FormControl style = {{width : "223px"}}>
            <InputLabel id="demo-simple-select-label">Select here ...</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="2-2"
                value={value?.v2_4}
                label="Select here ..."
                onChange={(e) => setValue({...value, v2_4: e.target.value})}
                >
                <MenuItem value={'Unintentional'}>Unintentional</MenuItem>
                <MenuItem value={'Intentional'}>Intentional</MenuItem>
                <MenuItem value={'Adverse Reaction'}>Adverse Reaction</MenuItem>
                <MenuItem value={'Withdrawal'}>Withdrawal</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
        </FormControl> <br/>

        <label> Does the patient or relative suspect any specific poisoning or exposure? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v2_3}
                onChange={(e) => setValue({...value, v2_3: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        
        
        {value?.v2_3 === "yes"  && (<><label> Name the suspected poison?  </label> <br/> <TextField id="2-4" label="Write here..." variant="outlined" value={value?.v2_4} onChange={(e) => setValue({...value, v2_4:e.target.value})}/> <br/></> ) }
        
        <label> Does the patient exposed pharmaceutical drugs? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v2_5}
                onChange={(e) => setValue({...value, v2_5: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {value?.v2_5 === "yes" && (<><label> How much patient ingested?  </label> <br/><TextField id="2-6" label="Write here..." variant="outlined" value = {value?.v2_6} onChange={(e) => setValue({...value, v2_6:e.target.value})}/> <br/></>) }

        <label> Does the patient have exposed to any venomous animals? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v2_7}
                onChange={(e) => setValue({...value, v2_7:e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        {value?.v2_7 === "yes" && (<><label> What venomous animal?  </label> <br/><TextField id="2-8" label="Write here..." variant="outlined" value={value?.v2_8} onChange={(e) => setValue({...value, v2_8:e.target.value})}/> <br/> </>)}
        
        <label> Does the patient expose any unknown mushrooms or plants? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v2_9}
                onChange={(e) => setValue({...value, v2_9:e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        
        <label> What were the circumstances surrounding the exposure or poisoning? </label> <br/>
        <FormControl style = {{width : "223px"}}>
            <InputLabel id="demo-simple-select-label">Select here ...</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="2-2"
                value={value?.v2_10}
                label="Select here ..."
                onChange={(e) => setValue({...value, v2_10: e.target.value})}
                >
                <MenuItem value={'accidental ingestion'}>ingestion</MenuItem>
                <MenuItem value={'intentional overdose'}>inhalation</MenuItem>
            </Select>
        </FormControl> <br/>


        <label> What are the patient's main symptoms?  </label> <br/>
        <TextField id="2-11" label="Write here..." variant="outlined" value = {value?.v2_11} onChange={(e) => setValue({...value, v2_11 : e.target.value})}/> <br/> 
        
        <label> How long after exposure did symptoms begin to appear? </label> <br/>
        <TextField id="2-12" label="Write here..." variant="outlined" value = {value?.v2_12} onChange={(e) => setValue({...value, v2_12 : e.target.value})}/> <br/> 
        
        <label> Has the patient experienced any seizures?  </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v2_13}
                onChange={(e) => setValue({...value, v2_13 : e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
        <label>
            Patient arrived to ER {value?.v2_1} hours after {value?.v2_2} of {value?.v2_3 === "yes" ? `${value?.v2_4}` : "unknown poison"}.<br/>
            Patient seems to expose {value?.v2_5 === "yes" ? `does ${value?.v2_6}mg` : 'unkown'}.<br/>
            The cause of poisoning is {value?.v2_10}.<br/>
            Patient {value?.v2_7 === "yes" ? "does" : "does not"} expose to venomus {value?.v2_7 === "yes" ? value.v2_8 : ""} animal.<br/>
            patient {value?.v2_9 === "yes" ? "does" : "does not"} expose to mushroom or plant.<br/>
            The main symptoms are {value?.v2_11}. The symptoms started {value?.v2_12} hours after exposure.<br/>
            Patient {value?.v2_13 === "yes" ? "does" : "does not"} experience seizure.
        </label> <br/>
        </div>
    </Box>
    );
}