import React, { useEffect, useState } from 'react';

// material-ui
import { Typography, Grid } from '@material-ui/core';

// project imports
import EarningCard from 'views/admin-activities/EarningCard';

//= =============================|| SAMPLE PAGE ||==============================//

const AdminActivities = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const fakeactivities = {
        name: 'Activity A',
        Day: 'mon',
        Area: 'Kowloon',
        Venue: 'Room a Block 6',
        Type: 'TTFE',
        Time: '7:30pm-8:30pm',
        BatchSize: 5,
        Participants: ['Jack', 'Jay', 'James'],
        Volunteers: ['Alex']
    };

    return (
        <Grid item>
            <EarningCard isLoading={isLoading} activities={fakeactivities} />
        </Grid>
    );
};

export default AdminActivities;
