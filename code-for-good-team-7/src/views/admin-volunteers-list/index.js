import React, { useEffect, useState } from 'react';

// material-ui
import { Typography, Grid } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeDarkCard from 'views/admin-volunteers-list/TotalIncomeDarkCard';

//= =============================|| SAMPLE PAGE ||==============================//

const AdminVolunteersList = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const fakeUser = {
        name: 'James',
        email: 'james@gmail.com',
        phone: '12341234',
        age: 30,
        region: 'TKO',
        availabilityTime: '15-03-2021'
    };

    return (
        <Grid item>
            <TotalIncomeDarkCard isLoading={isLoading} userInfo={fakeUser} />
        </Grid>
    );
};

export default AdminVolunteersList;
