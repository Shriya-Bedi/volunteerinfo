import * as React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MainCard from 'ui-component/cards/MainCard';
import FormText from 'ui-component/FormText';

const VolunteerForm = () => {
    return (
        <MainCard title="Volunteer Form">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>Sign up form</h2>
                    <h3>Please fill in the form below to sign up as a Volunteer</h3>
                    <FormText label="Full Name" width="400px" />
                    <FormText label="Phone Number" width="400px" />
                    <FormText label="Email" width="500px" />
                    <FormText label="Address" width="500px" />
                </div>
                <div>
                    <h2>Preferred Location</h2>
                    <h3>Northern</h3>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Location 1" />
                        <FormControlLabel control={<Checkbox />} label="Location 2" />
                        <FormControlLabel control={<Checkbox />} label="Location 3" />
                    </FormGroup>
                </div>
                <div>
                    <h2>State your availability</h2>
                    <h3>Monday</h3>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="7AM - 9AM" />
                        <FormControlLabel control={<Checkbox />} label="9AM - 12PM" />
                        <FormControlLabel control={<Checkbox />} label="12PM - 5PM" />
                        <FormControlLabel control={<Checkbox />} label="5PM - 9PM" />
                    </FormGroup>
                </div>

                <div>
                    <h2>Consent</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Agree to above statement*" />
                        <Button variant="outlined" size="large" href="#contained-buttons">
                            Submit
                        </Button>
                    </FormGroup>
                </div>
            </Box>
        </MainCard>
    );
};
export default VolunteerForm;
