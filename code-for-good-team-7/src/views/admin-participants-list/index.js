import React, { useEffect, useState } from 'react';

// material-ui
import { Typography, Grid } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeLightCard from 'views/admin-participants-list/TotalIncomeLightCard';

//= =============================|| SAMPLE PAGE ||==============================//

const AdminParticipantsList = () => {
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
            <TotalIncomeLightCard isLoading={isLoading} userInfo={fakeUser} />
        </Grid>
    );
};

export default AdminParticipantsList;
