// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboardVolunteers = {
    id: 'dashboardVolunteers',
    title: 'Dashboard Volunteers',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard Volunteers',
            type: 'item',
            url: '/dashboard-volunteers/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboardVolunteers;
