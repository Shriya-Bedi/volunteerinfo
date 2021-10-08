/*
All API Calls relating to logging in users is done with the redux
*/

// SHARED API CALLS

// ADMIN PAGE API CALLS
export const getEventsList = async () => {
    // returns dummy data for now
    return [
        {
            day: 'tue',
            venue: {}
        }
    ];
};

export const getBeneficiariesList = async () => {
    // Returns dummy data for now
    return [
        {
            name: 'Herman',
            email: 'hermanwong@cfg.com',
            phone: '12345678',
            password: 'abcd1234',
            passwordConfirm: 'abcd1234',
            age: 21,
            area: ['testA', 'testB'],
            zone: 'east',
            role: 'beneficiary',
            availabilityTime: [
                {
                    week: 1,
                    from: '0900',
                    to: '1200'
                },
                {
                    week: 3,
                    from: '1200',
                    to: '1500'
                }
            ],
            eventType: 'TTFG',
            replyStatus: 'not reply',
            _id: '6160383f37e114dae8365a48',
            __v: 0
        },
        {
            name: 'Herman 1',
            email: 'hermanwong@cfg.com',
            phone: '12345678',
            password: 'abcd1234',
            passwordConfirm: 'abcd1234',
            age: 21,
            area: ['testA', 'testB'],
            zone: 'east',
            role: 'beneficiary',
            availabilityTime: [
                {
                    week: 1,
                    from: '0900',
                    to: '1200'
                },
                {
                    week: 3,
                    from: '1200',
                    to: '1500'
                }
            ],
            eventType: 'TTFG',
            replyStatus: 'not reply',
            _id: '6160383f37e114dae8365a48',
            __v: 0
        },
        {
            name: 'Herman 2',
            email: 'hermanwong@cfg.com',
            phone: '12345678',
            password: 'abcd1234',
            passwordConfirm: 'abcd1234',
            age: 21,
            area: ['testA', 'testB'],
            zone: 'east',
            role: 'beneficiary',
            availabilityTime: [
                {
                    week: 1,
                    from: '0900',
                    to: '1200'
                },
                {
                    week: 3,
                    from: '1200',
                    to: '1500'
                }
            ],
            eventType: 'TTFG',
            replyStatus: 'not reply',
            _id: '6160383f37e114dae8365a48',
            __v: 0
        }
    ];
};

export const getBeneficiariesHelpList = async () => {
    // Returns dummy data for now
    return [
        {
            // data here
        }
    ];
};

export const submitBeneficiaryData = async (data) => {
    // Returns dummy api call response
    return {
        status: 'success',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjAzODNmMzdlMTE0ZGFlODM2NWE0OCIsImlhdCI6MTYzMzY5NTgwNywiZXhwIjoxNjM2Mjg3ODA3fQ.Bghx1JXrVHTJU3-tKcqvTFVHMuTCXcr3k274bLbiUAA',
        data: {
            user: {
                name: 'Herman',
                email: 'hermanwong@cfg.com',
                phone: '12345678',
                password: 'abcd1234',
                passwordConfirm: 'abcd1234',
                age: 21,
                area: ['testA', 'testB'],
                zone: 'east',
                role: 'beneficiary',
                availabilityTime: [
                    {
                        week: 1,
                        from: '0900',
                        to: '1200'
                    },
                    {
                        week: 3,
                        from: '1200',
                        to: '1500'
                    }
                ],
                eventType: 'TTFG',
                replyStatus: 'not reply',
                _id: '6160383f37e114dae8365a48',
                __v: 0
            }
        }
    };
};

export const removeBeneficiaryHelp = async (id) => {
    // dummy call to remove beneficiary

    return true;
};

// VOLUNTEER API CALLS
export const changeVolunteerData = async (data) => {
    return {
        status: 'success',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjAzODNmMzdlMTE0ZGFlODM2NWE0OCIsImlhdCI6MTYzMzY5NTgwNywiZXhwIjoxNjM2Mjg3ODA3fQ.Bghx1JXrVHTJU3-tKcqvTFVHMuTCXcr3k274bLbiUAA',
        data: {
            user: {
                name: 'Herman',
                email: 'hermanwong@cfg.com',
                phone: '12345678',
                password: 'abcd1234',
                passwordConfirm: 'abcd1234',
                age: 21,
                area: ['testA', 'testB'],
                zone: 'east',
                role: 'beneficiary',
                availabilityTime: [
                    {
                        week: 1,
                        from: '0900',
                        to: '1200'
                    },
                    {
                        week: 3,
                        from: '1200',
                        to: '1500'
                    }
                ],
                eventType: 'TTFG',
                replyStatus: 'not reply',
                _id: '6160383f37e114dae8365a48',
                __v: 0
            }
        }
    };
};

export const getVolunteerSchedule = async (volunteerId) => {
    return [
        // data
    ];
};
