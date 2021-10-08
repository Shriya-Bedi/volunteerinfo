import { TextField } from '@material-ui/core';
import React from 'react';

const FormText = ({ label, value, onChange, width }) => {
    return <TextField variant="outlined" label={label} value={value} onChange={onChange} style={{ margin: '5px', width }} />;
};

export default FormText;
