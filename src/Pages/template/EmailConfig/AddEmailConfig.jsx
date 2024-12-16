import React, { useEffect, useState } from 'react';
import { Box, Button, Tabs, Tab } from '@mui/material';
import EmailConfiguration from '../../../Component/Tabs/EmailConfiguration';
import Content from '../../../Component/Tabs/Conent';
import Setting from '../../../Component/Tabs/Setting';
import { Grid } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { emailService } from '../../../apiServices/EmailTemplate.service';
import { useNavigate } from 'react-router-dom';

function AddEmailConfig() {
  const [value, setValue] = useState(0);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    subject: '', // New field for email subject
    name: '',
    send_email: '',
    cc: '',
    to_email: '',
    'outgoing_mail_server': '',
    html_content: '' // New field for ReactQuill data
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEmailSubjectChange = (event) => {
    const { value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      subject: value
    }));
  };

  const handleAdd = async () => {
    const base64Content = window.btoa(formData.html_content);

    setFormData(prevState => ({
        ...prevState,
        html_content: base64Content
    }));

    console.log(formData,'last');

    // Call the API service function here after updating formData
    // emailService.create(formData, navigate); // Assuming `emailService.create` is your API service function
};


useEffect(() => {
    // This effect will run after formData has been updated
    console.log('Updated formData:', formData);
}, [formData]);


  

  return (
    <>
      <Box sx={{ width: '100%' }} style={{ backgroundColor: 'white' }}>
        <div className='mb-5 ml-5'>
          <Grid container spacing={2} className='ml-6'>
            <Grid item xs={6}>
              <div>
                <InputLabel
                  htmlFor="subject"
                  style={{
                    color: "#714B67",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }}
                >
                  Email Subject
                </InputLabel>
                <TextField
                  id="subject"
                  variant="standard"
                  required
                  name="subject"
                  className="w-full mt-2"
                  onChange={handleEmailSubjectChange}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Email Configuration" />
            <Tab label="Content" />
            <Tab label="Setting" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <EmailConfiguration formData={formData} setFormData={setFormData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Content formData={formData.html_content} setFormData={(data) => setFormData({...formData, html_content: data})} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Setting formData={formData} setFormData={setFormData} />
        </TabPanel>
        <div className='ml-6'>
          <Button variant="outlined" onClick={handleAdd}>Add</Button>
        </div>
        <br /> <br />
      </Box>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default AddEmailConfig;
