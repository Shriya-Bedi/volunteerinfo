// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboardAdmin = {
    id: 'admin',
    title: 'Admin',
    type: 'group',
    children: [
        {
            id: 'admin-default',
            title: 'Dashboard Admin',
            type: 'item',
            url: '/admin/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'activities',
            title: 'Activities',
            type: 'item',
            url: '/admin/activities',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'volunteers-list',
            title: 'Volunteers List',
            type: 'item',
            url: '/admin/volunteers-list',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'participant-list',
            title: 'Participant List',
            type: 'item',
            url: '/admin/participant-list',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboardAdmin;
