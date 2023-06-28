import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Final Report';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
    const [tab, setTab] = useState(0)
    const [value, setValue] = useState({});

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
    <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tab}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
            style={{minWidth:"300px"}}
            >
            <Tab label="1. General Information" {...a11yProps(0)} />
            <Tab label="2. Exposure and Symptoms" {...a11yProps(1)} />
            <Tab label="3. Physical examination" {...a11yProps(2)} />
            <Tab label="4. Medical history" {...a11yProps(3)} />
            <Tab label="5. Vital Signs" {...a11yProps(4)} />
            <Tab label="6. ECG" {...a11yProps(5)} />
            <Tab label="7. Allergies and Social History" {...a11yProps(6)} />
            <Tab label="8. Additional Laboratory Tests" {...a11yProps(7)} />
            <Tab label="9. Treatment and Management" {...a11yProps(8)} />
            <Tab label="Final Report" {...a11yProps(9)} />
            
            
        </Tabs>

        <TabPanel value={tab} index={0}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page1 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={1}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page2 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={2}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page3 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={3}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page4 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={4}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page5 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={5}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page6 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={6}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page7 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={7}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page8 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={8}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page9 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={9}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
                <Page10 value={value} setValue={setValue}/>
            </div>
        </TabPanel>
    </Box>
    );
}