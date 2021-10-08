// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const volunteerForm = {
    id: 'volunteerForm',
    title: 'Volunteer Form',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Volunteer Form',
            type: 'item',
            url: '/volunteer-form/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default volunteerForm;
