// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

// Custom actions
export const LOGIN = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    };
};

export const ATTEMPT_LOGIN = (credentials) => async (dispatch) => {
    // dummy api call response
    const user = {
        name: 'Herman',
        email: 'hermanwong@cfg.com',
        phone: '12345678',
        password: 'abcd1234',
        passwordConfirm: 'abcd1234',
        age: 21,
        area: ['testA', 'testB'],
        zone: 'east',
        role: 'admin',
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
    };

    // set user
    dispatch(LOGIN(user));
};

export const CREATE_VOLUNTEER = (credentials) => async (dispatch) => {
    // dummy create user and return user data
    const user = {
        name: 'Herman',
        email: 'hermanwong@cfg.com',
        phone: '12345678',
        password: 'abcd1234',
        passwordConfirm: 'abcd1234',
        age: 21,
        area: ['testA', 'testB'],
        zone: 'east',
        role: 'volunteer',
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
    };

    dispatch(LOGIN(user));
};
