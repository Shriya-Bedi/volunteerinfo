import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from './../../assets/images/logo-dark.svg';
 * import logo from './../../assets/images/logo.svg';
 *
 */

// ===========================|| LOGO SVG ||=========================== //

const Logo = () => {
    const theme = useTheme();

    return <img src="https://res.cloudinary.com/ideation/image/upload/mf7tv4yza6dvebam801e" alt="Berry" width="100" />;
};

export default Logo;
