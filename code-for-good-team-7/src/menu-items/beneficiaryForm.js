// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const beneficiaryForm = {
    id: 'beneficiaryForm',
    title: 'Beneficiary Form',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Beneficiary Form',
            type: 'item',
            url: '/beneficiary-form/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default beneficiaryForm;
