import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Abdominal pain',
  'Anorexia',
  'Blood per rectum',
  'constipation',
  'Diarrhea',
  'Diarrhea-bloody',
  'Dysphagia',
  'Esophageal injury',
  'Esophageal stricture',
  'Fecal incontinence',
  'Gastric burn',
  'hematemesis',
  'Ileus',
  'Melena',
  'Nausea',
  'Vomiting',
  'Oral Burn',
  'Oral irritation',
  'Oropharyngeal edema',
  'Pancreatitis',
  'Throat Irritation'
];

const names1 = [
    'Agitated/irritable',
    'Ataxia',
    'Coma',
    'Confusion',
    'CVA',
    'Dizziness/vertigo',
    'Drowsiness/lethargy',
    'Dystonia',
    'Fasciculations',
    'Hallucinations/delusions',
    'Headache',
    'Intracranial bleed',
    'Muscle rigidity',
    'Muscle weakness',
    'Numbness',
    'Paralysis',
    'Seizure ',
    'Slurred speech',
    'Syncope',
    'Tremor',
    'Diplopia',
    'Myoclonus',
    'Hyperreflexia',
    'Peripheral neuropathy',
    'Tinnitus'
]



const names2 = [
    'Bronchospasm',
    'Cough',
    'Cyanosis',
    'Dyspnea',
    'Hyperventilation/tachycardia',
    'Pneumonitis',
    'Pulmonary edema',
    'Respiratory depression',
    'Respiratory arrest',
    'X-ray finding'
]


const names3=[
    'Hematuria',
    'Hemo/myoglobiniuria',
    'Increased Creatinin',
    'Oliguria/anuria',
    'Oxalat crystas(urine)',
    'Polyuria',
    'Renal Failure',
    'Urinary Incontinence',
    'Urine color change',
    'Other'
]

const names4 = [
    'Blurred vision',
    'Burns',
    'Corneal abrasion',
    'Lacrimation',
    'Miosis',
    'Mydriasis',
    'Nystagmus',
    'Papilledema',
    'Photophobia',
    'Pupil non-reactive',
    'Red eye',
    'Visual defect'
]

const names5 = [
    'Burns',
    'Deafness',
    'Diaphoresis',
    'Excessive secretion',
    'Fever',
    'Rhabdomyolysis',
    'Increased anion gap'
]




export default function Page3(props) {
    const {value, setValue} = props

    const [personName, setPersonName] = React.useState([]);
    const [personName1, setPersonName1] = React.useState([]);
    const [personName2, setPersonName2] = React.useState([]);
    const [personName3, setPersonName3] = React.useState([]);
    const [personName4, setPersonName4] = React.useState([]);
    const [personName5, setPersonName5] = React.useState([]);
    

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split('.') : value,
        );
    };

    const handleChange1 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName1(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split('.') : value,
        );
    };

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName2(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split('.') : value,
        );
    };

    const handleChange3 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName3(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split('.') : value,
        );
    };

    const handleChange4 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName4(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split('.') : value,
        );
    };

    const handleChange5 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName5(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split('.') : value,
        );
    };
    
    return (
        <Box>

        <label> How are the patient's pupils? </label> <br/>
        <FormControl style = {{width : "223px"}}>
            <InputLabel id="demo-simple-select-label">Select here ...</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="3-1"
                value={value?.v3_1}
                label="Select here ..."
                onChange={(e) => setValue({...value, v3_1: e.target.value})}
                >
                <MenuItem value={'miosis'}>miosis</MenuItem>
                <MenuItem value={'mydriasis'}>mydriasis</MenuItem>
                <MenuItem value={'normal pupil'}>normal pupil</MenuItem>
            </Select>
        </FormControl> <br/>

        <label> Does the patient have any loss of consciousness? </label> <br/>

        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v3_2}
                onChange={(e) => setValue({...value, v3_2: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        {
            value?.v3_2 === "yes" &&
            (<>
                <label> What level of CNS depression does the patient have? </label> <br/>
                <FormControl style = {{width : "223px"}}>
                    <InputLabel id="demo-simple-select-label">Select here ...</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="3-3"
                        value={value?.v3_3}
                        label="Select here ..."
                        onChange={(e) => setValue({...value, v3_3: e.target.value})}
                        >
                        <MenuItem value={'lethargic'}> lethargic </MenuItem>
                        <MenuItem value={'coma'}> coma </MenuItem>
                    </Select>
                </FormControl> <br/>
            </>)
        }

        <label> Is the patient experiencing any gastrointestinal symptoms? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v3_4}
                onChange={(e) => setValue({...value, v3_4: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>


        {
            value?.v3_4 === "yes" &&
            (<>
                <label> What symptoms? </label> <br/>

                <FormControl sx={{ m: 1, width: 300, marginLeft: 0 }}>
                    <InputLabel id="demo-multiple-checkbox-label">symptoms</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="symptoms" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> <br/>
            </>)
        }


        <label> Is the patient experiencing any Neurological symptoms? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.Neurological}
                onChange={(e) => setValue({...value, Neurological: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        {
            value?.Neurological === "yes" &&
            (<>
                <label> What symptoms? </label> <br/>
                <FormControl sx={{ m: 1, width: 300, marginLeft: 0 }}>
                    <InputLabel id="demo-multiple-checkbox-label">symptoms</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName1}
                        onChange={handleChange1}
                        input={<OutlinedInput label="symptoms" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names1.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName1.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> <br/>
            </>)
        }

        <label> Is the patient experiencing any Respiratory symptoms? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.Respiratory}
                onChange={(e) => setValue({...value, Respiratory: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        {
            value?.Respiratory === "yes" &&
            (<>
                <label> What symptoms? </label> <br/>
                <FormControl sx={{ m: 1, width: 300, marginLeft: 0 }}>
                    <InputLabel id="demo-multiple-checkbox-label">symptoms</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName2}
                        onChange={handleChange2}
                        input={<OutlinedInput label="symptoms" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names2.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName2.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> <br/>
            </>)
        }
        

        
        <label> Is the patient experiencing any Renal symptoms? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.Renal}
                onChange={(e) => setValue({...value, Renal: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        {
            value?.Renal === "yes" &&
            (<>
                <label> What symptoms? </label> <br/>
                <FormControl sx={{ m: 1, width: 300, marginLeft: 0 }}>
                    <InputLabel id="demo-multiple-checkbox-label">symptoms</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName3}
                        onChange={handleChange3}
                        input={<OutlinedInput label="symptoms" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names3.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName3.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> <br/>
            </>)
        }


        
        <label> Is the patient experiencing any ocular symptoms? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.ocular}
                onChange={(e) => setValue({...value, ocular: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        {
            value?.ocular === "yes" &&
            (<>
                <label> What symptoms? </label> <br/>
                <FormControl sx={{ m: 1, width: 300, marginLeft: 0 }}>
                    <InputLabel id="demo-multiple-checkbox-label">symptoms</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName4}
                        onChange={handleChange4}
                        input={<OutlinedInput label="symptoms" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names4.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName4.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> <br/>
            </>)
        }


        
        
        <label> Is the patient experiencing any Miscellaneous symptoms? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.Miscellaneous}
                onChange={(e) => setValue({...value, Miscellaneous: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        {
            value?.Miscellaneous === "yes" &&
            (<>
                <label> What symptoms? </label> <br/>
                <FormControl sx={{ m: 1, width: 300, marginLeft: 0 }}>
                    <InputLabel id="demo-multiple-checkbox-label">symptoms</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName5}
                        onChange={handleChange5}
                        input={<OutlinedInput label="symptoms" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names5.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName5.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> <br/>
            </>)
        }

        <label> Does the patient have any skin lesions or rashes? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v3_6}
                onChange={(e) => setValue({...value, v3_6: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>
        
        <label> Is the patient experiencing any muscle weakness or paralysis? </label> <br/>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value?.v3_7}
                onChange={(e) => setValue({...value, v3_7: e.target.value})}
                >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl> <br/>

        <br/>
        <div style={{backgroundColor:"lightgray", width:"600px", borderRadius:"5px", padding: '10px 20px'}}>
            <label >
                Patient’s pupil is {value?.v3_1}. Patient {value?.v3_2 === "yes" ? "has" : "has not"} CNS depression {value?.v3_2 === "yes" ? value?.v3_3 : ""}.<br/>
                Patient {value?.v3_4 === "yes" ? "has" : "has not"} GI symptoms {value?.v3_4 === "yes" ? personName.join(", ") : ""}.<br/>
                Patient {value?.Neurological === "yes" ? "has" : "has not"} Neurological symptoms {value?.Neurological === "yes" ? personName1.join(", ") : ""}.<br/>
                Patient {value?.Respiratory === "yes" ? "has" : "has not"} Respiratory symptoms {value?.Respiratory === "yes" ? personName2.join(", ") : ""}.<br/>
                Patient {value?.Renal === "yes" ? "has" : "has not"} Renal symptoms {value?.Renal === "yes" ? personName3.join(", ") : ""}.<br/>
                Patient {value?.ocular === "yes" ? "has" : "has not"} ocular symptoms {value?.ocular === "yes" ? personName4.join(", ") : ""}.<br/>
                Patient {value?.Miscellaneous === "yes" ? "has" : "has not"} Miscellaneous symptoms {value?.Miscellaneous === "yes" ? personName5.join(", ") : ""}.<br/>
                
                The patient {value?.v3_6 === "yes" ? "has" : "has not"} skin lesions or rashes.<br/>
                The patient {value?.v3_7 === "yes" ? "is" : "isn't"} experiencing muscle weakness or paralysis.
            </label>
        <br/>
        </div>
    </Box>
    );
}
