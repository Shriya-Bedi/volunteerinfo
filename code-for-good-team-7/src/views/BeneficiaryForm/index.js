import { TextField } from '@material-ui/core';
import React from 'react';

import MainCard from 'ui-component/cards/MainCard';
import FormText from 'ui-component/FormText';

const BeneficiaryForm = () => {
    return (
        <MainCard title="Beneficiary Form">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Sign up form</h2>
                <h3>Please fill in the form below to sign up as a Beneficiary</h3>

                <FormText label="Name" width="400px" />
                <FormText label="Phone Number" width="400px" />
                <FormText label="Email" width="500px" />
            </div>
        </MainCard>
    );
};

export default BeneficiaryForm;
